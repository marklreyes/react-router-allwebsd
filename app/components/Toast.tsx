import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { NavLink } from "react-router-dom";
import type { ToastProps } from "~/types/toast";
import { trackEvent } from "~/utils/trackEvent";

export function Toast({
  showToast,
  setShowToast,
  icon,
  message,
  link
}: ToastProps) {
  const { theme, isDarkMode } = useTheme();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Check sessionStorage immediately on mount
    const toastState = sessionStorage.getItem("toastClosed");
    if (toastState === "true") {
      setShowToast(false);
    }
    setIsInitialized(true);
  }, [setShowToast]);

  const handleClose = () => {
    setShowToast(false);
    sessionStorage.setItem("toastClosed", "true");
  };

  // Don't render anything until we've checked sessionStorage
  if (!isInitialized || !showToast) return null;

  return (
		<div
			className="toast toast-end toast-center w-full max-w-xs md:max-w-md z-50"
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
				onClick={() => {
					handleClose();
					// Track event for close button click
					trackEvent("button_click", {
						params: {
							action: "Click",
							event_category: "Toast",
							event_label: "Close notification",
							component: "Toast Component"
						},
					});
				}}
				aria-label="Close notification"
			>
				<span aria-hidden="true">✕</span>
			</button>
			<div className="flex items-center gap-2 pr-8">
				{icon && (
				<span
					className="shrink-0 animate-shake"
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
					onClick={
						() => {
							// Track event for text click
							trackEvent("nav_click", {
								params: {
									event_category: "Navigation",
									event_sub_category: "Toast",
									event_label: `${link.text}`,
									component: "Toast Component"
								},
							});
						}
					}
					className="underline hover:text-white"
					aria-label={`${link.text} - Navigate to ${link.to}`}
					>
					{link.text}
					</NavLink>
				)}
				</span>
			</div>
			</div>
		</div>
  );
}
