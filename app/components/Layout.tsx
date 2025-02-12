import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Loading from "./Loading";

import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
  } from "react-router";
import GoogleAnalytics from "./GoogleAnalytics";

export function Layout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
		<GoogleAnalytics />
      </head>
      <body>
				{isLoading ? <Loading /> : (
					<>
						<Header />
						<div className="container mx-auto p-4">
							<div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
								<main className="col-span-1 lg:col-span-9">
									<Outlet />
								</main>
								<aside className="col-span-1 lg:col-span-3 bg-[#3D2F26] rounded-lg p-4">
									<div className="w-[330px] mx-auto mb-4">
										<a
											href="https://sdfutures.org/support-sdff"
											target="_blank"
											rel="noopener noreferrer"
											className="block hover:opacity-80 transition-opacity"
										>
											<img
												src="/images/SDFF_banner.jpg"
												alt="San Diego Futures Foundation join the movement and bridge the digital divide"
												className="w-full h-full object-cover rounded"
											/>
										</a>
									</div>
									<div className="w-[330px] mt-16 mx-auto">
										<h5 className="text-white text-xl mb-4 font-semibold">
											Subscribe Now:
										</h5>
										<div className="w-[330] gap-4 grid grid-cols-1 md:grid-cols-2">
											<a
											href="//itunes.apple.com/app/castbox-radio/id1243410543"
											target="_blank"
											rel="noopener noreferrer"
											className="block hover:opacity-80 transition-opacity"
											>
												<img
													src="/images/appstore_apple.png"
													alt="AllWebSD on Castbox through Apple App Store"
													className="w-full h-auto rounded"
												/>
											</a>
											<a
											href="//play.google.com/store/apps/details?id=fm.castbox.audiobook.radio.podcast"
											target="_blank"
											rel="noopener noreferrer"
											className="block hover:opacity-80 transition-opacity"
											>
												<img
													src="/images/appstore_google.png"
													alt="AllWebSD on Castbox through Google Play Store"
													className="w-full h-auto rounded"
												/>
											</a>
											<a
											href="//castbox.fm/channel/AllWebSD-id2933770"
											target="_blank"
											rel="noopener noreferrer"
											className="block hover:opacity-80 transition-opacity"
											>
												<img
													src="/images/castbox.png"
													alt="AllWebSD on Castbox"
													className="w-full h-auto rounded"
												/>
											</a>
										</div>
									</div>
								</aside>
							</div>
						</div>
						<Footer />
					</>
				)}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
