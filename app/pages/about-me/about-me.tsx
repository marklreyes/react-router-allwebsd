import { NavLink } from "react-router-dom";
import { PromoImage } from "../../components/PromoImage";
import { useTheme } from "~/context/ThemeContext";

export function AboutMe() {
	const { isDarkMode } = useTheme();

	const calculateYearsSince = (startYear: number): number => {
		return new Date().getFullYear() - startYear;
	};
	return (
		<main className="flex items-center justify-center">
			<div className="flex-1 flex flex-col items-center gap-16 min-h-0">
				<div className="w-full">
					<h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
							👋🏾, I'm Mark!
					</h1>
					<PromoImage
						src="https://avatars3.githubusercontent.com/u/1628070?s=460&v=4"
						alt="Mark L. Reyes profilet"
						ariaLabel="Profile photo of Mark L. Reyes"
						description="Hi, I'm Mark! Web Developer, Podcast Producer of AllWebSD"
					/>
					<div className="join join-vertical w-full mt-6 rounded-lg">
						{/* Introduction Section */}
						<div className={`collapse collapse-arrow join-item border bg-base-200 ${isDarkMode ? 'border-[#F03D86]' : 'border-[#2F241D]'}`}>
							<input type="radio" name="about-accordion" defaultChecked />
							<div className={`collapse-title text-2xl md:text-3xl font-semibold ${isDarkMode ? 'bg-[#71BEA9]' : 'bg-[#FFC425]'}`}>
								Introduction
							</div>
							<div className={`collapse-content ${isDarkMode ? 'bg-[#71BEA9]' : 'bg-[#FFC425]'}`}>
								<p className="text-lg leading-relaxed mb-6">
									On any given day, once the caffeine kicks in, my mind is buzzing with questions:
								</p>
								<ul role="list" className="text-lg leading-relaxed mb-6 space-y-4">
									<li>
										<span aria-hidden="true">✔️ </span>Is this new technology truly groundbreaking or just a passing trend?
									</li>
									<li>
										<span aria-hidden="true">✔️ </span>How do idioms from various programming languages influence my approach?
									</li>
									<li>
										<span aria-hidden="true">✔️ </span>How big is my bug queue, and did we groom our backlog?
									</li>
									<li>
										<span aria-hidden="true">✔️ </span>Are my estimates accurate, and will my solution scale?
									</li>
								</ul>
								<p className="text-lg leading-relaxed mb-6">
									With <span>{calculateYearsSince(2007)}</span> years of experience in the industry—<span>{calculateYearsSince(2009)}</span> of those focused on front-end development—I bring a deep understanding of the presentation layer of your web experience. However, before writing a single line of code, I prioritize understanding your core business objectives to ensure my work aligns with your goals.
								</p>
								<p className="text-lg leading-relaxed mb-6">
									I've had the privilege of working with renowned organizations such as Sony Electronics, The Active Network, Bridgepoint Education, and Thermo Fisher Scientific. My contributions have even been spotlighted on <em><a href="https://javascriptweekly.com/" rel="noreferrer noopener" target="_blank" aria-label="Visit JavaScript Weekly website">JavaScript Weekly</a></em> and <em><a href="https://www.marklreyes.com/sleepscore-animated-aura/" target="_blank" aria-label="View SleepScore feature on Today with Hoda & Jenna">Today with Hoda & Jenna</a></em>.
								</p>
							</div>
						</div>

						{/* Recent Experience Section */}
						<div className={`collapse collapse-arrow join-item border bg-base-200 ${isDarkMode ? 'border-[#F03D86]' : 'border-[#2F241D]'}`}>
							<input type="radio" name="about-accordion" />
							<div className={`collapse-title text-2xl md:text-3xl font-semibold ${isDarkMode ? 'bg-[#71BEA9]' : 'bg-[#FFC425]'}`}>
								Recent Experience
							</div>
							<div className={`collapse-content ${isDarkMode ? 'bg-[#71BEA9]' : 'bg-[#FFC425]'}`}>
								<ul role="list" className="text-lg leading-relaxed mb-6 space-y-4">
									<li>
										<span aria-hidden="true">💻 </span><strong>SleepScore Labs:</strong> Developed web applications to help users understand and improve their sleep.
									</li>
									<li>
										<span aria-hidden="true">💻 </span><strong>MTM:</strong> Collaborated with cross-functional teams to create web apps that connect patients and healthcare providers with innovative, cost-effective solutions.
									</li>
									<li>
										<span aria-hidden="true">💻 </span><strong>Kinectify:</strong> As Principal Front-End Engineer, I led front-end development across multiple teams, supporting AML software for the Gaming & Sports Betting industries.
									</li>
								</ul>
							</div>
						</div>

						{/* Beyond the Code Section */}
						<div className={`collapse collapse-arrow join-item border bg-base-200 ${isDarkMode ? 'border-[#F03D86]' : 'border-[#2F241D]'}`}>
							<input type="radio" name="about-accordion" />
							<div className={`collapse-title text-2xl md:text-3xl font-semibold ${isDarkMode ? 'bg-[#71BEA9]' : 'bg-[#FFC425]'}`}>
								Beyond the Code
							</div>
							<div className={`collapse-content ${isDarkMode ? 'bg-[#71BEA9]' : 'bg-[#FFC425]'}`}>
								<p className="text-lg leading-relaxed mb-6">
									As a self-described multi-hyphenate, I'm also a <strong>Podcast Producer</strong>, having written and produced shows featured on Apple Podcasts, Google Podcasts, Spotify, Castbox, and more. If you're looking to pair your web project with a complementary medium, I can bring added value to your team.
								</p>
							</div>
						</div>

						{/* Why AllWebSD Section */}
						<div className={`collapse collapse-arrow join-item border bg-base-200 ${isDarkMode ? 'border-[#F03D86]' : 'border-[#2F241D]'}`}>
							<input type="radio" name="about-accordion" />
							<div className={`collapse-title text-2xl md:text-3xl font-semibold ${isDarkMode ? 'bg-[#71BEA9]' : 'bg-[#FFC425]'}`}>
								Why AllWebSD?
							</div>
							<div className={`collapse-content ${isDarkMode ? 'bg-[#71BEA9]' : 'bg-[#FFC425]'}`}>
								<p className="text-lg leading-relaxed mb-6">
									I originally made this podcast in hopes of reaching out to others within the web development field&mdash;to let you know that I'm in the trenches with you when it comes to code. I get excited host how our profession moves forward rapidly but at the same time I'd be lying if I said I've never been confused about it as well. I felt compelled to process my thoughts through audio.
								</p>
								<p className="text-lg leading-relaxed mb-6">
									That said, over time, the podcast has evolved into a channel where professionals inside of San Diego can also share their experiences, thoughts and ideas with the world. I've been fortunate to have guests on the show who have showcased their businesses and insights with me and I'm grateful that all of this can be brought back to you.
								</p>
								<p className="text-lg leading-relaxed mb-6">
									I hope you enjoy these segments and please feel free to provide feedback.
								</p>
								<p className="text-lg leading-relaxed mb-6">
									For questions,{" "}
									<NavLink
										to="/sponsors"
										className={`underline hover:no-underline transition-colors duration-200 focus:outline-hidden focus:ring-2 focus:ring-[#FFC425] focus:ring-opacity-50`}
										aria-label="Learn about sponsorship opportunities"
									>
										sponsorships
									</NavLink>
									{" "}or{" "}
									<NavLink
										to="/guests"
										className={`underline hover:no-underline transition-colors duration-200 focus:outline-hidden focus:ring-2 focus:ring-[#FFC425] focus:ring-opacity-50`}
										aria-label="Information about becoming a guest"
									>
										appearances
									</NavLink>
									{" "}on this show, please send me an{" "}
									<a
										href="mailto:mr@marklreyes.com?subject=ALLWEBSD Appearances"
										className={`underline hover:no-underline transition-colors duration-200 focus:outline-hidden focus:ring-2 focus:ring-[#FFC425] focus:ring-opacity-50`}
										aria-label="Send email about ALLWEBSD appearances"
									>
										email
									</a>{" "}
									today!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
