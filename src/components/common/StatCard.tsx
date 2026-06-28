interface StatCardProps {
  value: string;
  label: string;
  description?: string;
}

export default function StatCard({ value, label, description }: StatCardProps) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-8 text-center">
      <span className="font-poppins text-5xl font-bold text-[#014AEB]">
        {value}
      </span>
      <span className="font-poppins text-lg font-semibold text-white">
        {label}
      </span>
      {description && (
        <span className="text-sm font-light text-white/50">{description}</span>
      )}
    </div>
  );
}
