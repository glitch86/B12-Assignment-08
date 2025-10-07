import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router";
import { FaAppStore, FaGithub, FaHome } from "react-icons/fa";
import { MdInstallDesktop } from "react-icons/md";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to='/' className={({isActive}) => ` ${isActive ? 'border-b-2 border-blue-800' : ''}`}><FaHome></FaHome>  Home</NavLink>
      </li>
      <li>
        <NavLink to='/apps' className={({isActive}) => ` ${isActive ? 'border-b-2 border-blue-800' : ''}`}><FaAppStore></FaAppStore> Apps</NavLink>
      </li>
      <li>
        <NavLink to='/installation' className={({isActive}) => ` ${isActive ? 'border-b-2 border-blue-800' : ''}`}><MdInstallDesktop></MdInstallDesktop> Installation</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar mx-auto max-w-screen-xl w-full px-4 md:xp-8 lg:px-12">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost p-0 pr-3 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-gray-500"
            >
              {links}
            </ul>
          </div>
          <NavLink to="/" className="text-xl flex justify-center items-center">
            <img className="size-12" src={logo}></img>
            <span className="bg-[linear-gradient(45deg,#632EE3,#9F62F2)] bg-clip-text text-transparent font-semibold">
              HERO.IO
            </span>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-gray-500 text-lg">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn border-none bg-[linear-gradient(45deg,#632EE3,#9F62F2)] text-lg text-white font-normal"> <FaGithub></FaGithub> Contribute</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
