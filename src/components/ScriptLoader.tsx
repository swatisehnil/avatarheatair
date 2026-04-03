"use client";

import { useEffect } from "react";

const scripts = [
  "/assets/js/popper.min.js",
  "/assets/js/bootstrap.min.js",
  "/assets/js/wow.min.js",
  "/assets/js/jquery.waypoints.min.js",
  "/assets/js/jquery.appear.min.js",
  "/assets/js/owl.carousel.min.js",
  "/assets/js/magnific-popup.min.js",
  "/assets/js/jquery.barfiller.js",
  "/assets/js/jquery.nice-select.min.js",
  "/assets/js/metismenu.js",
  "/assets/js/odometer.min.js",
  "/assets/js/pure-counter.js",
  "/assets/js/slick.min.js",
  "/assets/js/isotope-3.0.6-min.js",
  "/assets/js/gsap.min.js",
  "/assets/js/ScrollTrigger.min.js",
  "/assets/js/SplitText.min.js",
  "/assets/js/backToTop.js",
  "/assets/js/main.js",
];

function loadScript(src: string): Promise<void> {
  return new Promise((resolve) => {
    // Skip if already loaded
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => {
      console.warn(`Failed to load script: ${src}`);
      resolve(); // resolve anyway to not block the chain
    };
    document.body.appendChild(script);
  });
}

export default function ScriptLoader() {
  useEffect(() => {
    // Load all scripts sequentially so plugins are ready before main.js
    (async () => {
      for (const src of scripts) {
        await loadScript(src);
      }
    })();
  }, []);

  return null;
}
