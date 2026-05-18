"use client";

import Image from "next/image";

interface Feature { icon: string; title: string; description: string }
interface Props {
  subtitle?: string; heading?: string; description?: string;
  primaryImage?: string; secondaryImage?: string;
  features?: Feature[]; ctaText?: string; ctaLink?: string;
}

export default function AboutSection({
  subtitle = "About Us",
  heading = "About Avatar Home Service",
  description = "Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies the dictum facilisis thr sem.",
  primaryImage = "/assets/img/about/about-1-1.jpg",
  secondaryImage = "/assets/img/about/about-1-2.jpg",
  features = [
    { icon: "/assets/img/about/1.png", title: "Professional Staff", description: "Overall, professional the man Engineers play" },
    { icon: "/assets/img/about/2.png", title: "Customer Support", description: "Overall, professional the man Engineers play" },
  ],
  ctaText = "Read More",
  ctaLink = "/about",
}: Props) {
  return (
    <div className="about-section gray-bg section-padding pb-150">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="about-img-wrap">
              <div className="image-one"><Image src={primaryImage} alt="About" width={500} height={400} priority /></div>
              <div className="image-two"><Image src={secondaryImage} alt="About" width={300} height={250} priority /></div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="about-content-wrap">
              <div className="section-title">
                <h6>{subtitle}</h6>
                <h2 className="visible-slowly-right">{heading}</h2>
              </div>
              <p>{description}</p>
              <div className="feature-service">
                <div className="row gy-4">
                  {features.map((f, i) => (
                    <div key={i} className="col-md-6">
                      <div className="single-feat-service">
                        <div className="feat-icon"><Image src={f.icon} alt={f.title} width={50} height={50} /></div>
                        <div className="feat-content"><h4>{f.title}</h4><p>{f.description}</p></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <a href={ctaLink} className="theme-btn mt-20">{ctaText}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
