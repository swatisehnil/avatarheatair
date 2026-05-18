import { Schema, model, models } from 'mongoose';

export interface IEnquiry {
  name:    string;
  email:   string;
  message: string;
  read:    boolean;
  createdAt?: Date;
}

const schema = new Schema<IEnquiry>({
  name:    { type: String, required: true },
  email:   { type: String, required: true },
  message: { type: String, required: true },
  read:    { type: Boolean, default: false },
}, { timestamps: true });

export default models.Enquiry || model<IEnquiry>('Enquiry', schema);
