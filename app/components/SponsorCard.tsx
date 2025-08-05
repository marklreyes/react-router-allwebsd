import { useTheme } from "~/context/ThemeContext";
import type { SponsorCardProps } from "~/types/sponsorCard";
import { trackEvent } from "~/utils/trackEvent";
import { NavLink } from "react-router-dom";
import { getOutlineButtonClasses } from "~/utils/buttonClasses";
import { HiOutlineSparkles } from "react-icons/hi";
import { SiBuymeacoffee } from "react-icons/si";

export function SponsorCard({
	title,
	benefits,
	icon,
	linkUrl,
	linkText,
	subject,
	animate = false,
	navigationType = 'external' // Default to external for backward compatibility
  }: SponsorCardProps) {
	const { theme, isDarkMode } = useTheme();

	// Shared event tracking function
	const handleClick = () => {
		trackEvent("button_click", {
			params: {
				action: "Click",
				event_category: "Sponsor",
				event_label: `Sponsor: ${title}`,
				component: "SponsorCard Component"
			},
		});
	};

	// Generate button classes using utility
	const buttonClasses = getOutlineButtonClasses(theme, isDarkMode, {
		fullWidth: true,
		animate
	});

	// Determine link properties
	const href = subject ? `mailto:mr@marklreyes.com?subject=${subject}` : linkUrl;
	const ariaLabel = `${linkText} for ${title}`;
	const useNavLink = navigationType === 'internal';

	// Determine which icon to use based on the URL
	const isBuyMeACoffeeLink = linkUrl?.includes('buymeacoffee') || href?.includes('buymeacoffee');
	const IconComponent = isBuyMeACoffeeLink ? SiBuymeacoffee : HiOutlineSparkles;

	return (
		<div className="bg-white rounded-lg p-6 shadow-lg" role="article">
			<h2 className={`${theme.text} text-2xl font-bold mb-4`} id={`sponsor-${title.toLowerCase().replace(/\s+/g, '-')}`}>
				{title}
			</h2>
			<ul className="space-y-3" aria-labelledby={`sponsor-${title.toLowerCase().replace(/\s+/g, '-')}`}>
				{benefits.map((benefit, index) => (
					<li key={index} className={`${theme.text}`} aria-label={`Benefit: ${benefit}`}>
						<span className="mr-2" aria-hidden="true">{icon}</span>
						{benefit}
					</li>
				))}
				<li className="pt-4">
					{useNavLink ? (
						<NavLink
							to={linkUrl}
							onClick={handleClick}
							className={buttonClasses}
							aria-label={ariaLabel}
							role="link"
						>
							<span className="flex items-center gap-2">
								<IconComponent className="w-5 h-5" />
								{linkText}
							</span>
						</NavLink>
					) : (
						<a
							href={href}
							onClick={handleClick}
							target={subject ? undefined : "_blank"}
							rel={subject ? undefined : "noopener noreferrer"}
							className={buttonClasses}
							aria-label={ariaLabel}
						>
							<span className="flex items-center gap-2">
								<IconComponent className="w-5 h-5" />
								{linkText}
							</span>
						</a>
					)}
				</li>
			</ul>
		</div>
	);
  }
