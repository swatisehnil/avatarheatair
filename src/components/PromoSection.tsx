"use client";

import { useEffect } from "react";

const progressBars = [
  { id: "bar1", label: "Home Repair", percentage: 90 },
  { id: "bar2", label: "Home Renovation", percentage: 70 },
  { id: "bar3", label: "Handyman Service", percentage: 80 },
];

export default function PromoSection() {
  useEffect(() => {
    const init = () => {
      if (typeof window !== "undefined" && (window as any).jQuery) {
        const $ = (window as any).jQuery;
        if ($.fn.barfiller) {
          progressBars.forEach((bar) => {
            $(`#${bar.id}`).barfiller();
          });
        }
      }
    };
    const timer = setTimeout(init, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="promo-section section-padding pt-0">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="client-content-wrap">
              <div className="section-title">
                <h6>Custom Order</h6>
                <h2>We Are Committed to Best Service</h2>
              </div>
              <p>
                Adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua.
                Ut enim ad minim veniam, quisq wiusmod ut tempor incididunt ut labore et dolore
                sed do magna aliqua.
              </p>
              <div className="contact-info-wrap">
                <div className="contact-icon">
                  <i className="las la-envelope"></i>
                </div>
                <div className="contact-text">
                  <p>AvatarHeatAir@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="progress-bar-area">
              {progressBars.map((bar) => (
                <div key={bar.id}>
                  <div className="single-bar-item">
                    <h5>{bar.label}</h5>
                    <div className="bar-parcentage">{bar.percentage}%</div>
                  </div>
                  <div id={bar.id} className="barfiller">
                    <span className="fill" data-percentage={bar.percentage}></span>
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
