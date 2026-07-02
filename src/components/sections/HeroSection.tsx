import profile from "../../assets/images/profile.png";

export default function HeroSection() {
  return (
    <section id="hero" className="relative px-6 pt-20 pb-16 md:px-18 md:pt-56 md:pb-16">

      {/* ── Mobile layout ────────────────────────────── */}
      <div className="flex flex-col items-center text-center gap-6 md:hidden">
        {/* Foto + stats overlay di bagian atas foto */}
        <div className="relative w-full">
          <img
            src={profile}
            alt="Fian"
            className="h-72 w-full object-contain object-top grayscale"
          />
          <div className="absolute bottom-2 left-0 right-0 flex items-center gap-3 px-4">
            <div className="flex-1 rounded-2xl border border-white/10 bg-black/50 px-3 py-3 backdrop-blur-md">
              <span className="font-poppins text-[22px] font-bold text-[#014AEB]">3+</span>
              <p className="font-['Nunito_Sans'] text-[11px] text-white/50">Tahun Pengalaman</p>
            </div>
            <div className="flex-1 rounded-2xl border border-white/10 bg-black/50 px-3 py-3 backdrop-blur-md">
              <span className="font-poppins text-[22px] font-bold text-[#014AEB]">20+</span>
              <p className="font-['Nunito_Sans'] text-[11px] text-white/50">Proyek Selesai</p>
            </div>
          </div>
        </div>

        <h1 className="font-poppins text-[26px] leading-[38px] text-white">
          Halo, <span className="font-bold text-[#014AEB]">Saya Fian</span>
        </h1>

        <p className="font-['Nunito_Sans'] text-[14px] font-light leading-[26px] text-white/70 max-w-[320px]">
          Saya adalah seorang UIX Engineer yang mampu merancang tampilan
          dari sisi desain hingga implementasi kode, membangun antarmuka
          yang estetis, fungsional, dan siap produksi.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="rounded-full bg-gradient-to-r from-[#014AEB] to-[#1CC8B7] px-5 py-2.5 font-poppins text-[13px] font-normal text-white">
            Mari Berdiskusi
          </button>
          <button className="flex items-center gap-2 font-poppins text-[13px] font-normal text-white">
            Lihat Profil Saya <span className="text-xl">→</span>
          </button>
        </div>
      </div>

      {/* ── Desktop layout (card) ─────────────────────── */}
      <div className="relative mx-auto hidden md:block">
        {/* Layer belakang 2 */}
        <div className="absolute left-3 top-10 h-[320px] w-[calc(100%-28px)] rounded-[32px] rounded-br-[16px] border-b border-r border-white/30" />

        {/* Layer belakang 1 */}
        <div className="absolute left-1 top-5 h-[320px] w-[calc(100%-36px)] rounded-[32px] rounded-br-[16px] border-b border-r border-white/30" />

        {/* Card utama */}
        <div
          className="relative z-10 h-[320px] w-[calc(100%-40px)] rounded-[32px] backdrop-blur-xl"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(153,153,153,0) 100%)",
          }}
        >
          <div className="absolute left-14 top-10 z-20 max-w-[600px]">
            <h1 className="font-poppins text-[32px] leading-[48px] text-white">
              Halo, <span className="font-bold text-[#014AEB]">Saya Fian</span>
            </h1>

            <p className="mt-2 font-['Nunito_Sans'] text-[18px] font-light leading-[40px] text-white/70">
              Saya adalah seorang UIX Engineer yang mampu merancang tampilan
              dari sisi desain hingga implementasi kode, membangun antarmuka
              yang estetis, fungsional, dan siap produksi.
            </p>

            <div className="mt-8 flex items-center gap-8">
              <button className="rounded-full bg-gradient-to-r from-[#014AEB] to-[#1CC8B7] px-4 py-2 font-poppins text-[14px] font-normal text-white">
                Mari Berdiskusi
              </button>
              <button className="flex items-center gap-3 font-poppins text-[14px] font-normal text-white">
                Lihat Profil Saya <span className="text-xl">→</span>
              </button>
            </div>
          </div>

          <img
            src={profile}
            alt="Fian"
            className="absolute bottom-0 right-20 h-[420px] object-contain grayscale"
          />

          {/* Mini stats */}
          <div className="absolute bottom-2 right-16 z-30 flex items-center gap-3">
            <div className="rounded-2xl bg-black/40 px-4 py-2 backdrop-blur-md">
              <span className="font-poppins text-[22px] font-bold text-[#014AEB]">3+</span>
              <p className="font-['Nunito_Sans'] text-xs text-white/50">Tahun Pengalaman</p>
            </div>
            <div className="rounded-2xl bg-black/40 px-4 py-2 backdrop-blur-md">
              <span className="font-poppins text-[22px] font-bold text-[#014AEB]">20+</span>
              <p className="font-['Nunito_Sans'] text-xs text-white/50">Proyek Selesai</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

