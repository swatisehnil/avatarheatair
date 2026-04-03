"use client";

import { useEffect } from "react";

export default function VideoSection() {
  useEffect(() => {
    const init = () => {
      if (typeof window !== "undefined" && (window as any).jQuery) {
        const $ = (window as any).jQuery;
        if ($.fn.magnificPopup) {
          $(".video-play-btn").magnificPopup({ type: "iframe" });
        }
      }
    };
    const timer = setTimeout(init, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="video-section">
      <div className="overlay"></div>
      <div className="video-inner-box">
        <div className="play-btn">
          <a
            href="https://www.youtube.com/watch?v=hvSq38FChGU"
            className="video-play-btn mfp-iframe"
          >
            <i className="fa-solid fa-play"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
