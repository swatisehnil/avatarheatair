import mongoose, { Schema, model, models } from 'mongoose';

export interface ISiteSettings {
  email: string;
  phone: string;
  address: string;
  socialLinks: { facebook: string; instagram: string; youtube: string; linkedin: string; skype: string };
  logo: string;
  whiteLogo: string;
  copyrightText: string;
}

const schema = new Schema<ISiteSettings>({
  email: { type: String, default: 'AvatarHeatAir@gmail.com' },
  phone: { type: String, default: '+91 6391 10299' },
  address: { type: String, default: '503 Morningside Ave Union Beach NJ 07735' },
  socialLinks: {
    facebook: { type: String, default: '#' },
    instagram: { type: String, default: '#' },
    youtube: { type: String, default: '#' },
    linkedin: { type: String, default: '#' },
    skype: { type: String, default: '#' },
  },
  logo: { type: String, default: '/assets/img/logo-1.png' },
  whiteLogo: { type: String, default: '/assets/img/white-logo.png' },
  copyrightText: { type: String, default: '© 2026 design by rninfosoft. All rights reserved.' },
}, { timestamps: true });

export default models.SiteSettings || model<ISiteSettings>('SiteSettings', schema);
