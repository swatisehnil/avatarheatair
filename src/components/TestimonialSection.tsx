"use client";

import { useEffect } from "react";
import Image from "next/image";

interface Testimonial { image: string; name: string; role: string; quote: string; order: number }
interface Props { subtitle?: string; heading?: string; testimonials?: Testimonial[] }

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  { image: "/assets/img/testimonial/1.jpg", name: "Albert Krish", role: "Social Activist", quote: "The magic formula that successful businesses have discovered is to treat customers", order: 1 },
  { image: "/assets/img/testimonial/2.jpg", name: "Bill Lorris", role: "Business Man", quote: "The magic formula that successful businesses have discovered is to treat customers", order: 2 },
  { image: "/assets/img/testimonial/3.jpg", name: "Josh Batlar", role: "Factory Foreman", quote: "The magic formula that successful businesses have discovered is to treat customers", order: 3 },
  { image: "/assets/img/testimonial/4.jpg", name: "Joe Root", role: "Supervisor", quote: "The magic formula that successful businesses have discovered is to treat customers", order: 4 },
];

export default function TestimonialSection({ subtitle = "Testimonial", heading = "Happy Client Says About Us", testimonials = DEFAULT_TESTIMONIALS }: Props) {
  const items = [...(testimonials.length > 0 ? testimonials : DEFAULT_TESTIMONIALS)].sort((a, b) => a.order - b.order);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== "undefined" && (window as any).jQuery) {
        const $ = (window as any).jQuery;
        if ($.fn.owlCarousel) {
          const $el = $(".testimonial-carousel");
          if ($el.hasClass("owl-loaded")) {
            $el.trigger("destroy.owl.carousel");
            $el.removeClass("owl-loaded owl-drag");
            $el.find(".owl-stage-outer").children().unwrap();
            $el.addClass("owl-carousel");
          }
          $el.owlCarousel({
            items: 1, dots: true, nav: false, loop: true, autoplay: true,
            autoplayTimeout: 5000, smartSpeed: 3000, slideSpeed: 300, margin: 30,
            navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
            responsiveClass: true,
            responsive: {
              0: { items: 1, dots: true },
              575: { items: 1, nav: false },
              767: { items: 2, nav: false },
              990: { items: 3, loop: true },
              1200: { items: 3, loop: true },
            },
          });
        }
      }
    }, 1200);
    return () => {
      clearTimeout(timer);
      if (typeof window !== "undefined" && (window as any).jQuery) {
        const $el = (window as any).jQuery(".testimonial-carousel");
        if ($el.hasClass("owl-loaded")) $el.trigger("destroy.owl.carousel");
      }
    };
  }, [testimonials]);

  return (
    <div id="testimonial-1" className="testimonial-area gray-bg section-padding pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="section-title">
              <h6>{subtitle}</h6>
              <h2 className="visible-slowly-right">
                {heading.includes("<br") ? <>{heading.split("<br")[0]}<br />{heading.split(">")[1]}</> : heading}
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="testimonial-carousel owl-carousel">
              {items.map((item, i) => (
                <div key={i} className="single-testimonial-item">
                  <div className="testimonial-icon"><i className="las la-quote-left"></i></div>
                  <p>&ldquo;{item.quote}&rdquo;</p>
                  <div className="author-wrap">
                    <div className="author-thumb"><Image src={item.image} alt={item.name} width={60} height={60} /></div>
                    <div className="author-desc"><h5>{item.name}</h5><span>{item.role}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
