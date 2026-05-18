import { Schema, model, models } from 'mongoose';

export interface IProgressBar { id: string; label: string; percentage: number }

export interface IPromoSection {
  subtitle: string;
  heading: string;
  description: string;
  email: string;
  progressBars: IProgressBar[];
}

const barSchema = new Schema<IProgressBar>({
  id: { type: String, default: 'bar1' },
  label: { type: String, default: 'Service' },
  percentage: { type: Number, default: 80 },
});

const schema = new Schema<IPromoSection>({
  subtitle: { type: String, default: 'Custom Order' },
  heading: { type: String, default: 'We Are Committed to Best Service' },
  description: { type: String, default: 'Adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua.' },
  email: { type: String, default: 'AvatarHeatAir@gmail.com' },
  progressBars: { type: [barSchema], default: [] },
}, { timestamps: true });

export default models.PromoSection || model<IPromoSection>('PromoSection', schema);
