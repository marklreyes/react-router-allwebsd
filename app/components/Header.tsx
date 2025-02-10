import React from "react";
import { NavLink } from "react-router-dom";
import logoAllWebSD from "../../public/logo-allwebsd.png";

export default function Header() {
  return (
    <header className="bg-white text-base-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
			<div className="w-32 bg-[#3D2F26] p-2 rounded">
				<NavLink to="/">
					<img
						src={logoAllWebSD}
						alt="AllWebSD Logo"
						className="w-full h-auto"
					/>
				</NavLink>
			</div>

        <nav>
          <NavLink to="/" className={({ isActive }) => isActive ? "mr-4 font-bold" : "mr-4"}>Home</NavLink>
          <NavLink to="/guests" className={({ isActive }) => isActive ? "mr-4 font-bold" : "mr-4"}>Guests</NavLink>
          <NavLink to="/sponsors" className={({ isActive }) => isActive ? "mr-4 font-bold" : "mr-4"}>Sponsors</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "mr-4 font-bold" : "mr-4"}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
