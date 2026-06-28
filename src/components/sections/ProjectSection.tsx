const projects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "Dashboard manajemen toko online dengan fitur analitik real-time, manajemen produk, dan laporan penjualan.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    link: "#",
  },
  {
    title: "Landing Page SaaS",
    description:
      "Halaman pemasaran modern untuk produk SaaS dengan animasi scroll, section pricing, dan form demo.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Aplikasi Manajemen Tugas",
    description:
      "Aplikasi produktivitas untuk mengelola tugas harian dengan fitur drag & drop dan notifikasi.",
    tags: ["React", "Zustand", "DnD Kit"],
    link: "#",
  },
  {
    title: "Portfolio Template",
    description:
      "Template portfolio minimalis dan modern untuk developer dengan mode gelap dan animasi halus.",
    tags: ["Vite", "TypeScript", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Blog Platform",
    description:
      "Platform blog dengan editor markdown, sistem komentar, dan fitur pencarian artikel secara real-time.",
    tags: ["Next.js", "MDX", "Prisma"],
    link: "#",
  },
  {
    title: "UI Component Library",
    description:
      "Kumpulan komponen UI yang dapat digunakan ulang dengan dokumentasi lengkap dan theme yang dapat dikustomisasi.",
    tags: ["React", "Storybook", "TypeScript"],
    link: "#",
  },
];

export default function ProjectSection() {
  return (
    <section id="project" className="px-18 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[#014AEB]">
            Karya Terbaik Saya
          </p>
          <h2 className="font-poppins text-4xl font-bold text-white">
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
              key={project.title}
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

              <a
                href={project.link}
                className="flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                Lihat Proyek <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
