import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import { getProjectById } from "../../data/projects";

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

      <main className="px-18 pt-56 pb-24">
        {/* Hero card — mirip HeroSection, foto project di kanan */}
        <div className="relative mx-auto">
          {/* Layer belakang 2 */}
          <div className="absolute left-3 top-10 h-[320px] w-[calc(100%-28px)] rounded-[32px] rounded-br-[16px] border-b border-r border-white/30" />
          {/* Layer belakang 1 */}
          <div className="absolute left-1 top-5 h-[320px] w-[calc(100%-36px)] rounded-[32px] rounded-br-[16px] border-b border-r border-white/30" />

          {/* Card utama */}
          <div
            className="relative z-10 h-[320px] w-[calc(100%-40px)] overflow-visible rounded-[32px] backdrop-blur-xl"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(153,153,153,0) 100%)",
            }}
          >
            {/* Teks kiri */}
            <div className="absolute left-14 top-10 z-20 max-w-[520px]">
              <div className="mb-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#014AEB]/40 bg-[#014AEB]/10 px-3 py-1 font-poppins text-xs text-[#014AEB]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="font-poppins text-[32px] font-bold leading-[48px] text-white">
                {project.title}
              </h1>

              <p className="mt-2 font-['Nunito_Sans'] text-[16px] font-light leading-[32px] text-white/70">
                {project.subtitle}
              </p>

              {project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#014AEB] to-[#1CC8B7] px-5 py-2.5 font-poppins text-sm text-white"
                >
                  Link Website →
                </a>
              )}
            </div>

            {/* Foto / mockup proyek kanan — overflow seperti foto profil */}
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="absolute bottom-0 right-16 h-[400px] object-contain"
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
        </div>

        {/* Tentang Aplikasi */}
        <div className="mt-32">
          <div className="mb-2 flex items-center gap-3">
            <span className="h-px w-8 bg-[#014AEB]" />
            <span className="font-poppins text-sm text-[#014AEB]">Detail Proyek</span>
          </div>

          <h2 className="font-poppins text-[28px] font-bold text-white">
            Tentang <span className="text-[#014AEB]">Aplikasi</span>
          </h2>
          <p className="mt-1 font-poppins text-sm uppercase tracking-widest text-white/40">
            {project.client}
          </p>

          <div className="mt-8 space-y-6">
            {paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-justify font-['Nunito_Sans'] text-[15px] leading-[32px] text-white/70"
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
