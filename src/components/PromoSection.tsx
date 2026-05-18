"use client";

import { useEffect } from "react";

interface Bar { id: string; label: string; percentage: number }
interface Props { subtitle?: string; heading?: string; description?: string; email?: string; progressBars?: Bar[] }

const DEFAULT_BARS: Bar[] = [
  { id: "bar1", label: "Home Repair", percentage: 90 },
  { id: "bar2", label: "Home Renovation", percentage: 70 },
  { id: "bar3", label: "Handyman Service", percentage: 80 },
];

export default function PromoSection({
  subtitle = "Custom Order",
  heading = "We Are Committed to Best Service",
  description = "Adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua. Ut enim ad minim veniam, quisq wiusmod ut tempor incididunt ut labore et dolore sed do magna aliqua.",
  email = "AvatarHeatAir@gmail.com",
  progressBars = DEFAULT_BARS,
}: Props) {
  const bars = progressBars.length > 0 ? progressBars : DEFAULT_BARS;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== "undefined" && (window as any).jQuery) {
        const $ = (window as any).jQuery;
        if ($.fn.barfiller) {
          bars.forEach(bar => { $(`#${bar.id}`).barfiller(); });
        }
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [bars]);

  return (
    <div className="promo-section section-padding pt-0">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="client-content-wrap">
              <div className="section-title">
                <h6>{subtitle}</h6>
                <h2>{heading}</h2>
              </div>
              <p>{description}</p>
              <div className="contact-info-wrap">
                <div className="contact-icon"><i className="las la-envelope"></i></div>
                <div className="contact-text"><p>{email}</p></div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="progress-bar-area">
              {bars.map(bar => (
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
