"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="about-section gray-bg section-padding pb-150">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 wow fadeInLeft animated" data-wow-delay="200ms">
            <div className="about-img-wrap">
              <div className="image-one wow fadeInUp" data-wow-delay=".2s">
                <Image src="/assets/img/about/about-1-1.jpg" alt="About" width={500} height={400} />
              </div>
              <div className="image-two wow fadeInUp" data-wow-delay=".4s">
                <Image src="/assets/img/about/about-1-2.jpg" alt="About" width={300} height={250} />
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 wow fadeInUp animated" data-wow-delay="400ms">
            <div className="about-content-wrap">
              <div className="section-title">
                <h6>About Us</h6>
                <h2 className="visible-slowly-right">About Avatar Home Service</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies the dictum
                facilisis thr sem. Imperdiet massa turpis sit Lorem ipsum dolor sit amet
                consectetur amet a lectus mi ultricies the man
              </p>
              <div className="feature-service">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <div className="single-feat-service">
                      <div className="feat-icon">
                        <Image src="/assets/img/about/1.png" alt="Professional Staff" width={50} height={50} />
                      </div>
                      <div className="feat-content">
                        <h4>Professional Staff</h4>
                        <p>Overall, professional the man <br /> Engineers play</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-feat-service">
                      <div className="feat-icon">
                        <Image src="/assets/img/about/2.png" alt="Customer Support" width={50} height={50} />
                      </div>
                      <div className="feat-content">
                        <h4>Customer Support</h4>
                        <p>Overall, professional the man <br /> Engineers play</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a href="about" className="theme-btn mt-20">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
