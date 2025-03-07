import { type AudioEnclosure } from '~/types/episode';

interface AudioPlayerProps {
  enclosure: AudioEnclosure;
  title?: string; // Add optional title prop
}

export default function AudioPlayer({ enclosure, title }: AudioPlayerProps) {
  return (
    <div className="mb-4">
      <div role="region" aria-label="Audio player">
        <audio
          controls
          className="w-full"
          preload="none"
          aria-label={title ? `Play episode: ${title}` : 'Audio player'}
          controlsList="nodownload"
        >
          <source
            src={enclosure["@_url"]}
            type={enclosure["@_type"]}
          />
          <p className="text-center p-4 bg-red-100 text-red-700 rounded-sm">
            Your browser does not support the audio element.
            <a
              href={enclosure["@_url"]}
              className="underline ml-2"
              download
              aria-label={`Download ${title || 'episode'} audio file`}
            >
              Download the audio file
            </a>
          </p>
        </audio>
      </div>
    </div>
  );
}
