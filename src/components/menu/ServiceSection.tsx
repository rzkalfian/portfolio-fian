import type { Icon } from "iconsax-react";
import ServiceCard from "../common/ServiceCard";
import { serviceCards } from "../../data/services";

type Service = {
  Icon: Icon;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
};

export default function ServiceSection() {
  return (
    <section id="service" className="py-8">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-14 px-8 py-10 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#014AEB]">
            KEMAMPUAN
          </p>
          <h2 className="font-poppins mb-4 text-2xl font-bold text-white md:text-4xl">
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
            {serviceCards.map((service: Service) => (
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
