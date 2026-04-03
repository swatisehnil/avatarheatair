import HeaderTop from "@/components/HeaderTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchPopup from "@/components/SearchPopup";
import Image from "next/image";

const services = [
  { id: 1, img: "/assets/img/service/1-1.png", title: "Plumbing\nInstallation" },
  { id: 2, img: "/assets/img/service/1-2.png", title: "Electrical\nWork" },
  { id: 3, img: "/assets/img/service/1-3.png", title: "Carpentry\nSolutions" },
  { id: 4, img: "/assets/img/service/1-4.png", title: "Home\nRenovation", bNone: true },
];

const teamMembers = [
  { id: 1, img: "/assets/img/team/1-1.jpg", name: "John Lewis", role: "Operator", delay: ".2s" },
  { id: 2, img: "/assets/img/team/1-2.jpg", name: "John Lewis", role: "Operator", delay: ".4s" },
  { id: 3, img: "/assets/img/team/1-3.jpg", name: "John Lewis", role: "Operator", delay: ".6s" },
  { id: 4, img: "/assets/img/team/1-4.jpg", name: "John Lewis", role: "Operator", delay: ".8s" },
];

export default function AboutPage() {
  return (
    <>
      <HeaderTop />
      <Header />

      {/* Breadcrumb Area */}
      <div className="breadcrumb-area bread-bg">
        <div className="overlay-5"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="breadcrumb-title">
                <h1>About Us</h1>
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
                  <Image src="/assets/img/about/about-1-1.jpg" alt="About" width={500} height={380} />
                </div>
                <div className="image-two wow fadeInUp" data-wow-delay=".4s">
                  <Image src="/assets/img/about/about-1-2.jpg" alt="About" width={300} height={250} />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 wow fadeInUp animated" data-wow-delay="300ms">
              <div className="about-content-wrap">
                <div className="section-title">
                  <h6>About Us</h6>
                  <h2>We make handyman <br /> service for your avtar home</h2>
                </div>
                <p>
                  At Avtar Heat Air, we specialize in providing professional heating, ventilation, and air
                  conditioning (HVAC) services. With years of experience and a commitment to quality, we ensure
                  that your indoor environment remains comfortable in every season. From installation to
                  maintenance and repairs, our solutions are designed to be efficient, affordable, and
                  long-lasting.
                </p>
                <div className="about-list-item">
                  <ul>
                    <li><i className="fa-solid fa-circle-check"></i>Professional Worker</li>
                    <li><i className="fa-solid fa-circle-check"></i>Trusted Company</li>
                    <li><i className="fa-solid fa-circle-check"></i>Best Quality Materials</li>
                    <li><i className="fa-solid fa-circle-check"></i>Affordable Price</li>
                  </ul>
                </div>
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
                <h6 className="text-white">What We Offer</h6>
                <h2 className="text-white visible-slowly-right">High Quality plumbing Services Offered</h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <p className="text-white">
                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <p className="text-white">
                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam.
              </p>
            </div>
          </div>
          <div className="row gy-4 mt-60">
            {services.map((service) => (
              <div
                key={service.id}
                className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay={`.${service.id * 2}s`}
              >
                <div className={`single-service-item${service.bNone ? " b-none" : ""}`}>
                  <div className="service-icon">
                    <Image src={service.img} alt={service.title} width={60} height={60} />
                  </div>
                  <div className="service-title">
                    <h4>{service.title.split("\n").map((line, i) => (
                      <span key={i}>{line}{i === 0 && <br />}</span>
                    ))}</h4>
                  </div>
                  <a href="#" className="read_more_link">
                    <span className="link_text">Read More</span>
                    <span className="link_icon"><i className="las la-arrow-right"></i></span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Counter Section */}
      <div id="about-3" className="about-section about-three section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 order-2 order-lg-1">
              <div className="about-content-wrap">
                <div className="section-title">
                  <div className="heading-animation">
                    <h6 className="text-secondary">Designed To Grow Your Business</h6>
                    <h2 className="visible-slowly-right">Raising the Standard <br /> Protect Your Home</h2>
                  </div>
                </div>
                <div className="p-animation">
                  <p>
                    Nulla gravida dignissim magna, lacinia suscipit diam. Ut ut viverra velit. Aenean et
                    felis arcu. Aliquam vitae justo erat. Integer sed lacus in tellus finibus gravida.
                  </p>
                </div>
                <div className="row mt-60">
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="single-counter-box">
                      <div className="counter-number">
                        <span className="purecounter" data-purecounter-duration="0" data-purecounter-end="310">310</span>
                      </div><span>+</span>
                      <h6>Project Completed</h6>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="single-counter-box">
                      <div className="counter-number">
                        <span className="purecounter" data-purecounter-duration="0" data-purecounter-end="156">156</span>
                      </div><span>+</span>
                      <h6>Satisfied Clients</h6>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="single-counter-box">
                      <div className="counter-number">
                        <span className="purecounter" data-purecounter-duration="0" data-purecounter-end="75">75</span>
                      </div><span></span>
                      <h6>Awards Win</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 text-lg-end order-1 order-lg-2 wow fadeInUp animated" data-wow-delay="400ms">
              <div className="about-bg-wrapper">
                <Image src="/assets/img/about/about-3-1.jpg" alt="About" width={600} height={500} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Slider */}
      <div className="service_slider_wrap">
        <div className="slider_item">
          <h5><Image src="/assets/img/service-slider.png" alt="" width={20} height={20} />Plumbing</h5>
          <h5 className="stroke"><Image src="/assets/img/service-slider.png" alt="" width={20} height={20} />Electrical Work</h5>
          <h5><Image src="/assets/img/service-slider.png" alt="" width={20} height={20} />Carpentry</h5>
          <h5 className="stroke"><Image src="/assets/img/service-slider.png" alt="" width={20} height={20} />Plumbing Installation</h5>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 order-2 order-lg-1">
              <div className="team-members-wrap">
                <div className="row">
                  {teamMembers.map((member) => (
                    <div
                      key={member.id}
                      className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                      data-wow-delay={member.delay}
                    >
                      <div className="single-team-member">
                        <div className="team-bg">
                          <Image src={member.img} alt={member.name} width={300} height={350} />
                        </div>
                        <div className="team-hover-info">
                          <div className="team-title">
                            <h5>{member.name}</h5>
                            <span>{member.role}</span>
                          </div>
                        </div>
                        <div className="social-icon">
                          <a href="#"><i className="lab la-facebook-f"></i></a>
                          <a href="#"><i className="lab la-instagram"></i></a>
                          <a href="#"><i className="lab la-linkedin-in"></i></a>
                          <a href="#"><i className="la la-skype"></i></a>
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
                  <h6>Our Team</h6>
                  <h2>Meet Our talent &amp; <br /> Professional Workers</h2>
                </div>
                <p>
                  Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim. Adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
                <a href="#" className="theme-btn mt-30">See More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <SearchPopup />

      {/* Back to Top */}
      <div className="progress-wrap">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </>
  );
}
