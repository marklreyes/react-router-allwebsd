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
