import { useState } from "react";
import { NavLink } from "react-router-dom";
import logoAllWebSD from "../../public/logo-allwebsd.png";
import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import Search from "./Search";  // Add this import
import { RiRobot2Fill } from "react-icons/ri";
import { trackEvent } from "~/utils/trackEvent";

export default function Header() {
  const { isDarkMode, theme, toggleTheme } = useTheme();
	const [isOpen, setIsOpen] = useState(false);

  return (
		<header className="bg-white text-base-100 p-4" role="banner">
			<div className="container mx-auto flex justify-between items-center">
			{/* Logo */}
			<div className={`w-32 ${isDarkMode ? `${theme.background}` : `${theme.background}`} p-2 rounded-sm`}>
				<NavLink to="/"
				aria-label="Home"
				onClick={() => {
					// Track event for text click
					trackEvent("nav_click", {
						params: {
							event_category: "Navigation",
							event_sub_category: "Desktop",
							event_label: `Logo`,
							component: "Header Component"
						},
					});
				}}
				>
				<img
					src={logoAllWebSD}
					alt="AllWebSD Logo"
					className="w-full h-auto"
				/>
				</NavLink>
			</div>

			{/* Desktop Navigation and Theme Toggle */}
			<div className="hidden lg:flex items-center gap-4">
				<nav aria-label="Main navigation" className="flex items-center">
				<NavLink to="/"
					className={({ isActive }) => isActive ? "mr-4 font-bold text-[#2F241D]" : "mr-4 text-[#2F241D]"}
					onClick={() => {
						// Track event for text click
						trackEvent("nav_click", {
							params: {
								event_category: "Navigation",
								event_sub_category: "Desktop",
								event_label: `Home`,
								component: "Header Component"
							},
						});
					}}
					>Home</NavLink>
				<NavLink to="/episodes"
					className={({ isActive }) => isActive ? "mr-4 font-bold text-[#2F241D]" : "mr-4 text-[#2F241D]"}
					onClick={() => {
						// Track event for text click
						trackEvent("nav_click", {
							params: {
								event_category: "Navigation",
								event_sub_category: "Desktop",
								event_label: `Episodes`,
								component: "Header Component"
							},
						});
					}}
					>Episodes</NavLink>
				<NavLink to="/guests"
					className={({ isActive }) => isActive ? "mr-4 font-bold text-[#2F241D]" : "mr-4 text-[#2F241D]"}
					onClick={() => {
						// Track event for text click
						trackEvent("nav_click", {
							params: {
								event_category: "Navigation",
								event_sub_category: "Desktop",
								event_label: `Guests`,
								component: "Header Component"
							},
						});
					}}
					>Guests</NavLink>
				<NavLink to="/sponsors"
					className={({ isActive }) => isActive ? "mr-4 font-bold text-[#2F241D]" : "mr-4 text-[#2F241D]"}
					onClick={() => {
						// Track event for text click
						trackEvent("nav_click", {
							params: {
								event_category: "Navigation",
								event_sub_category: "Desktop",
								event_label: `Sponsorship`,
								component: "Header Component"
							},
						});
					}}
					>Sponsors</NavLink>
				<NavLink to="/about"
					className={({ isActive }) => isActive ? "mr-4 font-bold text-[#2F241D]" : "mr-4 text-[#2F241D]"}
					onClick={() => {
						// Track event for text click
						trackEvent("nav_click", {
							params: {
								event_category: "Navigation",
								event_sub_category: "Desktop",
								event_label: `About`,
								component: "Header Component"
							},
						});
					}}
					>About</NavLink>
				<NavLink to="/contact"
					className={({ isActive }) => isActive ? "font-bold text-[#2F241D]" : "text-[#2F241D]"}
					onClick={() => {
						// Track event for text click
						trackEvent("nav_click", {
							params: {
								event_category: "Navigation",
								event_sub_category: "Desktop",
								event_label: `Contact`,
								component: "Header Component"
							},
						});
					}}
					>Contact</NavLink>
				<NavLink
					to="/chat"
					className={({ isActive }) => `flex items-center gap-2 ml-4 ${isActive ? "font-bold text-[#2F241D]" : "text-[#2F241D]"}`}
					aria-label="SanDieGPT Chat"
					onClick={() => {
						// Track event for text click
						trackEvent("nav_click", {
							params: {
								event_category: "Navigation",
								event_sub_category: "Desktop",
								event_label: `SanDieGPT`,
								component: "Header Component"
							},
						});
					}}
				>
					<RiRobot2Fill
					className={`w-5 h-5 ${
						isDarkMode ? 'text-[#F03D86]' : 'text-[#2F241D]'
					} transition-all duration-200`}
					aria-hidden="true"
					/>
					<span>SanDieGPT</span>
				</NavLink>
				</nav>
				<div className="flex items-center">
				<Search />
				</div>
				<button
				onClick={() => {
					toggleTheme();
					// Track event for theme toggle
					trackEvent("theme_toggle", {
						params: {
							event_category: "User Interaction",
							event_sub_category: "Desktop",
							event_label: "Theme Toggle",
							component: "Header Component",
							isDarkMode: !isDarkMode,
						},
					});
				}}
				className={`${isDarkMode ? `${theme.primary}` : `${theme.primary}`} p-2 rounded-full`}
				aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
				>
				{isDarkMode ? <FaSun className="text-white" aria-hidden="true" /> : <FaMoon className="text-white" aria-hidden="true" />}
				</button>
			</div>

			{/* Mobile Theme Toggle and Menu Button */}
			<div className="flex lg:hidden items-center gap-2">
				<div className="flex items-center">
				<Search />
				</div>
				<button
				onClick={
					() => {
						toggleTheme();
						// Track event for theme toggle
						trackEvent("theme_toggle", {
							params: {
								event_category: "User Interaction",
								event_sub_category: "Mobile",
								event_label: "Theme Toggle",
								component: "Header Component",
								isDarkMode: !isDarkMode,
							},
						});
				}}
				className={`${isDarkMode ? `${theme.primary}` : `${theme.primary}`} p-2 rounded-full`}
				aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
				>
				{isDarkMode ? <FaSun className="text-white" aria-hidden="true" /> : <FaMoon className="text-white" aria-hidden="true" />}
				</button>
				<button
				onClick={() => {
					setIsOpen(!isOpen);
					// Track event for menu button click
					trackEvent("menu_button_click", {
						params: {
							event_category: "User Interaction",
							event_sub_category: "Mobile",
							event_label: "Menu Button",
							component: "Header Component",
							isOpen: !isOpen,
						},
					});
				}}
				className={`${theme.text} hover:text-[#2F241D]`}
				aria-expanded={isOpen}
				aria-label="Toggle navigation menu"
				>
				<svg
					className="w-6 h-6"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true"
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
				<div
				className={`${theme.primary} ${theme.text} absolute top-16 left-0 right-0 lg:hidden z-50`}
				role="navigation"
				aria-label="Mobile navigation"
				>
				<nav className={`${isDarkMode ? `border-[#F03D86]` : `border-[#2F241D]`} flex flex-col items-center p-4 space-y-4 border-b`}>
					<NavLink
					to="/"
					className={({ isActive }) =>
						`block w-full text-center py-2 ${isActive ? "font-bold" : ""}`
					}
					onClick={() => {
						setIsOpen(false);
						// Track event for text click
						trackEvent("nav_click", {
							params: {
								event_category: "Navigation",
								event_sub_category: "Mobile",
								event_label: `Home`,
								component: "Header Component"
							},
						});

					}}
					>
					Home
					</NavLink>
					<NavLink
					to="/episodes"
					className={({ isActive }) =>
						`block w-full text-center py-2 ${isActive ? "font-bold" : ""}`
					}
					onClick={() => {
						setIsOpen(false);
						// Track event for text click
						trackEvent("nav_click", {
							params: {
								event_category: "Navigation",
								event_sub_category: "Mobile",
								event_label: `Episodes`,
								component: "Header Component"
							},
						});

					}}
					>
					Episodes
					</NavLink>
					<NavLink
					to="/guests"
					className={({ isActive }) =>
						`block w-full text-center py-2 ${isActive ? "font-bold" : ""}`
					}
					onClick={() => {
						setIsOpen(false);
						// Track event for text click
						trackEvent("nav_click", {
							params: {
								event_category: "Navigation",
								event_sub_category: "Mobile",
								event_label: `Guests`,
								component: "Header Component"
							},
						});

					}}
					>
					Guests
					</NavLink>
					<NavLink
					to="/sponsors"
					className={({ isActive }) =>
						`block w-full text-center py-2 ${isActive ? "font-bold" : ""}`
					}
					onClick={() => {
						setIsOpen(false);
						// Track event for text click
						trackEvent("nav_click", {
							params: {
								event_category: "Navigation",
								event_sub_category: "Mobile",
								event_label: `Sponsors`,
								component: "Header Component"
							},
						});

					}}
					>
					Sponsors
					</NavLink>
					<NavLink
					to="/about"
					className={({ isActive }) =>
						`block w-full text-center py-2 ${isActive ? "font-bold" : ""}`
					}
					onClick={() => {
						setIsOpen(false);
						// Track event for text click
						trackEvent("nav_click", {
							params: {
								event_category: "Navigation",
								event_sub_category: "Mobile",
								event_label: `About`,
								component: "Header Component"
							},
						});

					}}
					>
					About
					</NavLink>
					<NavLink
					to="/contact"
					className={({ isActive }) =>
						`block w-full text-center py-2 ${isActive ? "font-bold" : ""}`
					}
					onClick={() => {
						setIsOpen(false);
						// Track event for text click
						trackEvent("nav_click", {
							params: {
								event_category: "Navigation",
								event_sub_category: "Mobile",
								event_label: `Contact`,
								component: "Header Component"
							},
						});

					}}
					>
					Contact
					</NavLink>
					<NavLink
					to="/chat"
					className={({ isActive }) =>
						`flex items-center justify-center gap-2 w-full py-2 ${isActive ? "font-bold" : ""}`
					}
					onClick={() => {
						setIsOpen(false);
						// Track event for text click
						trackEvent("nav_click", {
							params: {
								event_category: "Navigation",
								event_sub_category: "Mobile",
								event_label: `SanDieGPT`,
								component: "Header Component"
							},
						});

					}}
					aria-label="SanDieGPT Chat"
					>
					<RiRobot2Fill
					className={`w-5 h-5 ${
						isDarkMode ? 'text-[#F03D86]' : 'text-[#2F241D]'
					} transition-all duration-200`}
					aria-hidden="true"
					/>
					<span>SanDieGPT</span>
					</NavLink>
				</nav>
				</div>
			)}
		</header>
  );
}
