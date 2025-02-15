import { FaDiscord, FaGithub, FaYoutube } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-white text-base-100 p-4">
      <div className="container mx-auto">
				<div className="text-center mb-4 text-[#2F241D]">
					<p>
						<small>
							AllWebSD.com is a KiloByte Contributor to{" "}
							<a
								target="_blank"
								href="//sdfutures.org/support-sdff"
								className="text-[#2F241D] hover:text-[#FFC425] hover:underline transition-colors font-semibold"
							>
								San Diego Futures Foundation
							</a>.
						</small>
					</p>
					<p>
						<small>
							This podcast is maintained by{" "}
							<a
								target="_blank"
								href="//www.marklreyes.com/category/personal-log/podcast-projects/"
								className="text-[#2F241D] hover:text-[#FFC425] hover:underline transition-colors font-semibold"
							>
								Mark L. Reyes
							</a>{" "}
							| &copy; {new Date().getFullYear()} All Rights Reserved
						</small>
					</p>
				</div>
				<div className="flex justify-center gap-4">
						<a
							href="//buymeacoffee.com/markreyes"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#2F241D] hover:text-[#FFC425] transition-colors"
						>
							<SiBuymeacoffee size={24} />
						</a>
						<a
								href="//youtube.com/@allwebsd"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[#2F241D] hover:text-[#FFC425] transition-colors"
								>
								<FaYoutube size={24} />
						</a>
						<a
							href="//discord.gg/YfaCq2aK"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#2F241D] hover:text-[#FFC425] transition-colors"
						>
							<FaDiscord size={24} />
						</a>
						<a
							href="//github.com/marklreyes/react-router-allwebsd"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#2F241D] hover:text-[#FFC425] transition-colors"
						>
							<FaGithub size={24} />
						</a>
				</div>
      </div>
    </footer>
  );
}
