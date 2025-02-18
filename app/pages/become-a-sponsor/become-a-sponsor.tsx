import { useTheme } from "~/context/ThemeContext";
import { SponsorCard } from "~/components/SponsorCard";

export function BecomeASponsor() {
	const { theme } = useTheme();

	const sponsorCards = [
		{
			title: "Gold Sponsor",
			benefits: [
			"5 Episode Package",
			"Social Media Posts",
			"Website Ad Space",
			"Show Notes Links"
			],
			icon: "⭐",
			subject: "ALLWEBSD Sponsorship - Gold Sponsor",
			linkText: "Learn More",
			linkUrl: "mailto:mr@markreyes.com?subject=ALLWEBSD Sponsorship - Gold Sponsor"
		},
		{
			title: "À La Carte",
			benefits: [
			"Single Episode",
			"Social Media Post",
			"Website Ad Space",
			"Custom Package"
			],
			icon: "⭐",
			subject: "ALLWEBSD Sponsorship - À La Carte",
			linkText: "Learn More",
			linkUrl: "mailto:mr@markreyes.com?subject=ALLWEBSD Sponsorship - À La Carte"
		},
		{
			title: "Support",
			benefits: [
			"Buy Me A Coffee",
			"Monthly Support",
			"One-Time Support",
			"Special Thanks"
			],
			icon: "☕",
			linkUrl: "//www.buymeacoffee.com/markreyes",
			linkText: "Support Now"
		}
	];

	return (
		<div className="flex items-center justify-center">
			<div className="flex-1 flex flex-col items-center gap-16 min-h-0">
				<div className="w-full">
					<h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
						Become A Sponsor
					</h1>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
					{sponsorCards.map((card, index) => (
						<SponsorCard key={index} {...card} />
					))}
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
