import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  gradient?: string;
  featured?: boolean;
  image?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  link = "/project",
  gradient = "from-[#014AEB]/20 to-[#1CC8B7]/10",
  featured = false,
  image,
}: ProjectCardProps) {
  return (
    <div
      className={`group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-[#014AEB]/40 hover:bg-white/8 ${
        featured ? "lg:flex-row" : ""
      }`}
    >
      {/* Thumbnail */}
      {image ? (
        <div
          className={`overflow-hidden ${
            featured ? "lg:h-auto lg:w-2/5" : "h-48 w-full"
          }`}
        >
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <div
          className={`bg-gradient-to-br ${gradient} ${
            featured ? "lg:h-auto lg:w-2/5" : "h-48 w-full"
          }`}
        />
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-poppins text-xl font-semibold text-white">
          {title}
        </h3>
        <p className="flex-1 text-sm font-light leading-relaxed text-white/60">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#014AEB]/30 bg-[#014AEB]/10 px-3 py-1 text-xs text-[#014AEB]"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          to={link}
          className="mt-2 flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
        >
          Lihat Proyek <span>→</span>
        </Link>
      </div>
    </div>
  );
}
