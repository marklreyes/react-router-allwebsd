import { LuConstruction } from "react-icons/lu";

interface ToastProps {
  showToast: boolean;
  setShowToast: (show: boolean) => void;
}

export function Toast({ showToast, setShowToast }: ToastProps) {
  if (!showToast) return null;

  return (
    <div className="toast toast-end w-full max-w-xs md:max-w-md">
      <div className="alert alert-info p-2 md:p-4 relative bg-[#FFC426]">
        <button
          className="btn btn-circle btn-xs md:btn-sm absolute top-2 right-2"
          onClick={() => setShowToast(false)}
        >
          ✕
        </button>
        <div className="flex items-center gap-2 pr-8">
          <LuConstruction className="flex-shrink-0" />
          <span className="text-left text-xs sm:text-sm md:text-base whitespace-normal break-words">
		 	 Rebuilding with{" "}
            <a
              href="https://github.com/marklreyes/react-router-allwebsd/commits/main/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-white"
            >
              React Router Template
            </a>!
          </span>
        </div>
      </div>
    </div>
  );
}
