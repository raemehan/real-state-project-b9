import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthProvider } from "../athuntication/AuthContext";


const navLinks = <>
<li><NavLink to="/">Home</NavLink></li>
<li><NavLink>Update profile</NavLink></li>
</>


const Navbar = () => {
   
   const {user, stateSignout} = useContext(AuthProvider)

   const handleLogout = () => {
    stateSignout()
   }
   
    return (
        <div className="navbar bg-base-100 px-8 shadow-sm" >
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Haven Homes</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navLinks}
          </ul>
        </div>

{
  user ?
  <div  className="navbar-end px-8">
  <Link to="/" className="mx-4 border border-grey rounded-lg">
    <a className="btn" onClick={handleLogout}>log out</a>
    </Link>
  </div>

:

<div className="navbar-end px-8">
<Link to="/Register" className="mx-4 border border-grey rounded-lg">
<a className="btn">Register</a>
</Link>
<Link to="/login" className="mx-4 border border-grey rounded-lg">
<a className="btn">Sign In</a>
</Link>
</div> 
}


   
      </div>
    );
};

export default Navbar;