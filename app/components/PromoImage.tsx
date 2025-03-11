import { useContext } from 'react';
import { useTheme } from "~/context/ThemeContext";


interface PromoImageProps {
	src: string;
	alt: string;
	ariaLabel: string;
	description: string;
	imageSize?: number;
	className?: string;
}

export function PromoImage({
	src,
	alt,
	ariaLabel,
	description,
	imageSize = 250,
	className = "",
}: PromoImageProps) {
	const uniqueId = `image-description-${Math.random().toString(36).substring(2, 9)}`;
	const { isDarkMode } = useTheme();

	return (
		<div
			className={`mb-8 mx-auto ${className}`}
			role="img"
			aria-labelledby={uniqueId}
			style={{ maxWidth: `${imageSize}px` }}
		>
			<img
				src={src}
				alt={alt}
				aria-label={ariaLabel}
				className={`rounded-full shadow-lg object-cover border-3 ${isDarkMode ? 'border-[#71BEA9]' : 'border-[#FFC425]'}`}
				style={{ width: `${imageSize}px`, height: `${imageSize}px` }}
			/>
			<span id={uniqueId} className="sr-only">{description}</span>
		</div>
	);
}
