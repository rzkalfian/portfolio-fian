// ─── Types ───────────────────────────────────────────────────────────────────

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  review: string;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    name: "Budi Santoso",
    role: "CEO",
    company: "PT. Digital Maju",
    avatar: "B",
    rating: 5,
    review:
      "Fian mengerjakan dashboard kami dengan sangat profesional. Kode yang dihasilkan bersih, terstruktur, dan performa aplikasinya meningkat drastis setelah revamp.",
  },
  {
    name: "Sarah Wijaya",
    role: "Product Manager",
    company: "Startup Teknologi",
    avatar: "S",
    rating: 5,
    review:
      "Sangat puas dengan hasil kerjanya! Landing page yang dibuat memiliki konversi yang jauh lebih baik dibanding sebelumnya. Responsif dan animasinya halus.",
  },
  {
    name: "Reza Pratama",
    role: "CTO",
    company: "SaaS Company",
    avatar: "R",
    rating: 5,
    review:
      "Fian memahami kebutuhan teknis dengan cepat dan mampu translate desain Figma ke kode dengan sangat akurat. Rekomendasikan untuk project frontend!",
  },
];
