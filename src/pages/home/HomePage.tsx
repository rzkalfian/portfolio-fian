import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import ServiceSection from "../../components/menu/ServiceSection";
import FeaturedProjectsSection from "../../components/sections/FeaturedProjectsSection";
import HeroSection from "../../components/sections/HeroSection";
import TechStackSection from "../../components/sections/TechStackSection";
import TestimonialSection from "../../components/sections/TestimonialSection";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <TechStackSection />
        <ServiceSection />
        <FeaturedProjectsSection />
        <TestimonialSection />
      </main>

      <Footer />
    </>
  );
}