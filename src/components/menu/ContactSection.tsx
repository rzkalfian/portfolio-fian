import { useState } from "react";
import { contactLinks } from "../../data/contacts";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder – integrate with email service as needed
    setSent(true);
  };

  return (
    <section id="contact" className="px-6 py-16 md:px-18 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[#014AEB]">
            Mari Terhubung
          </p>
          <h2 className="font-poppins text-2xl font-bold text-white md:text-4xl">
            Hubungi Saya
          </h2>
          <p className="mt-4 text-base font-light text-white/60">
            Punya proyek menarik? Saya siap membantu mewujudkannya.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <div>
            <p className="mb-8 text-base font-light leading-relaxed text-white/70">
              Jangan ragu untuk menghubungi saya melalui form atau langsung
              lewat saluran kontak di bawah ini. Saya biasanya membalas dalam
              1x24 jam.
            </p>

            <div className="space-y-4">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-[#014AEB]/40 hover:bg-white/8"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-xs font-medium text-white/50">
                      {item.label}
                    </p>
                    <p className="text-sm text-white">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                <span className="text-5xl">🎉</span>
                <p className="font-poppins text-lg font-semibold text-white">
                  Pesan Terkirim!
                </p>
                <p className="text-sm text-white/60">
                  Terima kasih telah menghubungi saya. Saya akan segera membalas
                  pesan Anda.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-1 block text-sm text-white/70">
                    Nama
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nama lengkap Anda"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-[#014AEB]/60 focus:ring-1 focus:ring-[#014AEB]/30"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm text-white/70">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-[#014AEB]/60 focus:ring-1 focus:ring-[#014AEB]/30"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm text-white/70">
                    Pesan
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Ceritakan proyek atau pertanyaan Anda..."
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-[#014AEB]/60 focus:ring-1 focus:ring-[#014AEB]/30"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-[#014AEB] to-[#1CC8B7] py-3 font-poppins text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  Kirim Pesan
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
