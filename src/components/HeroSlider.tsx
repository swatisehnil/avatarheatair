"use client";

import { useEffect } from "react";

export default function HeroSlider() {
  useEffect(() => {
    const init = () => {
      if (typeof window !== "undefined" && (window as any).jQuery) {
        const $ = (window as any).jQuery;
        if ($.fn.owlCarousel) {
          $("#home-1.homepage-slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1000,
            nav: true,
            dots: true,
            animateOut: "fadeOut",
            navText: [
              '<i class="las la-arrow-left"></i>',
              '<i class="las la-arrow-right"></i>',
            ],
          });

          // Set background images from data-background attribute
          $("[data-background]").each(function (this: HTMLElement) {
            $(this).css(
              "background-image",
              "url(" + $(this).data("background") + ")"
            );
          });
        }
      }
    };

    // Wait for scripts to load
    const timer = setTimeout(init, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="home-1" className="homepage-slides owl-carousel">
      <div
        className="single-slide-item d-flex align-items-center"
        data-background="/assets/img/slider/slider-1.jpg"
      >
        <div className="overlay-5"></div>
        <div className="hero-area-content">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 wow fadeInUp animated" data-wow-delay=".2s">
                <div className="section-title">
                  <h6 className="text-white">Smart Solutions</h6>
                  <h1 className="text-white">
                    Trusted Heating & Air Conditioning Experts
                  </h1>
                </div>
                <p className="text-white">
                  At Avatar Heat & Air, we provide expert HVAC installation,
                  repair, and maintenance to keep your home and business
                  comfortable all year round.
                </p>
                <a href="#" className="theme-btn mt-40">
                  Get a Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
