export const dynamic = 'force-dynamic';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchPopup from "@/components/SearchPopup";
import ServiceDetailClient from "@/components/ServiceDetailClient";
import { connectDB } from "@/lib/mongodb";
import ServicePageModel from "@/lib/models/ServicePage";

const SLUG = "plumbing";

const defaults = {
  breadcrumbTitle: "Plumbing",
  breadcrumbClass: "breadcum-imgs",
  aboutSubtitle: "Designed To Grow Your Business",
  aboutHeading: "Plumbing Installation & Repair",
  aboutParagraphs: [
    "We provide expert plumbing services for residential and commercial properties. From fixing leaks and blocked drains to complete pipe installations, our skilled plumbers ensure efficient and long-lasting solutions.",
    "Whether it's a minor repair or a major plumbing project, we deliver high-quality work with a focus on reliability. We provide reliable and professional plumbing services to keep your home or business running smoothly.",
    "Whether it's a dripping faucet, clogged drain, or a full pipe replacement, we ensure fast response times and long-lasting solutions.",
  ],
  aboutImage: "/assets/img/about/about-3-1.jpg",
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
    { img: "/assets/img/feature/1.png", title: "Quality Materials", desc: "We use high-quality pipes, fittings, and tools to ensure durable and long-lasting plumbing solutions." },
    { img: "/assets/img/feature/2.png", title: "Affordable Price", desc: "Our plumbing services come with transparent pricing and no hidden charges, giving you the best value." },
    { img: "/assets/img/feature/3.png", title: "Expert Plumbers", desc: "Our skilled and certified plumbers deliver precise repairs and professional installations every time." },
  ],
  processSubtitle: "What We Offer",
  processHeading: "Working Process in 3 Steps",
  processTabs: [
    { id: "discovery", label: "Plumbing Planning", stepLabel: "Step 1", heading: "Meeting clients & planning concept", description: "We carefully inspect your property to understand your plumbing needs, including pipes, fittings, and existing systems.", image: "/assets/img/plumbing/p-1.jpg" },
    { id: "design", label: "Equipment Preparation", stepLabel: "Step 2", heading: "Testing material with equipment", description: "We carefully select high-quality pipes, fittings, and tools required for the job. All materials are checked to ensure durability, safety, and compliance.", image: "/assets/img/process/1-2.jpg" },
    { id: "implementation", label: "Installation & Testing", stepLabel: "Step 3", heading: "Installation Plumbing Service Smoothly", description: "Our skilled plumbers carry out the installation with precision and care. After completion, we thoroughly test the system to ensure proper water flow.", image: "/assets/img/plumbing/p-2.jpg" },
  ],
  faqSubtitle: "FAQ",
  faqHeading: "Everything You Need To Know About Plumbing",
  faqImage: "/assets/img/Conditioning/faq.jpg",
  happyClientsCount: 124,
  happyClientsLabel: "Happy Clients",
  happyClientsText: "Adipiscing elit, do eiusm.",
  faqs: [
    { question: "Do you provide emergency plumbing services?", answer: "Yes, we offer quick and reliable emergency plumbing services to handle urgent issues like leaks and pipe bursts." },
    { question: "How often should plumbing systems be checked?", answer: "It is recommended to inspect your plumbing system at least once a year to prevent leaks, blockages, and costly repairs." },
    { question: "How long does plumbing installation take?", answer: "Installation time depends on the project size, but most standard installations are completed within a few hours." },
  ],
};

async function getData() {
  try {
    await connectDB();
    const doc = await ServicePageModel.findOne({ slug: SLUG }).lean();
    return doc ? JSON.parse(JSON.stringify(doc)) : null;
  } catch { return null; }
}

export default async function PlumbingPage() {
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
