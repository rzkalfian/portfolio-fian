import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import HeroSection from "../../components/sections/HeroSection";
import SkillSection from "../../components/sections/SkillSection";


export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <SkillSection />
        <SkillSection />
        <SkillSection />
        <SkillSection />
        <SkillSection />
      </main>

      <Footer />
    </>
  );
}