import { useTheme } from "~/context/ThemeContext";
import { GiHeadphones } from "react-icons/gi";

export default function Subscribe() {
	const { theme } = useTheme();

	return (
		<div className="mx-auto">
			<h5 className={`${theme.text} text-xl mb-1 font-semibold flex items-center gap-2`}>
				<GiHeadphones className="text-2xl" />Listen Anywhere
			</h5>
			<div className="gap-4 grid grid-cols-1 md:grid-cols-2">
				<a
				href="//itunes.apple.com/app/castbox-radio/id1243410543"
				target="_blank"
				rel="noopener noreferrer"
				className="block hover:opacity-80 transition-opacity"
				>
					<img
						src="/images/appstore_apple.png"
						alt="AllWebSD on Castbox through Apple App Store"
						className="w-full h-auto rounded"
					/>
				</a>
				<a
				href="//play.google.com/store/apps/details?id=fm.castbox.audiobook.radio.podcast"
				target="_blank"
				rel="noopener noreferrer"
				className="block hover:opacity-80 transition-opacity"
				>
					<img
						src="/images/appstore_google.png"
						alt="AllWebSD on Castbox through Google Play Store"
						className="w-full h-auto rounded"
					/>
				</a>
				<a
				href="//castbox.fm/channel/AllWebSD-id2933770"
				target="_blank"
				rel="noopener noreferrer"
				className="block hover:opacity-80 transition-opacity"
				>
					<img
						src="/images/castbox.png"
						alt="AllWebSD on Castbox"
						className="w-full h-auto rounded"
					/>
				</a>
			</div>
		</div>
	);
}
