import { Schema, model, models } from 'mongoose';

const featureSchema = new Schema({
  img:   { type: String, default: '' },
  title: { type: String, default: '' },
  desc:  { type: String, default: '' },
}, { _id: false });

const processTabSchema = new Schema({
  id:          { type: String, default: '' },
  label:       { type: String, default: '' },
  stepLabel:   { type: String, default: '' },
  heading:     { type: String, default: '' },
  description: { type: String, default: '' },
  image:       { type: String, default: '' },
}, { _id: false });

const faqSchema = new Schema({
  question: { type: String, default: '' },
  answer:   { type: String, default: '' },
}, { _id: false });

export interface IServicePage {
  slug: string;

  breadcrumbTitle: string;
  breadcrumbClass: string;
  breadcrumbImage: string;

  aboutSubtitle:    string;
  aboutHeading:     string;
  aboutParagraphs:  string[];
  servicesList:     string[];
  aboutImage:       string;

  testimonialImage:      string;
  testimonialQuote:      string;
  testimonialSubText:    string;
  testimonialAuthorImage: string;
  testimonialAuthorName:  string;
  testimonialAuthorRole:  string;

  ctaTitle:      string;
  ctaButtonText: string;
  ctaButtonLink: string;

  features: { img: string; title: string; desc: string }[];

  processSubtitle: string;
  processHeading:  string;
  processTabs: { id: string; label: string; stepLabel: string; heading: string; description: string; image: string }[];

  faqSubtitle:        string;
  faqHeading:         string;
  faqImage:           string;
  happyClientsCount:  number;
  happyClientsLabel:  string;
  happyClientsText:   string;
  faqs: { question: string; answer: string }[];
}

const schema = new Schema<IServicePage>({
  slug: { type: String, required: true, unique: true },

  breadcrumbTitle: { type: String, default: '' },
  breadcrumbClass: { type: String, default: 'breadcum-info' },
  breadcrumbImage: { type: String, default: '' },

  aboutSubtitle:   { type: String, default: 'Designed To Grow Your Business' },
  aboutHeading:    { type: String, default: '' },
  aboutParagraphs: { type: [String], default: [] },
  servicesList:    { type: [String], default: [] },
  aboutImage:      { type: String, default: '' },

  testimonialImage:       { type: String, default: '/assets/img/testimonial/testimonial-img.jpg' },
  testimonialQuote:       { type: String, default: '' },
  testimonialSubText:     { type: String, default: '' },
  testimonialAuthorImage: { type: String, default: '/assets/img/testimonial/ceo.jpg' },
  testimonialAuthorName:  { type: String, default: '' },
  testimonialAuthorRole:  { type: String, default: '' },

  ctaTitle:      { type: String, default: 'Secure Your Service Appointment!' },
  ctaButtonText: { type: String, default: 'Contact Us' },
  ctaButtonLink: { type: String, default: '/contact' },

  features: { type: [featureSchema], default: [] },

  processSubtitle: { type: String, default: 'What We Offer' },
  processHeading:  { type: String, default: 'Working Process in 3 Steps' },
  processTabs:     { type: [processTabSchema], default: [] },

  faqSubtitle:       { type: String, default: 'FAQ' },
  faqHeading:        { type: String, default: '' },
  faqImage:          { type: String, default: '/assets/img/Conditioning/faq.jpg' },
  happyClientsCount: { type: Number, default: 124 },
  happyClientsLabel: { type: String, default: 'Happy Clients' },
  happyClientsText:  { type: String, default: 'Adipiscing elit, do eiusm.' },
  faqs:              { type: [faqSchema], default: [] },
}, { timestamps: true });

export default models.ServicePage || model<IServicePage>('ServicePage', schema);
