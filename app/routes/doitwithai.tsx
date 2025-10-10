import type { Route } from "./+types/doitwithai";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { MindStudioLink } from "../components/MindStudioLink";

export function meta({}: Route.MetaArgs) {
  return [
	{ title: "Do It With AI Tutorials | AllWebSD" },
	{ name: "description", content: "Beginner-friendly tutorials: HTML, Markdown, JSON, and Handlebars for MindStudio prompts, templates, and workflows. No code required." },
	{ name: "twitter:card", content: "summary_large_image" },
	{ name: "twitter:title", content: "Do It With AI Tutorials | AllWebSD" },
	{ name: "twitter:description", content: "Beginner-friendly tutorials: HTML, Markdown, JSON, and Handlebars for MindStudio prompts, templates, and workflows. No code required." },
	{ name: "twitter:image", content: "https://www.allwebsd.com/allwebsd-share.jpg" },
	{ property: "og:title", content: "Do It With AI Tutorials | AllWebSD" },
	{ property: "og:type", content: "website" },
	{ property: "og:url", content: "https://www.allwebsd.com/doitwithai" },
	{ property: "og:description", content: "Beginner-friendly tutorials: HTML, Markdown, JSON, and Handlebars for MindStudio prompts, templates, and workflows. No code required." },
	{ property: "og:image", content: "https://www.allwebsd.com/allwebsd-share.jpg" },
	{ property: "og:image:alt", content: "AllWebSD Do It With AI tutorials banner" },
  ];
}

export default function DoItWithAI() {
	const { theme, isDarkMode } = useTheme();

	// Background images for hero section by theme
	// TODO: Replace heroImageDark with a real dark-mode asset when available
	const heroImageLight = "/images/mmpr_allwebsd_color.jpg";
	const heroImageDark = "/images/mmpr_full_color.jpg";
	const heroBgStyle = {
		backgroundImage: `url('${isDarkMode ? heroImageDark : heroImageLight}')`,
	} as const;

	const scrollToTutorials = () => {
		const tutorialSection = document.getElementById('tutorial-cards-section');
		if (tutorialSection) {
			tutorialSection.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	};

	return (
		<div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-br from-[#F03D86] to-[#71BEA9]' : 'bg-gradient-to-br from-[#2F241D] to-[#FFC425]'}`}>
			{/* Hero Section */}
			<div
				className="relative shadow-lg bg-no-repeat bg-cover bg-top"
				style={heroBgStyle}
			>
				{/* Overlay for readability */}
				<div className={`absolute inset-0 ${isDarkMode ? 'bg-black/50' : 'bg-black/40'}`} />
				<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
					<div className="text-center">
						<h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
							Do It With AI
						</h1>
						<p className="mt-3 max-w-md mx-auto text-base text-white/90 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
							Morph your ideas into powerful AI Agents — no coding required.
							Learn essential web skills to supercharge MindStudio.
						</p>
						<div className="mt-8 flex justify-center">
							<div className="inline-flex rounded-md shadow">
								<button
									onClick={scrollToTutorials}
									className={`inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md ${isDarkMode ? 'text-white bg-[#F03D86] hover:bg-[#d63570]' : 'text-white bg-[#2F241D] hover:bg-[#1f1814]'}`}
								>
									Start Learning
								</button>
							</div>
						</div>
					</div>
				</div>
				</div>

			{/* Tutorial Cards Section */}
			<div id="tutorial-cards-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="text-center mb-12">
					<h2 className={`text-3xl font-extrabold text-white sm:text-4xl`}>
						Assemble your Agent powers, one skill at a time.
					</h2>
					<p className={`mt-4 max-w-2xl mx-auto text-xl text-gray-200`}>
						Follow the Ranger path: start with HTML, level up with Markdown, unlock JSON, and fuse it all with Handlebars—bringing your prompts, templates, and data flows to life in <MindStudioLink />.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
					{/* HTML Tutorial Card */}
					<div className={`${isDarkMode ? 'bg-[#71BEA9]' : 'bg-white'} overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300`}>
						<div className="bg-[#FFC425] h-2"></div>
						<div className="p-6">
							<div className="flex items-center">
								<div className="flex-shrink-0">
									<div className={`h-12 w-12 ${isDarkMode ? 'bg-[#FFC425]' : 'bg-[#FFC425] bg-opacity-20'} rounded-lg flex items-center justify-center`}>
										<span className="text-[#2F241D] font-bold text-xl">HTML</span>
									</div>
								</div>
								<div className="ml-4">
									<h3 className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-[#2F241D]'}`}>
										HTML — “Summon the Command Console”
									</h3>
									<p className={`text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}>
										Format mission briefings for chat and UI panels
									</p>
								</div>
							</div>
							<div className="mt-4">
								<p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
									Learn essential HTML to shape how your agent speaks and looks. Structure mission briefings with headings, lists, links, and images so responses render cleanly across chat and UI blocks in MindStudio.
								</p>
								<details className="mt-3">
									<summary className={`cursor-pointer text-sm font-medium ${isDarkMode ? 'text-white' : 'text-[#2F241D]'}`}>View example</summary>
									<div className="mt-2">
										<pre className={`${isDarkMode ? 'bg-[#2F241D] text-gray-100 border-[#2F241D]' : 'bg-gray-50 text-gray-800 border-gray-200'} border rounded-md p-4 overflow-auto text-xs`}>
											<code>{`<div class="message">
  <h2>Order Summary</h2>
  <ul>
    <li><strong>Total:</strong> $42.10</li>
  </ul>
  <a href="https://example.com" target="_blank" rel="noopener">View details</a>
</div>`}</code>
										</pre>
									</div>
								</details>
								<div className={`mt-4 flex items-center text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
									<svg className="mr-1.5 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
									</svg>
									15 minutes • Beginner friendly
								</div>
								<Link to="/do-it-with-ai/html" className={`mt-4 w-full inline-flex items-center justify-center ${isDarkMode ? 'bg-[#F03D86] text-white hover:bg-[#d63570]' : 'bg-[#FFC425] text-[#2F241D] hover:bg-[#e6b021]'} px-4 py-2 rounded-md font-medium transition-colors duration-200`}>
									Start HTML Tutorial
								</Link>
							</div>
						</div>
					</div>

					{/* Markdown Tutorial Card */}
					<div className={`${isDarkMode ? 'bg-[#71BEA9]' : 'bg-white'} overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300`}>
						<div className="bg-[#FFC425] h-2"></div>
						<div className="p-6">
							<div className="flex items-center">
								<div className="flex-shrink-0">
									<div className={`h-12 w-12 ${isDarkMode ? 'bg-[#FFC425]' : 'bg-[#FFC425] bg-opacity-20'} rounded-lg flex items-center justify-center`}>
										<span className="text-[#2F241D] font-bold text-sm">MD</span>
									</div>
								</div>
								<div className="ml-4">
									<h3 className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-[#2F241D]'}`}>
										Markdown — “Give Zordon a Voice”
									</h3>
									<p className={`text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}>
										Make prompts and summaries easy to scan
									</p>
								</div>
							</div>
							<div className="mt-4">
								<p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
									Use Markdown to format system prompts, tool docs, and chat summaries. Make your agent’s output clear, scannable, and easy to reuse across different MindStudio missions.
								</p>
								<details className="mt-3">
									<summary className={`cursor-pointer text-sm font-medium ${isDarkMode ? 'text-white' : 'text-[#2F241D]'}`}>View example</summary>
									<div className="mt-2">
										<pre className={`${isDarkMode ? 'bg-[#2F241D] text-gray-100 border-[#2F241D]' : 'bg-gray-50 text-gray-800 border-gray-200'} border rounded-md p-4 overflow-auto text-xs`}>
											<code>{`# Support Request\n\n- Name: Jane Doe\n- Issue: Login failed\n- Priority: High\n\n[View ticket](https://example.com/tickets/123)`}</code>
										</pre>
									</div>
								</details>
								<div className={`mt-4 flex items-center text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
									<svg className="mr-1.5 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
									</svg>
									12 minutes • No coding required
								</div>
								<Link to="/do-it-with-ai/markdown" className={`mt-4 w-full inline-flex items-center justify-center ${isDarkMode ? 'bg-[#F03D86] text-white hover:bg-[#d63570]' : 'bg-[#FFC425] text-[#2F241D] hover:bg-[#e6b021]'} px-4 py-2 rounded-md font-medium transition-colors duration-200`}>
									Start Markdown Tutorial
								</Link>
							</div>
						</div>
					</div>

					{/* JSON Tutorial Card */}
					<div className={`${isDarkMode ? 'bg-[#71BEA9]' : 'bg-white'} overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300`}>
						<div className="bg-[#FFC425] h-2"></div>
						<div className="p-6">
							<div className="flex items-center">
								<div className="flex-shrink-0">
									<div className={`h-12 w-12 ${isDarkMode ? 'bg-[#FFC425]' : 'bg-[#FFC425] bg-opacity-20'} rounded-lg flex items-center justify-center`}>
										<span className="text-[#2F241D] font-bold text-sm">JSON</span>
									</div>
								</div>
								<div className="ml-4">
									<h3 className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-[#2F241D]'}`}>
										JSON — “Activate the Data Crystals”
									</h3>
									<p className={`text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}>
										Power workflows with structured mission data
									</p>
								</div>
							</div>
							<div className="mt-4">
								<p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
									Model inputs, tool parameters, and API/webhook payloads with JSON to give your agent structured intelligence. This lets MindStudio validate, route, and automate reliably.
								</p>
								<details className="mt-3">
									<summary className={`cursor-pointer text-sm font-medium ${isDarkMode ? 'text-white' : 'text-[#2F241D]'}`}>View example</summary>
									<div className="mt-2">
										<pre className={`${isDarkMode ? 'bg-[#2F241D] text-gray-100 border-[#2F241D]' : 'bg-gray-50 text-gray-800 border-gray-200'} border rounded-md p-4 overflow-auto text-xs`}>
											<code>{`{
  "tool": "send_email",
  "params": {
    "to": "user@example.com",
    "subject": "Order Confirmation",
    "body": "Your order has shipped."
  },
  "metadata": {
    "workflowId": "order-flow",
    "retry": false
  }
}`}</code>
										</pre>
									</div>
								</details>
								<div className={`mt-4 flex items-center text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
									<svg className="mr-1.5 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
									</svg>
									18 minutes • Visual examples
								</div>
								<Link to="/do-it-with-ai/json" className={`mt-4 w-full inline-flex items-center justify-center ${isDarkMode ? 'bg-[#F03D86] text-white hover:bg-[#d63570]' : 'bg-[#FFC425] text-[#2F241D] hover:bg-[#e6b021]'} px-4 py-2 rounded-md font-medium transition-colors duration-200`}>
									Start JSON Tutorial
								</Link>
							</div>
						</div>
					</div>

					{/* Handlebars Tutorial Card */}
					<div className={`${isDarkMode ? 'bg-[#71BEA9]' : 'bg-white'} overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300`}>
						<div className="bg-[#FFC425] h-2"></div>
						<div className="p-6">
							<div className="flex items-center">
								<div className="flex-shrink-0">
									<div className={`h-12 w-12 ${isDarkMode ? 'bg-[#FFC425]' : 'bg-[#FFC425] bg-opacity-20'} rounded-lg flex items-center justify-center`}>
										<span className="text-[#2F241D] font-bold text-sm">HBS</span>
									</div>
								</div>
								<div className="ml-4">
									<h3 className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-[#2F241D]'}`}>
										Handlebars — “Form the Megazord”
									</h3>
									<p className={`text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}>
										Create reusable, dynamic AI templates
									</p>
								</div>
							</div>
							<div className="mt-4">
								<p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
									Build dynamic prompts, emails, and UI content that swap variables, loop lists, and render conditionally for different users. Plug it straight into MindStudio for powerful, personalized experiences.
								</p>
								<details className="mt-3">
									<summary className={`cursor-pointer text-sm font-medium ${isDarkMode ? 'text-white' : 'text-[#2F241D]'}`}>View example</summary>
									<div className="mt-2">
										<pre className={`${isDarkMode ? 'bg-[#2F241D] text-gray-100 border-[#2F241D]' : 'bg-gray-50 text-gray-800 border-gray-200'} border rounded-md p-4 overflow-auto text-xs`}>
											<code>{`<ul>
{{#each products}}
  <li>
    {{name}} - {{#if inStock}}In stock{{else}}Out of stock{{/if}}
  </li>
{{/each}}
</ul>`}</code>
										</pre>
									</div>
								</details>
								<div className={`mt-4 flex items-center text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
									<svg className="mr-1.5 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
									</svg>
									20 minutes • Interactive examples
								</div>
								<Link to="/do-it-with-ai/handlebars" className={`mt-4 w-full inline-flex items-center justify-center ${isDarkMode ? 'bg-[#F03D86] text-white hover:bg-[#d63570]' : 'bg-[#FFC425] text-[#2F241D] hover:bg-[#e6b021]'} px-4 py-2 rounded-md font-medium transition-colors duration-200`}>
									Start Handlebars Tutorial
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Features Section */}
			<div className={`${isDarkMode ? 'bg-[#F03D86]' : 'bg-white'}`}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
					<div className="text-center">
						<h2 className={`text-3xl font-extrabold ${isDarkMode ? 'text-white' : 'text-[#2F241D]'}`}>
							Why these skills matter in MindStudio
						</h2>
						<p className={`mt-4 max-w-2xl mx-auto text-xl ${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}>
							Learn HTML, Markdown, JSON, and Handlebars to power real MindStudio prompts, templates, and workflow data.
						</p>
					</div>

					<div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
						<div className="text-center">
							<div className={`flex items-center justify-center h-12 w-12 rounded-md ${isDarkMode ? 'bg-[#71BEA9]' : 'bg-[#FFC425]'} text-[#2F241D] mx-auto`}>
								<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
								</svg>
							</div>
							<h3 className={`mt-4 text-lg font-medium ${isDarkMode ? 'text-white' : 'text-[#2F241D]'}`}>
								Content that renders well (HTML + Markdown)
							</h3>
							<p className={`mt-2 text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}>
								Structure outputs and docs MindStudio can display cleanly in chat UIs and pages.
							</p>
						</div>

						<div className="text-center">
							<div className={`flex items-center justify-center h-12 w-12 rounded-md ${isDarkMode ? 'bg-[#71BEA9]' : 'bg-[#FFC425]'} text-[#2F241D] mx-auto`}>
								<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
								</svg>
							</div>
							<h3 className={`mt-4 text-lg font-medium ${isDarkMode ? 'text-white' : 'text-[#2F241D]'}`}>
								Data MindStudio understands (JSON)
							</h3>
							<p className={`mt-2 text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}>
								Define inputs, tool configs, and webhook payloads your workflows can automate.
							</p>
						</div>

						<div className="text-center">
							<div className={`flex items-center justify-center h-12 w-12 rounded-md ${isDarkMode ? 'bg-[#71BEA9]' : 'bg-[#FFC425]'} text-[#2F241D] mx-auto`}>
								<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<h3 className={`mt-4 text-lg font-medium ${isDarkMode ? 'text-white' : 'text-[#2F241D]'}`}>
								Reusable dynamic templates (Handlebars)
							</h3>
							<p className={`mt-2 text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}>
								Build prompts, emails, and pages with variables, loops, and conditions.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Call to Action Section */}
			<div className={`${isDarkMode ? 'bg-[#2F241D]' : 'bg-[#2F241D]'}`}>
				<div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-extrabold text-white sm:text-4xl">
						Ready to Become an AI Agent Builder?
					</h2>
					<p className="mt-4 text-lg leading-6 text-gray-200">
						They don't just teach AI concepts, they help you unlock your creativity. Whether you're starting from scratch or ready to level up, their 3-step training path will get you there.
					</p>
					<a
						href="https://doitwithai.io/training?utm_source=allwebsd&utm_medium=landingpage&utm_campaign=tutorial_collab_2025"
						target="_blank"
						rel="noopener noreferrer"
						className={`mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md ${isDarkMode ? 'text-[#2F241D] bg-[#FFC425] hover:bg-[#e6b021]' : 'text-[#2F241D] bg-[#FFC425] hover:bg-[#e6b021]'} sm:w-auto`}
					>
						Begin Your Learning Adventure
					</a>
				</div>
			</div>
		</div>
	);
}
