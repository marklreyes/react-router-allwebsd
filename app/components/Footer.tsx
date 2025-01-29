import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-base-100 p-4 mt-8">
      <div className="container mx-auto text-center">
		<p>
		<small><a target="_blank" href="//discord.gg/FpKpTPAc">Discord</a> | AllWebSD.com is a KiloByte Contributor to <a target="_blank" href="//sdfutures.org/support-sdff">San Diego Futures Foundation</a>.</small>
		</p>
		<p>
		<small>This podcast is maintained by <a target="_blank" href="//www.marklreyes.com/category/personal-log/podcast-projects/">Mark L. Reyes</a> | &copy; {new Date().getFullYear()} All Rights Reserved</small>
		</p>
      </div>
    </footer>
  );
}
