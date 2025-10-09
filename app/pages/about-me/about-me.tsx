import { NavLink } from "react-router-dom";
import { PromoImage } from "../../components/PromoImage";
import { trackEvent } from "~/utils/trackEvent";

export function AboutMe() {
	return (
		<main className="flex items-center justify-center">
			<div className="flex-1 flex flex-col items-center gap-16 min-h-0">
				<div className="w-full">

					<h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
						About AllWebSD
					</h1>

					{/* Two-column layout: mobile stacked, desktop side-by-side */}
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">

						{/* Left column - Why AllWebSD (takes 2/3 of space on desktop) */}
						<div className="order-1 lg:order-1 lg:col-span-2">
							<h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">Why AllWebSD?</h2>
							<p className="text-white text-lg leading-relaxed mb-6">
								AllWebSD began as a podcast created by Mark Reyes—a seasoned Front-End Engineer and digital storyteller—to reflect on the fast-moving, sometimes chaotic world of web development. What started as a personal outlet quickly grew into something more: a vibrant space for local tech professionals to share their stories, lessons, and journeys.
							</p>
							<p className="text-white text-lg leading-relaxed mb-6">
								Today, AllWebSD has evolved into a broader community platform connecting San Diego’s digital professionals, small-business owners, nonprofits, and tech newcomers. Whether through the podcast, live events, or our active Discord server, AllWebSD fosters a culture of collaboration, transparency, and mutual growth.
							</p>
							<p className="text-white text-lg leading-relaxed mb-6">
								Through candid conversations and behind-the-scenes insights, the podcast continues to spotlight the talent shaping San Diego’s digital landscape—while our growing hub of resources and mentorship empowers others to do the same.
							</p>
							<div className="text-white text-lg leading-relaxed mb-8">
								<h3 className="text-xl font-semibold text-white mb-4">Join us if you:</h3>
								<ul className="space-y-3 mb-6">
									<li className="flex items-start">
										<span className="text-[#FFC425] mr-2">•</span>
										Want to connect locally with fellow digital professionals, creators, and business owners.
									</li>
									<li className="flex items-start">
										<span className="text-[#FFC425] mr-2">•</span>
										Are curious about the human side of digital work.
									</li>
									<li className="flex items-start">
										<span className="text-[#FFC425] mr-2">•</span>
										Are experimenting with new tools like MindStudio and want guidance.
									</li>
									<li className="flex items-start">
										<span className="text-[#FFC425] mr-2">•</span>
										Believe community can be a competitive advantage.
									</li>
								</ul>

								<div className="space-y-3 mb-6">
									<p>
										<span className="text-[#FFC425] mr-2 text-xl">👉</span>
										Join our free{" "}
										<a
											href="http://discord.gg/HsVp5R9zFt"
											target="_blank"
											rel="noopener noreferrer"
											className="text-[#FFC425] hover:text-white underline hover:no-underline transition-colors duration-200 focus:outline-hidden focus:ring-2 focus:ring-[#FFC425] focus:ring-opacity-50"
											aria-label="Join AllWebSD Discord community"
											onClick={() =>
												trackEvent("external_link_click", {
													params: {
														event_category: "External Links",
														event_label: "Discord",
														component: "About Me Component"
													},
												})
											}
										>
											Discord
										</a>
										{" "}to swap ideas, showcase projects, and build meaningful relationships in a supportive local network.
									</p>
									<p>
										<span className="text-[#FFC425] mr-2 text-xl">👉</span>
										Follow us on{" "}
										<a
											href="https://www.linkedin.com/company/allwebsd"
											target="_blank"
											rel="noopener noreferrer"
											className="text-[#FFC425] hover:text-white underline hover:no-underline transition-colors duration-200 focus:outline-hidden focus:ring-2 focus:ring-[#FFC425] focus:ring-opacity-50"
											aria-label="Follow AllWebSD on LinkedIn"
											onClick={() =>
												trackEvent("external_link_click", {
													params: {
														event_category: "External Links",
														event_label: "LinkedIn",
														component: "About Me Component"
													},
												})
											}
										>
											LinkedIn
										</a>
										{" "}for tech news, trends, and insights—crafted in San Diego, shared with innovators and creatives everywhere.
									</p>
									<p>
										<span className="text-[#FFC425] mr-2 text-xl">👉</span>
										COMING SOON: exclusive digital resources and mentorship for those building AI Agents.
									</p>
								</div>

								<p className="font-semibold text-[#FFC425] mb-6">
									We're building something together—don't miss it.
								</p>

								<p>
									For{" "}
									<NavLink
										to="/guests"
										className="text-[#FFC425] hover:text-white underline hover:no-underline transition-colors duration-200 focus:outline-hidden focus:ring-2 focus:ring-[#FFC425] focus:ring-opacity-50"
										aria-label="Information about becoming a guest"
										onClick={() =>
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
									{", "}
									<NavLink
										to="/sponsors"
										className="text-[#FFC425] hover:text-white underline hover:no-underline transition-colors duration-200 focus:outline-hidden focus:ring-2 focus:ring-[#FFC425] focus:ring-opacity-50"
										aria-label="Learn about sponsorship opportunities"
										onClick={() =>
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
									{", or feedback, Mark welcomes you to "}
									<NavLink
										to="/contact"
										className="text-[#FFC425] hover:text-white underline hover:no-underline transition-colors duration-200 focus:outline-hidden focus:ring-2 focus:ring-[#FFC425] focus:ring-opacity-50"
										aria-label="More information"
										onClick={() =>
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
									{" and join the conversation."}
								</p>
							</div>
						</div>

						{/* Right column - About Mark (takes 1/3 of space on desktop) */}
						<div className="order-2 lg:order-2 lg:col-span-1">
							<h2 className="text-xl md:text-2xl font-semibold text-white mb-4 text-center lg:text-left">
								👋🏾, I'm Mark!
							</h2>
							<div className="flex justify-center lg:justify-start mb-6">
								<img
									src="/images/640x640_profile_avatar.jpg"
									alt="Mark Reyes, Host of AllWebSD Podcast"
									className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-[#FFC425] shadow-lg object-cover"
								/>
							</div>
							<div className="space-y-4 text-center lg:text-left">
								<p className="text-white text-base leading-relaxed font-semibold">
									I’m a Digital Technologist blending code, storytelling, and culture — building digital experiences that are performant, accessible, and human-centered.
								</p>
								<p className="text-white text-base leading-relaxed">
									I created this platform to foster digital experiences and connect with the San Diego tech community through AllWebSD.
								</p>
								<p className="text-white text-base leading-relaxed">
									Thanks for being part of this journey—every listen, share, and conversation helps grow our community!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

