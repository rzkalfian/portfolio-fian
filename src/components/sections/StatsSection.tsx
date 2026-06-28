import StatCard from "../common/StatCard";

const stats = [
  { value: "3+", label: "Tahun Pengalaman", description: "Di bidang Frontend Development" },
  { value: "20+", label: "Proyek Selesai", description: "Dari startup hingga enterprise" },
  { value: "15+", label: "Klien Puas", description: "Lokal & internasional" },
  { value: "99%", label: "Client Satisfaction", description: "Berdasarkan ulasan klien" },
];

export default function StatsSection() {
  return (
    <section className="px-18 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
