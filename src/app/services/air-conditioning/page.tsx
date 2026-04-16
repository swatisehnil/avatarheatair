"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchPopup from "@/components/SearchPopup";
import Image from "next/image";
import { useState } from "react";
import ServiceMap from "@/components/ServiceMap";

export default function AirConditioningPage() {
  const [activeTab, setActiveTab] = useState("discovery");

  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <div className="breadcrumb-area breadcum-img">
        <div className="overlay-5"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="breadcrumb-title"><h1>Air Conditioning</h1></div>
              <div className="breadcrumb-icon"><i className="las la-angle-down"></i></div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about-3" className="about-section about-three section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 order-2 order-lg-1">
              <div className="about-content-wrap">
                <div className="section-title">
                  <div className="heading-animation">
                    <h6 className="text-secondary">Designed To Grow Your Business</h6>
                    <h2>Air Conditioning Repair &amp; Installation Services</h2>
                  </div>
                </div>
                <div className="p-animation">
                  <p>We provide reliable and efficient air conditioning services to keep your home and office cool and comfortable. Whether your AC is not cooling properly or you need a new installation, our expert technicians are here to help with fast and professional service.</p>
                  <p>Our team specializes in AC repair, installation, and maintenance, ensuring energy efficiency, optimal cooling, and long-lasting performance.</p>
                </div>
                <div className="row mt-60">
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="single-counter-box">
                      <div className="counter-number"><span className="purecounter" data-purecounter-duration="1" data-purecounter-end="310">310</span></div><span>+</span>
                      <h6>Project Completed</h6>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="single-counter-box">
                      <div className="counter-number"><span className="purecounter" data-purecounter-duration="1" data-purecounter-end="156">156</span></div><span>+</span>
                      <h6>Satisfied Clients</h6>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="single-counter-box">
                      <div className="counter-number"><span className="purecounter" data-purecounter-duration="1" data-purecounter-end="75">75</span></div><span></span>
                      <h6>Awards Win</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 text-lg-end order-1 order-lg-2">
              <div className="about-bg-wrapper">
                <Image src="/assets/img/Conditioning/air-1.jpg" alt="Air Conditioning" width={600} height={500} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div id="testimonial-3" className="testimonial-section gray-bg section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="testimonial-bg">
                <Image src="/assets/img/testimonial/testimonial-img.jpg" alt="Testimonial" width={600} height={450} />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="testimonial-content">
                <div className="testimonial-icon">
                  <Image src="/assets/img/straight-quotes.png" alt="Quote" width={40} height={40} />
                </div>
                <div className="testimonial-text">
                  <h3>&ldquo;Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed. Beatae vitae dicta. Adipiscing elit, sed do&rdquo;</h3>
                  <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim. Adipiscing elit, sed do&rdquo;</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-img">
                    <Image src="/assets/img/testimonial/ceo.jpg" alt="CEO" width={60} height={60} />
                  </div>
                  <div className="author-desc">
                    <h5>Francis Fooler</h5>
                    <h6>CEO, shromik Inc.</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section section-padding cta-contact pb-80 dark-bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-8 col-md-8">
              <div className="cta-title">
                <div className="section-title">
                  <h2 className="text-white">Secure Your Service Appointment!</h2>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 text-lg-end">
              <div className="cta-btn">
                <a href="/contact" className="white-btn">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="feature-section">
        <div className="container">
          <div className="row">
            {[
              { img: "1.png", title: "Quality Service", desc: "We deliver top-quality AC services using advanced tools and modern techniques." },
              { img: "2.png", title: "Affordable Price", desc: "Transparent pricing with no hidden charges for complete peace of mind." },
              { img: "3.png", title: "Expert Technicians", desc: "Skilled professionals with years of experience in handling all types of AC systems." },
            ].map((f) => (
              <div key={f.title} className="col-xl-4 col-lg-4 col-md-4">
                <div className="single-feature-wrap">
                  <div className="feature-icon">
                    <Image src={`/assets/img/feature/${f.img}`} alt={f.title} width={60} height={60} />
                  </div>
                  <h5>{f.title}</h5>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Working Process */}
      <div className="process-section section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 text-center">
              <div className="section-title">
                <h6>What We Offer</h6>
                <h2>Working Process in 3 Steps</h2>
              </div>
            </div>
          </div>
          <div className="row gx-5 justify-content-center">
            <nav>
              <div className="nav project-list justify-content-center" role="tablist">
                {[
                  { id: "discovery", label: "AC Planning" },
                  { id: "design", label: "Equipment Preparation" },
                  { id: "implementation", label: "Installation & Testing" },
                ].map((tab) => (
                  <button key={tab.id} className={`nav-link${activeTab === tab.id ? " active" : ""}`} onClick={() => setActiveTab(tab.id)} type="button">{tab.label}</button>
                ))}
              </div>
            </nav>
            <div className="tab-content mt-60">
              {activeTab === "discovery" && (
                <div className="tab-pane fade active show">
                  <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="process-content-wrap">
                        <div className="section-title"><h6>Step 1</h6><h2>Meeting clients &amp; planning concept</h2></div>
                        <p>We begin by understanding your cooling requirements, inspecting your space, and evaluating factors like room size, insulation, and existing systems. Based on this analysis, we recommend the most efficient and cost-effective air conditioning solution.</p>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="process-bg-wrap">
                        <Image src="/assets/img/Conditioning/air-2.jpg" alt="Step 1" width={600} height={400} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "design" && (
                <div className="tab-pane fade active show">
                  <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="process-content-wrap">
                        <div className="section-title"><h6>Step 2</h6><h2>Testing material with equipment</h2></div>
                        <p>Our team carefully selects and prepares high-quality air conditioning units and components tailored to your needs. We ensure all equipment meets industry standards for performance, durability, and energy efficiency before installation.</p>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="process-bg-wrap">
                        <Image src="/assets/img/Conditioning/air-4.jpg" alt="Step 2" width={600} height={400} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "implementation" && (
                <div className="tab-pane fade active show">
                  <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="process-content-wrap">
                        <div className="section-title"><h6>Step 3</h6><h2>Installation AC Service Smoothly</h2></div>
                        <p>Our experts install the air conditioning system with precision and care. After installation, we perform complete testing to ensure optimal cooling performance, proper airflow, and long-term reliability for your home or business.</p>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="process-bg-wrap">
                        <Image src="/assets/img/Conditioning/air-5.jpg" alt="Step 3" width={600} height={400} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <ServiceMap />

      {/* FAQ Section */}
      <div className="faq-section section-padding pt-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="section-title">
                <h6>FAQ</h6>
                <h2>Everything You Need To Know <br /> About AC</h2>
              </div>
              <div className="cp-custom-accordion">
                <div className="accordions" id="accordionExampleAC">
                  {[
                    { id: "One", q: "How often should I service my air conditioner?", a: "It is recommended to service your air conditioner at least once a year to ensure optimal performance, energy efficiency, and longer lifespan." },
                    { id: "Two", q: "How do I know if my AC needs repair?", a: "Common signs include weak cooling, unusual noises, bad odors, higher electricity bills, or frequent on/off cycling." },
                    { id: "Three", q: "Which type of AC is best for my home?", a: "The best AC depends on your room size, usage, and budget. Split ACs are ideal for homes, while central systems are better for large spaces." },
                  ].map((faq) => (
                    <div key={faq.id} className="accordion-items">
                      <h2 className="accordion-header">
                        <button className="accordion-buttons" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseAC${faq.id}`} aria-expanded={faq.id === "One" ? "true" : "false"}>
                          <span>{faq.q}</span>
                        </button>
                      </h2>
                      <div id={`collapseAC${faq.id}`} className={`accordion-collapse collapse${faq.id === "One" ? " show" : ""}`} data-bs-parent="#accordionExampleAC">
                        <div className="accordion-body">{faq.a}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 text-lg-end">
              <div className="counter-wrap">
                <div className="counter-img">
                  <Image src="/assets/img/Conditioning/faq.jpg" alt="FAQ" width={500} height={350} />
                </div>
                <div className="counter-content">
                  <div className="single-counter-item dark-bg">
                    <h6>Happy Clients</h6>
                    <h1><span className="odometer" data-count="124">124</span>+</h1>
                    <p>Adipiscing elit, do eiusm.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Carousel */}
      <div id="testimonial-1" className="testimonial-area gray-bg section-padding pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-title">
                <h6>Testimonial</h6>
                <h2>Happy Client Says <br /> About Us</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonial-carousel owl-carousel" style={{ display: "block" }}>
                {[
                  { img: "1.jpg", name: "Albert Krish", role: "Social Activist" },
                  { img: "2.jpg", name: "Bill Lorris", role: "Business Man" },
                  { img: "3.jpg", name: "Josh Batlar", role: "Factory Foreman" },
                  { img: "4.jpg", name: "Joe Root", role: "Supervisor" },
                ].map((t) => (
                  <div key={t.name} className="single-testimonial-item">
                    <div className="testimonial-icon"><i className="las la-quote-left"></i></div>
                    <p>&ldquo;The magic formula that successful businesses have discovered is to treat customers&rdquo;</p>
                    <div className="author-wrap">
                      <div className="author-thumb">
                        <Image src={`/assets/img/testimonial/${t.img}`} alt={t.name} width={60} height={60} />
                      </div>
                      <div className="author-desc"><h5>{t.name}</h5><span>{t.role}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <SearchPopup />
      <div className="progress-wrap">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </>
  );
}
