import { useContext, useState } from "react";
import { AuthProvider } from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate()

    const {stateSignin, googleSignin} = useContext(AuthProvider);

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error , setError] = useState()

    const handleLogin = (e) => {
      e.preventDefault();

        stateSignin(email, password)
        .then(userCredential => {
          console.log("user logged in suucesfuly", userCredential.user)
          navigate("/");
        })
        .catch(error => setError(error.message))

      
    }


    const handleGoogleLogin = () => {
        googleSignin()
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form className="mt-4" onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Login
            </button>
          </form>
  
          <div className="mt-6">
            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center px-4 py-2 mb-3 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none"
            >
              Login with Google
            </button>
            <button
            //   onClick={handleGithubLogin}
              className="w-full flex items-center justify-center px-4 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:outline-none"
            >
              Login with GitHub
            </button>
          </div>
  
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/Register"
                className="text-blue-500 hover:underline"
              >
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Login;