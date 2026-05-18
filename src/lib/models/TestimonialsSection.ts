import { Schema, model, models } from 'mongoose';

export interface ITestimonial { image: string; name: string; role: string; quote: string; order: number }

export interface ITestimonialsSection {
  subtitle: string;
  heading: string;
  testimonials: ITestimonial[];
}

const testimonialSchema = new Schema<ITestimonial>({
  image: { type: String, default: '/assets/img/testimonial/1.jpg' },
  name: { type: String, default: '' },
  role: { type: String, default: '' },
  quote: { type: String, default: '' },
  order: { type: Number, default: 0 },
});

const schema = new Schema<ITestimonialsSection>({
  subtitle: { type: String, default: 'Testimonial' },
  heading: { type: String, default: 'Happy Client Says About Us' },
  testimonials: { type: [testimonialSchema], default: [] },
}, { timestamps: true });

export default models.TestimonialsSection || model<ITestimonialsSection>('TestimonialsSection', schema);
