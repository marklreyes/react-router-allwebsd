import { NavLink } from "react-router-dom";
import { PromoImage } from "../../components/PromoImage";
import { trackEvent } from "~/utils/trackEvent";

export function AboutMe() {

	return (
		<main className="flex items-center justify-center">
			<div className="flex-1 flex flex-col items-center gap-16 min-h-0">
				<div className="w-full">
					<h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
							👋🏾, I'm Mark!
					</h1>
					<PromoImage
						src="640x640_profile_avatar.jpg"
						alt="Mark L. Reyes profilet"
						ariaLabel="Profile photo of Mark L. Reyes"
						description="Hi, I'm Mark! Web Developer, Podcast Producer of AllWebSD"
					/>
					<div>
						<p className="text-white text-lg leading-relaxed mb-6 font-semibold">
							Mark is a Front-End Engineer, Podcast Producer, and Advocate crafting dynamic web experiences and scalable UI systems.
						</p>
						<p className="text-white text-lg leading-relaxed mb-6">
							He started in web marketing, but his passion for design systems, JavaScript frameworks, and tech storytelling grew into a career spanning development, digital strategy, and audio production. Today, he helps companies—from Fortune 500s to startups—deliver performant, accessible digital products that align with real goals.
						</p>

						<hr className="mb-6" />

						<h2 className="text-xl md:text-2xl font-semibold text-white">Areas of Expertise</h2>
						<p className="text-white text-lg leading-relaxed mb-6">
							Web Development · UI Engineering · Design Systems · Podcast Production · Digital Strategy · Data Visualization · WordPress & Shopify · Performance Optimization · Teaching & Mentorship
						</p>
						<p className="text-white text-lg leading-relaxed mb-6">
							Outside of work, Mark is a Brazilian Jiu-Jitsu practitioner and volunteer coach at Gracie Barra (brown belt under Magid Hage). He mentors students on and off the mats and values time with family, finding balance and inspiration through everyday moments.
						</p>

						<hr className="mb-6" />

						<h2 className="text-xl md:text-2xl font-semibold text-white">Why AllWebSD?</h2>
							<p className="text-white text-lg leading-relaxed mb-6">
								AllWebSD is a podcast created by Mark Reyes, a seasoned Front-End Engineer and digital storyteller, as a space to reflect on the fast-moving world of web development. What started as a personal outlet to unpack the excitement—and at times, the confusion—of working in tech quickly grew into something bigger.
							</p>
							<p className="text-white text-lg leading-relaxed mb-6">
								Today, AllWebSD is a platform for candid conversations with professionals across San Diego’s tech landscape. Through insightful interviews and behind-the-scenes stories, the podcast highlights local talent, shares lessons learned, and celebrates the evolving culture of building for digital experiences.
							</p>
							<p className="text-white text-lg leading-relaxed mb-6">
								Whether you’re deep in the trenches of front-end code or just curious about the human side of digital work, AllWebSD offers an honest, thoughtful take on what it means to be part of this ever-changing industry.
							</p>
							<p className="text-white text-lg leading-relaxed mb-6">
								For{" "}
								<NavLink
									to="/guests"
									className="text-[#FFC425] hover:text-white underline hover:no-underline transition-colors duration-200 focus:outline-hidden focus:ring-2 focus:ring-[#FFC425] focus:ring-opacity-50"
									aria-label="Information about becoming a guest"
									onClick={
										// Track event for text click
										trackEvent("nav_click", {
											params: {
												event_category: "Navigation",
												event_label: `guest inquiries`,
												component: "About Me Component"
											},
										})
									}
								>
									guest inquiries
								</NavLink>
								{" "}or{" "}
								<NavLink
									to="/sponsors"
									className="text-[#FFC425] hover:text-white underline hover:no-underline transition-colors duration-200 focus:outline-hidden focus:ring-2 focus:ring-[#FFC425] focus:ring-opacity-50"
									aria-label="Learn about sponsorship opportunities"
									onClick={
										// Track event for text click
										trackEvent("nav_click", {
											params: {
												event_category: "Navigation",
												event_label: `sponsorships`,
												component: "About Me Component"
											},
										})
									}
								>
									sponsorships
								</NavLink>
								{" "}or feedback, Mark welcomes you to{" "}
								<NavLink
									to="/contact"
									className="text-[#FFC425] hover:text-white underline hover:no-underline transition-colors duration-200 focus:outline-hidden focus:ring-2 focus:ring-[#FFC425] focus:ring-opacity-50"
									aria-label="More information"
									onClick={
										// Track event for text click
										trackEvent("nav_click", {
											params: {
												event_category: "Navigation",
												event_label: `reach out`,
												component: "About Me Component"
											},
										})
									}
								>
									reach out
								</NavLink>
								{" "}and join the conversation.
							</p>
					</div>
				</div>
			</div>
		</main>
	);
}
