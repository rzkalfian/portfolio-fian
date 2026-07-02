// ─── Types ───────────────────────────────────────────────────────────────────

export type ExperienceEntry = {
  company: string;
  period: string;
  tasks: string[];
};

export type Experience = {
  role: string;
  workType: string;
  entries: ExperienceEntry[];
};

// ─── Data ─────────────────────────────────────────────────────────────────────

export const experiences: Experience[] = [
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
