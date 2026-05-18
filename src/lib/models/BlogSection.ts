import { Schema, model, models } from 'mongoose';

export interface IBlogPost { image: string; category: string; title: string; date: string; comments: string; link: string; order: number }

export interface IBlogSection {
  subtitle: string;
  heading: string;
  posts: IBlogPost[];
}

const postSchema = new Schema<IBlogPost>({
  image: { type: String, default: '/assets/img/blog/1-1.jpg' },
  category: { type: String, default: 'General' },
  title: { type: String, default: '' },
  date: { type: String, default: '' },
  comments: { type: String, default: '0 comments' },
  link: { type: String, default: '#' },
  order: { type: Number, default: 0 },
});

const schema = new Schema<IBlogSection>({
  subtitle: { type: String, default: 'From Our Blog' },
  heading: { type: String, default: 'Articles About Avatar Home Service' },
  posts: { type: [postSchema], default: [] },
}, { timestamps: true });

export default models.BlogSection || model<IBlogSection>('BlogSection', schema);
