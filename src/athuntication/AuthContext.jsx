import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";



export const AuthProvider = createContext(null)

const AuthContext = ({children}) => {

    const [user, setUser] = useState()

   const stateRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
   }

   const stateSignin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
   }

   const stateSignout = () => {
    return signOut(auth)
   }

   const googleSignin = () => {
    const Provider = new GoogleAuthProvider();
    return Provider;
   }

   console.log('Is user signed in:', auth.currentUser);

   useEffect( () => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
    console.log('user state changed' , currentUser )
    setUser(currentUser)
      });
      return () => {
        unSubscribe()
      }
   } ,[])

   const contextValue = {
    user,
    stateRegister,
    stateSignin,
    googleSignin,
    stateSignout,
   }

    return (
        <div>
            <AuthProvider.Provider value={contextValue}>
            {children}
            </AuthProvider.Provider>
        </div>
    );
};

export default AuthContext;