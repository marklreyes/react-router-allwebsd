import { NavLink } from "react-router-dom";
import { PromoImage } from "../../components/PromoImage";

export function BecomeAGuest() {

	return (
		<main className="flex items-center justify-center">
			<div className="flex-1 flex flex-col items-center gap-16 min-h-0">
				<article className="w-full">
					<h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
						Become A Guest, Receive A Shirt!
					</h1>
					<PromoImage
						src="/images/allwebsd_shirt.jpg"
						alt="AllWebSD promotional t-shirt"
						ariaLabel="AllWebSD promotional t-shirt"
						description="Join as a guest and receive a complimentary AllWebSD t-shirt"
					/>
					<p className="text-white text-lg leading-relaxed mb-6">
						Yep, it's that easy! Tech enthusiasts across San Diego, this microphone is your home. When likes and shares aren't enough, stop by and let your voice be heard. I'm here to foster innovation through conversation.
					</p>
					<p className="text-white text-lg leading-relaxed mb-6">
						Software Engineers, Data Scientists, UX/UI Designers, Technical Product Owners, Business Analysts, Small Business Owners and more will always be welcome to AllWebSD.
						To make an appearance, please{" "}
						<NavLink
							to="/contact"
							className="text-[#FFC425] hover:text-white underline hover:no-underline transition-colors duration-200 focus:outline-hidden focus:ring-2 focus:ring-[#FFC425] focus:ring-opacity-50"
							aria-label="Contact us to become a guest"
						>
							contact me
						</NavLink>{" "}
						today!
					</p>
				</article>
			</div>
		</main>
	);
}
