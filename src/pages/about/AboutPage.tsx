import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import AboutSection from "../../components/sections/AboutSection";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-32">
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
