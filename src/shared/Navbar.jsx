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
              console.log('successful sign out')
          })
          .catch(error => {
              console.log('failed to sign out .stay here. dont leave me alone',error)
          })
  }

    
    const navLinkStyle = ({ isActive }) =>
        `font-bold text-[14px] ${
          isActive ? "text-red-500" : "hover:text-red-500"
        }`;
      
    return (
        <div className="navbar bg-black">
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
            <NavLink className={navLinkStyle} to="/dashboard">
              Dashboard
            </NavLink>
          </ul>
        </div>
        <a className="btn flex btn-ghost text-xl">
          <img src={logo} className="w-[20px] text-red-500"></img>
          <h1 className="text-[20px] text-red-500 font-bold italic">Runtrack</h1>
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal font-bold px-1 gap-3 mr-2 text-white">
        <NavLink className={navLinkStyle} to="/">
              Home
            </NavLink>
            <NavLink className={navLinkStyle} to="/marathons">
              Marathons
            </NavLink>
            <NavLink className={navLinkStyle} to="/dashboard">
              Dashboard
            </NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-2 items-center">
      {
                    user ? <>
                        <button onClick={handleSignOut} className="btn bg-red-600 text-white">Sign out</button>
                    </> : <>
                        <Link to="/register"><button className="btn bg-red-600 text-white">Register</button></Link>
                        <Link to="/signIn">
                            <button className="btn bg-red-600 text-white">Sign In</button>
                        </Link>
                    </>
                }
        </div>
    </div>)
};

export default Navbar;