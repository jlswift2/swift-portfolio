import React from 'react'
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="pl-8">
        <ul className="flex space-x-4 text-grey-900 flex-col" id="navList">
            <li className="hover:underline hover:text-red-500">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:underline hover:text-red-500">
                <NavLink to="/about">About</NavLink>
            </li>
            <li className="hover:underline hover:text-red-500">
                <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li className="hover:underline hover:text-red-500">
                <NavLink to="/blogs">Blog</NavLink>
            </li>
            <li className="hover:underline hover:text-red-500">
                <NavLink to="/contact">Contact</NavLink>
            </li>
                
        </ul>
    </div>
  )
}

export default NavBar