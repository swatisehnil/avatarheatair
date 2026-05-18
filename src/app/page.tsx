export const dynamic = 'force-dynamic';

import { connectDB } from "@/lib/mongodb";
import HeroSectionModel from "@/lib/models/HeroSection";
import AboutSectionModel from "@/lib/models/AboutSection";
import ServicesSectionModel from "@/lib/models/ServicesSection";
import ProjectsSectionModel from "@/lib/models/ProjectsSection";
import PromoSectionModel from "@/lib/models/PromoSection";
import VideoSectionModel from "@/lib/models/VideoSection";
import TestimonialsSectionModel from "@/lib/models/TestimonialsSection";
import TeamSectionModel from "@/lib/models/TeamSection";
import BlogSectionModel from "@/lib/models/BlogSection";
import SiteSettingsModel from "@/lib/models/SiteSettings";

import HeaderTop from "@/components/HeaderTop";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ServiceSection from "@/components/ServiceSection";
import ProjectSection from "@/components/ProjectSection";
import PromoSection from "@/components/PromoSection";
import VideoSection from "@/components/VideoSection";
import TestimonialSection from "@/components/TestimonialSection";
import TeamSection from "@/components/TeamSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import SearchPopup from "@/components/SearchPopup";

async function getHomeData() {
  try {
    await connectDB();
    const [hero, about, services, projects, promo, video, testimonials, team, blog, settings] = await Promise.all([
      HeroSectionModel.findOne().lean(),
      AboutSectionModel.findOne().lean(),
      ServicesSectionModel.findOne().lean(),
      ProjectsSectionModel.findOne().lean(),
      PromoSectionModel.findOne().lean(),
      VideoSectionModel.findOne().lean(),
      TestimonialsSectionModel.findOne().lean(),
      TeamSectionModel.findOne().lean(),
      BlogSectionModel.findOne().lean(),
      SiteSettingsModel.findOne().lean(),
    ]);
    return JSON.parse(JSON.stringify({ hero, about, services, projects, promo, video, testimonials, team, blog, settings }));
  } catch {
    return {};
  }
}

export default async function Home() {
  const { hero, about, services, projects, promo, video, testimonials, team, blog, settings } = await getHomeData() as any;

  return (
    <>
      <HeaderTop
        email={settings?.email}
        phone={settings?.phone}
        socialLinks={settings?.socialLinks}
      />
      <Header />
      <HeroSlider slides={hero?.slides} />
      <AboutSection
        subtitle={about?.subtitle}
        heading={about?.heading}
        description={about?.description}
        primaryImage={about?.primaryImage}
        secondaryImage={about?.secondaryImage}
        features={about?.features}
        ctaText={about?.ctaText}
        ctaLink={about?.ctaLink}
      />
      <ServiceSection
        subtitle={services?.subtitle}
        heading={services?.heading}
        services={services?.services}
      />
      <ProjectSection
        subtitle={projects?.subtitle}
        heading={projects?.heading}
        projects={projects?.projects}
      />
      <PromoSection
        subtitle={promo?.subtitle}
        heading={promo?.heading}
        description={promo?.description}
        email={promo?.email}
        progressBars={promo?.progressBars}
      />
      <VideoSection videoUrl={video?.videoUrl} />
      <TestimonialSection
        subtitle={testimonials?.subtitle}
        heading={testimonials?.heading}
        testimonials={testimonials?.testimonials}
      />
      <TeamSection
        subtitle={team?.subtitle}
        heading={team?.heading}
        description={team?.description}
        teamMembers={team?.teamMembers}
        ctaText={team?.ctaText}
        ctaLink={team?.ctaLink}
      />
      <BlogSection
        subtitle={blog?.subtitle}
        heading={blog?.heading}
        posts={blog?.posts}
      />
      <Footer
        whiteLogo={settings?.whiteLogo}
        address={settings?.address}
        email={settings?.email}
        phone={settings?.phone}
        socialLinks={settings?.socialLinks}
        copyrightText={settings?.copyrightText}
      />
      <SearchPopup />
      <div className="progress-wrap">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </>
  );
}
