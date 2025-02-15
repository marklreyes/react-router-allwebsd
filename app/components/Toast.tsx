import { useEffect } from "react";
import { LuConstruction } from "react-icons/lu";
import { useTheme } from "../context/ThemeContext";

interface ToastProps {
  showToast: boolean;
  setShowToast: (show: boolean) => void;
}

export function Toast({ showToast, setShowToast }: ToastProps) {
  const { theme } = useTheme();

	useEffect(() => {
    const toastState = sessionStorage.getItem("toastClosed");
    if (toastState === "true") {
      setShowToast(false);
    }
  }, [setShowToast]);

  const handleClose = () => {
    setShowToast(false);
    sessionStorage.setItem("toastClosed", "true");
  };

  if (!showToast) return null;

  return (
    <div className="toast toast-end w-full max-w-xs md:max-w-md">
      <div className={`${theme.primary} ${theme.text} alert alert-info p-2 md:p-4 relative`}>
        <button
          className={`${theme.background} ${theme.text} hover:bg-[#2F241D] hover:text-white btn btn-circle btn-xs md:btn-sm absolute top-1 right-2 text-white`}
					onClick={handleClose}
        >
          ✕
        </button>
        <div className="flex items-center gap-2 pr-8">
          <LuConstruction className="flex-shrink-0" />
          <span className="text-left text-xs sm:text-sm md:text-base whitespace-normal break-words">
		 	 			Rebuilt with React Router Template.{" "}
            <a
              href="https://github.com/marklreyes/react-router-allwebsd/commits/main/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              See More
            </a>!
          </span>
        </div>
      </div>
    </div>
  );
}
