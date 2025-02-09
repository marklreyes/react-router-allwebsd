import { CiHeadphones } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

import logoAllWebSD from "../../public/logo-allwebsd.png";

const linkStyles = "group flex items-center gap-3 self-stretch p-3 leading-normal text-[#FFC426] hover:underline";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <img
              src={logoAllWebSD}
              alt="AllWebSD Just a web developer storytelling out of America's Finest City!"
              className="block w-full"
            />
          </div>
        </header>
        <div className="max-w-[600px] w-full space-y-6 px-4">
					<nav className="rounded-3xl border border-white p-6 dark:border-white space-y-4">
            <p className="leading-6 text-white text-center">
              Thanks for stopping by! But what now?
            </p>
						<p className="text-white">
							The "OG" site was a single <code>index.html</code> file styled with Bootstrap 4 with navigation tabs that would turn into an accordion for mobile. It was also a PWA that you could bookmark to your phone's home screen. 📲
						</p>
						<p className="text-white">
							This new site is aimed at leveraging a React Router setup housed within GitHub and then deployed to Netlify. 🚀
						</p>
						<p className="text-white">
							But...what does that mean?! 😂
						</p>
						<p className="text-white">
							The site is <em>Under Construction</em>. 🚧
						</p>
						<p className="text-white">
							Click the links below to listen or get ahold of me. Thanks and Aloha! 🤙
						</p>
						<div>
							<iframe src="//castbox.fm/app/castbox/player/id2933770?v=8.22.10&autoplay=0" width="100%" height="500"></iframe>
						</div>
            <ul>
              {resources.map(({ href, text, icon }) => (
                <li key={href}>
                  <a
                    className={linkStyles}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {icon}
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}

const resources = [
  {
    href: "https://www.marklreyes.com/allwebsd-podcast/",
    text: "Listen on MarkLReyes.com",
    icon: (
			<CiHeadphones />
    ),
  },
  {
    href: "mailto:mr@marklreyes.com",
    text: "Contact Me",
    icon: (
			<CiMail />
    ),
  },
];
