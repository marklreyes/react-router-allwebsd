import { NavLink } from "react-router-dom";
import { PromoImage } from "../../components/PromoImage";
import { useTheme } from "~/context/ThemeContext";
import { calculateYearsSince } from "~/utils/formatters";
import { trackEvent } from "~/utils/trackEvent";

export function AboutMe() {
	const { isDarkMode } = useTheme();

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
							Mark is a Front-End Engineer, Podcast Producer, and Advocate with {calculateYearsSince(2007)} years of experience crafting dynamic web experiences and scalable UI systems.
						</p>
						<p className="text-white text-lg leading-relaxed mb-6">
							His journey began in web marketing, but his passion for design systems, JavaScript frameworks, and tech storytelling quickly evolved into a multifaceted career that spans development, digital strategy, and audio production. Today, he helps companies—from Fortune 500s to startups—deliver performant, accessible, and engaging digital products that align with real business goals.
						</p>

						<hr className="mb-6" />

						<h2 className="text-xl md:text-2xl font-semibold text-white">What He Does</h2>
							<ul role="list" className="text-lg text-white leading-relaxed mb-6 space-y-4">
								<li>➣ Designs and develops front-end experiences using modern stacks like React, Angular, and Astro.</li>
								<li>➣ Creates and optimizes websites for performance, UX, and accessibility.</li>
								<li>➣ Consults on web development, podcast production, and OpenAI integrations via marklreyes.com.</li>
								<li>➣ Hosts the AllWebSD podcast, highlighting San Diego’s tech community and advocating for mindful tech practices and meaningful conversations.</li>
								<li>➣ Produces and co-hosts The Puff Provisions Podcast, delivering insightful content that blends humor and real-life experiences to discuss topics like wellness, family, and the role of cannabis in modern society.</li>
							</ul>

						<h2 className="text-xl md:text-2xl font-semibold text-white">Experience Highlights</h2>
							<ul role="list" className="text-lg text-white leading-relaxed mb-6 space-y-4">
								<li>➣ Led the responsive overhaul of Thermo Fisher’s global web platform.</li>
								<li>➣ Partnered with colleagues to build Kinectify’s inaugural design system using Storybook, aiding in the modernization of Angular applications across product teams.</li>
								<li>➣ Produced 100+ podcast episodes available across major platforms—fostering conversations on tech, lifestyle, and modern societal topics.</li>
							</ul>

						<h2 className="text-xl md:text-2xl font-semibold text-white">Areas of Expertise</h2>
						<p className="text-white text-lg leading-relaxed mb-6">
							Web Development · UI Engineering · Design Systems · Podcast Production · Digital Strategy · Data Visualization · WordPress & Shopify · Performance Optimization · Teaching & Mentorship
						</p>
						<p className="text-white text-lg leading-relaxed mb-6">
							Outside of work, Mark is a dedicated Brazilian Jiu-Jitsu practitioner and volunteer coach at Gracie Barra, holding a brown belt under Magid Hage. He mentors students on and off the mats, emphasizing discipline, resilience, and continuous learning. Above all, he values quality time with his family, finding balance and inspiration through shared moments and everyday adventures.
						</p>

						<hr className="mb-6" />

						<h2 className="text-xl md:text-2xl font-semibold text-white">Why AllWebSD?</h2>
							<p className="text-white text-lg leading-relaxed mb-6">
									I originally made this podcast in hopes of reaching out to others within the web development field&mdash;to let you know that I'm in the trenches with you when it comes to code. I get excited host how our profession moves forward rapidly but at the same time I'd be lying if I said I've never been confused about it as well. I felt compelled to process my thoughts through audio.
							</p>
							<p className="text-white text-lg leading-relaxed mb-6">
								That said, over time, the podcast has evolved into a channel where professionals inside of San Diego can also share their experiences, thoughts and ideas with the world. I've been fortunate to have guests on the show who have showcased their businesses and insights with me and I'm grateful that all of this can be brought back to you.
							</p>
							<p className="text-white text-lg leading-relaxed mb-6">
								I hope you enjoy these segments and please feel free to provide feedback.
							</p>
							<p className="text-white text-lg leading-relaxed mb-6">
								For questions,{" "}
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
								{" "}or{" "}
								<NavLink
									to="/guests"
									className="text-[#FFC425] hover:text-white underline hover:no-underline transition-colors duration-200 focus:outline-hidden focus:ring-2 focus:ring-[#FFC425] focus:ring-opacity-50"
									aria-label="Information about becoming a guest"
									onClick={
										// Track event for text click
										trackEvent("nav_click", {
											params: {
												event_category: "Navigation",
												event_label: `appearances`,
												component: "About Me Component"
											},
										})
									}
								>
									appearances
								</NavLink>
								{" "}on this show, please {" "}
								<NavLink
									to="/contact"
									className="text-[#FFC425] hover:text-white underline hover:no-underline transition-colors duration-200 focus:outline-hidden focus:ring-2 focus:ring-[#FFC425] focus:ring-opacity-50"
									aria-label="More information"
									onClick={
										// Track event for text click
										trackEvent("nav_click", {
											params: {
												event_category: "Navigation",
												event_label: `appearances`,
												component: "Contact Me Component"
											},
										})
									}
								>
									contact me
								</NavLink>{" "}
								today!
							</p>
					</div>
				</div>
			</div>
		</main>
	);
}
