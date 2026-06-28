import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import ContactSection from "../../components/sections/ContactSection";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-32">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
