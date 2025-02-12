export default function Ads() {
	return (
		<div className="w-[330px] mx-auto mb-4">
			<div className="carousel w-[330px] mx-auto mb-4">
				<div id="slide1" className="carousel-item w-full">
					<a
					href="https://sdfutures.org/support-sdff"
					target="_blank"
					rel="noopener noreferrer"
					className="w-full"
					>
						<img
							src="/images/SDFF_banner.jpg"
							alt="San Diego Futures Foundation join the movement and bridge the digital divide"
							className="w-full h-full object-cover rounded"
						/>
					</a>
				</div>
				<div id="slide2" className="carousel-item w-full">
					<a
					href="//courses.theaiexchange.com/courses/prompting-for-ai-ops-bootcamp?ref=2b3231"
					target="_blank"
					rel="noopener noreferrer"
					className="w-full"
					>
						<img
							src="/images/AIX_banner.jpg"
							alt="Learn the secrets to an ai-powered business."
							className="w-full h-full object-cover rounded"
						/>
					</a>
				</div>
				<div id="slide3" className="carousel-item w-full">
					<a
					href="mailto:mr@marklreyes.com?subject=ALLWEBSD Sponsorship - Gold (Ad Banner)"
					target="_blank"
					rel="noopener noreferrer"
					className="w-full border rounded"
					>
						<img
							src="/images/ALLWEBSD_banner.jpg"
							alt="Advertise your business here and become a gold sponsor today!"
							className="w-full h-full object-cover rounded"
						/>
					</a>
				</div>
			</div>
			<div className="flex w-full justify-center gap-2 py-2">
				<a href="#slide1" className="btn btn-xs">1</a>
				<a href="#slide2" className="btn btn-xs">2</a>
				<a href="#slide3" className="btn btn-xs">3</a>
			</div>
		</div>
	);
}
