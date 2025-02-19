import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("Successful sign out");
      })
      .catch((error) => {
        console.log("Failed to sign out", error);
      });
  };

  const navLinkStyle = ({ isActive }) =>
    `font-bold text-[14px] ${isActive ? "text-red-500" : "hover:text-red-500"}`;

  return (
    <div className="navbar bg-black">
      {/* Left side - Logo */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaBars className="text-[20px] text-red-500" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm font-bold dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink className={navLinkStyle} to="/">
              Home
            </NavLink>
            <NavLink className={navLinkStyle} to="/marathons">
              Marathons
            </NavLink>
            {user && (
              <NavLink className={navLinkStyle} to="/dashboard">
                Dashboard
              </NavLink>
            )}
          </ul>
        </div>
        <Link to="/" className="btn flex btn-ghost text-xl">
          <img src={logo} className="w-[20px]" alt="Runtrack Logo" />
          <h1 className="text-[20px] text-red-500 font-bold italic">Runtrack</h1>
        </Link>
      </div>

      {/* Right side - Links */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal font-bold px-1 gap-3 mr-2 text-white">
          <NavLink className={navLinkStyle} to="/">
            Home
          </NavLink>
          <NavLink className={navLinkStyle} to="/marathons">
            Marathons
          </NavLink>
          {user && (
            <NavLink className={navLinkStyle} to="/dashboard">
              Dashboard
            </NavLink>
          )}
        </ul>
      </div>

      {/* Right side - Buttons */}
      <div className="navbar-end gap-2 items-center">
        {user ? (
          <>
            {/* User Avatar */}
            <img
              src={user.photoURL || "https://i.ibb.co/4pDNDk1/default-avatar.png"}
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 border-red-500"
            />
            {/* Logout Button */}
            <button onClick={handleSignOut} className="btn bg-red-600 text-white">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/register">
              <button className="btn bg-red-600 text-white">Register</button>
            </Link>
            <Link to="/signIn">
              <button className="btn bg-red-600 text-white">Login</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
