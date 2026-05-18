export const dynamic = 'force-dynamic';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchPopup from "@/components/SearchPopup";
import ServiceDetailClient from "@/components/ServiceDetailClient";
import { connectDB } from "@/lib/mongodb";
import ServicePageModel from "@/lib/models/ServicePage";

const SLUG = "air-conditioning";

const defaults = {
  breadcrumbTitle: "Air Conditioning",
  breadcrumbClass: "breadcum-img",
  breadcrumbImage: "",
  aboutSubtitle: "Designed To Grow Your Business",
  aboutHeading: "Air Conditioning Repair & Installation Services",
  aboutParagraphs: [
    "We provide reliable and efficient air conditioning services to keep your home and office cool and comfortable. Whether your AC is not cooling properly or you need a new installation, our expert technicians are here to help.",
    "Our team specializes in AC repair, installation, and maintenance, ensuring energy efficiency, optimal cooling, and long-lasting performance.",
    "Stay cool and comfortable with our expert air conditioning services. We provide complete AC solutions, including installation, repair, and maintenance for residential and commercial spaces.",
  ],
  aboutImage: "/assets/img/Conditioning/air-1.jpg",
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
    { img: "/assets/img/feature/1.png", title: "Quality Service", desc: "We deliver top-quality AC services using advanced tools and modern techniques." },
    { img: "/assets/img/feature/2.png", title: "Affordable Price", desc: "Transparent pricing with no hidden charges for complete peace of mind." },
    { img: "/assets/img/feature/3.png", title: "Expert Technicians", desc: "Skilled professionals with years of experience in handling all types of AC systems." },
  ],
  processSubtitle: "What We Offer",
  processHeading: "Working Process in 3 Steps",
  processTabs: [
    { id: "discovery", label: "AC Planning", stepLabel: "Step 1", heading: "Meeting clients & planning concept", description: "We begin by understanding your cooling requirements, inspecting your space, and evaluating factors like room size, insulation, and existing systems.", image: "/assets/img/Conditioning/air-2.jpg" },
    { id: "design", label: "Equipment Preparation", stepLabel: "Step 2", heading: "Testing material with equipment", description: "Our team carefully selects and prepares high-quality air conditioning units and components tailored to your needs.", image: "/assets/img/Conditioning/air-4.jpg" },
    { id: "implementation", label: "Installation & Testing", stepLabel: "Step 3", heading: "Installation AC Service Smoothly", description: "Our experts install the air conditioning system with precision and care. After installation, we perform complete testing to ensure optimal cooling performance.", image: "/assets/img/Conditioning/air-5.jpg" },
  ],
  faqSubtitle: "FAQ",
  faqHeading: "Everything You Need To Know About AC",
  faqImage: "/assets/img/Conditioning/faq.jpg",
  happyClientsCount: 124,
  happyClientsLabel: "Happy Clients",
  happyClientsText: "Adipiscing elit, do eiusm.",
  faqs: [
    { question: "How often should I service my air conditioner?", answer: "It is recommended to service your air conditioner at least once a year to ensure optimal performance, energy efficiency, and longer lifespan." },
    { question: "How do I know if my AC needs repair?", answer: "Common signs include weak cooling, unusual noises, bad odors, higher electricity bills, or frequent on/off cycling." },
    { question: "Which type of AC is best for my home?", answer: "The best AC depends on your room size, usage, and budget. Split ACs are ideal for homes, while central systems are better for large spaces." },
  ],
};

async function getData() {
  try {
    await connectDB();
    const doc = await ServicePageModel.findOne({ slug: SLUG }).lean();
    return doc ? JSON.parse(JSON.stringify(doc)) : null;
  } catch { return null; }
}

export default async function AirConditioningPage() {
  const doc = await getData();
  const d = doc as any;

  const props = {
    slug: SLUG,
    breadcrumbTitle:        d?.breadcrumbTitle        ?? defaults.breadcrumbTitle,
    breadcrumbClass:        d?.breadcrumbClass        ?? defaults.breadcrumbClass,
    breadcrumbImage:        d?.breadcrumbImage        ?? defaults.breadcrumbImage,
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

