const experiences = [
  {
    year: "2024 – Sekarang",
    role: "Frontend Developer",
    company: "Freelance",
    description:
      "Mengerjakan berbagai proyek web untuk klien lokal dan internasional, mulai dari landing page hingga dashboard aplikasi.",
  },
  {
    year: "2023 – 2024",
    role: "Junior Frontend Developer",
    company: "PT. Teknologi Digital",
    description:
      "Berkontribusi dalam pengembangan aplikasi internal perusahaan menggunakan React dan TypeScript.",
  },
  {
    year: "2022 – 2023",
    role: "Web Developer Intern",
    company: "Startup Lokal",
    description:
      "Membantu tim developer dalam membangun fitur-fitur baru pada platform e-commerce berbasis Next.js.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="px-18 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[#014AEB]">
            Siapa Saya
          </p>
          <h2 className="font-poppins text-4xl font-bold text-white">
            Tentang Saya
          </h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          {/* Left – bio */}
          <div>
            <div className="mb-6 h-64 w-full rounded-2xl bg-gradient-to-br from-[#014AEB]/20 to-[#1CC8B7]/10" />

            <h3 className="mb-3 font-poppins text-2xl font-bold text-white">
              Halo, Saya{" "}
              <span className="text-[#014AEB]">Fian</span>
            </h3>
            <p className="mb-4 text-base font-light leading-relaxed text-white/70">
              Saya adalah seorang Frontend Developer dengan pengalaman membangun
              aplikasi web yang modern dan responsif. Saya memiliki passion
              dalam menciptakan pengalaman pengguna yang menyenangkan dan
              performa aplikasi yang optimal.
            </p>
            <p className="text-base font-light leading-relaxed text-white/70">
              Di luar coding, saya aktif mengikuti perkembangan teknologi web
              terbaru dan senang berbagi pengetahuan melalui komunitas developer
              lokal.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {[
                { value: "3+", label: "Tahun Pengalaman" },
                { value: "20+", label: "Proyek Selesai" },
                { value: "15+", label: "Klien Puas" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="font-poppins text-2xl font-bold text-[#014AEB]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right – experience timeline */}
          <div>
            <h3 className="mb-6 font-poppins text-xl font-semibold text-white">
              Pengalaman Kerja
            </h3>
            <div className="relative space-y-6 pl-6 before:absolute before:left-0 before:top-2 before:h-full before:w-px before:bg-white/10">
              {experiences.map((exp) => (
                <div key={exp.year} className="relative">
                  <span className="absolute -left-[25px] top-1 h-3 w-3 rounded-full bg-[#014AEB]" />
                  <p className="mb-1 text-xs font-medium text-[#014AEB]">
                    {exp.year}
                  </p>
                  <h4 className="font-poppins text-base font-semibold text-white">
                    {exp.role}
                  </h4>
                  <p className="mb-1 text-sm text-white/50">{exp.company}</p>
                  <p className="text-sm font-light leading-relaxed text-white/60">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
