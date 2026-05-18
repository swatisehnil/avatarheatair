"use client";

import { useEffect } from "react";

interface Slide { backgroundImage: string; subtitle: string; heading: string; description: string; ctaText: string; ctaLink: string }

interface Props { slides?: Slide[] }

const DEFAULT_SLIDES: Slide[] = [{
  backgroundImage: "/assets/img/slider/slider-1.jpg",
  subtitle: "Smart Solutions",
  heading: "Trusted Heating & Air Conditioning Experts",
  description: "At Avatar Heat & Air, we provide expert HVAC installation, repair, and maintenance to keep your home and business comfortable all year round.",
  ctaText: "Get a Free Quote",
  ctaLink: "/contact",
}];

export default function HeroSlider({ slides = DEFAULT_SLIDES }: Props) {
  const activeSlides = slides.length > 0 ? slides : DEFAULT_SLIDES;

  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window !== "undefined" && (window as any).jQuery?.fn?.owlCarousel) {
        clearInterval(interval);
        const $ = (window as any).jQuery;
        const $el = $("#home-1.homepage-slides");
        if ($el.hasClass("owl-loaded")) {
          $el.trigger("destroy.owl.carousel");
          $el.removeClass("owl-loaded owl-drag");
          $el.find(".owl-stage-outer").children().unwrap();
          $el.addClass("owl-carousel");
        }
        $el.owlCarousel({
          items: 1, loop: true, autoplay: true, autoplayTimeout: 5000,
          smartSpeed: 1000, nav: true, dots: true, animateOut: "fadeOut",
          navText: ['<i class="las la-arrow-left"></i>', '<i class="las la-arrow-right"></i>'],
        });
        $("[data-background]").each(function (this: HTMLElement) {
          $(this).css("background-image", "url(" + $(this).data("background") + ")");
        });
      }
    }, 100);
    return () => clearInterval(interval);
  }, [slides]);

  return (
    <div id="home-1" className="homepage-slides owl-carousel" style={{ display: "block" }}>
      {activeSlides.map((slide, i) => (
        <div
          key={i}
          className="single-slide-item d-flex align-items-center"
          data-background={slide.backgroundImage}
          style={{ backgroundImage: `url('${slide.backgroundImage}')` }}
        >
          <div className="overlay-5"></div>
          <div className="hero-area-content">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-7 wow fadeInUp animated" data-wow-delay=".2s">
                  <div className="section-title">
                    <h6 className="text-white">{slide.subtitle}</h6>
                    <h1 className="text-white">{slide.heading}</h1>
                  </div>
                  <p className="text-white">{slide.description}</p>
                  <a href={slide.ctaLink} className="theme-btn mt-40">{slide.ctaText}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
