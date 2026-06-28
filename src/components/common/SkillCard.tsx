interface SkillCardProps {
  name: string;
  icon: string;
  level?: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

const levelColor: Record<string, string> = {
  Beginner: "#6B7280",
  Intermediate: "#F59E0B",
  Advanced: "#1CC8B7",
  Expert: "#014AEB",
};

const levelWidth: Record<string, string> = {
  Beginner: "25%",
  Intermediate: "50%",
  Advanced: "75%",
  Expert: "100%",
};

export default function SkillCard({ name, icon, level = "Advanced" }: SkillCardProps) {
  return (
    <div className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-6 transition-all duration-300 hover:border-[#014AEB]/40 hover:bg-white/8">
      <span className="text-4xl">{icon}</span>
      <span className="font-poppins text-sm font-semibold text-white">{name}</span>

      {/* Level bar */}
      <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: levelWidth[level],
            backgroundColor: levelColor[level],
          }}
        />
      </div>
      <span className="text-xs text-white/40">{level}</span>
    </div>
  );
}
