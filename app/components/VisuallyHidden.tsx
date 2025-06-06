import type { VisuallyHiddenProps } from "~/types/visuallyHidden";

export function VisuallyHidden({ children }: VisuallyHiddenProps) {
	return (
		<span
			className="sr-only"
			style={{
				position: 'absolute',
				width: '1px',
				height: '1px',
				padding: '0',
				margin: '-1px',
				overflow: 'hidden',
				clip: 'rect(0, 0, 0, 0)',
				whiteSpace: 'nowrap',
				border: '0'
			}}
			>
			{children}
		</span>
	);
}
