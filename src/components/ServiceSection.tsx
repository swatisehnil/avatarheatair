"use client";

import Image from "next/image";

const services = [
  { id: 1, img: "/assets/img/service/1-1.png", title: "Heating System", desc: "Our expert technicians are trained to handle furnaces, heat pumps..." },
  { id: 2, img: "/assets/img/service/1-2.png", title: "Air Conditioning", desc: "Efficient air conditioning ensures comfort, cooling, and improved ..." },
  { id: 3, img: "/assets/img/service/1-3.png", title: "Plumbing", desc: "Expert plumbing solutions ensure smooth water flow and efficient..." },
  
  
];

export default function ServiceSection() {
  return (
    <div className="service-section section-padding pb-20">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-8 col-lg-8 wow fadeInUp animated" data-wow-delay="200ms">
            <div className="section-title mb-0">
              <h6>Services</h6>
              <h2 className="visible-slowly-right">
                We can handle all types <br /> of handyman services
              </h2>
            </div>
          </div>
        </div>
        <div className="row mt-100">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp animated"
              data-wow-delay={`${(index + 1) * 200}ms`}
            >
              <div className="single-service-wrap">
                <div className="service-icon">
                  <Image src={service.img} alt={service.title} width={60} height={60} />
                </div>
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
                <a href="/services" className="read_more_link">
                  <span className="link_text">Read More</span>
                  <span className="link_icon">
                    <i className="las la-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
