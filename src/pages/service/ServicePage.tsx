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

const uiuxSkills = [
  "User Research & Analysis", "Wireframing", "High Fidelity Design",
  "Prototyping", "Design System", "Figma", "Usability Testing", "Information Architecture",
];

const flutterSkills = [
  "Flutter SDK", "Dart", "State Management", "REST API Integration",
  "Firebase", "iOS & Android", "Responsive Layout", "Performance Optimization",
];

const frontendSkills = [
  "React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS",
  "Bootstrap", "Chakra UI", "Material UI", "Vite", "Responsive Web",
];

const qaSkills = [
  "Manual Testing", "Bug Reporting", "UI/UX Validation",
  "Cross-browser Testing", "Test Documentation", "Regression Testing",
];

const teamSkills = [
  "Agile / Scrum", "Design–Dev Handoff", "Figma Collaboration",
  "Code Review", "Sprint Planning", "Retrospective",
];

const orgSkills = [
  "Design System Governance", "Technical Documentation",
  "Onboarding Junior", "SOP Pembuatan UI", "Style Guide", "Component Library",
];

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

      <main className="px-18 pt-32 pb-24">
        {/* Page header */}
        <div className="mb-20">
          <SectionLabel text="Spesialisasi Saya" />
          <h1 className="font-poppins text-[40px] font-bold leading-[1.2] text-white">
            UIX Engineer —{" "}
            <span className="text-[#014AEB]">Desain hingga Kode</span>
          </h1>
          <p className="mt-4 max-w-[600px] font-['Nunito_Sans'] text-[16px] font-light leading-[32px] text-white/60">
            Saya mengerjakan produk digital dari tahap riset dan desain hingga
            implementasi kode, serta berkolaborasi aktif dalam tim IT untuk
            menghasilkan produk yang konsisten dan berkualitas.
          </p>
        </div>

        <div className="space-y-32">

          {/* 1 — UI/UX Design: visual kiri, teks kanan */}
          <div className="flex items-center gap-16">
            {/* Visual */}
            <div
              className="flex h-[340px] w-[45%] shrink-0 flex-col items-center justify-center gap-6 rounded-[32px]"
              style={{ background: "linear-gradient(135deg, rgba(1,74,235,0.12) 0%, rgba(28,200,183,0.06) 100%)" }}
            >
              <Brush size={56} color="#014AEB" variant="Bulk" />
              <TagCloud tags={uiuxSkills} />
            </div>
            {/* Teks */}
            <div className="flex-1">
              <SectionLabel text="01 — Design" />
              <h2 className="font-poppins text-[28px] font-bold text-white">
                UI/UX <span className="text-[#014AEB]">Design</span>
              </h2>
              <p className="mt-4 font-['Nunito_Sans'] text-[15px] leading-[32px] text-white/60 text-justify">
                Merancang antarmuka yang tidak hanya indah secara visual, tetapi juga
                fungsional dan mudah digunakan. Proses dimulai dari riset pengguna,
                pembuatan wireframe, hingga high fidelity design dan prototyping interaktif di Figma.
              </p>
              <p className="mt-4 font-['Nunito_Sans'] text-[15px] leading-[32px] text-white/60 text-justify">
                Saya memastikan setiap keputusan desain berbasis data dan kebutuhan
                pengguna nyata, bukan sekadar estetika. Design system yang konsisten
                menjadi fondasi agar tim dapat bekerja lebih cepat dan terstandar.
              </p>
            </div>
          </div>

          {/* 2 — Flutter: teks kiri, visual kanan */}
          <div className="flex items-center gap-16">
            {/* Teks */}
            <div className="flex-1">
              <SectionLabel text="02 — Mobile" />
              <h2 className="font-poppins text-[28px] font-bold text-white">
                Flutter <span className="text-[#014AEB]">Mobile Dev</span>
              </h2>
              <p className="mt-4 font-['Nunito_Sans'] text-[15px] leading-[32px] text-white/60 text-justify">
                Membangun aplikasi mobile lintas platform (iOS & Android) menggunakan
                Flutter dan Dart. Pengalaman mengintegrasikan REST API, Firebase, serta
                menerapkan state management yang scalable untuk kebutuhan aplikasi produksi.
              </p>
              <p className="mt-4 font-['Nunito_Sans'] text-[15px] leading-[32px] text-white/60 text-justify">
                Desain yang telah dirancang di Figma dapat langsung
                diimplementasikan ke kode Flutter dengan akurasi piksel yang
                tinggi, menjembatani gap antara desainer dan developer.
              </p>
            </div>
            {/* Visual */}
            <div
              className="flex h-[340px] w-[45%] shrink-0 flex-col items-center justify-center gap-6 rounded-[32px]"
              style={{ background: "linear-gradient(135deg, rgba(84,197,248,0.10) 0%, rgba(1,74,235,0.06) 100%)" }}
            >
              <Mobile size={56} color="#54C5F8" variant="Bulk" />
              <TagCloud tags={flutterSkills} accent="#54C5F8" />
            </div>
          </div>

          {/* 3 — Frontend Web: visual kiri, teks kanan */}
          <div className="flex items-center gap-16">
            {/* Visual */}
            <div
              className="flex h-[340px] w-[45%] shrink-0 flex-col items-center justify-center gap-6 rounded-[32px]"
              style={{ background: "linear-gradient(135deg, rgba(28,200,183,0.10) 0%, rgba(1,74,235,0.06) 100%)" }}
            >
              <Code size={56} color="#1CC8B7" variant="Bulk" />
              <TagCloud tags={frontendSkills} accent="#1CC8B7" />
            </div>
            {/* Teks */}
            <div className="flex-1">
              <SectionLabel text="03 — Web" />
              <h2 className="font-poppins text-[28px] font-bold text-white">
                Frontend <span className="text-[#014AEB]">Web Dev</span>
              </h2>
              <p className="mt-4 font-['Nunito_Sans'] text-[15px] leading-[32px] text-white/60 text-justify">
                Mengembangkan antarmuka web yang responsif, interaktif, dan
                performant menggunakan React, Next.js, maupun Vue.js dengan TypeScript.
                Komponen UI dibangun secara modular agar mudah dipelihara dan dikembangkan.
              </p>
              <p className="mt-4 font-['Nunito_Sans'] text-[15px] leading-[32px] text-white/60 text-justify">
                Penggunaan Tailwind CSS, Chakra UI, Bootstrap, dan Material UI
                memungkinkan pengembangan yang cepat tanpa mengorbankan
                konsistensi desain.
              </p>
            </div>
          </div>

          {/* 4 — QA: teks kiri, visual kanan */}
          <div className="flex items-center gap-16">
            {/* Teks */}
            <div className="flex-1">
              <SectionLabel text="04 — Quality" />
              <h2 className="font-poppins text-[28px] font-bold text-white">
                Manual <span className="text-[#014AEB]">Testing & QA</span>
              </h2>
              <p className="mt-4 font-['Nunito_Sans'] text-[15px] leading-[32px] text-white/60 text-justify">
                Memastikan kualitas produk melalui pengujian manual yang sistematis —
                mulai dari validasi UI terhadap desain, pengujian fungsionalitas,
                cross-browser testing, hingga pelaporan bug yang terdokumentasi dengan baik.
              </p>
              <p className="mt-4 font-['Nunito_Sans'] text-[15px] leading-[32px] text-white/60 text-justify">
                Sebagai seseorang yang mengerti sisi desain sekaligus pengembangan,
                saya dapat mengidentifikasi inkonsistensi UI dan masalah UX lebih cepat
                dibanding tester konvensional.
              </p>
            </div>
            {/* Visual */}
            <div
              className="flex h-[340px] w-[45%] shrink-0 flex-col items-center justify-center gap-6 rounded-[32px]"
              style={{ background: "linear-gradient(135deg, rgba(34,197,94,0.10) 0%, rgba(28,200,183,0.06) 100%)" }}
            >
              <ClipboardTick size={56} color="#22C55E" variant="Bulk" />
              <TagCloud tags={qaSkills} accent="#22C55E" />
            </div>
          </div>

          {/* 5 — Team Collaboration: visual kiri, teks kanan */}
          <div className="flex items-center gap-16">
            {/* Visual */}
            <div
              className="flex h-[340px] w-[45%] shrink-0 flex-col items-center justify-center gap-6 rounded-[32px]"
              style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.10) 0%, rgba(1,74,235,0.06) 100%)" }}
            >
              <People size={56} color="#F59E0B" variant="Bulk" />
              <TagCloud tags={teamSkills} accent="#F59E0B" />
            </div>
            {/* Teks */}
            <div className="flex-1">
              <SectionLabel text="05 — Kolaborasi" />
              <h2 className="font-poppins text-[28px] font-bold text-white">
                Kerja Tim &{" "}
                <span className="text-[#014AEB]">Kolaborasi</span>
              </h2>
              <p className="mt-4 font-['Nunito_Sans'] text-[15px] leading-[32px] text-white/60 text-justify">
                Terbiasa bekerja dalam tim lintas fungsi — desainer, developer,
                product owner, dan QA — menggunakan metodologi Agile/Scrum.
                Saya aktif dalam sprint planning, daily standup, review, dan retrospective.
              </p>
              <p className="mt-4 font-['Nunito_Sans'] text-[15px] leading-[32px] text-white/60 text-justify">
                Kemampuan melakukan design–dev handoff yang terstruktur di Figma
                memastikan implementasi akurat dan meminimalkan miskomunikasi
                antara tim desain dan tim engineering.
              </p>
            </div>
          </div>

          {/* 6 — IT Organization: teks kiri, visual kanan */}
          <div className="flex items-center gap-16">
            {/* Teks */}
            <div className="flex-1">
              <SectionLabel text="06 — Organisasi" />
              <h2 className="font-poppins text-[28px] font-bold text-white">
                IT Team <span className="text-[#014AEB]">Organisation</span>
              </h2>
              <p className="mt-4 font-['Nunito_Sans'] text-[15px] leading-[32px] text-white/60 text-justify">
                Pengalaman berkontribusi dalam pengelolaan tim IT: menyusun
                SOP desain UI, mendokumentasikan component library,
                serta membimbing anggota junior dalam alur kerja desain dan
                implementasi yang benar.
              </p>
              <p className="mt-4 font-['Nunito_Sans'] text-[15px] leading-[32px] text-white/60 text-justify">
                Dengan memahami seluruh siklus produk dari desain hingga deployment,
                saya dapat menjadi jembatan komunikasi yang efektif antara divisi
                desain, pengembangan, dan manajemen produk.
              </p>
            </div>
            {/* Visual */}
            <div
              className="flex h-[340px] w-[45%] shrink-0 flex-col items-center justify-center gap-6 rounded-[32px]"
              style={{ background: "linear-gradient(135deg, rgba(139,92,246,0.10) 0%, rgba(1,74,235,0.06) 100%)" }}
            >
              <Setting2 size={56} color="#8B5CF6" variant="Bulk" />
              <TagCloud tags={orgSkills} accent="#8B5CF6" />
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

