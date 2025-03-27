import { FaDiscord, FaGithub, FaYoutube } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";
import { useTheme } from "~/context/ThemeContext";

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
			  This podcast is maintained by{" "}
			  <a
				target="_blank"
				href="//www.marklreyes.com/category/personal-log/podcast-projects/"
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
			href="//buymeacoffee.com/markreyes"
			target="_blank"
			rel="noopener noreferrer"
			className={`${isDarkMode ? `text-[#F03D86] hover:text-[#71BEA9]` : `text-[#2F241D] hover:text-[#FFC425]`} transition-colors`}
			aria-label="Support on Buy Me a Coffee"
		  >
			<SiBuymeacoffee size={24} aria-hidden="true" />
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
			href="//github.com/marklreyes/react-router-allwebsd"
			target="_blank"
			rel="noopener noreferrer"
			className={`${isDarkMode ? `text-[#F03D86] hover:text-[#71BEA9]` : `text-[#2F241D] hover:text-[#FFC425]`} transition-colors`}
			aria-label="View source code on GitHub"
		  >
			<FaGithub size={24} aria-hidden="true" />
		  </a>
		</nav>
	  </div>
	</footer>
  );
}
