import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-base-100 p-4">
      <div className="container mx-auto">
        {/* Image Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-1">
          <div className="flex justify-center items-center">
            <a href="//itunes.apple.com/app/castbox-radio/id1243410543" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/appstore_apple.png"
                alt="AllWebSD on Apple Podcasts"
                className="w-40 h-40 object-contain hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a href="//play.google.com/store/apps/details?id=fm.castbox.audiobook.radio.podcast" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/appstore_google.png"
                alt="AllWebSD on Google Podcasts"
                className="w-40 h-40 object-contain hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a href="//castbox.fm/channel/AllWebSD-id2933770" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/castbox.png"
                alt="AllWebSD on Castbox"
                className="w-40 h-40 object-contain hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center">
          <p>
            <small>
              <a target="_blank" href="//discord.gg/FpKpTPAc">Discord</a> |
              AllWebSD.com is a KiloByte Contributor to{" "}
              <a target="_blank" href="//sdfutures.org/support-sdff">
                San Diego Futures Foundation
              </a>.
            </small>
          </p>
          <p>
            <small>
              This podcast is maintained by{" "}
              <a target="_blank" href="//www.marklreyes.com/category/personal-log/podcast-projects/">
                Mark L. Reyes
              </a>{" "}
              | &copy; {new Date().getFullYear()} All Rights Reserved
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
}
