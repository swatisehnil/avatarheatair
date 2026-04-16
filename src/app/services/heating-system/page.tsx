"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchPopup from "@/components/SearchPopup";
import Image from "next/image";
import { useState } from "react";
import ServiceMap from "@/components/ServiceMap";

export default function HeatingSystemPage() {
  const [activeTab, setActiveTab] = useState("discovery");

  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <div className="breadcrumb-area">
        <div className="overlay-5"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="breadcrumb-title"><h1>Heating System</h1></div>
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
                    <h2>Heating System Repair &amp; Installation Services</h2>
                  </div>
                </div>
                <div className="p-animation">
                  <p>We provide reliable and efficient heating system services for homes and businesses. Whether your heater is not working properly or you need a new installation, our skilled technicians are ready to help. We ensure quick service, affordable pricing, and long-lasting solutions.</p>
                  <p>We provide expert heating system repair and installation services, ensuring efficient performance, reliable operation, and long-lasting comfort for your home.</p>
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
                <Image src="/assets/img/heating/h-3.jpg" alt="Heating System" width={600} height={500} />
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
      <div className="feature-section section-padding pt-0">
        <div className="container">
          <div className="row">
            {[
              { img: "1.png", title: "Quality Service", desc: "We provide top-quality HVAC services using advanced tools and experienced technicians and customer satisfaction." },
              { img: "2.png", title: "Affordable Price", desc: "Our pricing is transparent and budget-friendly with no hidden charges, you get the best value for your money." },
              { img: "3.png", title: "Expert Technicians", desc: "Our certified professionals have years of experience in handling all types of HVAC systems with precision and care." },
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
      <div className="process-section section-padding pt-0">
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
                  { id: "discovery", label: "Heating Planning" },
                  { id: "design", label: "Equipment Preparation" },
                  { id: "implementation", label: "Installation & Testing" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    className={`nav-link${activeTab === tab.id ? " active" : ""}`}
                    onClick={() => setActiveTab(tab.id)}
                    type="button"
                  >{tab.label}</button>
                ))}
              </div>
            </nav>
            <div className="tab-content mt-60">
              {activeTab === "discovery" && (
                <div className="tab-pane fade active show">
                  <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="process-content-wrap">
                        <div className="section-title">
                          <h6>Step 1</h6>
                          <h2>Meeting clients &amp; planning concept</h2>
                        </div>
                        <p>We carefully inspect your property, evaluate insulation, room size, and existing systems to understand your heating needs. Based on this analysis, we recommend the most efficient, cost-effective, and reliable heating solution tailored to your space, ensuring optimal comfort and energy savings.</p>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="process-bg-wrap">
                        <Image src="/assets/img/heating/h-1.jpg" alt="Step 1" width={600} height={400} />
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
                        <div className="section-title">
                          <h6>Step 2</h6>
                          <h2>Testing material with equipment</h2>
                        </div>
                        <p>We carefully select and arrange high-quality heating units, components, and tools required for the installation. Our team ensures that all equipment meets industry standards, allowing for a smooth, efficient, and hassle-free installation process with long-lasting performance.</p>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="process-bg-wrap">
                        <Image src="/assets/img/heating/h-2.jpg" alt="Step 2" width={600} height={400} />
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
                        <div className="section-title">
                          <h6>Step 3</h6>
                          <h2>Installation Plumbing Service Smoothly</h2>
                        </div>
                        <p>Our skilled technicians carefully install the heating system with precision, ensuring all components are properly fitted and configured. After installation, we conduct thorough testing and safety checks to guarantee optimal performance, energy efficiency, and reliable operation for long-term comfort.</p>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="process-bg-wrap">
                        <Image src="/assets/img/heating/h-4.png" alt="Step 3" width={600} height={400} />
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
                <h2>Servicing Excellence <br /> Above and Beyond</h2>
              </div>
              <div className="cp-custom-accordion">
                <div className="accordions" id="accordionExample">
                  {[
                    { id: "One", q: "How often should I service my heating system?", a: "It's recommended to service your heating system at least once a year to ensure efficiency, safety, and long-term performance." },
                    { id: "Two", q: "What are common signs my heating system needs repair?", a: "Unusual noises, uneven heating, higher energy bills, or weak airflow are common signs that your system needs professional inspection." },
                    { id: "Three", q: "How long does a heating system installation take?", a: "Most installations are completed within a day, depending on the system type and property size." },
                  ].map((faq) => (
                    <div key={faq.id} className="accordion-items">
                      <h2 className="accordion-header">
                        <button className="accordion-buttons" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${faq.id}`} aria-expanded={faq.id === "One" ? "true" : "false"}>
                          <span>{faq.q}</span>
                        </button>
                      </h2>
                      <div id={`collapse${faq.id}`} className={`accordion-collapse collapse${faq.id === "One" ? " show" : ""}`} data-bs-parent="#accordionExample">
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
                      <div className="author-desc">
                        <h5>{t.name}</h5><span>{t.role}</span>
                      </div>
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
