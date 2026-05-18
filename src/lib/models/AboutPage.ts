import { Schema, model, models } from 'mongoose';

// Top about section
// Service dark section
// Counter section
// Service slider
// Team section (reuses TeamSection model)

const serviceSchema = new Schema({
  img:   { type: String, default: '/assets/img/service/1-1.png' },
  title: { type: String, default: '' },
  link:  { type: String, default: '#' },
}, { _id: false });

const counterSchema = new Schema({
  number: { type: Number, default: 0 },
  suffix: { type: String, default: '+' },
  label:  { type: String, default: '' },
}, { _id: false });

const sliderSchema = new Schema({
  text:     { type: String, default: '' },
  isStroke: { type: Boolean, default: false },
}, { _id: false });

export interface IAboutPage {
  // Breadcrumb
  breadcrumbTitle: string;

  // About hero
  aboutSubtitle: string;
  aboutHeading: string;
  aboutDescription: string;
  aboutPrimaryImage: string;
  aboutSecondaryImage: string;
  aboutListItems: string[];

  // Service dark section
  serviceSubtitle: string;
  serviceHeading: string;
  serviceDesc1: string;
  serviceDesc2: string;
  services: { img: string; title: string; link: string }[];

  // Counter section
  counterSubtitle: string;
  counterHeading: string;
  counterDescription: string;
  counterImage: string;
  counters: { number: number; suffix: string; label: string }[];

  // Slider ticker
  sliderItems: { text: string; isStroke: boolean }[];
}

const schema = new Schema<IAboutPage>({
  breadcrumbTitle: { type: String, default: 'About Us' },

  aboutSubtitle:       { type: String, default: 'About Us' },
  aboutHeading:        { type: String, default: 'We make handyman service for your avtar home' },
  aboutDescription:    { type: String, default: 'At Avtar Heat Air, we specialize in providing professional heating, ventilation, and air conditioning (HVAC) services.' },
  aboutPrimaryImage:   { type: String, default: '/assets/img/about/about-1-1.jpg' },
  aboutSecondaryImage: { type: String, default: '/assets/img/about/about-1-2.jpg' },
  aboutListItems:      { type: [String], default: ['Professional Worker', 'Trusted Company', 'Best Quality Materials', 'Affordable Price'] },

  serviceSubtitle: { type: String, default: 'What We Offer' },
  serviceHeading:  { type: String, default: 'High Quality plumbing Services Offered' },
  serviceDesc1:    { type: String, default: 'Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  serviceDesc2:    { type: String, default: 'Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  services: { type: [serviceSchema], default: [
    { img: '/assets/img/service/1-1.png', title: 'Plumbing Installation', link: '#' },
    { img: '/assets/img/service/1-2.png', title: 'Electrical Work', link: '#' },
    { img: '/assets/img/service/1-3.png', title: 'Carpentry Solutions', link: '#' },
    { img: '/assets/img/service/1-4.png', title: 'Home Renovation', link: '#' },
  ]},

  counterSubtitle:    { type: String, default: 'Designed To Grow Your Business' },
  counterHeading:     { type: String, default: 'Raising the Standard — Protect Your Home' },
  counterDescription: { type: String, default: 'Nulla gravida dignissim magna, lacinia suscipit diam. Ut ut viverra velit.' },
  counterImage:       { type: String, default: '/assets/img/about/about-3-1.jpg' },
  counters: { type: [counterSchema], default: [
    { number: 310, suffix: '+', label: 'Project Completed' },
    { number: 156, suffix: '+', label: 'Satisfied Clients' },
    { number: 75,  suffix: '',  label: 'Awards Win' },
  ]},

  sliderItems: { type: [sliderSchema], default: [
    { text: 'Plumbing', isStroke: false },
    { text: 'Electrical Work', isStroke: true },
    { text: 'Carpentry', isStroke: false },
    { text: 'Plumbing Installation', isStroke: true },
  ]},
}, { timestamps: true });

export default models.AboutPage || model<IAboutPage>('AboutPage', schema);
