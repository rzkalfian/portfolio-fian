import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

export default function ProjectSection() {
  return (
    <section id="project" className="px-6 py-16 md:px-18 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[#014AEB]">
            Karya Terbaik Saya
          </p>
          <h2 className="font-poppins text-2xl font-bold text-white md:text-4xl">
            Proyek Saya
          </h2>
          <p className="mt-4 text-base font-light text-white/60">
            Beberapa proyek yang telah saya kerjakan dengan penuh dedikasi dan
            perhatian terhadap detail.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-[#014AEB]/40 hover:bg-white/8"
            >
              {/* Placeholder thumbnail */}
              <div className="mb-5 h-40 w-full rounded-xl bg-gradient-to-br from-[#014AEB]/20 to-[#1CC8B7]/10" />

              <h3 className="mb-2 font-poppins text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="mb-4 flex-1 text-sm font-light leading-relaxed text-white/60">
                {project.description}
              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#014AEB]/30 bg-[#014AEB]/10 px-3 py-1 text-xs text-[#014AEB]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                to={`/project/${project.id}`}
                className="flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                Lihat Proyek <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
