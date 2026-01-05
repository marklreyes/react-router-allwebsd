import { useState } from "react";
import { useTheme } from "~/context/ThemeContext";
import { getOutlineButtonClasses } from "~/utils/buttonClasses";
import { trackEvent } from "~/utils/trackEvent";
import { HiUserGroup } from "react-icons/hi2";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdCode, MdOutlinePodcasts } from "react-icons/md";

export function HeroBannerCarousel() {
    const { isDarkMode, theme } = useTheme();
    const [activeSlide, setActiveSlide] = useState(0);
    const totalSlides = 2;

    // Shared event tracking function
    const handleClick = (label: string) => {
        trackEvent("button_click", {
            params: {
                action: "Click",
                event_category: "Hero Banner",
                event_label: `${label} Button Click`,
                component: "Hero Banner Carousel Component"
            },
        });
    };

    // Navigation handlers
    const goToPrev = () => {
        setActiveSlide((current) => (current - 1 + totalSlides) % totalSlides);
    };

    const goToNext = () => {
        setActiveSlide((current) => (current + 1) % totalSlides);
    };

    // Slide content array with unique content for each slide
    const slideContents = [
        // Slide 1 - Community Focus
        <div key="slide1" className="relative z-10 text-white px-4 md:px-8 max-w-4xl text-center mx-auto py-6 md:py-10 lg:py-16">
            <div className="px-6 md:px-10 lg:px-16">
                <h2 className={`text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight px-4 py-2 rounded-lg inline-block text-[#2F241D] ${
                    isDarkMode
                        ? 'bg-[#71BEA9] bg-opacity-80'
                        : 'bg-[#FFC425] bg-opacity-90'
                }`}>
                    Welcome to AllWebSD
                </h2>
                <p className={`text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto px-6 py-3 rounded-lg text-[#2F241D] ${
                    isDarkMode
                        ? 'bg-[#71BEA9] bg-opacity-80'
                        : 'bg-[#FFC425] bg-opacity-90'
                }`}>
                    Join San Diego's digital professionals, small‑business owners, non-profits, and industry newcomers. Share your story, swap insights, and build connections that move your career forward!
                </p>
                <div className="mt-6 flex justify-center">
                    <a
                        href="https://discord.gg/HsVp5R9zFt"
                        onClick={() => handleClick("Join Community")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={getOutlineButtonClasses(theme, isDarkMode, {
                            size: 'lg',
                            customClasses: 'font-semibold',
                            animate: true,
                        })}
                    >
                        <span className="flex items-center gap-2">
                            <HiUserGroup className="w-5 h-5" />
                            Join Free
                        </span>
                    </a>
                </div>
            </div>
        </div>,

        // Slide 2 - Podcast Focus
        <div key="slide2" className="relative z-10 text-white px-4 md:px-8 max-w-4xl text-center mx-auto py-6 md:py-10 lg:py-16">
            <div className="px-6 md:px-10 lg:px-16">
                <h2 className={`text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight px-4 py-2 rounded-lg inline-block text-[#2F241D] ${
                    isDarkMode
                        ? 'bg-[#71BEA9] bg-opacity-80'
                        : 'bg-[#FFC425] bg-opacity-90'
                }`}>
                    AllWebSD Podcast
                </h2>
                <p className={`text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto px-6 py-3 rounded-lg text-[#2F241D] ${
                    isDarkMode
                        ? 'bg-[#71BEA9] bg-opacity-80'
                        : 'bg-[#FFC425] bg-opacity-90'
                }`}>
                    Listen to our latest episodes featuring local tech experts, business leaders, and industry innovators. Get inspired with actionable insights and behind-the-scenes stories from San Diego's digital community.
                </p>
                <div className="mt-6 flex justify-center">
                    <a
                        href="/episodes"
                        onClick={() => handleClick("Listen Podcast")}
                        className={getOutlineButtonClasses(theme, isDarkMode, {
                            size: 'lg',
                            customClasses: 'font-semibold',
                            animate: true,
                        })}
                    >
                        <span className="flex items-center gap-2">
                            <MdOutlinePodcasts className="w-5 h-5" />
                            Listen Now
                        </span>
                    </a>
                </div>
            </div>
        </div>

    ];

    return(
        <div className="w-full relative overflow-hidden mb-4 rounded-lg shadow-lg min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
            {/* Carousel container */}
            <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
                {/* Slide 1 */}
                <div
                    className="w-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] flex-shrink-0 bg-gray-800 flex items-center justify-center bg-cover bg-center"
                    style={{
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundImage: "url('/images/AllWebSD_Business_Hero_Banner.png')"
                    }}
                >
                    {slideContents[0]}
                </div>

                {/* Slide 2 */}
                <div
                    className="w-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] flex-shrink-0 bg-gray-800 flex items-center justify-center bg-cover bg-center"
                    style={{
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundImage: "url('/images/AllWebSD_Business_Hero_Banner.png')"
                    }}
                >
                    {slideContents[1]}
                </div>

            </div>

            {/* Navigation buttons - moved further from edges */}
            <button
                onClick={goToPrev}
                className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 md:p-3 rounded-full z-20 focus:outline-none"
                aria-label="Previous slide"
            >
                <FaChevronLeft className="w-5 h-5" />
            </button>
            <button
                onClick={goToNext}
                className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 md:p-3 rounded-full z-20 focus:outline-none"
                aria-label="Next slide"
            >
                <FaChevronRight className="w-5 h-5" />
            </button>
        </div>
    );
}
