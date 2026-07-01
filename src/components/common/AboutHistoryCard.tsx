const experiences = [
  {
    role: "Freelance UI/UX",
    workType: "Work From Anywhere",
    entries: [
      {
        company: "ORBIT 360 - Orbit Digital Library",
        period: "Desember 2023  -  Januari 2024",
        tasks: [
          "Membuat wireframe untuk Aplikasi Orbit Digilib.",
          "Implementasi UI ke High Fidelity dari wireframe.",
          "Implementasi prototyping untuk design UI yang dibuat.",
        ],
      },
      {
        company: "ORBIT 360 - CMS Digital Library",
        period: "Mei 2024  -  Juni 2024",
        tasks: [
          "Riset UI CMS dari referensi Apps karena masih berkaitan.",
          "Implementasi UI ke High Fidelity dan membuat lebih User Friendly.",
        ],
      },
      {
        company: "ORBIT 360 - CMS Masjid Istiqlal",
        period: "Desember 2024  -  Januari 2025",
        tasks: [
          "Riset UI CMS dari referensi Apps Masjid Istiqlal dan Website yang sudah berjalan.",
          "Implementasi UI ke High Fidelity dan membuat lebih User Friendly.",
        ],
      },
      {
        company: "ORBIT 360 - Redesign Website PII",
        period: "Mei 2024  -  Juli 2025",
        tasks: [
          "Riset UI CMS dari referensi Website pemerintahan yang lebih trendy.",
          "Implementasi UI ke High Fidelity dan membuat lebih User Friendly.",
        ],
      },
      {
        company: "ORBIT 360 - Orbit TKA",
        period: "Agustus 2025  -  Oktober 2025",
        tasks: [
          "Riset UI CMS dari referensi CBT TKA yang digunakan.",
          "Implementasi UI ke High Fidelity dan membuat lebih User Friendly.",
          "Membuat tampilan agar UX mirip seperti CBT TKA.",
        ],
      },
    ],
  },
  {
    role: "Intern UI/UX dan Junior Mobile Developer",
    workType: "Work From Home",
    entries: [
      {
        company: "Stevor Indonesia",
        period: "Mei 2024  -  Mei 2025",
        tasks: [
          "Membuat design UI untuk App Marketplace Stevor Wholesale.",
          "Menganalisa App Stevor Wholesale dari platform marketplace yang sudah berjalan.",
          "Membuat design UI untuk Stevor Express dari referensi Ojek Online.",
        ],
      },
    ],
  },
  {
    role: "UIX Desainer",
    workType: "Work From Anywhere",
    entries: [
      {
        company: "CV Insan Kalbu Indonesia",
        period: "Oktober 2023  -  November 2023",
        tasks: [
          "Membuat flow untuk aplikasi sebelum tahap implementasi desain.",
          "Monitoring pembuatan logo oleh vendor.",
          "Monitoring desain UI yang dikerjakan vendor.",
        ],
      },
    ],
  },
  {
    role: "Freelance UI/UX dan Mobile Developer",
    workType: "Work From Anywhere",
    entries: [
      {
        company: "Mahasiswa UIN Surakarta",
        period: "Oktober 2023  -  November 2023",
        tasks: [
          "Riset mengenai BMI Kalkulator.",
          "Implementasi UI sederhana dan possible diterapkan di mobile apps.",
          "Implementasi BMI Kalkulator dan UI edukasi stunting ke mobile apps.",
        ],
      },
    ],
  },
];

export default function AboutHistoryCard() {
  return (
    <>
      {/* Label */}
      <div className="mt-20 flex items-center gap-3">
        <span className="h-px w-8 bg-[#014AEB]" />
        <span className="font-poppins text-sm text-[#014AEB]">
          Pengalaman Fian
        </span>
      </div>

      {/* Experience section */}
      <div className="mt-8">
        {/* Header */}
        <div className="flex items-start justify-between px-8 py-8">
          <h2 className="max-w-[60%] font-poppins text-[28px] font-bold leading-[1.3] text-white">
            Membangun Pengalaman Digital Melalui Karya Terbaik.
          </h2>
          <svg
            className="mt-2 shrink-0"
            width="100"
            height="24"
            viewBox="0 0 100 24"
            fill="none"
          >
            <polyline
              points="0,18 16,4 32,18 48,4 64,18 80,4 100,18"
              stroke="white"
              strokeOpacity="0.5"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Experience list */}
        {experiences.map((exp, i) => (
          <div key={i} className={""}>
            {/* Role header */}
            <div className="flex items-center justify-between px-8 pt-6 pb-2">
              <span className="font-poppins text-base font-bold text-white">
                {exp.role}
              </span>
              <span className="font-poppins text-sm font-bold text-white">
                {exp.workType}
              </span>
            </div>

            {/* Entries */}
            {exp.entries.map((entry, j) => (
              <div key={j} className="px-8 pb-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-['Nunito_Sans'] text-[14px] text-white/80">
                    {entry.company}
                  </span>
                  <span className="font-['Nunito_Sans'] text-[13px] text-white/60">
                    {entry.period}
                  </span>
                </div>
                <ul className="space-y-1">
                  {entry.tasks.map((task, k) => (
                    <li
                      key={k}
                      className="flex items-start gap-2 font-['Nunito_Sans'] text-[14px] font-light text-white/70"
                    >
                      <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
