import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Loading from "./Loading";
import { useTheme } from "../context/ThemeContext";
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
  const { isDarkMode, theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
	<html lang="en" className={isDarkMode ? "dark" : ""}>
	  <head>
		<meta charSet="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<Meta />
		<Links />
		<GoogleAnalytics />
	  </head>
	  <body className={`${theme.background} ${theme.text} transition-colors duration-200`}>
		{isLoading ? (
		  <Loading />
		) : (
		  <>
			<Header />
			<div className="container mx-auto p-4">
			  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
				<main className="col-span-1 lg:col-span-9" id="main-content">
				  <Outlet />
				</main>
				<aside
				  className={`col-span-1 lg:col-span-3 lg:sticky lg:top-4 ${theme.primary} ${theme.text} rounded-lg p-4 h-fit`}
				  aria-label="Sidebar content"
				>
				  <section aria-label="Advertisement">
					<Ads />
				  </section>
				  <hr className={`${isDarkMode ? 'border-[#F03D86]' : 'border-[#2F241D]'} mx-auto mt-4 mb-4`} />
				  <section aria-label="Weather information">
					<Weather />
				  </section>
				  <hr className={`${isDarkMode ? 'border-[#F03D86]' : 'border-[#2F241D]'} mx-auto mt-4 mb-4`} />
				  <section aria-label="Newsletter subscription">
					<Subscribe />
				  </section>
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
