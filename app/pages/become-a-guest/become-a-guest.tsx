export function BecomeAGuest() {

	return (
		<div className="flex items-center justify-center pt-4 pb-4">
			<div className="flex-1 flex flex-col items-center gap-16 min-h-0">
				<div className="max-w-[1024px] w-full px-4">
					<h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
						Become A Guest, Receive A Shirt!
					</h1>
					<div className="mb-8 max-w-[250px] mx-auto">
						<img
							src="/images/allwebsd_shirt.jpg"
							alt="Recording podcast episode"
							className="w-[250px] h-[250px] rounded-full shadow-lg object-cover"
						/>
					</div>
					<p className="text-white text-lg leading-relaxed mb-6">
						Yep, it's that easy! Tech enthusiasts across San Diego, this microphone is your home. When likes and shares aren't enough, stop by and let your voice be heard. I'm here to foster innovation through conversation.
					</p>
					<p className="text-white text-lg leading-relaxed mb-6">
						Software Engineers, Data Scientists, UX/UI Designers, Technical Product Owners, Business Analysts, Small Business Owners and more will always be welcome to AllWebSD.
						To make an appearance, please{" "}
						<a
							href="mailto:mr@marklreyes.com?subject=ALLWEBSD Appearances"
							className="text-[#FFC426] hover:text-white underline hover:no-underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFC426] focus:ring-opacity-50"
						>
							contact me
						</a>{" "}
						today!
					</p>
				</div>
			</div>
		</div>
	);
}
