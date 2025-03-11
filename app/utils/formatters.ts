export const formatDate = (timestamp: number) => {
	const date = new Date(timestamp);
	return new Intl.DateTimeFormat("en-US", {
	  weekday: "long",
	  year: "numeric",
	  month: "long",
	  day: "numeric",
	  hour: "numeric",
	  minute: "2-digit",
	  hour12: true,
	  timeZone: "America/Los_Angeles"
	}).format(date);
  };

  export const formatDuration = (duration: string) => {
	if (/^\d+$/.test(duration)) {
	  const seconds = Math.floor(parseInt(duration) / 1000);
	  const minutes = Math.floor(seconds / 60);
	  const remainingSeconds = seconds % 60;
	  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
	}

	const timeComponents = duration.split(":");
	if (timeComponents.length === 3 && timeComponents[0] === "00") {
	  return `${parseInt(timeComponents[1])}:${timeComponents[2]}`;
	}

	return duration;
  };

  export const createSlug = (title: string): string => {
	return title
		.toLowerCase()
		.replace(/<[^>]*>/g, "") // Remove HTML tags
		.replace(/[^a-z0-9\s-]/g, "") // Remove special characters
		.replace(/\s+/g, "-") // Replace spaces with hyphens
		.replace(/-+/g, "-") // Remove consecutive hyphens
		.trim(); // Remove leading/trailing spaces
  };

export const calculateYearsSince = (startYear: number): number => {
	return new Date().getFullYear() - startYear;
};
