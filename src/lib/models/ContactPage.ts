import { Schema, model, models } from 'mongoose';

const infoBoxSchema = new Schema({
  icon: { type: String, default: '' },
  text: { type: String, default: '' },
}, { _id: false });

export interface IContactPage {
  breadcrumbTitle: string;
  infoBoxes: { icon: string; text: string }[];
  formSubtitle: string;
  formHeading: string;
  contactBgImage: string;
  mapEmbedUrl: string;
}

const schema = new Schema<IContactPage>({
  breadcrumbTitle: { type: String, default: 'Contact' },
  infoBoxes: { type: [infoBoxSchema], default: [
    { icon: '/assets/img/contact/1.png', text: '503 Morningside Ave Union Beach NJ 07735' },
    { icon: '/assets/img/contact/2.png', text: 'AvatarHeatAir@gmail.com' },
    { icon: '/assets/img/contact/3.png', text: '+91 6391 10299' },
  ]},
  formSubtitle:    { type: String, default: 'Get in Touch' },
  formHeading:     { type: String, default: "Don't hesitate to contact us for info" },
  contactBgImage:  { type: String, default: '/assets/img/contact/contact-img.jpg' },
  mapEmbedUrl:     { type: String, default: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3690.404245521138!2d91.80989606467384!3d22.338360085303748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdewanhat%20near%20Chattogram!5e0!3m2!1sen!2sbd!4v1677069314806!5m2!1sen!2sbd' },
}, { timestamps: true });

export default models.ContactPage || model<IContactPage>('ContactPage', schema);
