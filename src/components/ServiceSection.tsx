"use client";

import Image from "next/image";
import Link from "next/link";

interface Service { icon: string; title: string; description: string; link: string; order: number }
interface Props { subtitle?: string; heading?: string; services?: Service[] }

const DEFAULT_SERVICES: Service[] = [
  { icon: "/assets/img/service/1-1.png", title: "Heating System", description: "Our expert technicians are trained to handle furnaces, heat pumps...", link: "/services/heating-system", order: 1 },
  { icon: "/assets/img/service/1-2.png", title: "Air Conditioning", description: "Efficient air conditioning ensures comfort, cooling, and improved ...", link: "/services/air-conditioning", order: 2 },
  { icon: "/assets/img/service/1-3.png", title: "Plumbing", description: "Expert plumbing solutions ensure smooth water flow and efficient...", link: "/services/plumbing", order: 3 },
];

export default function ServiceSection({ subtitle = "Services", heading = "We can handle all types of handyman services", services = DEFAULT_SERVICES }: Props) {
  const sorted = [...(services.length > 0 ? services : DEFAULT_SERVICES)].sort((a, b) => a.order - b.order);
  return (
    <div className="service-section section-padding pb-20">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-8 col-lg-8 wow fadeInUp animated" data-wow-delay="200ms">
            <div className="section-title mb-0">
              <h6>{subtitle}</h6>
              <h2 className="visible-slowly-right">{heading}</h2>
            </div>
          </div>
        </div>
        <div className="row mt-100">
          {sorted.map((service, index) => (
            <div key={index} className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp animated" data-wow-delay={`${(index + 1) * 200}ms`}>
              <div className="single-service-wrap">
                <div className="service-icon"><Image src={service.icon} alt={service.title} width={60} height={60} /></div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <Link href={service.link} className="read_more_link">
                  <span className="link_text">Read More</span>
                  <span className="link_icon"><i className="las la-arrow-right"></i></span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
