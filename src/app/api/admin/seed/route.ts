import { connectDB } from '@/lib/mongodb';
import HeroSection from '@/lib/models/HeroSection';
import AboutSection from '@/lib/models/AboutSection';
import ServicesSection from '@/lib/models/ServicesSection';
import ProjectsSection from '@/lib/models/ProjectsSection';
import PromoSection from '@/lib/models/PromoSection';
import VideoSection from '@/lib/models/VideoSection';
import TestimonialsSection from '@/lib/models/TestimonialsSection';
import TeamSection from '@/lib/models/TeamSection';
import BlogSection from '@/lib/models/BlogSection';
import SiteSettings from '@/lib/models/SiteSettings';
import { NextResponse } from 'next/server';

export async function POST() {
  await connectDB();

  await Promise.all([
    HeroSection.findOneAndUpdate({}, {
      slides: [{
        backgroundImage: '/assets/img/slider/slider-1.jpg',
        subtitle: 'Smart Solutions',
        heading: 'Trusted Heating & Air Conditioning Experts',
        description: 'At Avatar Heat & Air, we provide expert HVAC installation, repair, and maintenance to keep your home and business comfortable all year round.',
        ctaText: 'Get a Free Quote',
        ctaLink: '/contact',
      }],
    }, { upsert: true }),

    AboutSection.findOneAndUpdate({}, {
      subtitle: 'About Us',
      heading: 'About Avatar Home Service',
      description: 'Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies the dictum facilisis thr sem. Imperdiet massa turpis sit Lorem ipsum dolor sit amet consectetur amet a lectus mi ultricies the man',
      primaryImage: '/assets/img/about/about-1-1.jpg',
      secondaryImage: '/assets/img/about/about-1-2.jpg',
      features: [
        { icon: '/assets/img/about/1.png', title: 'Professional Staff', description: 'Overall, professional the man Engineers play' },
        { icon: '/assets/img/about/2.png', title: 'Customer Support', description: 'Overall, professional the man Engineers play' },
      ],
      ctaText: 'Read More',
      ctaLink: '/about',
    }, { upsert: true }),

    ServicesSection.findOneAndUpdate({}, {
      subtitle: 'Services',
      heading: 'We can handle all types of handyman services',
      services: [
        { icon: '/assets/img/service/1-1.png', title: 'Heating System', description: 'Our expert technicians are trained to handle furnaces, heat pumps...', link: '/services/heating-system', order: 1 },
        { icon: '/assets/img/service/1-2.png', title: 'Air Conditioning', description: 'Efficient air conditioning ensures comfort, cooling, and improved ...', link: '/services/air-conditioning', order: 2 },
        { icon: '/assets/img/service/1-3.png', title: 'Plumbing', description: 'Expert plumbing solutions ensure smooth water flow and efficient...', link: '/services/plumbing', order: 3 },
      ],
    }, { upsert: true }),

    ProjectsSection.findOneAndUpdate({}, {
      subtitle: 'Recent Project',
      heading: 'We Provide you the Highest Quality Work',
      projects: [
        { image: '/assets/img/project/1-1.jpg', title: 'Plumbing Installation', category: 'Home Repair', col: 'col-xl-6 col-lg-6 col-md-6', order: 1 },
        { image: '/assets/img/project/1-2.jpg', title: 'Painting Work', category: 'Home Renovation', col: 'col-xl-6 col-lg-6 col-md-6', order: 2 },
        { image: '/assets/img/project/1-3.jpg', title: 'Kitchen Cabinet', category: 'Leak Detection', col: 'col-xl-4 col-lg-4 col-md-6', order: 3 },
        { image: '/assets/img/project/1-4.jpg', title: 'Electrical Work', category: 'Home Renovation', col: 'col-xl-4 col-lg-4 col-md-6', order: 4 },
        { image: '/assets/img/project/1-5.jpg', title: 'Plumbing Repair', category: 'Home Renovation', col: 'col-xl-4 col-lg-4 col-md-4 d-none d-lg-block', order: 5 },
      ],
    }, { upsert: true }),

    PromoSection.findOneAndUpdate({}, {
      subtitle: 'Custom Order',
      heading: 'We Are Committed to Best Service',
      description: 'Adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua. Ut enim ad minim veniam, quisq wiusmod ut tempor incididunt ut labore et dolore sed do magna aliqua.',
      email: 'AvatarHeatAir@gmail.com',
      progressBars: [
        { id: 'bar1', label: 'Home Repair', percentage: 90 },
        { id: 'bar2', label: 'Home Renovation', percentage: 70 },
        { id: 'bar3', label: 'Handyman Service', percentage: 80 },
      ],
    }, { upsert: true }),

    VideoSection.findOneAndUpdate({}, {
      videoUrl: 'https://www.youtube.com/watch?v=hvSq38FChGU',
    }, { upsert: true }),

    TestimonialsSection.findOneAndUpdate({}, {
      subtitle: 'Testimonial',
      heading: 'Happy Client Says About Us',
      testimonials: [
        { image: '/assets/img/testimonial/1.jpg', name: 'Albert Krish', role: 'Social Activist', quote: 'The magic formula that successful businesses have discovered is to treat customers', order: 1 },
        { image: '/assets/img/testimonial/2.jpg', name: 'Bill Lorris', role: 'Business Man', quote: 'The magic formula that successful businesses have discovered is to treat customers', order: 2 },
        { image: '/assets/img/testimonial/3.jpg', name: 'Josh Batlar', role: 'Factory Foreman', quote: 'The magic formula that successful businesses have discovered is to treat customers', order: 3 },
        { image: '/assets/img/testimonial/4.jpg', name: 'Joe Root', role: 'Supervisor', quote: 'The magic formula that successful businesses have discovered is to treat customers', order: 4 },
      ],
    }, { upsert: true }),

    TeamSection.findOneAndUpdate({}, {
      subtitle: 'Our Team',
      heading: 'Meet Our talent & Professional Worker',
      description: 'At Avatar Home Repair, our team consists of highly skilled and experienced professionals dedicated to delivering top-quality home services.',
      teamMembers: [
        { image: '/assets/img/team/1-1.jpg', name: 'John Lewis', role: 'Operator', socialLinks: { facebook: '#', instagram: '#', linkedin: '#', skype: '#' }, order: 1 },
        { image: '/assets/img/team/1-2.jpg', name: 'John Lewis', role: 'Operator', socialLinks: { facebook: '#', instagram: '#', linkedin: '#', skype: '#' }, order: 2 },
        { image: '/assets/img/team/1-3.jpg', name: 'John Lewis', role: 'Operator', socialLinks: { facebook: '#', instagram: '#', linkedin: '#', skype: '#' }, order: 3 },
        { image: '/assets/img/team/1-4.jpg', name: 'John Lewis', role: 'Operator', socialLinks: { facebook: '#', instagram: '#', linkedin: '#', skype: '#' }, order: 4 },
      ],
      ctaText: 'See More',
      ctaLink: '#',
    }, { upsert: true }),

    BlogSection.findOneAndUpdate({}, {
      subtitle: 'From Our Blog',
      heading: 'Articles About Avatar Home Service',
      posts: [
        { image: '/assets/img/blog/1-1.jpg', category: 'Installation', title: 'What Are All The Different Plumbing Tiles?', date: 'November 30 2025', comments: '1 comment', link: '#', order: 1 },
        { image: '/assets/img/blog/1-2.jpg', category: 'Repairing', title: 'How to start a metal fabrication business', date: 'April 15 2025', comments: '1 comment', link: '#', order: 2 },
        { image: '/assets/img/blog/1-3.jpg', category: 'Renovation', title: 'A Complete Guide To The Slate Plumbings', date: 'April 8 2025', comments: '1 comment', link: '#', order: 3 },
        { image: '/assets/img/blog/1-4.jpg', category: 'Factory', title: 'The Benefits of Buying plumbing Online', date: 'April 2 2025', comments: '1 comment', link: '#', order: 4 },
      ],
    }, { upsert: true }),

    SiteSettings.findOneAndUpdate({}, {
      email: 'AvatarHeatAir@gmail.com',
      phone: '+91 6391 10299',
      address: '503 Morningside Ave Union Beach NJ 07735',
      socialLinks: { facebook: '#', instagram: '#', youtube: '#', linkedin: '#', skype: '#' },
      logo: '/assets/img/logo-1.png',
      whiteLogo: '/assets/img/white-logo.png',
      copyrightText: '© 2026 design by rninfosoft. All rights reserved.',
    }, { upsert: true }),
  ]);

  return NextResponse.json({ success: true, message: 'Database seeded successfully' });
}
