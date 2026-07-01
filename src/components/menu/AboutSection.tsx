import AboutProfileCard from "../common/AboutProfileCard";
import AboutHistoryCard from "../common/AboutHistoryCard";

export default function AboutSection() {
  return (
    <section id="about" className="relative px-18 pt-24 pb-24">
      <AboutProfileCard />
      <AboutHistoryCard />
    </section>
  );
}
