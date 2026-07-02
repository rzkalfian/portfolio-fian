// ─── Types ───────────────────────────────────────────────────────────────────

export type Stat = {
  value: string;
  label: string;
  description: string;
};

// ─── Stats section (StatsSection) ────────────────────────────────────────────

export const stats: Stat[] = [
  { value: "3+",  label: "Tahun Pengalaman",   description: "Di bidang Frontend Development" },
  { value: "20+", label: "Proyek Selesai",      description: "Dari startup hingga enterprise" },
  { value: "15+", label: "Klien Puas",          description: "Lokal & internasional" },
  { value: "99%", label: "Client Satisfaction", description: "Berdasarkan ulasan klien" },
];

// ─── Mini stats (HeroSection & AboutProfileCard) ─────────────────────────────

export const heroStats: Stat[] = [
  { value: "3+",  label: "Tahun Pengalaman", description: "" },
  { value: "20+", label: "Proyek Selesai",   description: "" },
];
