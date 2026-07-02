import {
  Brush,
  Code,
  Mobile,
  ClipboardTick,
  People,
  Setting2,
} from "iconsax-react";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import {
  uiuxSkills,
  flutterSkills,
  frontendSkills,
  qaSkills,
  teamSkills,
  orgSkills,
} from "../../data/services";

function TagCloud({ tags, accent = "#014AEB" }: { tags: string[]; accent?: string }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border px-3 py-1 font-['Nunito_Sans'] text-sm"
          style={{ borderColor: `${accent}40`, color: accent, background: `${accent}12` }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="h-px w-8 bg-[#014AEB]" />
      <span className="font-poppins text-sm text-[#014AEB]">{text}</span>
    </div>
  );
}

export default function ServicePage() {
  return (
    <>
      <Header />

      <main className="px-6 pt-28 pb-16 md:px-18 md:pt-32 md:pb-24">
        {/* Page header */}
        <div className="mb-12 md:mb-20">
          <SectionLabel text="Spesialisasi Saya" />
          <h1 className="font-poppins text-[28px] font-bold leading-[1.3] text-white md:text-[40px] md:leading-[1.2]">
            UIX Engineer —{" "}
            <span className="text-[#014AEB]">Desain hingga Kode</span>
          </h1>
          <p className="mt-4 max-w-[600px] font-['Nunito_Sans'] text-[14px] font-light leading-[28px] text-white/60 md:text-[16px] md:leading-[32px]">
            Saya mengerjakan produk digital dari tahap riset dan desain hingga
            implementasi kode, serta berkolaborasi aktif dalam tim IT untuk
            menghasilkan produk yang konsisten dan berkualitas.
          </p>
        </div>

        <div className="space-y-16 md:space-y-32">

          {/* 1 — UI/UX Design: visual kiri, teks kanan */}
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-16">
            {/* Visual */}
            <div
              className="flex w-full shrink-0 flex-col items-center justify-center gap-6 rounded-[24px] p-8 md:h-[340px] md:w-[45%] md:rounded-[32px]"
              style={{ background: "linear-gradient(135deg, rgba(1,74,235,0.12) 0%, rgba(28,200,183,0.06) 100%)" }}
            >
              <Brush size={48} color="#014AEB" variant="Bulk" />
              <TagCloud tags={uiuxSkills} />
            </div>
            {/* Teks */}
            <div className="flex-1">
              <SectionLabel text="01 — Design" />
              <h2 className="font-poppins text-[22px] font-bold text-white md:text-[28px]">
                UI/UX <span className="text-[#014AEB]">Design</span>
              </h2>
              <p className="mt-4 font-['Nunito_Sans'] text-[14px] leading-[28px] text-white/60 text-justify md:text-[15px] md:leading-[32px]">
                Merancang antarmuka yang tidak hanya indah secara visual, tetapi juga
                fungsional dan mudah digunakan. Proses dimulai dari riset pengguna,
                pembuatan wireframe, hingga high fidelity design dan prototyping interaktif di Figma.
              </p>
              <p className="mt-4 font-['Nunito_Sans'] text-[14px] leading-[28px] text-white/60 text-justify md:text-[15px] md:leading-[32px]">
                Saya memastikan setiap keputusan desain berbasis data dan kebutuhan
                pengguna nyata, bukan sekadar estetika. Design system yang konsisten
                menjadi fondasi agar tim dapat bekerja lebih cepat dan terstandar.
              </p>
            </div>
          </div>

          {/* 2 — Flutter: teks kiri, visual kanan */}
          <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center md:gap-16">
            {/* Teks */}
            <div className="flex-1">
              <SectionLabel text="02 — Mobile" />
              <h2 className="font-poppins text-[22px] font-bold text-white md:text-[28px]">
                Flutter <span className="text-[#014AEB]">Mobile Dev</span>
              </h2>
              <p className="mt-4 font-['Nunito_Sans'] text-[14px] leading-[28px] text-white/60 text-justify md:text-[15px] md:leading-[32px]">
                Membangun aplikasi mobile lintas platform (iOS & Android) menggunakan
                Flutter dan Dart. Pengalaman mengintegrasikan REST API, Firebase, serta
                menerapkan state management yang scalable untuk kebutuhan aplikasi produksi.
              </p>
              <p className="mt-4 font-['Nunito_Sans'] text-[14px] leading-[28px] text-white/60 text-justify md:text-[15px] md:leading-[32px]">
                Desain yang telah dirancang di Figma dapat langsung
                diimplementasikan ke kode Flutter dengan akurasi piksel yang
                tinggi, menjembatani gap antara desainer dan developer.
              </p>
            </div>
            {/* Visual */}
            <div
              className="flex w-full shrink-0 flex-col items-center justify-center gap-6 rounded-[24px] p-8 md:h-[340px] md:w-[45%] md:rounded-[32px]"
              style={{ background: "linear-gradient(135deg, rgba(84,197,248,0.10) 0%, rgba(1,74,235,0.06) 100%)" }}
            >
              <Mobile size={48} color="#54C5F8" variant="Bulk" />
              <TagCloud tags={flutterSkills} accent="#54C5F8" />
            </div>
          </div>

          {/* 3 — Frontend Web: visual kiri, teks kanan */}
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-16">
            {/* Visual */}
            <div
              className="flex w-full shrink-0 flex-col items-center justify-center gap-6 rounded-[24px] p-8 md:h-[340px] md:w-[45%] md:rounded-[32px]"
              style={{ background: "linear-gradient(135deg, rgba(28,200,183,0.10) 0%, rgba(1,74,235,0.06) 100%)" }}
            >
              <Code size={48} color="#1CC8B7" variant="Bulk" />
              <TagCloud tags={frontendSkills} accent="#1CC8B7" />
            </div>
            {/* Teks */}
            <div className="flex-1">
              <SectionLabel text="03 — Web" />
              <h2 className="font-poppins text-[22px] font-bold text-white md:text-[28px]">
                Frontend <span className="text-[#014AEB]">Web Dev</span>
              </h2>
              <p className="mt-4 font-['Nunito_Sans'] text-[14px] leading-[28px] text-white/60 text-justify md:text-[15px] md:leading-[32px]">
                Mengembangkan antarmuka web yang responsif, interaktif, dan
                performant menggunakan React, Next.js, maupun Vue.js dengan TypeScript.
                Komponen UI dibangun secara modular agar mudah dipelihara dan dikembangkan.
              </p>
              <p className="mt-4 font-['Nunito_Sans'] text-[14px] leading-[28px] text-white/60 text-justify md:text-[15px] md:leading-[32px]">
                Penggunaan Tailwind CSS, Chakra UI, Bootstrap, dan Material UI
                memungkinkan pengembangan yang cepat tanpa mengorbankan
                konsistensi desain.
              </p>
            </div>
          </div>

          {/* 4 — QA: teks kiri, visual kanan */}
          <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center md:gap-16">
            {/* Teks */}
            <div className="flex-1">
              <SectionLabel text="04 — Quality" />
              <h2 className="font-poppins text-[22px] font-bold text-white md:text-[28px]">
                Manual <span className="text-[#014AEB]">Testing & QA</span>
              </h2>
              <p className="mt-4 font-['Nunito_Sans'] text-[14px] leading-[28px] text-white/60 text-justify md:text-[15px] md:leading-[32px]">
                Memastikan kualitas produk melalui pengujian manual yang sistematis —
                mulai dari validasi UI terhadap desain, pengujian fungsionalitas,
                cross-browser testing, hingga pelaporan bug yang terdokumentasi dengan baik.
              </p>
              <p className="mt-4 font-['Nunito_Sans'] text-[14px] leading-[28px] text-white/60 text-justify md:text-[15px] md:leading-[32px]">
                Sebagai seseorang yang mengerti sisi desain sekaligus pengembangan,
                saya dapat mengidentifikasi inkonsistensi UI dan masalah UX lebih cepat
                dibanding tester konvensional.
              </p>
            </div>
            {/* Visual */}
            <div
              className="flex w-full shrink-0 flex-col items-center justify-center gap-6 rounded-[24px] p-8 md:h-[340px] md:w-[45%] md:rounded-[32px]"
              style={{ background: "linear-gradient(135deg, rgba(34,197,94,0.10) 0%, rgba(28,200,183,0.06) 100%)" }}
            >
              <ClipboardTick size={48} color="#22C55E" variant="Bulk" />
              <TagCloud tags={qaSkills} accent="#22C55E" />
            </div>
          </div>

          {/* 5 — Team Collaboration: visual kiri, teks kanan */}
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-16">
            {/* Visual */}
            <div
              className="flex w-full shrink-0 flex-col items-center justify-center gap-6 rounded-[24px] p-8 md:h-[340px] md:w-[45%] md:rounded-[32px]"
              style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.10) 0%, rgba(1,74,235,0.06) 100%)" }}
            >
              <People size={48} color="#F59E0B" variant="Bulk" />
              <TagCloud tags={teamSkills} accent="#F59E0B" />
            </div>
            {/* Teks */}
            <div className="flex-1">
              <SectionLabel text="05 — Kolaborasi" />
              <h2 className="font-poppins text-[22px] font-bold text-white md:text-[28px]">
                Kerja Tim &{" "}
                <span className="text-[#014AEB]">Kolaborasi</span>
              </h2>
              <p className="mt-4 font-['Nunito_Sans'] text-[14px] leading-[28px] text-white/60 text-justify md:text-[15px] md:leading-[32px]">
                Terbiasa bekerja dalam tim lintas fungsi — desainer, developer,
                product owner, dan QA — menggunakan metodologi Agile/Scrum.
                Saya aktif dalam sprint planning, daily standup, review, dan retrospective.
              </p>
              <p className="mt-4 font-['Nunito_Sans'] text-[14px] leading-[28px] text-white/60 text-justify md:text-[15px] md:leading-[32px]">
                Kemampuan melakukan design–dev handoff yang terstruktur di Figma
                memastikan implementasi akurat dan meminimalkan miskomunikasi
                antara tim desain dan tim engineering.
              </p>
            </div>
          </div>

          {/* 6 — IT Organization: teks kiri, visual kanan */}
          <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center md:gap-16">
            {/* Teks */}
            <div className="flex-1">
              <SectionLabel text="06 — Organisasi" />
              <h2 className="font-poppins text-[22px] font-bold text-white md:text-[28px]">
                IT Team <span className="text-[#014AEB]">Organisation</span>
              </h2>
              <p className="mt-4 font-['Nunito_Sans'] text-[14px] leading-[28px] text-white/60 text-justify md:text-[15px] md:leading-[32px]">
                Pengalaman berkontribusi dalam pengelolaan tim IT: menyusun
                SOP desain UI, mendokumentasikan component library,
                serta membimbing anggota junior dalam alur kerja desain dan
                implementasi yang benar.
              </p>
              <p className="mt-4 font-['Nunito_Sans'] text-[14px] leading-[28px] text-white/60 text-justify md:text-[15px] md:leading-[32px]">
                Dengan memahami seluruh siklus produk dari desain hingga deployment,
                saya dapat menjadi jembatan komunikasi yang efektif antara divisi
                desain, pengembangan, dan manajemen produk.
              </p>
            </div>
            {/* Visual */}
            <div
              className="flex w-full shrink-0 flex-col items-center justify-center gap-6 rounded-[24px] p-8 md:h-[340px] md:w-[45%] md:rounded-[32px]"
              style={{ background: "linear-gradient(135deg, rgba(139,92,246,0.10) 0%, rgba(1,74,235,0.06) 100%)" }}
            >
              <Setting2 size={48} color="#8B5CF6" variant="Bulk" />
              <TagCloud tags={orgSkills} accent="#8B5CF6" />
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

