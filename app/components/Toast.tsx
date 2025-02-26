import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { NavLink } from "react-router-dom";

interface ToastProps {
  showToast: boolean;
  setShowToast: (show: boolean) => void;
  icon?: React.ReactNode;
  message: string | React.ReactNode;
  link?: {
    to: string;
    text: string;
  };
}

export function Toast({
  showToast,
  setShowToast,
  icon,
  message,
  link
}: ToastProps) {
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
    <div className="toast toast-end w-full max-w-xs md:max-w-md z-50">
      <div className={`${theme.primary} ${theme.text} alert alert-info p-2 md:p-4 relative`}>
        <button
          className={`${theme.background} ${theme.text} hover:bg-[#2F241D] hover:text-white btn btn-circle btn-xs md:btn-sm absolute top-1 right-2 text-white`}
					onClick={handleClose}
        >
          ✕
        </button>
        <div className="flex items-center gap-2 pr-8">
          {icon && <span className="flex-shrink-0">{icon}</span>}
          <span className="text-left text-xs sm:text-sm md:text-base whitespace-normal break-words">
            {message}{" "}
            {link && (
              <NavLink
                to={link.to}
                className="underline hover:text-white"
              >
                {link.text}
              </NavLink>
            )}
            {link && "!"}
          </span>
        </div>
      </div>
    </div>
  );
}
