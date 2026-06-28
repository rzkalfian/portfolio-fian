import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import FeaturedProjectsSection from "../../components/sections/FeaturedProjectsSection";
import HeroSection from "../../components/sections/HeroSection";
import StatsSection from "../../components/sections/StatsSection";
import TechStackSection from "../../components/sections/TechStackSection";
import TestimonialSection from "../../components/sections/TestimonialSection";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <StatsSection />
        <TechStackSection />
        <FeaturedProjectsSection />
        <TestimonialSection />
      </main>

      <Footer />
    </>
  );
}