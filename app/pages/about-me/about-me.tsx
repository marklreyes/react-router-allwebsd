import { NavLink } from "react-router-dom";

export function AboutMe() {
	const calculateYearsSince = (startYear: number): number => {
		return new Date().getFullYear() - startYear;
	};
	return (
		<div className="flex items-center justify-center pt-4 pb-4">
			<div className="flex-1 flex flex-col items-center gap-16 min-h-0">
				<div className="max-w-[1024px] w-full px-4">
					<h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
						👋🏾, I'm Mark!
					</h1>
					<div className="mb-8 max-w-[250px] mx-auto">
						<img
							src="https://avatars3.githubusercontent.com/u/1628070?s=460&v=4"
							alt="I'm your host, Mark L. Reyes!"
							className="w-[250px] h-[250px] rounded-full shadow-lg object-cover"
						/>
					</div>
					<h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 mt-8">Introduction</h2>
					<p className="text-white text-lg leading-relaxed mb-6">
						On any given day, once the caffeine kicks in, my mind is buzzing with questions:
					</p>
					<ul className="text-white text-lg leading-relaxed mb-6 space-y-4">
						<li>
							🧐{" "}Is this new technology truly groundbreaking or just a passing trend?
						</li>
						<li>
							🧐{" "}How do idioms from various programming languages influence my approach?
						</li>
						<li>
							🧐{" "}How big is my bug queue, and did we groom our backlog?
						</li>
						<li>
							🧐{" "}Are my estimates accurate, and will my solution scale?
						</li>
					</ul>
					<p className="text-white text-lg leading-relaxed mb-6">
					With <span>{calculateYearsSince(2007)}</span> years of experience in the industry—<span>{calculateYearsSince(2009)}</span> of those focused on front-end development—I bring a deep understanding of the presentation layer of your web experience. However, before writing a single line of code, I prioritize understanding your core business objectives to ensure my work aligns with your goals.
					</p>
					<p className="text-white text-lg leading-relaxed mb-6">
						I’ve had the privilege of working with renowned organizations such as Sony Electronics, The Active Network, Bridgepoint Education, and Thermo Fisher Scientific. My contributions have even been spotlighted on <em><a href="https://javascriptweekly.com/" rel="noreferrer noopener" target="_blank">JavaScript Weekly</a></em> and <em><a href="https://www.marklreyes.com/sleepscore-animated-aura/" target="_blank">Today with Hoda & Jenna</a></em>.
					</p>
					<h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 mt-8">Recent Experience</h2>
					<ul className="text-white text-lg leading-relaxed mb-6 space-y-4">
						<li>
							💻{" "}<strong>SleepScore Labs:</strong>{" "}Developed web applications to help users understand and improve their sleep.
						</li>
						<li>
							💻{" "}<strong>MTM:</strong>{" "}Collaborated with cross-functional teams to create web apps that connect patients and healthcare providers with innovative, cost-effective solutions.
						</li>
						<li>
							💻{" "}<strong>Kinectify:</strong>{" "}As Principal Front-End Engineer, I led front-end development across multiple teams, supporting AML software for the Gaming & Sports Betting industries.
						</li>
					</ul>
					<h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 mt-8">Beyond the Code</h2>
					<p className="text-white text-lg leading-relaxed mb-6">
						As a self-described multi-hyphenate, I’m also a <strong>Podcast Producer</strong>, having written and produced shows featured on Apple Podcasts, Google Podcasts, Spotify, Castbox, and more. If you’re looking to pair your web project with a complementary medium, I can bring added value to your team.
					</p>
					<h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 mt-8">Why AllWebSD?</h2>
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
							className="text-[#FFC426] hover:text-white underline hover:no-underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFC426] focus:ring-opacity-50"
						>
							sponsorships
						</NavLink>
						{" "}or{" "}
						<NavLink
							to="/guests"
							className="text-[#FFC426] hover:text-white underline hover:no-underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFC426] focus:ring-opacity-50"
						>
							appearances
						</NavLink>
						{" "}on this show, please send me an{" "}
						<a
							href="mailto:mr@marklreyes.com?subject=ALLWEBSD Appearances"
							className="text-[#FFC426] hover:text-white underline hover:no-underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFC426] focus:ring-opacity-50"
						>
							email
						</a>{" "}
						today!
					</p>
				</div>
			</div>
		</div>
	);
}
