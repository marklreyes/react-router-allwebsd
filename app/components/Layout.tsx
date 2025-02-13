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
import Ads from "./Ads";
import Subscribe from "./Subscribe";
import Weather from "./Weather";

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
							<aside className="col-span-1 lg:col-span-3 lg:sticky lg:top-4 bg-[#3D2F26] rounded-lg p-4 h-fit">
								<Ads />
								<Weather />
								<Subscribe />
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
