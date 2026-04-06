"use client";

import { useEffect } from "react";

// Plugins can load in parallel (all depend only on jQuery which loads first)
const plugins = [
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
    // Load all plugins in parallel, then load main.js last
    (async () => {
      await Promise.all(plugins.map(loadScript));
      await loadScript("/assets/js/main.js");
    })();
  }, []);

  return null;
}
