import { FaBars } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // track menu open state
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged Out!",
          text: "You have been successfully logged out.",
          timer: 2000,
          showConfirmButton: false,
          timerProgressBar: true,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log("Failed to sign out", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong while logging out!",
        });
      });
  };

  const navLinkStyle = ({ isActive }) =>
    `font-bold text-sm transition-all duration-300 px-3 py-2 rounded-md ${
      isActive
        ? "text-red-500 border border-red-500"
        : "text-white hover:text-red-400 hover:bg-[#2c3b3c]"
    }`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div
      className={`sticky top-0 left-0 right-0 z-50 bg-[#1A2526] shadow-md transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-opacity-90" : ""
      }`}
    >
      <div className="navbar px-2 sm:px-4 md:px-8 lg:px-16">
        {/* Left: Logo & Dropdown */}
        <div className="navbar-start flex items-center gap-2">
          <div className="dropdown relative">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-1 sm:p-2"
              onClick={() => setMenuOpen((prev) => !prev)} // toggle menu on click
            >
              <FaBars className="text-[20px] text-red-500" />
            </div>
            {menuOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm font-bold dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-2 shadow absolute"
              >
                <NavLink className={navLinkStyle} to="/" onClick={handleLinkClick}>
                  Home
                </NavLink>
                <NavLink
                  className={navLinkStyle}
                  to="/marathons"
                  onClick={handleLinkClick}
                >
                  Marathons
                </NavLink>
                {user && (
                  <NavLink
                    className={navLinkStyle}
                    to="/dashboard"
                    onClick={handleLinkClick}
                  >
                    Dashboard
                  </NavLink>
                )}
                <NavLink
                  className={navLinkStyle}
                  to="/aboutUs"
                  onClick={handleLinkClick}
                >
                  About Us
                </NavLink>
                <NavLink
                  className={navLinkStyle}
                  to="/contactUs"
                  onClick={handleLinkClick}
                >
                  Contact Us
                </NavLink>
              </ul>
            )}
          </div>
          <Link to="/" className="btn btn-ghost gap-1 p-0">
            <img src={logo} className="w-5 sm:w-6" alt="Runtrack Logo" />
            <h1
              className="text-red-500 font-bold italic
              text-[14px] sm:text-[20px] lg:text-[20px] leading-none"
            >
              Runtrack
            </h1>
          </Link>
        </div>

        {/* Right: Routes & Auth Buttons */}
        <div className="navbar-end flex items-center gap-1 sm:gap-4">
          <ul className="hidden lg:flex gap-4 text-white">
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
            <NavLink className={navLinkStyle} to="/aboutUs">
              About Us
            </NavLink>
            <NavLink className={navLinkStyle} to="/contactUs">
              Contact Us
            </NavLink>
          </ul>

          {user ? (
            <>
              <img
                src={user.photoURL}
                alt="User Avatar"
                className="w-6 h-6 sm:w-10 sm:h-10 rounded-full border-2 border-red-500 object-cover"
              />
              <button
                onClick={handleSignOut}
                className="btn bg-red-600 text-white hover:bg-red-700 transition-all duration-300 text-[10px] sm:text-sm px-2 sm:px-4 py-1 sm:py-2"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/register">
                <button className="btn bg-red-600 text-white hover:bg-red-700 transition-all duration-300 text-[10px] sm:text-sm px-2 sm:px-4 py-1 sm:py-2">
                  Register
                </button>
              </Link>
              <Link to="/signIn">
                <button className="btn bg-red-600 text-white hover:bg-red-700 transition-all duration-300 text-[10px] sm:text-sm px-2 sm:px-4 py-1 sm:py-2">
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
