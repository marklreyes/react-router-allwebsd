import { useTheme } from "~/context/ThemeContext";
import { trackEvent } from "~/utils/trackEvent";
import { getOutlineButtonClasses } from "~/utils/buttonClasses";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { HiOutlineMail, HiOutlineRefresh } from "react-icons/hi";
import { Toast } from "../../components/Toast";
import { SiBuymeacoffee } from "react-icons/si";

export function ContactMe() {
    const { isDarkMode, theme } = useTheme();
    const [searchParams] = useSearchParams();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [subjectValue, setSubjectValue] = useState("");
	const [showToast, setShowToast] = useState(true);

    // Parse subject from URL parameters on component mount
    useEffect(() => {
        const subjectParam = searchParams.get('subject');
        if (subjectParam) {
            setSubjectValue(decodeURIComponent(subjectParam));
        }
    }, [searchParams]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Store form reference before async operations
        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            // Submit to our reliable custom Netlify function
            const response = await fetch("/.netlify/functions/contact-simple", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData as any).toString(),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                // Reset form using stored reference
                form.reset();

                // Clear the subject value state as well
                setSubjectValue("");

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
                    <div className="w-full">
						<Toast
							role="status"
							aria-live="polite"
							showToast={showToast}
							setShowToast={setShowToast}
							icon={<SiBuymeacoffee />}
							message="Your support helps keep"
							link={{
								to: "/sponsors",
								text: "this platform running smoothly!"
							}}
						/>
						<div className="text-center">
							<h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
								Thank You!
							</h1>
							<p className="text-white text-lg leading-relaxed mb-6">
								Your message has been sent successfully. I'll get back to you as soon as possible.
							</p>
							<button
								onClick={() => setIsSubmitted(false)}
								className={getOutlineButtonClasses(theme, isDarkMode, {
									customClasses: 'py-3 font-medium'
								})}
							>
								Send Another Message
							</button>
						</div>
                    </div>
                </div>
            </main>
        );
    }

    return(
        <main className="flex items-center justify-center px-4 py-8">
            <div className="flex-1 flex flex-col items-center gap-16 min-h-0 max-w-6xl">
                <div className="w-full">
					<Toast
						role="status"
						aria-live="polite"
						showToast={showToast}
						setShowToast={setShowToast}
						icon={<SiBuymeacoffee />}
						message="Your support helps keep"
						link={{
							to: "/sponsors",
							text: "this platform running smoothly!"
						}}
					/>
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
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                {/* Hidden field for Netlify */}
                                <input type="hidden" name="form-name" value="contact" />

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
                                        value={subjectValue}
                                        onChange={(e) => setSubjectValue(e.target.value)}
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
                                    className={`${getOutlineButtonClasses(theme, isDarkMode, {
                                        fullWidth: true,
                                        customClasses: 'py-3 font-medium focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:hover:bg-gray-400'
                                    })}`}
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        {isSubmitting ? (
                                            <HiOutlineRefresh className="w-5 h-5 animate-spin" />
                                        ) : (
                                            <HiOutlineMail className="w-5 h-5" />
                                        )}
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
