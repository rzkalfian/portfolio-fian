import {
  Box1,
  Layer,
  Code,
  Filter,
  Command,
  CommandSquare,
} from "iconsax-react";
import type { Icon } from "iconsax-react";
import ServiceCard from "../common/ServiceCard";

type Service = {
  Icon: Icon;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    Icon: Box1,
    iconBg: "radial-gradient(circle, #1a3a6e 0%, #0d1f3c 100%)",
    iconColor: "#5B9CF6",
    title: "Pengembangan",
    description:
      "Menciptakan antarmuka intuitif dan estetis yang berfokus pada pengalaman pengguna.",
  },
  {
    Icon: Layer,
    iconBg: "radial-gradient(circle, #3d3000 0%, #1a1500 100%)",
    iconColor: "#D4A017",
    title: "Teknisi Flutter",
    description:
      "Membangun aplikasi mobile lintas platform berperforma tinggi dengan fungsionalitas mulus.",
  },
  {
    Icon: Code,
    iconBg: "radial-gradient(circle, #0d3d2e 0%, #051a14 100%)",
    iconColor: "#2DD4BF",
    title: "Frontend Dev",
    description:
      "Mengembangkan antarmuka web yang responsif dan interaktif menggunakan teknologi modern.",
  },
  {
    Icon: Filter,
    iconBg: "radial-gradient(circle, #0d3d1e 0%, #051a0e 100%)",
    iconColor: "#22C55E",
    title: "Manual Tester",
    description:
      "Menjamin kualitas perangkat lunak melalui pengujian teliti dan deteksi bug.",
  },
  {
    Icon: Command,
    iconBg: "radial-gradient(circle, #1a2f6e 0%, #0d1535 100%)",
    iconColor: "#5B9CF6",
    title: "Kerja Tim",
    description:
      "Berkolaborasi secara efektif untuk mencapai tujuan bersama dan kesuksesan proyek.",
  },
  {
    Icon: CommandSquare,
    iconBg: "radial-gradient(circle, #3d3000 0%, #1a1500 100%)",
    iconColor: "#D4A017",
    title: "Berpikir Kritis",
    description:
      "Menyelesaikan masalah kompleks dengan pendekatan analitis dan solusi inovatif.",
  },
];

export default function ServiceSection() {
  return (
    <section id="service" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-14 px-8 py-10 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#014AEB]">
            KEMAMPUAN
          </p>
          <h2 className="font-poppins mb-4 text-4xl font-bold text-white">
            <span className="text-[#014AEB]">Spesialisasi</span> Saya
          </h2>
          <p className="mx-auto max-w-lg text-base text-white/60">
            Menyediakan solusi digital berkualitas tinggi melalui kombinasi
            desain kreatif, teknik yang kokoh, dan kolaborasi strategis.
          </p>
        </div>

        {/* Services Grid */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                Icon={service.Icon}
                iconBg={service.iconBg}
                iconColor={service.iconColor}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
