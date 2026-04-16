"use client";

import { useState } from "react";

const locations = [
  "Delhi", "Noida", "Gurgaon", "Ghaziabad",
  "Faridabad", "Greater Noida", "Panipat", "Sonipat",
];

export default function ServiceMap() {
  const [activeCity, setActiveCity] = useState("Delhi");
  const [mapSrc, setMapSrc] = useState(
    "https://www.google.com/maps?q=Delhi,India&output=embed"
  );

  const handleCityClick = (city: string) => {
    setActiveCity(city);
    setMapSrc(`https://www.google.com/maps?q=${city},India&output=embed`);
  };

  const LocationPin = () => (
    <svg className="loc-icon" viewBox="0 0 24 24">
      <path d="M12 21s-6-5.33-6-10a6 6 0 1 1 12 0c0 4.67-6 10-6 10z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  );

  return (
    <div className="service-area bg-color">
      <div className="container">
        <div className="row align-items-center gx-5">
          {/* Map */}
          <div className="col-md-6">
            <div className="map">
              <iframe
                src={mapSrc}
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Service Areas */}
          <div className="col-md-6">
            <div className="section-heading">
              <h2>Our Service Areas</h2>
              <p>
                We provide reliable HVAC services across multiple locations.
                Click on your city to view it on the map.
              </p>
            </div>
            <div className="locations">
              <div className="location-column">
                <ul>
                  {locations.slice(0, 4).map((city) => (
                    <li
                      key={city}
                      className={activeCity === city ? "active" : ""}
                      onClick={() => handleCityClick(city)}
                    >
                      <LocationPin />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="location-column">
                <ul>
                  {locations.slice(4).map((city) => (
                    <li
                      key={city}
                      className={activeCity === city ? "active" : ""}
                      onClick={() => handleCityClick(city)}
                    >
                      <LocationPin />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
