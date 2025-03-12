import type { ReactElement } from "react";

export interface ToastProps {
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
