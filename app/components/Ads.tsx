import { useState, useEffect } from "react";

export default function Ads() {
	const [activeSlide, setActiveSlide] = useState(1);

	useEffect(() => {
		const observer = new IntersectionObserver(
		  (entries) => {
			entries.forEach((entry) => {
			  if (entry.isIntersecting) {
				const slideId = entry.target.id;
				setActiveSlide(Number(slideId.replace('slide', '')));
			  }
			});
		  },
		  { threshold: 0.5 }
		);

		const slides = document.querySelectorAll('.carousel-item');
		slides.forEach((slide) => observer.observe(slide));

		return () => {
		  slides.forEach((slide) => observer.unobserve(slide));
		};
	  }, []);

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
				<a
					href="#slide1"
					onClick={() => setActiveSlide(1)}
					className={`btn btn-xs ${
						activeSlide === 1
						? 'bg-[#3D2F26] text-[#FFC426]'
						: 'bg-[#FFC426] text-[#3D2F26] hover:bg-[#3D2F26] hover:text-[#FFC426]'
					}`}
				>
					1
				</a>
				<a
					href="#slide2"
					onClick={() => setActiveSlide(2)}
					className={`btn btn-xs ${
						activeSlide === 2
						? 'bg-[#3D2F26] text-[#FFC426]'
						: 'bg-[#FFC426] text-[#3D2F26] hover:bg-[#3D2F26] hover:text-[#FFC426]'
					}`}
				>
					2
				</a>
				<a
					href="#slide3"
					onClick={() => setActiveSlide(3)}
					className={`btn btn-xs ${
						activeSlide === 3
						? 'bg-[#3D2F26] text-[#FFC426]'
						: 'bg-[#FFC426] text-[#3D2F26] hover:bg-[#3D2F26] hover:text-[#FFC426]'
					}`}
				>
					3
				</a>
			</div>
		</div>
	);
}
