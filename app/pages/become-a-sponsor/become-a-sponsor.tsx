import { useTheme } from "~/context/ThemeContext";

export function BecomeASponsor() {
	const { theme } = useTheme();

	return (
		<div className="flex items-center justify-center">
			<div className="flex-1 flex flex-col items-center gap-16 min-h-0">
				<div className="w-full px-4">
					<h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
						Become A Sponsor
					</h1>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
						{/* Gold Sponsor */}
						<div className="bg-white rounded-lg p-6 shadow-lg">
							<h2 className="text-2xl font-bold mb-4 text-[#2F241D]">Gold Sponsor</h2>
							<ul className="space-y-3">
							<li className="text-[#2F241D]">⭐ 5 Episode Package</li>
							<li className="text-[#2F241D]">⭐ Social Media Posts</li>
							<li className="text-[#2F241D]">⭐ Website Ad Space</li>
							<li className="text-[#2F241D]">⭐ Show Notes Links</li>
							<li className="pt-4">
								<a
									href="mailto:mr@marklreyes.com?subject=ALLWEBSD Sponsorship - Gold Sponsor"
									className={`btn btn-outline w-full ${theme.primary} ${theme.text} hover:bg-[#2F241D] hover:text-white transition-colors duration-200 border-0`}
								>
									Learn More
								</a>
							</li>
							</ul>
						</div>

						{/* À La Carte */}
						<div className="bg-white rounded-lg p-6 shadow-lg">
							<h2 className="text-2xl font-bold mb-4 text-[#2F241D]">À La Carte</h2>
							<ul className="space-y-3">
							<li className="text-[#2F241D]">⭐ Single Episode</li>
							<li className="text-[#2F241D]">⭐ Social Media Post</li>
							<li className="text-[#2F241D]">⭐ Website Ad Space</li>
							<li className="text-[#2F241D]">⭐ Custom Package</li>
							<li className="pt-4">
								<a
									href="mailto:mr@marklreyes.com?subject=ALLWEBSD Sponsorship - À La Carte"
									className={`btn btn-outline w-full ${theme.primary} ${theme.text} hover:bg-[#2F241D] hover:text-white transition-colors duration-200 border-0`}
								>
									Learn More
								</a>
							</li>
							</ul>
						</div>

						{/* Support */}
						<div className="bg-white rounded-lg p-6 shadow-lg">
							<h2 className="text-2xl font-bold mb-4 text-[#2F241D]">Support</h2>
							<ul className="space-y-3">
							<li className="text-[#2F241D]">☕ Buy Me A Coffee</li>
							<li className="text-[#2F241D]">☕ Monthly Support</li>
							<li className="text-[#2F241D]">☕ One-Time Support</li>
							<li className="text-[#2F241D]">☕ Special Thanks</li>
							<li className="pt-4">
								<a
									href="//www.buymeacoffee.com/markreyes"
									target="_blank"
									rel="noopener noreferrer"
									className={`btn btn-outline w-full ${theme.primary} ${theme.text} hover:bg-[#2F241D] hover:text-white transition-colors duration-200 border-0`}
								>
									Support Now
								</a>
							</li>
							</ul>
						</div>
					</div>
					<p className="text-white text-lg leading-relaxed mb-6">
						Everything you see here is hand-rolled by me. From website maintenance, booking, content creation, pre/post production and more. Rest assured that a lot of <em>TLC</em> goes into making each episode.
					</p>
					<p className="text-white text-lg leading-relaxed mb-6">
						Compliment this effort and consider purchasing a sponsorship for your local San Diego business now. All sponsorships are based on one season (5 episodes). If you're looking for an <em>à la carte</em> option, please <a href="mailto:mr@marklreyes.com?subject=ALLWEBSD Sponsorship - à la carte" >email me today</a>!
					</p>
					<p className="text-white text-lg leading-relaxed mb-6">
						For general support of this podcast, a <a href="//www.buymeacoffee.com/markreyes" className="text-[#FFC425] hover:text-white underline hover:no-underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFC425] focus:ring-opacity-50" target="_blank">cup of coffee</a> is always appreciated!
					</p>
				</div>
			</div>
		</div>
	);
}
