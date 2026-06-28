import TestimonialCard from "../common/TestimonialCard";

const testimonials = [
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

export default function TestimonialSection() {
  return (
    <section className="px-18 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[#014AEB]">
            Apa Kata Mereka
          </p>
          <h2 className="font-poppins text-4xl font-bold text-white">
            Testimoni Klien
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
