import React from 'react'
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav class="fixed top-0 left-0 h-screen w-72 flex flex-col bg-gray-900 shadow text-white">
        <div >
            <ul  id="navList">
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
    </nav>
  )
}

export default NavBar