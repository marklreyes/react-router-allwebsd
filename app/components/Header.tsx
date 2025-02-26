import { useState } from "react";
import { NavLink } from "react-router-dom";
import logoAllWebSD from "../../public/logo-allwebsd.png";
import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import Search from "./Search";  // Add this import
import { RiRobot2Fill } from "react-icons/ri";

export default function Header() {
  const { isDarkMode, theme, toggleTheme } = useTheme();
	const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white text-base-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className={`w-32 ${isDarkMode ? `${theme.background}` : `${theme.background}`} p-2 rounded`}>
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
          <nav className="flex items-center">
            <NavLink to="/" className={({ isActive }) => isActive ? "mr-4 font-bold text-[#2F241D]" : "mr-4 text-[#2F241D]"}>Home</NavLink>
            <NavLink to="/episodes" className={({ isActive }) => isActive ? "mr-4 font-bold text-[#2F241D]" : "mr-4 text-[#2F241D]"}>Episodes</NavLink>
            <NavLink to="/guests" className={({ isActive }) => isActive ? "mr-4 font-bold text-[#2F241D]" : "mr-4 text-[#2F241D]"}>Guests</NavLink>
            <NavLink to="/sponsors" className={({ isActive }) => isActive ? "mr-4 font-bold text-[#2F241D]" : "mr-4 text-[#2F241D]"}>Sponsors</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "font-bold text-[#2F241D]" : "text-[#2F241D]"}>Contact</NavLink>
            <NavLink
              to="/chat"
              className={({ isActive }) => `flex items-center gap-2 ml-4 ${isActive ? "font-bold text-[#2F241D]" : "text-[#2F241D]"}`}
            >
              <RiRobot2Fill
                className={`w-5 h-5 ${
                  isDarkMode ? 'text-[#F03D86]' : 'text-[#2F241D]'
                } transition-all duration-200`}
              />
              <span>SanDieGPT</span>
            </NavLink>
          </nav>
          <div className="flex items-center"> {/* Updated container for search */}
            <Search />
          </div>
          <button
            onClick={toggleTheme}
						className={`${isDarkMode ? `${theme.primary}` : `${theme.primary}`} p-2 rounded-full`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <FaSun className="text-white" /> : <FaMoon className="text-white" />}
          </button>
        </div>

        {/* Mobile Theme Toggle and Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <div className="flex items-center"> {/* Updated container for search */}
            <Search />
          </div>
          <button
            onClick={toggleTheme}
						className={`${isDarkMode ? `${theme.primary}` : `${theme.primary}`} p-2 rounded-full`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <FaSun className="text-white" /> : <FaMoon className="text-white" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${theme.text} hover:text-[#2F241D]`}
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
          <div className={`${theme.primary} ${theme.text} absolute top-16 left-0 right-0 lg:hidden z-50`}>
            <nav className={`${isDarkMode ? `border-[#F03D86]` : `border-[#2F241D]`} flex flex-col items-center p-4 space-y-4 border-b`}>
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
                to="/episodes"
                className={({ isActive }) =>
                  `block w-full text-center py-2 ${isActive ? "font-bold" : ""}`
                }
                onClick={() => setIsOpen(false)}
              >
                Episodes
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
              <NavLink
                to="/chat"
                className={({ isActive }) =>
                  `flex items-center justify-center gap-2 w-full py-2 ${isActive ? "font-bold" : ""}`
                }
                onClick={() => setIsOpen(false)}
              >
              <RiRobot2Fill
                className={`w-5 h-5 ${
                  isDarkMode ? 'text-[#F03D86]' : 'text-[#2F241D]'
                } transition-all duration-200`}
              />
              <span>SanDieGPT</span>
              </NavLink>
            </nav>
          </div>
        )}

    </header>
  );
}
