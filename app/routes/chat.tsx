import { useState, useEffect } from "react";
import { useLoaderData, type LoaderFunctionArgs } from "react-router-dom";
import { useTheme } from "~/context/ThemeContext";
import type { Route } from "./+types/contact";
import ReactMarkdown from "react-markdown";
import { RiRobot2Fill } from "react-icons/ri";
import { Toast } from "../components/Toast";

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

const MAX_MESSAGE_LENGTH = 1000;
const MAX_STORED_MESSAGES = 10;

const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .slice(0, MAX_MESSAGE_LENGTH)
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .replace(/[^\w\s.,!?-]/g, "") // Only allow basic punctuation and alphanumeric
    .trim();
};

export function meta({}: Route.MetaArgs) {
  return [
	{ title: "SanDieGPT | Web Developer podcasting out of San Diego, California | AllWebSD.com" },
	{ name: "description", content: "Just a web developer podcasting out of America's Finest City!" },
	{ name: "twitter:card", content: "Just a web developer storytelling out of America's Finest City!" },
	{ property: "og:title", content: "Just a web developer storytelling out of America's Finest City!" },
	{ property: "og:type", content: "website" },
	{ property: "og:url", content: "//www.allwebsd.com" },
	{ property: "og:description", content: "Just a web developer storytelling out of America's Finest City!" },
  ];
}

// Return a plain object instead of Response.json()
export async function loader({}: LoaderFunctionArgs) {
  return {
    messages: []
  };
}

export default function Chat() {
  const { theme, isDarkMode } = useTheme();
  const data = useLoaderData() as { messages: Message[] };

  // Initialize messages from localStorage or loader data
  const [messages, setMessages] = useState<Message[]>(() => {
    const savedMessages = localStorage.getItem("chat-messages");
    return savedMessages ? JSON.parse(savedMessages) : data.messages;
  });

  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [lastMessageTime, setLastMessageTime] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(true);

  // Rate limit configuration
  const RATE_LIMIT_MS = 1000; // 1 second between messages

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("chat-messages", JSON.stringify(messages));
  }, [messages]);

  // Add clear chat functionality
  const handleClearChat = () => {
    setMessages([]);
    localStorage.removeItem("chat-messages");
  };

  const handleSendMessage = async (userMessage: string) => {
    const now = Date.now();
    const sanitizedMessage = sanitizeInput(userMessage);

    // Validate sanitized message
    if (!sanitizedMessage) {
      setErrorMessage("Please enter a valid message");
      return;
    }

    // Check message length
    if (sanitizedMessage.length > MAX_MESSAGE_LENGTH) {
      setErrorMessage(`Message too long. Maximum ${MAX_MESSAGE_LENGTH} characters allowed.`);
      return;
    }

    // Check if enough time has passed since last message
    if (now - lastMessageTime < RATE_LIMIT_MS) {
      setErrorMessage("Please wait a moment before sending another message");
      return;
    }

    if (!userMessage.trim()) return;

    try {
      setLastMessageTime(now);
      setErrorMessage(null);
      setIsLoading(true);

      // Keep only recent messages to prevent memory issues
      const recentMessages = messages.slice(-MAX_STORED_MESSAGES);

      const response = await fetch('/.netlify/functions/fetch-openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...recentMessages, { role: 'user', content: sanitizedMessage }]
        })
      });

      // Add retry logic for 502 errors
      if (response.status === 502) {
        setErrorMessage("The server is busy. Please try again in a moment.");
        return;
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch response');
      }

      const data = await response.json();

      // Update messages with length limit
      setMessages(prev => [...prev.slice(-MAX_STORED_MESSAGES), data.message]);
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage(error instanceof Error ? error.message : 'Failed to get response');
    } finally {
      setIsLoading(false);
    }
  };

  return (
	<div className={`${theme.primary} ${theme.text} container mx-auto p-4 space-y-4 rounded-lg p-6 min-h-[500px] md:min-h-[600px]`}>
		<Toast
			showToast={showToast}
			setShowToast={setShowToast}
			icon={<RiRobot2Fill />}
			message="This AI feature is powered by grit and caffeine."
			link={{
				to: "/sponsors",
				text: "Please support now"
			}}
		/>

		<div className="flex justify-between items-center mb-4">
		<h1 className="text-2xl font-bold">SanDieGPT Chat</h1>
		{messages.length > 0 && (
			<button
			onClick={handleClearChat}
			className={`${
				isDarkMode
				? "text-[#F03D86] hover:text-[#71BEA9]"
				: "text-[#2F241D] hover:text-[#FFC425]"
			} text-sm transition-colors duration-200`}
			>
			Clear Chat
			</button>
		)}
		</div>
		<p className="text-[#2F241D] mb-6">
		Ask me anything about San Diego! From local attractions and beaches to restaurants
		and cultural events, I'm here to help you explore America's Finest City!
		</p>

		<hr className={`${isDarkMode ? "border-[#F03D86]" : "border-[#2F241D]"} mx-auto mt-4 mb-4`} />

		<div className={`flex flex-col space-y-4 mb-4 overflow-y-auto rounded-lg p-4 bg-white border ${
		isDarkMode ? "border-[#F03D86]" : "border-[#2F241D]"
		}`}>
		<div className="flex flex-col items-center">
			<RiRobot2Fill
			className={`w-12 h-12 ${
				isDarkMode ? "text-[#F03D86]" : "text-[#2F241D]"
			} mb-4 ${
				isLoading ? "animate-bounce" : ""
			} transition-all duration-200`}
			/>
		</div>
		{messages.map((message, index) => (
			<div
			key={index}
			className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
			>
			<div className={`max-w-[80%] break-words ${
				message.role === "user"
				? `${isDarkMode ? "bg-[#F03D86]" : "bg-[#2F241D]"} text-white rounded-l-2xl rounded-tr-2xl`
				: `${isDarkMode ? "bg-[#71BEA9]" : "bg-[#FFC425]"} text-[#2F241D] rounded-r-2xl rounded-tl-2xl`
			} p-4 shadow-md`}
			>
				<ReactMarkdown>{message.content}</ReactMarkdown>
			</div>
			</div>
		))}
		</div>

		<hr className={`${isDarkMode ? "border-[#F03D86]" : "border-[#2F241D]"} mx-auto mt-4 mb-4`} />

		{errorMessage && (
		<div className={`${
			isDarkMode ? "bg-[#F03D86]/10" : "bg-[#2F241D]/10"
		} text-[#2F241D] p-2 rounded-lg text-sm text-center`}>
			{errorMessage}
		</div>
		)}

		<div className="flex flex-col gap-2">
		<div className="flex flex-col sm:flex-row gap-2">
			<input
			type="text"
			value={inputMessage}
			onChange={(e) => setInputMessage(e.target.value)}
			onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputMessage)}
			placeholder="Type your message..."
			maxLength={MAX_MESSAGE_LENGTH}
			disabled={isLoading}
			className={`w-full p-2 rounded-lg bg-white ${
			isDarkMode
				? "border-[#F03D86] placeholder-[#2F241D] text-[#2F241D] focus:border-[#F03D86] focus:ring-[#F03D86]"
				: "border-[#2F241D] placeholder-[#2F241D] text-[#2F241D] focus:border-[#2F241D] focus:ring-[#2F241D]"
			} border focus:outline-none focus:ring-1 ${isLoading ? "opacity-50" : ""}`}
			/>
			<button
			onClick={() => handleSendMessage(inputMessage)}
			disabled={isLoading || !inputMessage.trim()}
			aria-busy={isLoading}
			aria-label={isLoading ? "Sending message..." : "Send message"}
			title={
			isLoading
				? "Message is being sent"
				: !inputMessage.trim()
				? "Please enter a message"
				: "Send message"
			}
			className={`w-full sm:w-auto ${
			isDarkMode
				? "bg-[#F03D86] text-white"
				: "bg-[#2F241D] text-white"
			} px-4 py-2 rounded-lg transition-all duration-200 border-0 flex items-center justify-center gap-2 ${
			isLoading || !inputMessage.trim()
				? "opacity-50 cursor-not-allowed"
				: "hover:scale-105"
			}`}
			>
			{isLoading ? (
			<>
				<svg
				className="animate-spin h-4 w-4"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				>
				<circle
				className="opacity-25"
				cx="12"
				cy="12"
				r="10"
				stroke="currentColor"
				strokeWidth="4"
				/>
				<path
				className="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				/>
				</svg>
				<span>Sending...</span>
			</>
			) : (
			"Send"
			)}
			</button>
		</div>
		<div className="text-xs text-right text-[#2F241D]">
			{MAX_MESSAGE_LENGTH - inputMessage.length} characters remaining
		</div>
		</div>
    </div>
  );
}
