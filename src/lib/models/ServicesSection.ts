import { Schema, model, models } from 'mongoose';

export interface IService { icon: string; title: string; description: string; link: string; order: number }

export interface IServicesSection {
  subtitle: string;
  heading: string;
  services: IService[];
}

const serviceSchema = new Schema<IService>({
  icon: { type: String, default: '/assets/img/service/1-1.png' },
  title: { type: String, default: 'Service' },
  description: { type: String, default: '' },
  link: { type: String, default: '#' },
  order: { type: Number, default: 0 },
});

const schema = new Schema<IServicesSection>({
  subtitle: { type: String, default: 'Services' },
  heading: { type: String, default: 'We can handle all types of handyman services' },
  services: { type: [serviceSchema], default: [] },
}, { timestamps: true });

export default models.ServicesSection || model<IServicesSection>('ServicesSection', schema);
