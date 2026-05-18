"use client";

import { useState } from "react";
import Image from "next/image";
import ServiceMap from "@/components/ServiceMap";
import TestimonialSection from "@/components/TestimonialSection";

interface ProcessTab { id: string; label: string; stepLabel: string; heading: string; description: string; image: string }
interface Faq        { question: string; answer: string }
interface Feature    { img: string; title: string; desc: string }

interface Props {
  slug: string;
  breadcrumbTitle: string;
  breadcrumbClass: string;

  aboutSubtitle: string;
  aboutHeading: string;
  aboutParagraphs: string[];
  aboutImage: string;

  testimonialImage: string;
  testimonialQuote: string;
  testimonialSubText: string;
  testimonialAuthorImage: string;
  testimonialAuthorName: string;
  testimonialAuthorRole: string;

  ctaTitle: string;
  ctaButtonText: string;
  ctaButtonLink: string;

  features: Feature[];

  processSubtitle: string;
  processHeading: string;
  processTabs: ProcessTab[];

  faqSubtitle: string;
  faqHeading: string;
  faqImage: string;
  happyClientsCount: number;
  happyClientsLabel: string;
  happyClientsText: string;
  faqs: Faq[];
}

export default function ServiceDetailClient(props: Props) {
  const {
    breadcrumbTitle, breadcrumbClass,
    aboutSubtitle, aboutHeading, aboutParagraphs, aboutImage,
    testimonialImage, testimonialQuote, testimonialSubText,
    testimonialAuthorImage, testimonialAuthorName, testimonialAuthorRole,
    ctaTitle, ctaButtonText, ctaButtonLink,
    features, processSubtitle, processHeading, processTabs,
    faqSubtitle, faqHeading, faqImage,
    happyClientsCount, happyClientsLabel, happyClientsText,
    faqs, slug,
  } = props;

  const [activeTab, setActiveTab] = useState(processTabs[0]?.id ?? "");
  const activeStep = processTabs.find(t => t.id === activeTab) ?? processTabs[0];

  return (
    <>
      {/* Breadcrumb */}
      <div className={breadcrumbClass}>
        <div className="overlay-5"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="breadcrumb-title"><h1>{breadcrumbTitle}</h1></div>
              <div className="breadcrumb-icon"><i className="las la-angle-down"></i></div>
            </div>
          </div>
        </div>
      </div>

      {/* About / Intro */}
      <div id="about-3" className="about-section about-three section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 order-2 order-lg-1">
              <div className="about-content-wrap">
                <div className="section-title">
                  <div className="heading-animation">
                    <h6 className="text-secondary">{aboutSubtitle}</h6>
                    <h2>{aboutHeading}</h2>
                  </div>
                </div>
                <div className="p-animation">
                  {aboutParagraphs.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 text-lg-end order-1 order-lg-2">
              <div className="about-bg-wrapper">
                {aboutImage && <Image src={aboutImage} alt={aboutHeading} width={600} height={500} />}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial block */}
      <div id="testimonial-3" className="testimonial-section gray-bg section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="testimonial-bg">
                {testimonialImage && (
                  <Image src={testimonialImage} alt="Testimonial" width={600} height={450} style={{ width: "100%", height: "auto" }} />
                )}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="testimonial-content">
                <div className="testimonial-icon">
                  <Image src="/assets/img/straight-quotes.png" alt="Quote" width={40} height={40} />
                </div>
                <div className="testimonial-text">
                  <h3>&ldquo;{testimonialQuote}&rdquo;</h3>
                  <p>{testimonialSubText}</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-img">
                    {testimonialAuthorImage && <Image src={testimonialAuthorImage} alt={testimonialAuthorName} width={60} height={60} />}
                  </div>
                  <div className="author-desc">
                    <h5>{testimonialAuthorName}</h5>
                    <h6>{testimonialAuthorRole}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section section-padding cta-contact heading-info dark-bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-8 col-md-8">
              <div className="cta-title">
                <div className="section-title">
                  <h2 className="text-white">{ctaTitle}</h2>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 text-lg-end">
              <div className="cta-btn">
                <a href={ctaButtonLink} className="white-btn">{ctaButtonText}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      {features.length > 0 && (
        <div className="feature-section section-padding pt-0">
          <div className="container">
            <div className="row">
              {features.map((f, i) => (
                <div key={i} className="col-xl-4 col-lg-4 col-md-4">
                  <div className="single-feature-wrap">
                    <div className="feature-icon">
                      {f.img && <Image src={f.img} alt={f.title} width={60} height={60} />}
                    </div>
                    <h5>{f.title}</h5>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Working Process */}
      {processTabs.length > 0 && (
        <div className="process-section section-padding pt-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 text-center">
                <div className="section-title">
                  <h6>{processSubtitle}</h6>
                  <h2>{processHeading}</h2>
                </div>
              </div>
            </div>
            <div className="row gx-5 justify-content-center">
              <nav>
                <div className="nav project-list justify-content-center" role="tablist">
                  {processTabs.map(tab => (
                    <button
                      key={tab.id}
                      className={`nav-link${activeTab === tab.id ? " active" : ""}`}
                      onClick={() => setActiveTab(tab.id)}
                      type="button"
                    >{tab.label}</button>
                  ))}
                </div>
              </nav>
              {activeStep && (
                <div className="tab-content mt-60">
                  <div className="tab-pane fade active show">
                    <div className="row align-items-center">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="process-content-wrap">
                          <div className="section-title">
                            <h6>{activeStep.stepLabel}</h6>
                            <h2>{activeStep.heading}</h2>
                          </div>
                          <p>{activeStep.description}</p>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="process-bg-wrap">
                          {activeStep.image && <Image src={activeStep.image} alt={activeStep.heading} width={600} height={400} />}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Map */}
      <ServiceMap />

      {/* FAQ */}
      <div className="faq-section section-padding pt-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="section-title">
                <h6>{faqSubtitle}</h6>
                <h2>{faqHeading}</h2>
              </div>
              <div className="cp-custom-accordion">
                <div className="accordions" id={`accordion-${slug}`}>
                  {faqs.map((faq, i) => (
                    <div key={i} className="accordion-items">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-buttons"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#faq-${slug}-${i}`}
                          aria-expanded={i === 0 ? "true" : "false"}
                        >
                          <span>{faq.question}</span>
                        </button>
                      </h2>
                      <div
                        id={`faq-${slug}-${i}`}
                        className={`accordion-collapse collapse${i === 0 ? " show" : ""}`}
                        data-bs-parent={`#accordion-${slug}`}
                      >
                        <div className="accordion-body">{faq.answer}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 text-lg-end">
              <div className="counter-wrap">
                <div className="counter-img">
                  {faqImage && <Image src={faqImage} alt="FAQ" width={500} height={350} style={{ width: "100%", height: "auto" }} />}
                </div>
                <div className="counter-content">
                  <div className="single-counter-item dark-bg">
                    <h6>{happyClientsLabel}</h6>
                    <h1><span className="odometer" data-count={happyClientsCount}>{happyClientsCount}</span>+</h1>
                    <p>{happyClientsText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Carousel */}
      <TestimonialSection />
    </>
  );
}
