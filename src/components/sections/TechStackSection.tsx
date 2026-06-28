import SkillCard from "../common/SkillCard";

const skills = [
  { name: "React", icon: "⚛️", level: "Expert" as const },
  { name: "TypeScript", icon: "🔷", level: "Expert" as const },
  { name: "Tailwind CSS", icon: "🎨", level: "Expert" as const },
  { name: "Next.js", icon: "▲", level: "Advanced" as const },
  { name: "Vite", icon: "⚡", level: "Advanced" as const },
  { name: "JavaScript", icon: "🟡", level: "Expert" as const },
  { name: "HTML5", icon: "🌐", level: "Expert" as const },
  { name: "CSS3", icon: "💅", level: "Expert" as const },
  { name: "Git", icon: "🔀", level: "Advanced" as const },
  { name: "Figma", icon: "🖼️", level: "Intermediate" as const },
  { name: "Node.js", icon: "🟢", level: "Intermediate" as const },
  { name: "REST API", icon: "🔗", level: "Advanced" as const },
];

export default function TechStackSection() {
  return (
    <section className="px-18 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[#014AEB]">
            Teknologi yang Saya Kuasai
          </p>
          <h2 className="font-poppins text-4xl font-bold text-white">
            Tech Stack
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
