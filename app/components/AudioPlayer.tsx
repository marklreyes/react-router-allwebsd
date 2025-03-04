import { type AudioEnclosure } from '~/types/episode';

interface AudioPlayerProps {
  enclosure: AudioEnclosure;
}

export default function AudioPlayer({ enclosure }: AudioPlayerProps) {
	return (
		<div className="mb-4">
			<audio controls className="w-full" preload="none">
				<source src={enclosure["@_url"]} type={enclosure["@_type"]} />
				Your browser does not support the audio element.
			</audio>
		</div>
  	);
}
