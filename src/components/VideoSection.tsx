"use client";

import { useEffect } from "react";

interface Props { videoUrl?: string }

export default function VideoSection({ videoUrl = "https://www.youtube.com/watch?v=hvSq38FChGU" }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== "undefined" && (window as any).jQuery) {
        const $ = (window as any).jQuery;
        if ($.fn.magnificPopup) {
          $(".video-play-btn").magnificPopup({ type: "iframe" });
        }
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="video-section">
      <div className="overlay"></div>
      <div className="video-inner-box">
        <div className="play-btn">
          <a href={videoUrl} className="video-play-btn mfp-iframe">
            <i className="fa-solid fa-play"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
