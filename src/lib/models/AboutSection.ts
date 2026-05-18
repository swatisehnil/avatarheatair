import { Schema, model, models } from 'mongoose';

export interface IAboutFeature { icon: string; title: string; description: string }

export interface IAboutSection {
  subtitle: string;
  heading: string;
  description: string;
  primaryImage: string;
  secondaryImage: string;
  features: IAboutFeature[];
  ctaText: string;
  ctaLink: string;
}

const featureSchema = new Schema<IAboutFeature>({
  icon: { type: String, default: '/assets/img/about/1.png' },
  title: { type: String, default: 'Professional Staff' },
  description: { type: String, default: 'Overall, professional the man Engineers play' },
});

const schema = new Schema<IAboutSection>({
  subtitle: { type: String, default: 'About Us' },
  heading: { type: String, default: 'About Avatar Home Service' },
  description: { type: String, default: 'Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies the dictum facilisis thr sem.' },
  primaryImage: { type: String, default: '/assets/img/about/about-1-1.jpg' },
  secondaryImage: { type: String, default: '/assets/img/about/about-1-2.jpg' },
  features: { type: [featureSchema], default: [] },
  ctaText: { type: String, default: 'Read More' },
  ctaLink: { type: String, default: '/about' },
}, { timestamps: true });

export default models.AboutSection || model<IAboutSection>('AboutSection', schema);
