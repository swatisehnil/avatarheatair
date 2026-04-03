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

export default function Home() {
  return (
    <>
      <HeaderTop />
      <Header />
      <HeroSlider />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <PromoSection />
      <VideoSection />
      <TestimonialSection />
      <TeamSection />
      <BlogSection />
      <Footer />
      <SearchPopup />

      {/* Back to Top */}
      <div className="progress-wrap">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </>
  );
}
