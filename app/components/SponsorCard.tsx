import { useTheme } from "~/context/ThemeContext";

interface SponsorCardProps {
	title: string;
	benefits: string[];
	icon: string;
	linkUrl: string;
	linkText: string;
	subject?: string;
  }

  export function SponsorCard({ title, benefits, icon, linkUrl, linkText, subject }: SponsorCardProps) {
	const { theme } = useTheme();

	return (
	  <div className="bg-white rounded-lg p-6 shadow-lg">
		<h2 className={`${theme.text} text-2xl font-bold mb-4`}>{title}</h2>
		<ul className="space-y-3">
		  {benefits.map((benefit, index) => (
			<li key={index} className={`${theme.text}`}>
			  {icon} {benefit}
			</li>
		  ))}
		  <li className="pt-4">
			<a
			  href={subject ? `mailto:mr@marklreyes.com?subject=${subject}` : linkUrl}
			  target={!subject ? "_blank" : undefined}
			  rel={!subject ? "noopener noreferrer" : undefined}
			  className={`btn btn-outline w-full ${theme.primary} ${theme.text} hover:bg-[#2F241D] hover:text-white transition-colors duration-200 border-0`}
			>
			  {linkText}
			</a>
		  </li>
		</ul>
	  </div>
	);
  }
