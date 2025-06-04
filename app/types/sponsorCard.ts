export interface SponsorCardProps {
	title: string;
	benefits: string[];
	icon: string;
	linkUrl: string;
	linkText: string;
	subject?: string;
	animate?: boolean;
	// Navigation type - determines whether to use NavLink (internal) or anchor tag (external)
	navigationType?: 'internal' | 'external';
}
