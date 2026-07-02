import StatCard from "../common/StatCard";
import { stats } from "../../data/stats";

export default function StatsSection() {
  return (
    <section className="px-6 py-12 md:px-18 md:py-20">
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
