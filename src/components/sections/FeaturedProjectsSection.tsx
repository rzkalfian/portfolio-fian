import { Link } from "react-router-dom";
import ProjectCard from "../common/ProjectCard";

const featuredProjects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "Dashboard manajemen toko online dengan fitur analitik real-time, manajemen produk, laporan penjualan, dan sistem notifikasi. Dibangun dengan React dan TypeScript.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    gradient: "from-[#014AEB]/30 to-[#1CC8B7]/10",
    featured: true,
  },
  {
    title: "Landing Page SaaS",
    description:
      "Halaman pemasaran modern untuk produk SaaS dengan animasi scroll dan section pricing interaktif.",
    tags: ["Next.js", "Framer Motion"],
    gradient: "from-purple-500/20 to-pink-500/10",
  },
  {
    title: "Aplikasi Manajemen Tugas",
    description:
      "Aplikasi produktivitas harian dengan fitur drag & drop dan notifikasi real-time.",
    tags: ["React", "Zustand", "DnD Kit"],
    gradient: "from-emerald-500/20 to-teal-500/10",
  },
];

export default function FeaturedProjectsSection() {
  const [featured, ...rest] = featuredProjects;

  return (
    <section className="px-18 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-end justify-between">
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
          <ProjectCard {...featured} featured />

          {/* Two smaller cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {rest.map((project) => (
              <ProjectCard key={project.title} {...project} />
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
