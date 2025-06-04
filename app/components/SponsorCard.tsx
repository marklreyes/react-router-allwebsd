import { useTheme } from "~/context/ThemeContext";
import type { SponsorCardProps } from "~/types/sponsorCard";
import { trackEvent } from "~/utils/trackEvent";
import { NavLink } from "react-router-dom";

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
	const { theme } = useTheme();

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

	// Shared button classes
	const buttonClasses = `btn btn-outline w-full ${theme.primary} ${theme.text} hover:bg-[#2F241D] hover:text-white transition-colors duration-200 border-0 ${
		animate ? 'animate-shake' : ''
	}`;

	// Determine link properties
	const href = subject ? `mailto:mr@marklreyes.com?subject=${subject}` : linkUrl;
	const ariaLabel = `${linkText} for ${title}`;
	const useNavLink = navigationType === 'internal';

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
							{linkText}
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
							{linkText}
						</a>
					)}
				</li>
			</ul>
		</div>
	);
  }
