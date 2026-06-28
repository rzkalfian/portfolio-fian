interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  review: string;
}

export default function TestimonialCard({
  name,
  role,
  company,
  avatar,
  rating,
  review,
}: TestimonialCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-[#014AEB]/30 hover:bg-white/8">
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="text-base"
            style={{ color: i < rating ? "#F59E0B" : "#374151" }}
          >
            ★
          </span>
        ))}
      </div>

      {/* Review text */}
      <p className="flex-1 text-sm font-light leading-relaxed text-white/70">
        "{review}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 border-t border-white/10 pt-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#014AEB]/40 to-[#1CC8B7]/30 text-lg font-bold text-white">
          {avatar}
        </div>
        <div>
          <p className="font-poppins text-sm font-semibold text-white">{name}</p>
          <p className="text-xs text-white/50">
            {role} · {company}
          </p>
        </div>
      </div>
    </div>
  );
}
