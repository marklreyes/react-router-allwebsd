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
      </head>
      <body>
        {isLoading ? <Loading /> : (
          <>
            <Header />
            <main className="container mx-auto p-4">
			  			<Outlet />
            </main>
            <Footer />
          </>
        )}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
