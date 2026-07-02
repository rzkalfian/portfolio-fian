import { experiences } from "../../data/experiences";

export default function AboutHistoryCard() {
  return (
    <>
      {/* Label */}
      <div className="mt-20 flex items-center gap-3">
        <span className="h-px w-8 bg-[#014AEB]" />
        <span className="font-poppins text-sm text-[#014AEB]">
          Pengalaman Fian
        </span>
      </div>

      {/* Experience section */}
      <div className="mt-8">
        {/* Header */}
        <div className="flex flex-col gap-4 px-4 py-6 md:flex-row md:items-start md:justify-between md:px-8 md:py-8">
          <h2 className="max-w-full font-poppins text-[22px] font-bold leading-[1.3] text-white md:max-w-[60%] md:text-[28px]">
            Membangun Pengalaman Digital Melalui Karya Terbaik.
          </h2>
          <svg
            className="mt-2 hidden shrink-0 md:block"
            width="100"
            height="24"
            viewBox="0 0 100 24"
            fill="none"
          >
            <polyline
              points="0,18 16,4 32,18 48,4 64,18 80,4 100,18"
              stroke="white"
              strokeOpacity="0.5"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Experience list */}
        {experiences.map((exp, i) => (
          <div key={i} className={""}>
            {/* Role header */}
            <div className="flex flex-col gap-1 px-4 pt-6 pb-2 md:flex-row md:items-center md:justify-between md:px-8">
              <span className="font-poppins text-base font-bold text-white">
                {exp.role}
              </span>
              <span className="font-poppins text-sm font-bold text-white/60 md:text-white">
                {exp.workType}
              </span>
            </div>

            {/* Entries */}
            {exp.entries.map((entry, j) => (
              <div key={j} className="px-4 pb-6 md:px-8">
                <div className="mb-2 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                  <span className="font-['Nunito_Sans'] text-[14px] text-white/80">
                    {entry.company}
                  </span>
                  <span className="font-['Nunito_Sans'] text-[12px] text-white/50 md:text-[13px] md:text-white/60">
                    {entry.period}
                  </span>
                </div>
                <ul className="space-y-1">
                  {entry.tasks.map((task, k) => (
                    <li
                      key={k}
                      className="flex items-start gap-2 font-['Nunito_Sans'] text-[14px] font-light text-white/70"
                    >
                      <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
