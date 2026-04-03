"use client";

import { useEffect } from "react";
import Image from "next/image";

const testimonials = [
  { id: 1, img: "/assets/img/testimonial/1.jpg", name: "Albert Krish", role: "Social Activist", text: "\"The magic formula that successful businesses have discovered is to treat customers \"" },
  { id: 2, img: "/assets/img/testimonial/2.jpg", name: "Bill Lorris", role: "Business Man", text: "\"The magic formula that successful businesses have discovered is to treat customers \"" },
  { id: 3, img: "/assets/img/testimonial/3.jpg", name: "Josh Batlar", role: "Factory Foreman", text: "\"The magic formula that successful businesses have discovered is to treat customers \"" },
  { id: 4, img: "/assets/img/testimonial/4.jpg", name: "Joe Root", role: "Supervisor", text: "\"The magic formula that successful businesses have discovered is to treat customers \"" },
];

export default function TestimonialSection() {
  useEffect(() => {
    const init = () => {
      if (typeof window !== "undefined" && (window as any).jQuery) {
        const $ = (window as any).jQuery;
        if ($.fn.owlCarousel) {
          $(".testimonial-carousel").owlCarousel({
            items: 2,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 800,
            dots: true,
            nav: false,
            responsive: {
              0: { items: 1 },
              768: { items: 2 },
            },
          });
        }
      }
    };
    const timer = setTimeout(init, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="testimonial-1" className="testimonial-area gray-bg section-padding pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="section-title">
              <h6>Testimonial</h6>
              <h2 className="visible-slowly-right">
                Happy Client Says <br /> About Us
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="testimonial-carousel owl-carousel">
              {testimonials.map((item) => (
                <div key={item.id} className="single-testimonial-item">
                  <div className="testimonial-icon">
                    <i className="las la-quote-left"></i>
                  </div>
                  <p>{item.text}</p>
                  <div className="author-wrap">
                    <div className="author-thumb">
                      <Image src={item.img} alt={item.name} width={60} height={60} />
                    </div>
                    <div className="author-desc">
                      <h5>{item.name}</h5>
                      <span>{item.role}</span>
                    </div>
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
