import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiHeadphones } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { Toast } from "../../components/Toast";
import { HeroBanner } from "../../components/HeroBanner";
import { SiBuymeacoffee } from "react-icons/si";

export function Welcome() {
	const [showToast, setShowToast] = useState(true);

return (
	<>
		<HeroBanner />
		<main className="flex items-center justify-center">
			<div className="flex-1 flex flex-col items-center gap-16 min-h-0">
				<div className="w-full">
					<Toast
						role="status"
						aria-live="polite"
						showToast={showToast}
						setShowToast={setShowToast}
						icon={<SiBuymeacoffee />}
						message="Podcast powered by grit and caffeine."
						link={{
							to: "/sponsors",
							text: "Please support now"
						}}
					/>
					<nav
						aria-label="Main navigation"
						className="rounded-lg border border-white p-6 dark:border-white space-y-4"
					>
						<iframe
							title="AllWebSD Castbox Player"
							src="//castbox.fm/app/castbox/player/id2933770?v=8.22.10&autoplay=0"
							width="100%"
							height="500"
							aria-label="Podcast player"
						></iframe>
						<ul aria-label="Navigation menu">
							<li>
								<NavLink
									to="/episodes"
									className="group flex items-center gap-3 self-stretch p-3 leading-normal text-[#FFC425] hover:text-white underline hover:no-underline"
									aria-label="View all podcast episodes"
								>
									<CiHeadphones aria-hidden="true" />
									<span>View All Episodes</span>
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/contact"
									className="group flex items-center gap-3 self-stretch p-3 leading-normal text-[#FFC425] hover:text-white underline hover:no-underline"
									aria-label="Contact page"
								>
									<CiMail aria-hidden="true" />
									<span>Contact Me</span>
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</main>
	</>
);
}
