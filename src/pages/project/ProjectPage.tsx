import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import ProjectSection from "../../components/sections/ProjectSection";

export default function ProjectPage() {
  return (
    <>
      <Header />
      <main className="pt-32">
        <ProjectSection />
      </main>
      <Footer />
    </>
  );
}
