import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import ServiceSection from "../../components/sections/ServiceSection";

export default function ServicePage() {
  return (
    <>
      <Header />
      <main className="pt-32">
        <ServiceSection />
      </main>
      <Footer />
    </>
  );
}
