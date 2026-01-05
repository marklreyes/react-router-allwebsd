import { FaDiscord, FaLinkedin, FaYoutube } from "react-icons/fa";
import { BiSolidDonateHeart } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Toast } from "./Toast";
import { SiBuymeacoffee } from "react-icons/si";

export default function Footer() {
  const [showToast, setShowToast] = useState(true);
  return (
	<footer className="bg-white border-t border-gray-200 py-8" role="contentinfo">
	  <div className="max-w-7xl mx-auto px-4">
		{/* Global toast */}
		<Toast
		  role="status"
		  aria-live="polite"
		  showToast={showToast}
		  setShowToast={setShowToast}
		  icon={<SiBuymeacoffee />}
		  message="Quick break with AllWebSD—support its return by "
		  link={{ to: "/sponsors", text: "sponsoring an episode today!" }}
		/>
		<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start text-secondary">
		  {/* Left column (1/3): Tagline */}
		  <div className="md:col-span-1 text-center md:text-left">
			<p className="font-medium">
			  Just a web developer storytelling, teaching and community building out of America's Finest City.
			</p>
		  </div>

		  {/* Right column (2/3): Copy and social */}
		  <div className="md:col-span-2">
			<div className="text-center md:text-right">
			  <p>
				<small>
				  AllWebSD.com is a KiloByte Contributor to{" "}
				  <a
					  target="_blank"
					  href="//sdfutures.org/support-sdff"
					  className="text-secondary hover:text-primary hover:underline transition-colors font-semibold"
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
					  className="text-secondary hover:text-primary hover:underline transition-colors font-semibold"
					  rel="noopener noreferrer"
					  aria-label="Visit Mark L. Reyes' podcast projects page"
				  >
					Mark L. Reyes
				  </a>{" "}
				  | &copy; {new Date().getFullYear()} All Rights Reserved
				</small>
			  </p>
			</div>

			{/* Social links */}
			<nav className="mt-4 flex justify-center md:justify-end gap-4" aria-label="Social media links">
			  <a
				href="//discord.gg/HsVp5R9zFt"
				target="_blank"
				rel="noopener noreferrer"
				className="text-secondary hover:text-primary transition-colors"
				aria-label="Join our Discord server"
			  >
				<FaDiscord size={24} aria-hidden="true" />
			  </a>
			  <a
				href="//www.linkedin.com/company/allwebsd/"
				target="_blank"
				rel="noopener noreferrer"
				className="text-secondary hover:text-primary transition-colors"
				aria-label="Visit our LinkedIn page"
			  >
				<FaLinkedin size={24} aria-hidden="true" />
			  </a>
			  <a
				href="//youtube.com/@allwebsd"
				target="_blank"
				rel="noopener noreferrer"
				className="text-secondary hover:text-primary transition-colors"
				aria-label="Visit our YouTube channel"
			  >
				<FaYoutube size={24} aria-hidden="true" />
			  </a>
			  <NavLink
				to="/sponsors"
				className="text-secondary hover:text-primary transition-colors"
				aria-label="View sponsor opportunities"
			  >
				<BiSolidDonateHeart size={24} aria-hidden="true" />
			  </NavLink>
			</nav>
		  </div>
		</div>
	  </div>
	</footer>
  );
}
