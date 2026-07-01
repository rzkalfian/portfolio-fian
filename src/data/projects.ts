export interface Project {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  description: string;
  about: string;
  tags: string[];
  link: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "e-commerce-dashboard",
    title: "E-Commerce Dashboard",
    subtitle: "Dashboard manajemen toko online dengan fitur analitik real-time.",
    client: "Freelance Project",
    description:
      "Dashboard manajemen toko online dengan fitur analitik real-time, manajemen produk, dan laporan penjualan.",
    about:
      "Proyek ini dibangun untuk membantu pemilik toko online dalam memantau performa bisnis secara real-time. Fitur utama mencakup visualisasi data penjualan harian dan bulanan menggunakan Chart.js, manajemen produk dengan CRUD lengkap, serta laporan penjualan yang dapat diekspor ke format PDF dan Excel.\n\nAntarmuka dirancang agar intuitif dan responsif di semua ukuran layar. Setiap komponen dibangun dengan TypeScript untuk memastikan keandalan kode, sementara Tailwind CSS digunakan untuk menjaga konsistensi tampilan secara efisien.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    link: "#",
  },
  {
    id: "landing-page-saas",
    title: "Landing Page SaaS",
    subtitle: "Halaman pemasaran modern untuk produk SaaS.",
    client: "Freelance Project",
    description:
      "Halaman pemasaran modern untuk produk SaaS dengan animasi scroll, section pricing, dan form demo.",
    about:
      "Landing page ini dirancang untuk meningkatkan konversi pengguna baru bagi sebuah produk SaaS. Animasi scroll yang halus menggunakan Framer Motion memberikan pengalaman browsing yang menyenangkan dan profesional.\n\nSection pricing dirancang dengan tiga tier yang jelas dan CTA yang menonjol. Form demo terintegrasi langsung dengan sistem notifikasi email. Seluruh halaman dioptimalkan untuk kecepatan loading dan SEO, menghasilkan skor Lighthouse di atas 95.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    link: "#",
  },
  {
    id: "aplikasi-manajemen-tugas",
    title: "Aplikasi Manajemen Tugas",
    subtitle: "Aplikasi produktivitas untuk mengelola tugas harian.",
    client: "Personal Project",
    description:
      "Aplikasi produktivitas untuk mengelola tugas harian dengan fitur drag & drop dan notifikasi.",
    about:
      "Aplikasi ini terinspirasi dari metodologi Kanban untuk membantu pengguna mengorganisir pekerjaan sehari-hari secara visual. Fitur drag & drop diimplementasikan menggunakan DnD Kit yang memberikan pengalaman interaksi yang smooth dan natural.\n\nState management menggunakan Zustand dipilih karena kesederhanaannya namun tetap powerful untuk kebutuhan aplikasi ini. Notifikasi browser terintegrasi untuk mengingatkan deadline tugas. Data tersimpan di localStorage sehingga tidak memerlukan backend.",
    tags: ["React", "Zustand", "DnD Kit"],
    link: "#",
  },
  {
    id: "portfolio-template",
    title: "Portfolio Template",
    subtitle: "Template portfolio minimalis dan modern untuk developer.",
    client: "Open Source",
    description:
      "Template portfolio minimalis dan modern untuk developer dengan mode gelap dan animasi halus.",
    about:
      "Template ini dibuat sebagai solusi cepat bagi developer yang ingin memiliki portfolio profesional tanpa perlu membangun dari nol. Didesain dengan prinsip minimalis namun tetap memberikan kesan modern dan elegan.\n\nMode gelap diimplementasikan menggunakan CSS custom properties sehingga transisi antar tema berjalan mulus. Animasi halus pada setiap elemen menggunakan CSS transitions murni tanpa library tambahan, menjaga bundle size tetap kecil.",
    tags: ["Vite", "TypeScript", "Tailwind CSS"],
    link: "#",
  },
  {
    id: "blog-platform",
    title: "Blog Platform",
    subtitle: "Platform blog dengan editor markdown dan sistem komentar.",
    client: "Freelance Project",
    description:
      "Platform blog dengan editor markdown, sistem komentar, dan fitur pencarian artikel secara real-time.",
    about:
      "Platform blog ini dibangun untuk kebutuhan konten yang kaya dan mudah dikelola. Editor markdown memungkinkan penulis memformat konten dengan cepat, sementara preview real-time memastikan hasil akhir sesuai harapan.\n\nSistem komentar terintegrasi dengan autentikasi pengguna. Fitur pencarian real-time mengindeks seluruh konten artikel menggunakan Fuse.js untuk hasil yang akurat dan cepat. Database dikelola menggunakan Prisma ORM dengan PostgreSQL sebagai penyimpanan utama.",
    tags: ["Next.js", "MDX", "Prisma"],
    link: "#",
  },
  {
    id: "ui-component-library",
    title: "UI Component Library",
    subtitle: "Kumpulan komponen UI yang dapat digunakan ulang.",
    client: "Open Source",
    description:
      "Kumpulan komponen UI yang dapat digunakan ulang dengan dokumentasi lengkap dan theme yang dapat dikustomisasi.",
    about:
      "Library ini dibangun untuk menjawab kebutuhan tim yang sering membangun produk dengan desain yang konsisten. Setiap komponen didokumentasikan secara lengkap menggunakan Storybook, mencakup semua variant, prop, dan contoh penggunaan.\n\nSistem theming yang fleksibel memungkinkan kustomisasi warna, tipografi, dan spacing hanya dengan mengubah token desain. Seluruh komponen diuji dengan unit test menggunakan Vitest dan aksesibilitas WCAG 2.1 AA.",
    tags: ["React", "Storybook", "TypeScript"],
    link: "#",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
