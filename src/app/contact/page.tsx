export const dynamic = 'force-dynamic';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchPopup from "@/components/SearchPopup";
import Image from "next/image";
import { connectDB } from "@/lib/mongodb";
import ContactPageModel from "@/lib/models/ContactPage";
import ContactForm from "@/components/ContactForm";

const defaults = {
  breadcrumbTitle: "Contact",
  infoBoxes: [
    { icon: "/assets/img/contact/1.png", text: "503 Morningside Ave Union Beach NJ 07735" },
    { icon: "/assets/img/contact/2.png", text: "AvatarHeatAir@gmail.com" },
    { icon: "/assets/img/contact/3.png", text: "+91 6391 10299" },
  ],
  formSubtitle: "Get in Touch",
  formHeading: "Don't hesitate to contact us for info",
  contactBgImage: "/assets/img/contact/contact-img.jpg",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3690.404245521138!2d91.80989606467384!3d22.338360085303748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdewanhat%20near%20Chattogram!5e0!3m2!1sen!2sbd!4v1677069314806!5m2!1sen!2sbd",
};

async function getData() {
  try {
    await connectDB();
    const doc = await ContactPageModel.findOne().lean();
    return doc ? JSON.parse(JSON.stringify(doc)) : null;
  } catch { return null; }
}

export default async function ContactPage() {
  const doc = await getData();
  const d = doc as any;

  const breadcrumbTitle = d?.breadcrumbTitle ?? defaults.breadcrumbTitle;
  const infoBoxes       = d?.infoBoxes?.length ? d.infoBoxes : defaults.infoBoxes;
  const formSubtitle    = d?.formSubtitle    ?? defaults.formSubtitle;
  const formHeading     = d?.formHeading     ?? defaults.formHeading;
  const contactBgImage  = d?.contactBgImage  ?? defaults.contactBgImage;
  const mapEmbedUrl     = d?.mapEmbedUrl     ?? defaults.mapEmbedUrl;

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
                <h1>{breadcrumbTitle}</h1>
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
            {infoBoxes.map((box: { icon: string; text: string }, i: number) => (
              <div key={i} className="col-xl-4 col-lg-4 col-md-6 col-12">
                <div className="single-contact-info">
                  <div className="contact-icon">
                    <Image src={box.icon} alt={`contact-icon-${i + 1}`} width={60} height={60} />
                  </div>
                  <p>{box.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <div className="contact-bg" style={{ backgroundImage: `url('${contactBgImage}')` }}></div>
        <div className="contact-form-wrap gray-bg">
          <div className="section-title">
            <h6>{formSubtitle}</h6>
            <h2>{formHeading}</h2>
          </div>
          <ContactForm />
        </div>
      </div>

      {/* Google Map */}
      <div className="contact-page google-map">
        <iframe
          src={mapEmbedUrl}
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

      <div className="progress-wrap">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </>
  );
}
