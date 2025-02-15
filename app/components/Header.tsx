import { useState } from "react";
import { NavLink } from "react-router-dom";
import logoAllWebSD from "../../public/logo-allwebsd.png";
import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Header() {
  const { isDarkMode, theme, toggleTheme } = useTheme();
	const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white text-base-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="w-32 bg-[#2F241D] p-2 rounded">
          <NavLink to="/">
            <img
              src={logoAllWebSD}
              alt="AllWebSD Logo"
              className="w-full h-auto"
            />
          </NavLink>
        </div>

        {/* Desktop Navigation and Theme Toggle */}
        <div className="hidden lg:flex items-center gap-4">
          <nav>
            <NavLink to="/" className={({ isActive }) => isActive ? "mr-4 font-bold text-[#2F241D]" : "mr-4 text-[#2F241D]"}>Home</NavLink>
            <NavLink to="/guests" className={({ isActive }) => isActive ? "mr-4 font-bold text-[#2F241D]" : "mr-4 text-[#2F241D]"}>Guests</NavLink>
            <NavLink to="/sponsors" className={({ isActive }) => isActive ? "mr-4 font-bold text-[#2F241D]" : "mr-4 text-[#2F241D]"}>Sponsors</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "font-bold text-[#2F241D]" : "text-[#2F241D]"}>Contact</NavLink>
          </nav>
          <button
            onClick={toggleTheme}
						className={`${theme.primary} ${theme.accent} p-2 rounded-full`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <FaSun className={`${theme.text}`} /> : <FaMoon className={`${theme.text}`} />}
          </button>
        </div>

        {/* Mobile Theme Toggle and Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
						className={`${theme.primary} ${theme.accent} p-2 rounded-full`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <FaSun className={`${theme.text}`} /> : <FaMoon className={`${theme.text}`} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 hover:text-gray-700"
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
        </div>
      </div>

        {isOpen && (
          <div className={`${theme.primary} absolute top-16 left-0 right-0 lg:hidden`}>
            <nav className="flex flex-col items-center p-4 space-y-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block w-full text-center py-2 ${isActive ? "font-bold" : ""}`
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/guests"
                className={({ isActive }) =>
                  `block w-full text-center py-2 ${isActive ? "font-bold" : ""}`
                }
                onClick={() => setIsOpen(false)}
              >
                Guests
              </NavLink>
              <NavLink
                to="/sponsors"
                className={({ isActive }) =>
                  `block w-full text-center py-2 ${isActive ? "font-bold" : ""}`
                }
                onClick={() => setIsOpen(false)}
              >
                Sponsors
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block w-full text-center py-2 ${isActive ? "font-bold" : ""}`
                }
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </nav>
          </div>
        )}

    </header>
  );
}
