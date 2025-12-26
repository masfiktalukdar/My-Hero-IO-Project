import React, { useContext } from 'react';
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const activeClass = "text-[#9F62F2] border-b-2 border-[#9F62F2]"; // Active link er style
  const normalClass = "text-black"; // Normal link style

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  }

  const links = <>
    <li><NavLink to="/" className={({ isActive }) => isActive ? activeClass : normalClass}>Home</NavLink></li>
    <li><NavLink to="/apps" className={({ isActive }) => isActive ? activeClass : normalClass}>Apps</NavLink></li>
    {user && <li><NavLink to="/installation" className={({ isActive }) => isActive ? activeClass : normalClass}>Installation</NavLink></li>}
  </>;

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <img className='w-8' src={logo} alt="" />
        <a className="btn btn-ghost text-xl text-[#9F62F2]">HERO.OI</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-5">
            {links}
        </ul>
      </div>

      <div className="navbar-end">
        {user ? (
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full border border-primary">
                        {user.photoURL ? 
                          <img alt="User" src={user.photoURL} /> 
                          : 
                          <img alt="User" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        }
                    </div>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a className="justify-between">{user.displayName || 'User'}</a></li>
                    <li><button onClick={handleLogOut}>Logout</button></li>
                </ul>
            </div>
        ) : (
            <div className='flex gap-2'>
                <NavLink to="/login" className="btn bg-[#632EE3] text-white">Login</NavLink>
                <NavLink to="/register" className="btn btn-outline border-[#632EE3] text-[#632EE3]">Register</NavLink>
            </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
