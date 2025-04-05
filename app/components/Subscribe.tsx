import { useTheme } from "~/context/ThemeContext";
import { GiHeadphones } from "react-icons/gi";
import { trackEvent } from "~/utils/trackEvent";

export default function Subscribe() {
	const { theme } = useTheme();

	return (
		<div className="mx-auto">
			<h5 className={`${theme.text} text-xl mb-1 font-semibold flex items-center gap-2`} id="listen-heading">
			<GiHeadphones className="text-2xl" aria-hidden="true" />Listen Anywhere
			</h5>
			<div className="gap-4 grid grid-cols-1 md:grid-cols-2" role="list" aria-labelledby="listen-heading">
			<a
			href="//itunes.apple.com/app/castbox-radio/id1243410543"
			onClick={trackEvent("image_click", {
				params: {
					action: "Click",
					event_category: "App Store",
					event_label: "Download AllWebSD on Apple App Store",
					platform: "Apple App Store",
					link_type: "app",
					component: "Subscribe Component"
				}
			})}
			target="_blank"
			rel="noopener noreferrer"
			className="block hover:opacity-80 transition-opacity"
			aria-label="Download AllWebSD on Apple App Store"
			>
				<img
				src="/images/appstore_apple.png"
				alt="Download AllWebSD on Apple App Store"
				className="w-full h-auto rounded-sm"
				/>
			</a>
			<a
			href="//play.google.com/store/apps/details?id=fm.castbox.audiobook.radio.podcast"
			onClick={trackEvent("image_click", {
				params: {
					action: "Click",
					event_category: "App Store",
					event_label: "Download AllWebSD on Google Play Store",
					platform: "Google Play Store",
					link_type: "app",
					component: "Subscribe Component"
				}
			})}
			target="_blank"
			rel="noopener noreferrer"
			className="block hover:opacity-80 transition-opacity"
			aria-label="Download AllWebSD on Google Play Store"
			>
				<img
				src="/images/appstore_google.png"
				alt="Download AllWebSD on Google Play Store"
				className="w-full h-auto rounded-sm"
				/>
			</a>
			<a
			href="//castbox.fm/channel/AllWebSD-id2933770"
			onClick={trackEvent("image_click", {
				params: {
					action: "Click",
					event_category: "App Store",
					event_label: "Download AllWebSD on Castbox",
					platform: "Castbox",
					link_type: "app",
					component: "Subscribe Component"
				}
			})}
			target="_blank"
			rel="noopener noreferrer"
			className="block hover:opacity-80 transition-opacity"
			aria-label="Listen to AllWebSD on Castbox"
			>
				<img
				src="/images/castbox.png"
				alt="Download AllWebSD on Castbox"
				className="w-full h-auto rounded-sm"
				/>
			</a>
			</div>
		</div>
	);
}
