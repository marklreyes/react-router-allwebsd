import { FaDiscord, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-base-100 p-4">
      <div className="container mx-auto">
				<div className="text-center mb-4">
					<p>
						<small>
							AllWebSD.com is a KiloByte Contributor to{" "}
							<a
								target="_blank"
								href="//sdfutures.org/support-sdff"
								className="text-gray-600 hover:text-gray-800 hover:underline transition-colors font-medium"
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
								className="text-gray-600 hover:text-gray-800 hover:underline transition-colors font-medium"
							>
								Mark L. Reyes
							</a>{" "}
							| &copy; {new Date().getFullYear()} All Rights Reserved
						</small>
					</p>
				</div>
				<div className="flex justify-center gap-4">
						<a
							href="//github.com/marklreyes/react-router-allwebsd"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 hover:text-gray-800 transition-colors"
						>
							<FaGithub size={24} />
						</a>
						<a
							href="//discord.gg/FpKpTPAc"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 hover:text-gray-800 transition-colors"
						>
							<FaDiscord size={24} />
						</a>
				</div>
      </div>
    </footer>
  );
}
