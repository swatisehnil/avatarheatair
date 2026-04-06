import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchPopup from "@/components/SearchPopup";
import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      <Header />

      {/* Breadcrumb Area */}
      <div className="breadcrumb-area bread-bg">
        <div className="overlay-5"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="breadcrumb-title">
                <h1>Contact</h1>
              </div>
              <div className="breadcrumb-icon">
                <i className="las la-angle-down"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="contact-info-wrapper section-padding pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="single-contact-info">
                <div className="contact-icon">
                  <Image src="/assets/img/contact/1.png" alt="Address" width={60} height={60} />
                </div>
                <p>503 Morningside Ave Union Beach NJ 07735</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="single-contact-info">
                <div className="contact-icon">
                  <Image src="/assets/img/contact/2.png" alt="Email" width={60} height={60} />
                </div>
                <p>AvatarHeatAir@gmail.com</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="single-contact-info">
                <div className="contact-icon">
                  <Image src="/assets/img/contact/3.png" alt="Phone" width={60} height={60} />
                </div>
                <p>+91 6391 10299</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <div className="contact-bg" style={{ backgroundImage: "url('/assets/img/contact/contact-img.jpg')" }}></div>
        <div className="contact-form-wrap gray-bg">
          <div className="section-title">
            <h6>Get in Touch</h6>
            <h2>Don&apos;t hesitate to <br /> contact us for info</h2>
          </div>
          <div className="contact-form">
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea name="message" id="message" cols={30} rows={10} placeholder="Message"></textarea>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="contact-page google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3690.404245521138!2d91.80989606467384!3d22.338360085303748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdewanhat%20near%20Chattogram!5e0!3m2!1sen!2sbd!4v1677069314806!5m2!1sen!2sbd"
          width="600"
          height="600"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
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
