import { useNavigate, useParams } from "react-router-dom";
import { Global, Mobile, Code1 } from "iconsax-react";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import { getProjectById, type Project } from "../../data/projects";

// ── Figma SVG icon ──────────────────────────────────────────────────────────
function FigmaIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z" fill="currentColor"/>
      <path d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z" fill="currentColor"/>
      <path d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0H19Z" fill="currentColor"/>
      <path d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z" fill="currentColor"/>
      <path d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z" fill="currentColor"/>
    </svg>
  );
}

// ── GitHub SVG icon ─────────────────────────────────────────────────────────
function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

// ── Smart project links ──────────────────────────────────────────────────────
function ProjectLinks({ project, size = "md" }: { project: Project; size?: "sm" | "md" }) {
  const isUIUX = project.tags.some((t) => t === "Figma" || t === "UI/UX");
  const isMobile = project.tags.includes("React Native");
  const px = size === "sm" ? "px-4 py-2" : "px-5 py-2.5";
  const textSize = size === "sm" ? "text-xs" : "text-sm";

  return (
    <div className="mt-5 flex flex-wrap gap-3">
      {isUIUX && (
        <a
          href={project.figmaLink ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F24E1E] to-[#FF7262] ${px} font-poppins ${textSize} text-white transition-opacity hover:opacity-90`}
        >
          <FigmaIcon size={14} />
          Lihat di Figma
        </a>
      )}
      {!isUIUX && isMobile && (
        <a
          href={project.link !== "#" ? project.link : (project.repoLink ?? "#")}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#014AEB] to-[#1CC8B7] ${px} font-poppins ${textSize} text-white transition-opacity hover:opacity-90`}
        >
          <Mobile size={14} color="white" />
          Lihat Aplikasi
        </a>
      )}
      {!isUIUX && !isMobile && (
        <a
          href={project.link !== "#" ? project.link : undefined}
          target={project.link !== "#" ? "_blank" : undefined}
          rel="noopener noreferrer"
          aria-disabled={project.link === "#"}
          className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#014AEB] to-[#1CC8B7] ${px} font-poppins ${textSize} text-white transition-opacity hover:opacity-90 ${project.link === "#" ? "cursor-default opacity-50" : ""}`}
        >
          <Global size={14} color="white" />
          Lihat Website
        </a>
      )}
      {project.repoLink && (
        <a
          href={project.repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 ${px} font-poppins ${textSize} text-white transition-all hover:border-white/40 hover:bg-white/10`}
        >
          <GitHubIcon size={14} />
          GitHub
        </a>
      )}
      {isUIUX && project.repoLink && (
        <a
          href={project.repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 ${px} font-poppins ${textSize} text-white transition-all hover:border-white/40 hover:bg-white/10`}
        >
          <Code1 size={14} color="white" />
          Source Code
        </a>
      )}
    </div>
  );
}

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = getProjectById(id ?? "");

  if (!project) {
    return (
      <>
        <Header />
        <main className="flex min-h-screen items-center justify-center pt-32">
          <div className="text-center">
            <p className="font-poppins text-2xl font-bold text-white">
              Proyek tidak ditemukan.
            </p>
            <button
              onClick={() => navigate("/project")}
              className="mt-6 rounded-full bg-gradient-to-r from-[#014AEB] to-[#1CC8B7] px-6 py-3 font-poppins text-sm text-white"
            >
              ← Kembali ke Proyek
            </button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const paragraphs = project.about.split("\n\n");

  return (
    <>
      <Header />

      <main className="px-6 pt-28 pb-16 md:px-18 md:pt-56 md:pb-24">
        {/* Hero card — mirip HeroSection, foto project di kanan */}
        <div className="relative mx-auto">

          {/* ── Mobile hero ─── */}
          <div className="flex flex-col gap-6 md:hidden">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#014AEB]/80 bg-[#001a4d]/60 px-3 py-1 font-poppins text-xs text-[#4d8aff] backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-poppins text-[24px] font-bold leading-[36px] text-white">
              {project.title}
            </h1>
            <p className="font-['Nunito_Sans'] text-[14px] font-light leading-[26px] text-white/70">
              {project.subtitle}
            </p>
            <ProjectLinks project={project} size="sm" />
          </div>

          {/* ── Desktop hero card ─── */}
          <div className="hidden md:block">
          <div className="absolute left-3 top-10 h-[360px] w-[calc(100%-28px)] rounded-[32px] rounded-br-[16px] border-b border-r border-white/30" />
          {/* Layer belakang 1 */}
          <div className="absolute left-1 top-5 h-[360px] w-[calc(100%-36px)] rounded-[32px] rounded-br-[16px] border-b border-r border-white/30" />

          {/* Card utama */}
          <div
            className="relative z-10 h-[360px] w-[calc(100%-40px)] overflow-visible rounded-[32px] backdrop-blur-xl"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(153,153,153,0) 100%)",
            }}
          >
            {/* Teks kiri */}
            <div className="absolute left-14 top-12 z-20 max-w-[560px]">
              <div className="mb-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#014AEB]/80 bg-[#001a4d]/60 px-3 py-1 font-poppins text-xs text-[#4d8aff] backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="font-poppins text-[38px] font-bold leading-[54px] text-white">
                {project.title}
              </h1>

              <p className="mt-2 font-['Nunito_Sans'] text-[17px] font-light leading-[34px] text-white/70">
                {project.subtitle}
              </p>
              <ProjectLinks project={project} />
            </div>

            {/* Foto / mockup proyek kanan — overflow seperti foto profil */}
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="absolute -top-16 right-16 h-[420px] object-contain drop-shadow-2xl"
              />
            ) : (
              <div
                className="absolute bottom-0 right-16 z-10 h-[380px] w-[420px] overflow-hidden rounded-t-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(1,74,235,0.25) 0%, rgba(28,200,183,0.12) 100%)",
                }}
              >
                <div className="flex h-full items-center justify-center">
                  <svg
                    width="200"
                    height="160"
                    viewBox="0 0 200 160"
                    fill="none"
                    className="opacity-20"
                  >
                    <rect x="20" y="10" width="160" height="110" rx="8" stroke="white" strokeWidth="2" />
                    <rect x="30" y="18" width="140" height="94" rx="4" fill="white" fillOpacity="0.08" />
                    <rect x="60" y="124" width="80" height="8" rx="4" stroke="white" strokeWidth="2" />
                    <rect x="40" y="132" width="120" height="6" rx="3" stroke="white" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            )}


          </div>
          </div>{/* end hidden md:block */}
        </div>{/* end relative mx-auto */}

        {/* Tentang Aplikasi */}
        <div className="mt-12 md:mt-32">
          <div className="mb-2 flex items-center gap-3">
            <span className="h-px w-8 bg-[#014AEB]" />
            <span className="font-poppins text-sm text-[#014AEB]">Detail Proyek</span>
          </div>

          <h2 className="font-poppins text-[24px] font-bold text-white md:text-[32px]">
            Tentang <span className="text-[#014AEB]">Aplikasi</span>
          </h2>
          <p className="mt-1 font-poppins text-sm uppercase tracking-widest text-white/40">
            {project.client}
          </p>

          <div className="mt-8 space-y-6">
            {paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-justify font-['Nunito_Sans'] text-[16px] leading-[36px] text-white/70"
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Tombol kembali — di paling bawah kanan */}
        <div className="mt-24 flex items-center justify-end border-t border-white/10 pt-10">
          <button
            onClick={() => navigate("/project")}
            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-3 font-poppins text-sm text-white transition-all hover:border-[#014AEB]/50 hover:bg-[#014AEB]/10"
          >
            Lihat Proyek Lainnya →
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}
