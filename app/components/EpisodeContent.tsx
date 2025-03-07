import { useTheme } from "~/context/ThemeContext";

interface EpisodeContentProps {
  content: string;
}

export default function EpisodeContent({ content }: EpisodeContentProps) {
  const { isDarkMode, theme } = useTheme();

  return (
    <div
		className={`${theme.text} prose max-w-none ${
			isDarkMode
			? "prose-a:text-[#F03D86] hover:prose-a:text-[#F03D86] prose-strong:text-[#2F241D] prose-ol:text-[#2F241D] prose-li:marker:text-[#2F241D]"
			: "prose-a:text-[#2F241D] hover:prose-a:text-[#2F241D] prose-strong:text-[#2F241D] prose-ol:text-[#2F241D] prose-li:marker:text-[#2F241D]"
		} prose-a:transition-colors prose-a:duration-200 prose-a:underline prose-p:text-[#2F241D] prose-p:mt-0 prose-p:mb-0`}
      	dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

