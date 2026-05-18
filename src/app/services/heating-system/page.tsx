export const dynamic = 'force-dynamic';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchPopup from "@/components/SearchPopup";
import ServiceDetailClient from "@/components/ServiceDetailClient";
import { connectDB } from "@/lib/mongodb";
import ServicePageModel from "@/lib/models/ServicePage";

const SLUG = "heating-system";

const defaults = {
  breadcrumbTitle: "Heating System",
  breadcrumbClass: "breadcum-info",
  aboutSubtitle: "Designed To Grow Your Business",
  aboutHeading: "Heating System Repair & Installation Services",
  aboutParagraphs: [
    "We provide reliable and efficient heating system services for homes and businesses. Whether your heater is not working properly or you need a new installation, our skilled technicians are ready to help.",
    "We provide expert heating system repair and installation services, ensuring efficient performance, reliable operation, and long-lasting comfort for your home.",
    "Stay warm and comfortable with our reliable heating system services. We specialize in installation, repair, and maintenance of all types of heating systems.",
  ],
  aboutImage: "/assets/img/heating/h-3.jpg",
  testimonialImage: "/assets/img/testimonial/testimonial-img.jpg",
  testimonialQuote: "Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed.",
  testimonialSubText: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.",
  testimonialAuthorImage: "/assets/img/testimonial/ceo.jpg",
  testimonialAuthorName: "Francis Fooler",
  testimonialAuthorRole: "CEO, shromik Inc.",
  ctaTitle: "Secure Your Service Appointment!",
  ctaButtonText: "Contact Us",
  ctaButtonLink: "/contact",
  features: [
    { img: "/assets/img/feature/1.png", title: "Quality Service", desc: "We provide top-quality HVAC services using advanced tools and experienced technicians." },
    { img: "/assets/img/feature/2.png", title: "Affordable Price", desc: "Our pricing is transparent and budget-friendly with no hidden charges." },
    { img: "/assets/img/feature/3.png", title: "Expert Technicians", desc: "Our certified professionals have years of experience in handling all types of HVAC systems." },
  ],
  processSubtitle: "What We Offer",
  processHeading: "Working Process in 3 Steps",
  processTabs: [
    { id: "discovery", label: "Heating Planning", stepLabel: "Step 1", heading: "Meeting clients & planning concept", description: "We carefully inspect your property, evaluate insulation, room size, and existing systems to understand your heating needs.", image: "/assets/img/heating/h-1.jpg" },
    { id: "design", label: "Equipment Preparation", stepLabel: "Step 2", heading: "Testing material with equipment", description: "We carefully select and arrange high-quality heating units, components, and tools required for the installation.", image: "/assets/img/heating/h-2.jpg" },
    { id: "implementation", label: "Installation & Testing", stepLabel: "Step 3", heading: "Installation Plumbing Service Smoothly", description: "Our skilled technicians carefully install the heating system with precision, ensuring all components are properly fitted.", image: "/assets/img/heating/h-4.png" },
  ],
  faqSubtitle: "FAQ",
  faqHeading: "Servicing Excellence Above and Beyond",
  faqImage: "/assets/img/Conditioning/faq.jpg",
  happyClientsCount: 124,
  happyClientsLabel: "Happy Clients",
  happyClientsText: "Adipiscing elit, do eiusm.",
  faqs: [
    { question: "How often should I service my heating system?", answer: "It's recommended to service your heating system at least once a year to ensure efficiency, safety, and long-term performance." },
    { question: "What are common signs my heating system needs repair?", answer: "Unusual noises, uneven heating, higher energy bills, or weak airflow are common signs that your system needs professional inspection." },
    { question: "How long does a heating system installation take?", answer: "Most installations are completed within a day, depending on the system type and property size." },
  ],
};

async function getData() {
  try {
    await connectDB();
    const doc = await ServicePageModel.findOne({ slug: SLUG }).lean();
    return doc ? JSON.parse(JSON.stringify(doc)) : null;
  } catch { return null; }
}

export default async function HeatingSystemPage() {
  const doc = await getData();
  const d = doc as any;

  const props = {
    slug: SLUG,
    breadcrumbTitle:        d?.breadcrumbTitle        ?? defaults.breadcrumbTitle,
    breadcrumbClass:        d?.breadcrumbClass        ?? defaults.breadcrumbClass,
    aboutSubtitle:          d?.aboutSubtitle          ?? defaults.aboutSubtitle,
    aboutHeading:           d?.aboutHeading           ?? defaults.aboutHeading,
    aboutParagraphs:        d?.aboutParagraphs?.length ? d.aboutParagraphs : defaults.aboutParagraphs,
    aboutImage:             d?.aboutImage             ?? defaults.aboutImage,
    testimonialImage:       d?.testimonialImage       ?? defaults.testimonialImage,
    testimonialQuote:       d?.testimonialQuote       ?? defaults.testimonialQuote,
    testimonialSubText:     d?.testimonialSubText     ?? defaults.testimonialSubText,
    testimonialAuthorImage: d?.testimonialAuthorImage ?? defaults.testimonialAuthorImage,
    testimonialAuthorName:  d?.testimonialAuthorName  ?? defaults.testimonialAuthorName,
    testimonialAuthorRole:  d?.testimonialAuthorRole  ?? defaults.testimonialAuthorRole,
    ctaTitle:               d?.ctaTitle               ?? defaults.ctaTitle,
    ctaButtonText:          d?.ctaButtonText          ?? defaults.ctaButtonText,
    ctaButtonLink:          d?.ctaButtonLink          ?? defaults.ctaButtonLink,
    features:               d?.features?.length       ? d.features       : defaults.features,
    processSubtitle:        d?.processSubtitle        ?? defaults.processSubtitle,
    processHeading:         d?.processHeading         ?? defaults.processHeading,
    processTabs:            d?.processTabs?.length    ? d.processTabs    : defaults.processTabs,
    faqSubtitle:            d?.faqSubtitle            ?? defaults.faqSubtitle,
    faqHeading:             d?.faqHeading             ?? defaults.faqHeading,
    faqImage:               d?.faqImage               ?? defaults.faqImage,
    happyClientsCount:      d?.happyClientsCount      ?? defaults.happyClientsCount,
    happyClientsLabel:      d?.happyClientsLabel      ?? defaults.happyClientsLabel,
    happyClientsText:       d?.happyClientsText       ?? defaults.happyClientsText,
    faqs:                   d?.faqs?.length           ? d.faqs           : defaults.faqs,
  };

  return (
    <>
      <Header />
      <ServiceDetailClient {...props} />
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
