import { useTheme } from "~/context/ThemeContext";
import { trackEvent } from "~/utils/trackEvent";
import { useState } from "react";

export function ContactMe() {
    const { isDarkMode } = useTheme();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);

        try {
            // Submit to our custom Netlify function that handles form processing
            const response = await fetch("/.netlify/functions/submit-contact", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData as any).toString(),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setIsSubmitted(true);
                trackEvent('Contact Form', {
					params: {
						action: 'Submit',
						event_category: 'Contact',
						event_label: 'Form Submission Success',
						platform: 'Web',
						link_type: 'form',
						component: 'Contact Form'
					}
				});
                // Reset form
                e.currentTarget.reset();
            } else {
                throw new Error(result.error || 'Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            trackEvent('Contact Form', {
				params: {
						action: 'Submit',
						event_category: 'Contact',
						event_label: 'Form Submission Error',
						platform: 'Web',
						link_type: 'form',
						component: 'Contact Form'
				}
			});
            alert('There was an error submitting the form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <main className="flex items-center justify-center px-4 py-8">
                <div className="flex-1 flex flex-col items-center gap-16 min-h-0 max-w-6xl">
                    <div className="w-full text-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
                            Thank You!
                        </h1>
                        <p className="text-white text-lg leading-relaxed mb-6">
                            Your message has been sent successfully. I'll get back to you as soon as possible.
                        </p>
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className={`py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                                isDarkMode
                                    ? 'bg-[#71BEA9] hover:bg-[#5da89a] text-white'
                                    : 'bg-[#FFC425] hover:bg-[#e6b022] text-[#2F241D]'
                            }`}
                        >
                            Send Another Message
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    return(
        <main className="flex items-center justify-center px-4 py-8">
            <div className="flex-1 flex flex-col items-center gap-16 min-h-0 max-w-6xl">
                <div className="w-full">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                        Contact Me
                    </h1>

                    {/* Two-column layout: mobile stacked, desktop side-by-side */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        {/* Left column - Description */}
                        <div className="order-1 lg:order-1">
                            <p className="text-white text-lg leading-relaxed mb-6 lg:mb-0">
                                Thank you for your interest in reaching out! Whether you want to sponsor, appear on an episode, or simply say hello, I'd love to hear from you. Please fill out the form below, and I'll get back to you as soon as possible.
                            </p>
                        </div>

                        {/* Right column - Form */}
                        <div className="order-2 lg:order-2">
                            <form
                                name="contact"
                                method="POST"
                                data-netlify="true"
                                netlify-honeypot="bot-field"
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                {/* Hidden field for Netlify */}
                                <input type="hidden" name="contact" value="contact" />

                                {/* Honeypot field for spam protection */}
                                <div style={{ display: 'none' }}>
                                    <label>
                                        Don't fill this out if you're human:
                                        <input name="bot-field" />
                                    </label>
                                </div>

                                <div>
                                    <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className={`w-full px-4 py-3 rounded-lg border outline-none transition-all ${
                                            isDarkMode
                                                ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#71BEA9] focus:border-transparent'
                                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#FFC425] focus:border-transparent'
                                        }`}
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className={`w-full px-4 py-3 rounded-lg border outline-none transition-all ${
                                            isDarkMode
                                                ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#71BEA9] focus:border-transparent'
                                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#FFC425] focus:border-transparent'
                                        }`}
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-white text-sm font-medium mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        className={`w-full px-4 py-3 rounded-lg border outline-none transition-all ${
                                            isDarkMode
                                                ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#71BEA9] focus:border-transparent'
                                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#FFC425] focus:border-transparent'
                                        }`}
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        className={`w-full px-4 py-3 rounded-lg border outline-none transition-all resize-vertical ${
                                            isDarkMode
                                                ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#71BEA9] focus:border-transparent'
                                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#FFC425] focus:border-transparent'
                                        }`}
                                        placeholder="What's on your mind?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                                        isDarkMode
                                            ? 'bg-[#71BEA9] hover:bg-[#5da89a] text-white disabled:bg-gray-600'
                                            : 'bg-[#FFC425] hover:bg-[#e6b022] text-[#2F241D] disabled:bg-gray-400'
                                    } focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:cursor-not-allowed`}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
