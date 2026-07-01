import profile from "../../assets/images/profile.png";

export default function AboutProfileCard() {
  return (
    <div className="relative mx-auto">
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
        {/* Foto kiri */}
        <img
          src={profile}
          alt="Fian"
          className="absolute bottom-0 left-20 h-[420px] object-contain grayscale"
        />

        {/* Teks kanan */}
        <div className="absolute right-14 top-10 z-20 max-w-[500px]">
          <h1 className="font-poppins text-[32px] leading-[48px] text-white">
            Rizki{" "}
            <span className="font-bold text-[#014AEB]">Alfian</span>
          </h1>

          <p className="mt-2 font-['Nunito_Sans'] text-[16px] font-light leading-[32px] text-white/70">
            Saya adalah seorang Desainer UI/UX dan Flutter Engineer yang
            membangun produk UI. Saya berasal dari Purwokerto, Jawa Tengah
            lulusan Universitas Sebelas Maret. Saya mulai fokus UI/UX sejak
            2023.
          </p>

          <div className="mt-8">
            <button className="rounded-full bg-gradient-to-r from-[#014AEB] to-[#1CC8B7] px-6 py-3 font-poppins text-[14px] font-normal text-white">
              Downloan Curriculum Vitae
            </button>
          </div>
        </div>
      </div>

      {/* Dekorasi: + pojok kiri atas */}
      <span className="absolute -left-4 top-0 z-20 text-2xl font-thin text-white/60 select-none">
        +
      </span>

      {/* Dekorasi: dua lingkaran bertumpuk atas tengah */}
      <svg
        className="absolute left-1/2 -top-8 z-20 -translate-x-1/2"
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
      >
        <circle cx="22" cy="30" r="18" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" />
        <circle cx="38" cy="30" r="18" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" />
      </svg>

      {/* Dekorasi: segitiga play kiri tengah */}
      <svg
        className="absolute -left-6 top-1/2 z-20 -translate-y-1/2"
        width="52"
        height="60"
        viewBox="0 0 52 60"
        fill="none"
      >
        <polygon
          points="4,4 48,30 4,56"
          stroke="white"
          strokeOpacity="0.5"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>

      {/* Dekorasi: zigzag bawah tengah */}
      <svg
        className="absolute bottom-[-28px] left-1/2 z-20 -translate-x-1/2"
        width="120"
        height="30"
        viewBox="0 0 120 30"
        fill="none"
      >
        <polyline
          points="0,20 20,5 40,20 60,5 80,20 100,5 120,20"
          stroke="white"
          strokeOpacity="0.5"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
