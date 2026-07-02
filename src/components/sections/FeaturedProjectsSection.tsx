import { Link } from "react-router-dom";
import ProjectCard from "../common/ProjectCard";
import { projects } from "../../data/projects";

export default function FeaturedProjectsSection() {
  const [featured, ...rest] = projects.slice(0, 3);

  return (
    <section className="px-6 py-16 md:px-18 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[#014AEB]">
              Karya Pilihan
            </p>
            <h2 className="font-poppins text-4xl font-bold text-white">
              Featured Projects
            </h2>
          </div>
          <Link
            to="/project"
            className="hidden items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white md:flex"
          >
            Lihat semua proyek <span>→</span>
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          {/* Featured card — horizontal layout */}
          <ProjectCard
            title={featured.title}
            description={featured.description}
            tags={featured.tags}
            link={`/project/${featured.id}`}
            image={featured.image}
            featured
          />

          {/* Two smaller cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {rest.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={`/project/${project.id}`}
                image={project.image}
              />
            ))}
          </div>
        </div>

        <Link
          to="/project"
          className="mt-8 flex items-center justify-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white md:hidden"
        >
          Lihat semua proyek <span>→</span>
        </Link>
      </div>
    </section>
  );
}
