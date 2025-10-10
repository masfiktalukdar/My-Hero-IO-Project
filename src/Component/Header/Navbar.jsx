import React from 'react';
import logo from '../../assets/logo.png'
import { FaGithubSquare } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
 // NavLink use korbo active styling jonno

const Navbar = () => {

  const activeClass = "text-[#9F62F2] border-b-2 border-[#9F62F2]"; // Active link er style
  const normalClass = "text-black"; // Normal link style

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? activeClass : normalClass}
              >Home</NavLink>
            </li>
            <li>
              <NavLink
                to="/apps"
                className={({ isActive }) => isActive ? activeClass : normalClass}
              >Apps</NavLink>
            </li>
            <li>
              <NavLink
                to="/installation"
                className={({ isActive }) => isActive ? activeClass : normalClass}
              >Installation</NavLink>
            </li>
          </ul>
        </div>
        <img className='w-8' src={logo} alt="" />
        <a className="btn btn-ghost text-xl text-[#9F62F2]">HERO.OI</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? activeClass : normalClass}
            >Home</NavLink>
          </li>
          <li>
            <NavLink
              to="/apps"
              className={({ isActive }) => isActive ? activeClass : normalClass}
            >Apps</NavLink>
          </li>
          <li>
            <NavLink
              to="/installation"
              className={({ isActive }) => isActive ? activeClass : normalClass}
            >Installation</NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn bg-[#632EE3] text-white "><FaGithub /> Contribute</a>
      </div>
    </div>
  );
};

export default Navbar;
