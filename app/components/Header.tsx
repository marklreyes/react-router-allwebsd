import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white text-base-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* <h1 className="text-2xl font-heading">AllWebSD</h1> */}
        {/* <nav>
          <NavLink to="/" className={({ isActive }) => isActive ? "mr-4 font-bold" : "mr-4"}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "mr-4 font-bold" : "mr-4"}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "mr-4 font-bold" : "mr-4"}>Contact</NavLink>
        </nav> */}
      </div>
    </header>
  );
}
