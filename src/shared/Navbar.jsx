import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSignOut = () => {
    signOutUser()
      .then(() => console.log("Successful sign out"))
      .catch((error) => console.log("Failed to sign out", error));
  };

  const navLinkStyle = ({ isActive }) =>
    `font-bold text-sm transition-all duration-300 px-3 py-2 rounded-md ${
      isActive ? "text-red-500" : "text-white hover:text-red-400 hover:bg-[#2c3b3c]"
    }`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 bg-[#1A2526] shadow-md transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-opacity-90" : ""
      }`}
    >
      <div className="navbar px-4 md:px-8 lg:px-16">
        {/* Left: Logo & Dropdown */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <FaBars className="text-[20px] text-red-500" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm font-bold dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink className={navLinkStyle} to="/">Home</NavLink>
              <NavLink className={navLinkStyle} to="/marathons">Marathons</NavLink>
              {user && <NavLink className={navLinkStyle} to="/dashboard">Dashboard</NavLink>}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl gap-1">
            <img src={logo} className="w-[20px]" alt="Runtrack Logo" />
            <h1 className="text-[20px] text-red-500 font-bold italic">Runtrack</h1>
          </Link>
        </div>

        {/* Right: Routes & Auth Buttons */}
        <div className="navbar-end gap-4 items-center">
          <ul className="hidden lg:flex gap-4 text-white">
            <NavLink className={navLinkStyle} to="/">Home</NavLink>
            <NavLink className={navLinkStyle} to="/marathons">Marathons</NavLink>
            {user && <NavLink className={navLinkStyle} to="/dashboard">Dashboard</NavLink>}
          </ul>

          {user ? (
            <>
              <img
                src={user.photoURL}
                alt="User Avatar"
                className="w-10 h-10 rounded-full border-2 border-red-500"
              />
              <button
                onClick={handleSignOut}
                className="btn bg-red-600 text-white hover:bg-red-700 transition-all duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/register">
                <button className="btn bg-red-600 text-white hover:bg-red-700 transition-all duration-300">
                  Register
                </button>
              </Link>
              <Link to="/signIn">
                <button className="btn bg-red-600 text-white hover:bg-red-700 transition-all duration-300">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
