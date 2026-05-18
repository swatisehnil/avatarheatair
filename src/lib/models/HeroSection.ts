import { Schema, model, models } from 'mongoose';

export interface IHeroSlide {
  backgroundImage: string;
  subtitle: string;
  heading: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export interface IHeroSection {
  slides: IHeroSlide[];
}

const slideSchema = new Schema<IHeroSlide>({
  backgroundImage: { type: String, default: '/assets/img/slider/slider-1.jpg' },
  subtitle: { type: String, default: 'Smart Solutions' },
  heading: { type: String, default: 'Trusted Heating & Air Conditioning Experts' },
  description: { type: String, default: 'At Avatar Heat & Air, we provide expert HVAC installation, repair, and maintenance to keep your home and business comfortable all year round.' },
  ctaText: { type: String, default: 'Get a Free Quote' },
  ctaLink: { type: String, default: '/contact' },
});

const schema = new Schema<IHeroSection>({
  slides: { type: [slideSchema], default: [] },
}, { timestamps: true });

export default models.HeroSection || model<IHeroSection>('HeroSection', schema);
