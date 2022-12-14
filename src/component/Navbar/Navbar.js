import React from 'react';
import { Link } from 'react-router-dom';
// import img from '../../image/A-18771.jpg'
import img from '../../image/logo.png'

const Navbar = () => {


    const menuItem = <React.Fragment>
        <li><Link className='text-xl font-bold' to={'/'}>Home</Link></li>
        <li><Link className='text-xl font-bold' to={'/about'}>About Me</Link></li>
        <li><Link className='text-xl font-bold' to={'/allProjects'}>Projects</Link></li>
        <li><Link className='text-xl font-bold' to={'/blogs'}>Blogs</Link></li>
        <li><Link className='text-xl font-bold' to={'/contact'}>Contact</Link></li>

        {/* <li tabIndex={0}>
            <a className="justify-between">
                Parent
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
            </a>
            <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
            </ul>
        </li> */}


    </React.Fragment>


    return (

        <div className="navbar bg-slate-100 shadow">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar hidden sm:flex">
                    <div className="w-10 rounded-full ">
                        <img src={img} alt={'profile img'} />
                    </div>
                </label>
                <Link to={'/'} className="btn btn-ghost normal-case font-bold text-xl">Tauhidul Islam Robin</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItem}
                </ul>
            </div>

        </div>


    );
};

export default Navbar;