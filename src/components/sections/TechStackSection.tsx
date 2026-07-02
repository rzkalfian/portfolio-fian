const techs = [
  { name: "React",        slug: "react",        color: "61DAFB" },
  { name: "TypeScript",   slug: "typescript",   color: "3178C6" },
  { name: "Tailwind CSS", slug: "tailwindcss",  color: "06B6D4" },
  { name: "Next.js",      slug: "nextdotjs",    color: "ffffff" },
  { name: "Vite",         slug: "vite",         color: "646CFF" },
  { name: "JavaScript",   slug: "javascript",   color: "F7DF1E" },
  { name: "HTML5",        slug: "html5",        color: "E34F26" },
  { name: "Flutter",      slug: "flutter",      color: "54C5F8" },
  { name: "Git",          slug: "git",          color: "F05032" },
  { name: "Figma",        slug: "figma",        color: "F24E1E" },
  { name: "Node.js",      slug: "nodedotjs",    color: "339933" },
  { name: "Vue.js",       slug: "vuedotjs",     color: "4FC08D" },
  { name: "Bootstrap",    slug: "bootstrap",    color: "7952B3" },
  { name: "Chakra UI",    slug: "chakraui",     color: "319795" },
  { name: "Material UI",  slug: "mui",          color: "007FFF" },
];

export default function TechStackSection() {
  return (
    <section className="px-6 py-8 md:px-18">
      <div
        className="marquee-container overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        {/* Duplicate list untuk loop seamless */}
        <div className="animate-marquee flex w-max items-center gap-16">
          {[...techs, ...techs].map((tech, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <img
                src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
                alt={tech.name}
                className="h-12 w-12 object-contain"
                loading="lazy"
              />
              <span className="whitespace-nowrap font-poppins text-xs text-white/50">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
