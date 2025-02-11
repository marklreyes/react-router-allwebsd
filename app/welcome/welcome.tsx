import { useState } from "react";
import { CiHeadphones } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { Toast } from "../components/Toast";

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
				<Toast showToast={showToast} setShowToast={setShowToast} />
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
