import { Link, NavLink } from "react-router-dom";
import userdefaultPic from "../assets/Images/user.png";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">Update Profile</NavLink>
      </li>
      <li>
        <NavLink to="/login">User Profile</NavLink>
      </li>
    </>
  );

  return (
    <div className="">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
             {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Real Estate</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
		     {navLinks}
          </ul>
        </div>

        <div className="navbar-end">
		  <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src={userdefaultPic}
            />
          </div>
		  <Link>
            <button>
              <a className="btn">Login</a>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
