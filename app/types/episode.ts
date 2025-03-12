export interface EpisodeData {
	title: string;
	content: string;
	created: number;
	enclosures: {
		"@_length": string;
		"@_type": string;
		"@_url": string;
	}[];
	itunes_duration: string;
}

export interface SearchResult {
	title: string;
	description: string;
	link: string;
	pubDate: string;
}

export interface EpisodeMetaProps {
	data: EpisodeData | undefined;
	params: { id: string };
}

export interface EpisodeProps {
	title: string;
	created: number;
	content: string;
	enclosure?: {
	  '@_length': string;
	  '@_type': string;
	  '@_url': string;
	};
	itunesDuration: string;
	currentPage: number;
	index: number;
}

export interface EpisodeContentProps {
	content: string;
  }


export interface AudioEnclosure {
	"@_url": string;
	"@_type": string;
}

export interface AudioPlayerProps {
  enclosure: AudioEnclosure;
  title?: string; // Add optional title prop
}

export interface RSSFeed {
	title: any;
	description: any;
	link: any;
	image: any;
	category: any;
	items: {
		title: string;
		created: number;
		content: string;
		enclosures: {
			["@_length"]: string;
			["@_type"]: string;
			["@_url"]: string;
		}[];
		guids: {
			["#text"]: string;
			["@_isPermaLink"]: string;
		}[];
		itunes_duration: string;
	}[];
}

export interface AudioPlayerProps {
  enclosure: AudioEnclosure;
  title?: string; // Add optional title prop
}
