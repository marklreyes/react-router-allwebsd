import { useState, useEffect } from "react";
import { useTheme } from "~/context/ThemeContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import type { EpisodeProps } from "~/types/episode";
import { createSlug, formatDate, formatDuration } from "~/utils/formatters";

export function Episode({ title, created, content, enclosure, guid, itunesDuration, currentPage, index }: EpisodeProps) {
  const { theme, isDarkMode } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  // Reset expanded state when page changes
  useEffect(() => {
    setIsExpanded(false);
  }, [currentPage]);

  return (
    <div className={`${theme.primary} ${theme.text} mb-4 rounded-lg p-6 dark:border-white space-y-4`}>
		<Link to={`/episodes/${createSlug(title)}`}>
			<h2
				className="font-semibold hover:underline cursor-pointer"
				dangerouslySetInnerHTML={{ __html: title }}
			/>
		</Link>
		<div className="mt-4 mb-4">
		{enclosure && (
			<audio
				controls
				className="w-full"
				preload="none"
				key={`${currentPage}-${index}`}
			>
			<source src={enclosure["@_url"]} type={enclosure["@_type"]} />
			Your browser does not support the audio element.
			</audio>
		)}
		</div>
		<p className="text-sm"><span className="font-semibold">Published:{" "}</span>{formatDate(created)}</p>
		<p className="text-sm"><span className="font-semibold">Duration:{" "}</span>{formatDuration(itunesDuration)}</p>
		<hr className={`${isDarkMode ? 'border-[#F03D86]' : 'border-[#2F241D]'} mx-auto mt-4 mb-4`} />
      {/* Expandable Content Section */}
      <div>
	  	<button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`${theme.text} font-semibold focus:outline-none mb-2 flex items-center gap-2`}
        >
          {isExpanded ? (
            <>
              View Less <FaChevronUp className="inline-block" />
            </>
          ) : (
            <>
              View More <FaChevronDown className="inline-block" />
            </>
          )}
        </button>

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isExpanded ? 'max-h-[2000px]' : 'max-h-0'
          }`}
        >
          <div
            dangerouslySetInnerHTML={{ __html: content }}
						className={`${theme.text} max-w-none overflow-y-auto max-h-[60vh] md:max-h-none px-2 ${
              isDarkMode
                ? 'prose-a:text-[#F03D86] prose-a:hover:text-[#F03D86]'
                : 'prose-a:text-[#2F241D] prose-a:hover:text-[#2F241D]'
            } prose-a:transition-colors prose-a:duration-200 prose-a:underline`}
          />
        </div>
      </div>
    </div>
  );
}
