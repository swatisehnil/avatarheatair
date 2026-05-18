import { Schema, model, models } from 'mongoose';

const commentSchema = new Schema({
  image: { type: String, default: '' },
  name:  { type: String, default: '' },
  date:  { type: String, default: '' },
  text:  { type: String, default: '' },
}, { _id: false });

const categorySchema = new Schema({
  label: { type: String, default: '' },
  link:  { type: String, default: '#' },
}, { _id: false });

const recentPostSchema = new Schema({
  image: { type: String, default: '' },
  date:  { type: String, default: '' },
  title: { type: String, default: '' },
  link:  { type: String, default: '#' },
}, { _id: false });

export interface IBlogPage {
  // Banner
  bannerTitle:    string;
  bannerDate:     string;
  bannerComments: string;
  bannerAuthor:   string;

  // Main content
  introText:        string;
  quoteText:        string;
  quoteAuthorName:  string;
  quoteAuthorRole:  string;
  subHeading:       string;
  bodyText:         string;
  featureImage1:    string;
  featureImage2:    string;
  bodyText2:        string;

  // Tags & pagination
  tags:         string[];
  prevPostLink: string;
  nextPostLink: string;

  // Comments
  comments: { image: string; name: string; date: string; text: string }[];

  // Sidebar
  categories:  { label: string; link: string }[];
  recentPosts: { image: string; date: string; title: string; link: string }[];
  popularTags: string[];
}

const schema = new Schema<IBlogPage>({
  bannerTitle:    { type: String, default: 'Plumbing Installation: Three ways you can invest properly' },
  bannerDate:     { type: String, default: '03 May 2026' },
  bannerComments: { type: String, default: '02 Comments' },
  bannerAuthor:   { type: String, default: 'By Admin' },

  introText:       { type: String, default: '' },
  quoteText:       { type: String, default: '' },
  quoteAuthorName: { type: String, default: '' },
  quoteAuthorRole: { type: String, default: '' },
  subHeading:      { type: String, default: '' },
  bodyText:        { type: String, default: '' },
  featureImage1:   { type: String, default: '/assets/img/blog/blog-details-img-1.jpg' },
  featureImage2:   { type: String, default: '/assets/img/blog/blog-details-img-2.jpg' },
  bodyText2:       { type: String, default: '' },

  tags:         { type: [String], default: ['Advisor', 'Financials'] },
  prevPostLink: { type: String, default: '#' },
  nextPostLink: { type: String, default: '#' },

  comments: { type: [commentSchema], default: [
    { image: '/assets/img/blog/comment-1.png', name: 'Patric Evra',      date: 'June 02, 2025 - 9:44 am', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.' },
    { image: '/assets/img/blog/comment-2.jpg', name: 'Monica Benedict',  date: 'June 06, 2025 - 7:28 am', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.' },
  ]},

  categories: { type: [categorySchema], default: [
    { label: 'Repair',                link: '#' },
    { label: 'Inspection',            link: '#' },
    { label: 'Plumbing Installation', link: '#' },
    { label: 'Plumbing Fabrication',  link: '#' },
    { label: 'Home Renovation',       link: '#' },
  ]},

  recentPosts: { type: [recentPostSchema], default: [
    { image: '/assets/img/blog/recent-post-1.jpg', date: 'May 22, 2025', title: 'The main things that affect Plumbing tiles prices today', link: '#' },
    { image: '/assets/img/blog/recent-post-2.jpg', date: 'May 15, 2025', title: 'How to find jobs in the plumbing service', link: '#' },
    { image: '/assets/img/blog/recent-post-3.jpg', date: 'May 07, 2025', title: 'The most profitable plumbing business ideas', link: '#' },
  ]},

  popularTags: { type: [String], default: ['Repair', 'Maintenance', 'Inspection', 'Industrial', 'Manufacture'] },
}, { timestamps: true });

export default models.BlogPage || model<IBlogPage>('BlogPage', schema);
