export function BecomeASponsor() {

	return (
		<div className="flex items-center justify-center pt-4 pb-4">
			<div className="flex-1 flex flex-col items-center gap-16 min-h-0">
				<div className="max-w-[1024px] w-full px-4">
					<h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
						Become A Sponsor
					</h1>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
						{/* Season Package */}
						<div className="bg-white rounded-lg p-6 shadow-lg">
							<h2 className="text-2xl font-bold mb-4 text-[#3D2F26]">Season Package</h2>
							<ul className="space-y-3">
							<li>⭐ 5 Episode Package</li>
							<li>⭐ Social Media Posts</li>
							<li>⭐ Website Ad Space</li>
							<li>⭐ Show Notes Links</li>
							<li className="pt-4">
								<a
								href="mailto:mr@marklreyes.com?subject=ALLWEBSD Sponsorship - Season Package"
								className="text-[#FFC426] hover:text-[#3D2F26] underline hover:no-underline transition-colors duration-200"
								>
								Learn More
								</a>
							</li>
							</ul>
						</div>

						{/* À La Carte */}
						<div className="bg-white rounded-lg p-6 shadow-lg">
							<h2 className="text-2xl font-bold mb-4 text-[#3D2F26]">À La Carte</h2>
							<ul className="space-y-3">
							<li>⭐ Single Episode</li>
							<li>⭐ Social Media Post</li>
							<li>⭐ Website Ad Space</li>
							<li>⭐ Custom Package</li>
							<li className="pt-4">
								<a
								href="mailto:mr@marklreyes.com?subject=ALLWEBSD Sponsorship - À La Carte"
								className="text-[#FFC426] hover:text-[#3D2F26] underline hover:no-underline transition-colors duration-200"
								>
								Learn More
								</a>
							</li>
							</ul>
						</div>

						{/* Support */}
						<div className="bg-white rounded-lg p-6 shadow-lg">
							<h2 className="text-2xl font-bold mb-4 text-[#3D2F26]">Support</h2>
							<ul className="space-y-3">
							<li>☕ Buy Me A Coffee</li>
							<li>☕ Monthly Support</li>
							<li>☕ One-Time Support</li>
							<li>☕ Special Thanks</li>
							<li className="pt-4">
								<a
								href="//www.buymeacoffee.com/markreyes"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[#FFC426] hover:text-[#3D2F26] underline hover:no-underline transition-colors duration-200"
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
						For general support of this podcast, a <a href="//www.buymeacoffee.com/markreyes" className="text-[#FFC426] hover:text-white underline hover:no-underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFC426] focus:ring-opacity-50" target="_blank">cup of coffee</a> is always appreciated!
					</p>
				</div>
			</div>
		</div>
	);
}
