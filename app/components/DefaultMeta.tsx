export function DefaultMeta() {
	const baseUrl = process.env.NODE_ENV === "development"
	  ? "http://localhost:8888"
	  : "https://allwebsd.com";

	return (
	  <>
		{/* Standard Meta Tags */}
		<meta property="og:site_name" content="AllWebSD.com | Web Developer storytelling out of America's Finest City" />
		<meta property="og:type" content="website" />
		<meta property="og:image" content={`${baseUrl}/images/allwebsd-share.jpg`} />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="630" />

		{/* Twitter Card Tags */}
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:site" content="@allwebsd" />
		<meta name="twitter:image" content={`${baseUrl}/images/allwebsd-share.jpg`} />
	  </>
	);
  }
