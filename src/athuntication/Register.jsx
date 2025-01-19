import { useContext, useState } from "react";
import { AuthProvider } from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";



const Register = () => {

    let navigateHome = useNavigate()

    const {stateRegister} = useContext(AuthProvider)

    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            password: "",
            photoURL: ""
        }
    )
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error , setError] = useState()

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name] : value})
        setEmail(formData.email)
        setPassword(formData.password)
    }

    const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    const hasUpperCase = /[A-Z]/.test(formData.password);
    const hasLowerCase = /[a-z]/.test(formData.password);
  
    if (!hasUpperCase || !hasLowerCase ) {
      alert(
        "Password must include at least one uppercase letter, one lowercase letter"
      );
      return;
    }

    if (!formData.email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    stateRegister(email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
      navigateHome("/"); // Navigates to the home page

      updateProfile(user, {
        displayName:formData.name,
        photoURL:formData.photoURL,
      })
    })
    .catch((error) => setError(error.message));
   
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-6 bg-white rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Register
          </h2>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="photoURL"
              className="block text-sm font-medium text-gray-700"
            >
              Photo URL
            </label>
            <input
              type="text"
              id="photoURL"
              name="photoURL"
              value={formData.photoURL}
              onChange={handleChange}
              placeholder="Enter your photo URL"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Register
          </button>
          <h2 className="text-xl">{error}</h2>
          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:underline hover:text-blue-800"
            >
              Login here
            </Link>
          </p>
        </form>
      </div>
    );
};

export default Register;