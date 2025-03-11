import { FaFacebook, FaLinkedin, FaCopy } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import { useTheme } from "~/context/ThemeContext";

interface ShareButtonsProps {
  title: string;
  url: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const { isDarkMode } = useTheme();

  const shareLinks = {
	twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
	facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
	linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const buttonClasses = `p-2 rounded-full ${
    isDarkMode
      ? 'hover:bg-[#F03D86] hover:text-white'
      : 'hover:bg-[#2F241D] hover:text-white'
  } transition-colors`;

  return (
		<div className="flex items-center gap-4 my-4" role="region" aria-label="Share buttons">
			<span className="text-sm font-semibold" id="share-label">Share:</span>
			<div className="flex gap-2" aria-labelledby="share-label">
			<a
				href={shareLinks.twitter}
				target="_blank"
				rel="noopener noreferrer"
				className={buttonClasses}
				title="Share on X (Twitter)"
				aria-label="Share on X (Twitter)"
			>
				<FaXTwitter className="w-5 h-5" aria-hidden="true" />
			</a>
			<a
				href={shareLinks.facebook}
				target="_blank"
				rel="noopener noreferrer"
				className={buttonClasses}
				title="Share on Facebook"
				aria-label="Share on Facebook"
			>
				<FaFacebook className="w-5 h-5" aria-hidden="true" />
			</a>
			<a
				href={shareLinks.linkedin}
				target="_blank"
				rel="noopener noreferrer"
				className={buttonClasses}
				title="Share on LinkedIn"
				aria-label="Share on LinkedIn"
			>
				<FaLinkedin className="w-5 h-5" aria-hidden="true" />
			</a>
			<button
				onClick={handleCopyLink}
				className={buttonClasses}
				title="Copy link"
				aria-label="Copy link to clipboard"
				aria-pressed={copied}
			>
				<FaCopy className="w-5 h-5" aria-hidden="true" />
				{copied && (
				<span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded-sm" role="status">
					Copied!
				</span>
				)}
			</button>
			</div>
		</div>
  );
}
