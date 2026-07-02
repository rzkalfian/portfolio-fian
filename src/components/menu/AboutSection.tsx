import AboutProfileCard from "../common/AboutProfileCard";
import AboutHistoryCard from "../common/AboutHistoryCard";

export default function AboutSection() {
  return (
    <section id="about" className="relative px-6 pt-16 pb-16 md:px-18 md:pt-24 md:pb-24">
      <AboutProfileCard />
      <AboutHistoryCard />
    </section>
  );
}
