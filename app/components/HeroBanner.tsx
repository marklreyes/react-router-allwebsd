import { useTheme } from "~/context/ThemeContext";
import { getOutlineButtonClasses } from "~/utils/buttonClasses";
import { trackEvent } from "~/utils/trackEvent";
import { HiUserGroup } from "react-icons/hi2";

export function HeroBanner() {
	const { isDarkMode, theme } = useTheme();
	// Shared event tracking function
	const handleClick = () => {
		trackEvent("button_click", {
			params: {
				action: "Click",
				event_category: "Hero Banner",
				event_label: "Join Now Button Click",
				component: "Hero Banner Component"
			},
		});
	};
	return(
		<div
			className="w-full mb-4 relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px] rounded-lg shadow-lg bg-cover bg-center bg-no-repeat flex items-center justify-center bg-gray-800"
			style={{
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundImage: "url('/images/AllWebSD_Business_Hero_Banner.png')"
			}}
			role="banner"
		>
			<div className="relative z-10 text-white px-4 md:px-8 max-w-4xl text-center">
				<h2 className={`text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight px-4 py-2 rounded-lg inline-block text-[#2F241D] ${
					isDarkMode
						? 'bg-[#71BEA9] bg-opacity-80'
						: 'bg-[#FFC425] bg-opacity-90'
				}`}>
					Welcome to AllWebSD
				</h2>
				<p className={`text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto px-6 py-3 rounded-lg text-[#2F241D] ${
					isDarkMode
						? 'bg-[#71BEA9] bg-opacity-80'
						: 'bg-[#FFC425] bg-opacity-90'
				}`}>
					Join San Diego’s digital professionals, small‑business owners, non-profits, and industry newcomers. Share your story, swap insights, and build connections that move your career forward!
				</p>
				{/* Call to Action Button */}
				<div className="mt-6 flex justify-center">
					<a
						href="https://discord.gg/HsVp5R9zFt"
						onClick={handleClick}
						target="_blank"
						rel="noopener noreferrer"
						className={getOutlineButtonClasses(theme, isDarkMode, {
							size: 'lg',
							customClasses: 'font-semibold',
							animate: true,
						})}
					>
						<span className="flex items-center gap-2">
							<HiUserGroup className="w-5 h-5" />
							Join Now
						</span>
					</a>
				</div>
			</div>
		</div>
	);
}
