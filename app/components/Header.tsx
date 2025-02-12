import { useState } from "react";
import { NavLink } from "react-router-dom";
import logoAllWebSD from "../../public/logo-allwebsd.png";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

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

				<button
					onClick={() => setIsOpen(!isOpen)}
					className="lg:hidden text-gray-500 hover:text-gray-700"
				>
					<svg
						className="w-6 h-6"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						{isOpen ? (
							<path d="M6 18L18 6M6 6l12 12" />
						) : (
							<path d="M4 6h16M4 12h16M4 18h16" />
						)}
					</svg>
				</button>

        <nav className="hidden lg:block">
          <NavLink to="/" className={({ isActive }) => isActive ? "mr-4 font-bold" : "mr-4"}>Home</NavLink>
          <NavLink to="/guests" className={({ isActive }) => isActive ? "mr-4 font-bold" : "mr-4"}>Guests</NavLink>
          <NavLink to="/sponsors" className={({ isActive }) => isActive ? "mr-4 font-bold" : "mr-4"}>Sponsors</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "mr-4 font-bold" : "mr-4"}>Contact</NavLink>
        </nav>

        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-[#FFC426] lg:hidden">
            <nav className="flex flex-col items-center p-4 space-y-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block w-full text-center py-2 ${isActive ? 'font-bold' : ''}`
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/guests"
                className={({ isActive }) =>
                  `block w-full text-center py-2 ${isActive ? 'font-bold' : ''}`
                }
                onClick={() => setIsOpen(false)}
              >
                Guests
              </NavLink>
              <NavLink
                to="/sponsors"
                className={({ isActive }) =>
                  `block w-full text-center py-2 ${isActive ? 'font-bold' : ''}`
                }
                onClick={() => setIsOpen(false)}
              >
                Sponsors
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block w-full text-center py-2 ${isActive ? 'font-bold' : ''}`
                }
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
