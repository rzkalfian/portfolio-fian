import TestimonialCard from "../common/TestimonialCard";
import { testimonials } from "../../data/testimonials";

export default function TestimonialSection() {
  return (
    <section className="px-6 py-16 md:px-18 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-left md:text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[#014AEB]">
            Apa Kata Mereka
          </p>
          <h2 className="font-poppins text-2xl font-bold text-white md:text-4xl">
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
