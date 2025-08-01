import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "~/context/ThemeContext";
import { trackEvent } from "~/utils/trackEvent";

export default function Ads() {
	const { theme } = useTheme();
	const [activeSlide, setActiveSlide] = useState(1);

	useEffect(() => {
		const observer = new IntersectionObserver(
		  (entries) => {
			entries.forEach((entry) => {
			  if (entry.isIntersecting) {
				const slideId = entry.target.id;
				setActiveSlide(Number(slideId.replace("slide", "")));
			  }
			});
		  },
		  { threshold: 0.5 }
		);

		const slides = document.querySelectorAll(".carousel-item");
		slides.forEach((slide) => observer.observe(slide));

		return () => {
		  slides.forEach((slide) => observer.unobserve(slide));
		};
	  }, []);

	return (
		<div className="mx-auto">
			<div
				className="carousel mx-auto mb-4"
				role="region"
				aria-label="Advertisement Carousel"
			>
				<div id="slide1" className="carousel-item w-full" role="tabpanel" aria-labelledby="slide1-tab">
					<a
						href="//doitwithai.io/"
						onClick={trackEvent("image_click", {
							params: {
								action: "Click",
								event_category: "Advertisement",
								event_label: "Build fast. Build smart.",
								platform: "Do It With AI",
								link_type: "website",
								component: "Ads Component"
							}
						})}
						target="_blank"
						rel="noopener noreferrer"
						className="w-full"
						aria-label="Visit Do It With AI"
					>
						<img
							src="/images/doitwithai_banner.jpg"
							alt="Build fast. Build smart."
							className="w-full h-full object-cover"
						/>
					</a>
				</div>
				<div id="slide2" className="carousel-item w-full" role="tabpanel" aria-labelledby="slide2-tab">
					<a
						href="https://sdfutures.org/support-sdff"
						onClick={trackEvent("image_click", {
							params: {
								action: "Click",
								event_category: "Advertisement",
								event_label: "San Diego Futures Foundation join the movement and bridge the digital divide",
								platform: "San Diego Futures Foundation",
								link_type: "website",
								component: "Ads Component"
							}
						})}
						target="_blank"
						rel="noopener noreferrer"
						className="w-full"
						aria-label="Visit San Diego Futures Foundation"
					>
						<img
							src="/images/SDFF_banner.jpg"
							alt="San Diego Futures Foundation join the movement and bridge the digital divide"
							className="w-full h-full object-cover"
						/>
					</a>
				</div>
				<div id="slide3" className="carousel-item w-full" role="tabpanel" aria-labelledby="slide4-tab">
					<NavLink
						to="/sponsors"
						className="w-full border cursor-pointer"
						aria-label="View sponsorship opportunities"
						onClick={() => {
							// Track event for text click
							trackEvent("image_click", {
								params: {
									action: "Click",
									event_category: "Advertisement",
									event_label: "Advertise your business here and become a gold sponsor today!",
									platform: "ALLWEBSD",
									link_type: "website",
									component: "Ads Component"
								},
							});
						}}
					>
						<img
							src="/images/ALLWEBSD_banner.jpg"
							alt="Advertise your business here and become a gold sponsor today!"
							className="w-full h-full object-cover"
						/>
					</NavLink>
				</div>
			</div>
			<div
				className="flex w-full justify-center gap-2 py-2"
				role="tablist"
				aria-label="Carousel navigation"
			>
				<button
					id="slide1-tab"
					onClick={(e) => {
						e.preventDefault();
						setActiveSlide(2);
						document.getElementById("slide1")?.scrollIntoView({ behavior: "smooth" });
						trackEvent("button_click", {
							params: {
								action: "Click",
								event_category: "Advertisement",
								event_label: "Build fast. Build smart.",
								platform: "Do It With AI",
								link_type: "website",
								component: "Ads Component"
							}
						});
					}}
					className={`btn btn-xs ${
						activeSlide === 1
						? `${theme.secondary} text-white`
						: `${theme.primary} ${theme.text} hover:bg-[#2F241D] hover:text-white`
					}`}
					role="tab"
					aria-selected={activeSlide === 1}
					aria-controls="slide1"
				>
					<span className="sr-only">Slide </span>1
				</button>
				<button
					id="slide2-tab"
					onClick={(e) => {
						e.preventDefault();
						setActiveSlide(1);
						document.getElementById("slide2")?.scrollIntoView({ behavior: "smooth" });
						trackEvent("button_click", {
							params: {
								action: "Click",
								event_category: "Advertisement",
								event_label: "San Diego Futures Foundation join the movement and bridge the digital divide",
								platform: "San Diego Futures Foundation",
								link_type: "website",
								component: "Ads Component"
							}
						});
					}}
					className={`btn btn-xs ${
						activeSlide === 2
						? `${theme.secondary} text-white`
						: `${theme.primary} ${theme.text} hover:bg-[#2F241D] hover:text-white`
					}`}
					role="tab"
					aria-selected={activeSlide === 2}
					aria-controls="slide2"
				>
					<span className="sr-only">Slide </span>2
				</button>
				<button
					id="slide3-tab"
					onClick={(e) => {
						e.preventDefault();
						setActiveSlide(3);
						document.getElementById("slide3")?.scrollIntoView({ behavior: "smooth" });
						trackEvent("button_click", {
							params: {
								action: "Click",
								event_category: "Advertisement",
								event_label: "Integrate AI without the headache!",
								platform: "SOURION",
								link_type: "website",
								component: "Ads Component"
							}
						});
					}}
					className={`btn btn-xs ${
						activeSlide === 3
						? `${theme.secondary} text-white`
						: `${theme.primary} ${theme.text} hover:bg-[#2F241D] hover:text-white`
					}`}
					role="tab"
					aria-selected={activeSlide === 3}
					aria-controls="slide3"
				>
					<span className="sr-only">Slide </span>3
				</button>
			</div>
		</div>
	);
}
