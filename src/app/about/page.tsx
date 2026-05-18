export const dynamic = 'force-dynamic';

import HeaderTop from "@/components/HeaderTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchPopup from "@/components/SearchPopup";
import Image from "next/image";
import { connectDB } from "@/lib/mongodb";
import AboutPageModel from "@/lib/models/AboutPage";
import TeamSectionModel from "@/lib/models/TeamSection";

async function getData() {
  try {
    await connectDB();
    const [page, team] = await Promise.all([
      AboutPageModel.findOne().lean(),
      TeamSectionModel.findOne().lean(),
    ]);
    return JSON.parse(JSON.stringify({ page, team }));
  } catch {
    return { page: null, team: null };
  }
}

export default async function AboutPage() {
  const { page: p, team: t } = await getData();

  // ── defaults ──
  const breadcrumbTitle    = (p as any)?.breadcrumbTitle    ?? "About Us";
  const aboutSubtitle      = (p as any)?.aboutSubtitle      ?? "About Us";
  const aboutHeading       = (p as any)?.aboutHeading       ?? "We make handyman service for your avtar home";
  const aboutDescription   = (p as any)?.aboutDescription   ?? "At Avtar Heat Air, we specialize in providing professional HVAC services.";
  const aboutPrimaryImage  = (p as any)?.aboutPrimaryImage  ?? "/assets/img/about/about-1-1.jpg";
  const aboutSecondaryImage = (p as any)?.aboutSecondaryImage ?? "/assets/img/about/about-1-2.jpg";
  const aboutListItems     = (p as any)?.aboutListItems     ?? ["Professional Worker", "Trusted Company", "Best Quality Materials", "Affordable Price"];

  const serviceSubtitle = (p as any)?.serviceSubtitle ?? "What We Offer";
  const serviceHeading  = (p as any)?.serviceHeading  ?? "High Quality plumbing Services Offered";
  const serviceDesc1    = (p as any)?.serviceDesc1    ?? "";
  const serviceDesc2    = (p as any)?.serviceDesc2    ?? "";
  const services        = (p as any)?.services        ?? [
    { img: "/assets/img/service/1-1.png", title: "Plumbing Installation", link: "#" },
    { img: "/assets/img/service/1-2.png", title: "Electrical Work", link: "#" },
    { img: "/assets/img/service/1-3.png", title: "Carpentry Solutions", link: "#" },
    { img: "/assets/img/service/1-4.png", title: "Home Renovation", link: "#" },
  ];

  const counterSubtitle    = (p as any)?.counterSubtitle    ?? "Designed To Grow Your Business";
  const counterHeading     = (p as any)?.counterHeading     ?? "Raising the Standard — Protect Your Home";
  const counterDescription = (p as any)?.counterDescription ?? "";
  const counterImage       = (p as any)?.counterImage       ?? "/assets/img/about/about-3-1.jpg";
  const counters           = (p as any)?.counters           ?? [
    { number: 310, suffix: "+", label: "Project Completed" },
    { number: 156, suffix: "+", label: "Satisfied Clients" },
    { number: 75,  suffix: "",  label: "Awards Win" },
  ];

  const sliderItems = (p as any)?.sliderItems ?? [
    { text: "Plumbing", isStroke: false },
    { text: "Electrical Work", isStroke: true },
    { text: "Carpentry", isStroke: false },
    { text: "Plumbing Installation", isStroke: true },
  ];

  const teamSubtitle    = (t as any)?.subtitle    ?? "Our Team";
  const teamHeading     = (t as any)?.heading     ?? "Meet Our talent & Professional Workers";
  const teamDescription = (t as any)?.description ?? "";
  const teamCtaText     = (t as any)?.ctaText     ?? "See More";
  const teamCtaLink     = (t as any)?.ctaLink     ?? "#";
  const teamMembers     = (t as any)?.teamMembers ?? [
    { image: "/assets/img/team/1-1.jpg", name: "John Lewis", role: "Operator", socialLinks: { facebook: "#", instagram: "#", linkedin: "#", skype: "#" } },
    { image: "/assets/img/team/1-2.jpg", name: "John Lewis", role: "Operator", socialLinks: { facebook: "#", instagram: "#", linkedin: "#", skype: "#" } },
    { image: "/assets/img/team/1-3.jpg", name: "John Lewis", role: "Operator", socialLinks: { facebook: "#", instagram: "#", linkedin: "#", skype: "#" } },
    { image: "/assets/img/team/1-4.jpg", name: "John Lewis", role: "Operator", socialLinks: { facebook: "#", instagram: "#", linkedin: "#", skype: "#" } },
  ];

  return (
    <>
      <HeaderTop />
      <Header />

      {/* Breadcrumb */}
      <div className="breadcrumb-area bread-bg">
        <div className="overlay-5"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="breadcrumb-title">
                <h1>{breadcrumbTitle}</h1>
              </div>
              <div className="breadcrumb-icon">
                <i className="las la-angle-down"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section section-padding pb-180">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 wow fadeInLeft animated" data-wow-delay="200ms">
              <div className="about-img-wrap">
                <div className="image-one wow fadeInUp" data-wow-delay=".2s">
                  <Image src={aboutPrimaryImage} alt="About" width={500} height={380} />
                </div>
                <div className="image-two wow fadeInUp" data-wow-delay=".4s">
                  <Image src={aboutSecondaryImage} alt="About" width={300} height={250} />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 wow fadeInUp animated" data-wow-delay="300ms">
              <div className="about-content-wrap">
                <div className="section-title">
                  <h6>{aboutSubtitle}</h6>
                  <h2>{aboutHeading}</h2>
                </div>
                <p>{aboutDescription}</p>
                {aboutListItems.length > 0 && (
                  <div className="about-list-item">
                    <ul>
                      {aboutListItems.map((item: string, i: number) => (
                        <li key={i}><i className="fa-solid fa-circle-check"></i>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Section (Dark BG) */}
      <div id="service-3" className="service-section dark-bg section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="section-title">
                <h6 className="text-white">{serviceSubtitle}</h6>
                <h2 className="text-white visible-slowly-right">{serviceHeading}</h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              {serviceDesc1 && <p className="text-white">{serviceDesc1}</p>}
              {serviceDesc2 && <p className="text-white">{serviceDesc2}</p>}
            </div>
          </div>
          <div className="row gy-4 mt-60">
            {services.map((service: any, idx: number) => (
              <div key={idx} className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`.${(idx + 1) * 2}s`}>
                <div className={`single-service-item${idx === services.length - 1 ? " b-none" : ""}`}>
                  <div className="service-icon">
                    <Image src={service.img} alt={service.title} width={60} height={60} />
                  </div>
                  <div className="service-title">
                    <h4>{service.title}</h4>
                  </div>
                  <a href={service.link || "#"} className="read_more_link">
                    <span className="link_text">Read More</span>
                    <span className="link_icon"><i className="las la-arrow-right"></i></span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Counter Section */}
      <div id="about-3" className="about-section about-three section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 order-2 order-lg-1">
              <div className="about-content-wrap">
                <div className="section-title">
                  <div className="heading-animation">
                    <h6 className="text-secondary">{counterSubtitle}</h6>
                    <h2 className="visible-slowly-right">{counterHeading}</h2>
                  </div>
                </div>
                <div className="p-animation">
                  <p>{counterDescription}</p>
                </div>
                <div className="row mt-60">
                  {counters.map((c: any, i: number) => (
                    <div key={i} className="col-xl-4 col-lg-4 col-md-4">
                      <div className="single-counter-box">
                        <div className="counter-number">
                          <span className="purecounter" data-purecounter-duration="0" data-purecounter-end={c.number}>{c.number}</span>
                        </div>
                        <span>{c.suffix}</span>
                        <h6>{c.label}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 text-lg-end order-1 order-lg-2 wow fadeInUp animated" data-wow-delay="400ms">
              <div className="about-bg-wrapper">
                <Image src={counterImage} alt="About" width={600} height={500} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Slider Ticker */}
      <div className="service_slider_wrap">
        <div className="slider_item">
          {sliderItems.map((s: any, i: number) => (
            <h5 key={i} className={s.isStroke ? "stroke" : ""}>
              <Image src="/assets/img/service-slider.png" alt="" width={20} height={20} />
              {s.text}
            </h5>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 order-2 order-lg-1">
              <div className="team-members-wrap">
                <div className="row">
                  {teamMembers.map((m: any, i: number) => (
                    <div key={i} className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={`.${(i + 1) * 2}s`}>
                      <div className="single-team-member">
                        <div className="team-bg">
                          <Image src={m.image} alt={m.name} width={300} height={350} />
                        </div>
                        <div className="team-hover-info">
                          <div className="team-title">
                            <h5>{m.name}</h5>
                            <span>{m.role}</span>
                          </div>
                        </div>
                        <div className="social-icon">
                          <a href={m.socialLinks?.facebook || "#"}><i className="lab la-facebook-f"></i></a>
                          <a href={m.socialLinks?.instagram || "#"}><i className="lab la-instagram"></i></a>
                          <a href={m.socialLinks?.linkedin || "#"}><i className="lab la-linkedin-in"></i></a>
                          <a href={m.socialLinks?.skype || "#"}><i className="la la-skype"></i></a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 order-1 order-lg-2">
              <div className="team-content-wrap">
                <div className="section-title">
                  <h6>{teamSubtitle}</h6>
                  <h2>{teamHeading}</h2>
                </div>
                {teamDescription && <p>{teamDescription}</p>}
                <a href={teamCtaLink} className="theme-btn mt-30">{teamCtaText}</a>
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
