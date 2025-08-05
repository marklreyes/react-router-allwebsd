import { FaDiscord, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";
import { useTheme } from "~/context/ThemeContext";
import { BiSolidDonateHeart } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export default function Footer() {
	  const { isDarkMode } = useTheme();

  return (
	<footer className="bg-white text-base-100 p-4" role="contentinfo">
	  <div className="container mx-auto">
		<div className="text-center mb-4 text-[#2F241D]">
		  <p>
			<small>
			  AllWebSD.com is a KiloByte Contributor to{" "}
			  <a
				target="_blank"
				href="//sdfutures.org/support-sdff"
				className="text-[#2F241D] hover:text-[#FFC425] hover:underline transition-colors font-semibold"
				rel="noopener noreferrer"
				aria-label="Visit San Diego Futures Foundation support page"
			  >
				San Diego Futures Foundation
			  </a>
			</small>
		  </p>
		  <p>
			<small>
			  This domain is maintained by{" "}
			  <a
				target="_blank"
				href="//marklreyes.com/about/"
				className="text-[#2F241D] hover:text-[#FFC425] hover:underline transition-colors font-semibold"
				rel="noopener noreferrer"
				aria-label="Visit Mark L. Reyes' podcast projects page"
			  >
				Mark L. Reyes
			  </a>{" "}
			  | &copy; {new Date().getFullYear()} All Rights Reserved
			</small>
		  </p>
		</div>
		<nav className="flex justify-center gap-4" aria-label="Social media links">
		  <a
			href="//discord.gg/HsVp5R9zFt"
			target="_blank"
			rel="noopener noreferrer"
			className={`${isDarkMode ? `text-[#F03D86] hover:text-[#71BEA9]` : `text-[#2F241D] hover:text-[#FFC425]`} transition-colors`}
			aria-label="Join our Discord server"
		  >
			<FaDiscord size={24} aria-hidden="true" />
		  </a>
		  <a
			href="//www.linkedin.com/company/allwebsd/"
			target="_blank"
			rel="noopener noreferrer"
			className={`${isDarkMode ? `text-[#F03D86] hover:text-[#71BEA9]` : `text-[#2F241D] hover:text-[#FFC425]`} transition-colors`}
			aria-label="Visit our LinkedIn page"
		  >
			<FaLinkedin size={24} aria-hidden="true" />
		  </a>
		  <a
			href="//youtube.com/@allwebsd"
			target="_blank"
			rel="noopener noreferrer"
			className={`${isDarkMode ? `text-[#F03D86] hover:text-[#71BEA9]` : `text-[#2F241D] hover:text-[#FFC425]`} transition-colors`}
			aria-label="Visit our YouTube channel"
		  >
			<FaYoutube size={24} aria-hidden="true" />
		  </a>
		  <NavLink
			to="/sponsors"
			className={`${isDarkMode ? `text-[#F03D86] hover:text-[#71BEA9]` : `text-[#2F241D] hover:text-[#FFC425]`} transition-colors`}
			aria-label="View sponsor opportunities"
		  >
			<BiSolidDonateHeart size={24} aria-hidden="true" />
		  </NavLink>
		</nav>
	  </div>
	</footer>
  );
}
