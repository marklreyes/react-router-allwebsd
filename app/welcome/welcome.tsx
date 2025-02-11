import { useState } from "react";
import { CiHeadphones } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

const linkStyles = "group flex items-center gap-3 self-stretch p-3 leading-normal text-[#FFC426] hover:underline";

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

export function Welcome() {
	const [showToast, setShowToast] = useState(true);

  return (
    <div className="flex items-center justify-center pt-4 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <div className="max-w-[600px] w-full space-y-6 px-4">
				{showToast && (
					<div className="toast toast-top toast-center w-full max-w-xs md:max-w-md">
						<div className="alert alert-info p-2 md:p-4">
							<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-2">
								<span className="text-xs sm:text-sm md:text-base whitespace-normal break-words">
								🎙️ In progress with&nbsp;
									<a
										href="https://github.com/marklreyes/react-router-allwebsd/commits/main/"
										target="_blank"
										rel="noreferrer"
										className="underline hover:text-white"
									>
										React Router Template
									</a>!
								</span>
								<button
									className="btn btn-circle btn-xs md:btn-sm self-end sm:self-auto"
									onClick={() => setShowToast(false)}
								>
									✕
								</button>
							</div>
						</div>
					</div>
				)}
					<nav className="rounded-3xl border border-white p-6 dark:border-white space-y-4">
						<iframe title="AllWebSD Castbox Player" src="//castbox.fm/app/castbox/player/id2933770?v=8.22.10&autoplay=0" width="100%" height="500"></iframe>
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
    </div>
  );
}
