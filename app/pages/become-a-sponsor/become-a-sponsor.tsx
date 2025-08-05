import { NavLink } from "react-router";
import { SponsorCard } from "~/components/SponsorCard";
import { trackEvent } from "~/utils/trackEvent";

export function BecomeASponsor() {

	interface SponsorCardData {
		title: string;
		benefits: string[];
		icon: string;
		subject?: string;
		linkText: string;
		navigationType?: "internal" | "external";
		linkUrl: string;
		animate?: boolean;
	}

	const sponsorCards: SponsorCardData[] = [
		{
			title: "Gold Sponsor",
			benefits: [
			"5 Episode Package",
			"YouTube Posts",
			"Website Ad Space - Extended",
			"Show Notes"
			],
			icon: "⭐",
			subject: "ALLWEBSD Sponsorship - Gold Sponsor",
			linkText: "Learn More",
			navigationType: "internal",
			linkUrl: "/contact?subject=ALLWEBSD Sponsorship - Gold Sponsor",
			animate: true
		},
		{
			title: "À La Carte",
			benefits: [
			"Single Episode",
			"YouTube Post",
			"Website Ad Space - Limited",
			"Show Notes"
			],
			icon: "⭐",
			subject: "ALLWEBSD Sponsorship - À La Carte",
			linkText: "Learn More",
			navigationType: "internal",
			linkUrl: "/contact?subject=ALLWEBSD Sponsorship - À La Carte",
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
			linkText: "Buy Me A Coffee",
		}
	];

	return (
		<main className="flex items-center justify-center" role="main">
			<div className="flex-1 flex flex-col items-center gap-16 min-h-0">
			<div className="w-full">
				<h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
				Become A Sponsor
				</h1>
				<section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" aria-label="Sponsorship Options">
				{sponsorCards.map((card, index) => (
					<SponsorCard key={index} {...card} />
				))}
				</section>
				<article className="text-white">
				<p className="text-lg leading-relaxed mb-6">
					Everything you see here is hand-rolled by me. From website maintenance, booking, content creation, pre/post production and more. Rest assured that a lot of <em>TLC</em> goes into making each episode.
				</p>
				<p className="text-lg leading-relaxed mb-6">
					Compliment this effort and consider purchasing a sponsorship for your local San Diego business now. All sponsorships are based on one season (5 episodes). If you're looking for an <em>à la carte</em> option, please
					{" "}
					<NavLink
						to="/contact"
						className="text-[#FFC425] hover:text-white underline hover:no-underline transition-colors duration-200 focus:outline-hidden focus:ring-2 focus:ring-[#FFC425] focus:ring-opacity-50"
						aria-label="More information"
						onClick={
							// Track event for text click
							trackEvent("nav_click", {
								params: {
									event_category: "Navigation",
									event_label: `contact me`,
									component: "Contact Me Component"
								},
							})
						}
					>
						contact me
					</NavLink>{" "}
					today!
				</p>
				<p className="text-lg leading-relaxed mb-6">
					For general support of this podcast, a
					{" "}
					<a href="//www.buymeacoffee.com/markreyes" onClick={trackEvent("text_click", {
											params: {
												action: "Click",
												event_category: "Navigation",
												event_label: "cup of coffee",
												platform: "Buy Me A Coffee",
												link_type: "social",
												component: "About Me Component"
											}
										})}
						className="text-[#FFC425] hover:text-white underline hover:no-underline transition-colors duration-200 focus:outline-hidden focus:ring-2 focus:ring-[#FFC425] focus:ring-opacity-50"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Support on Buy Me a Coffee">cup of coffee</a> is always appreciated!
				</p>
				</article>
			</div>
			</div>
		</main>
	);
}
