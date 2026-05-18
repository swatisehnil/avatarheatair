import { Schema, model, models } from 'mongoose';

export interface IVideoSection { videoUrl: string }

const schema = new Schema<IVideoSection>({
  videoUrl: { type: String, default: 'https://www.youtube.com/watch?v=hvSq38FChGU' },
}, { timestamps: true });

export default models.VideoSection || model<IVideoSection>('VideoSection', schema);
