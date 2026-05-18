import { Schema, model, models } from 'mongoose';

export interface ITeamMember {
  image: string; name: string; role: string;
  socialLinks: { facebook: string; instagram: string; linkedin: string; skype: string };
  order: number;
}

export interface ITeamSection {
  subtitle: string; heading: string; description: string;
  teamMembers: ITeamMember[];
  ctaText: string; ctaLink: string;
}

const memberSchema = new Schema<ITeamMember>({
  image: { type: String, default: '/assets/img/team/1-1.jpg' },
  name: { type: String, default: '' },
  role: { type: String, default: '' },
  socialLinks: {
    facebook: { type: String, default: '#' },
    instagram: { type: String, default: '#' },
    linkedin: { type: String, default: '#' },
    skype: { type: String, default: '#' },
  },
  order: { type: Number, default: 0 },
});

const schema = new Schema<ITeamSection>({
  subtitle: { type: String, default: 'Our Team' },
  heading: { type: String, default: 'Meet Our talent & Professional Worker' },
  description: { type: String, default: 'At Avatar Home Repair, our team consists of highly skilled and experienced professionals.' },
  teamMembers: { type: [memberSchema], default: [] },
  ctaText: { type: String, default: 'See More' },
  ctaLink: { type: String, default: '#' },
}, { timestamps: true });

export default models.TeamSection || model<ITeamSection>('TeamSection', schema);
