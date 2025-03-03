import { useEffect, type ReactElement } from "react";
import { useTheme } from "../context/ThemeContext";
import { NavLink } from "react-router-dom";

interface ToastProps {
  role?: string;
  "aria-live"?: string;
  showToast: boolean;
  setShowToast: (show: boolean) => void;
  icon: ReactElement;
  message: string;
  link: {
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
  const { theme, isDarkMode } = useTheme();

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
		<div
			className="toast toast-end w-full max-w-xs md:max-w-md z-50"
			role="alert"
			aria-live="polite"
		>
			<div className={`
          ${theme.primary}
          ${theme.text}
          alert
          alert-info
          p-2
          md:p-4
          relative
          border
          ${isDarkMode ? 'border-[#F03D86]' : 'border-[#2F241D]'}
        `}>
			<button
				className={`${theme.background} ${theme.text} hover:bg-[#2F241D] hover:text-white btn btn-circle btn-xs md:btn-sm absolute top-1 right-2 text-white`}
				onClick={handleClose}
				aria-label="Close notification"
			>
				<span aria-hidden="true">✕</span>
			</button>
			<div className="flex items-center gap-2 pr-8">
				{icon && (
				<span
					className="flex-shrink-0 animate-shake"
					aria-hidden="true"
				>
					{icon}
				</span>
				)}
				<span className="text-left text-xs sm:text-sm md:text-base whitespace-normal break-words">
				{message}{" "}
				{link && (
					<NavLink
					to={link.to}
					className="underline hover:text-white"
					aria-label={`${link.text} - Navigate to ${link.to}`}
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
