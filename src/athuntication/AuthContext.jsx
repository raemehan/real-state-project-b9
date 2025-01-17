import { useContext } from "react";
import auth from "../firebase/firebase.config";

const AuthContext = ({children}) => {

   const AuthProvider = useContext()

   const contextValue = {
    stateRegister,

   }

   const stateRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
   }

    return (
        <div>
            <AuthProvider.provider value={contextValue}>
            {children}
            </AuthProvider.provider>
        </div>
    );
};

export default AuthContext;