const stats = [
  { value: "190+", label: "PORTFOLIO COMPANIES" },
  { value: "80:1", label: "SCREEN TO INVEST RATIO" },
  { value: "<60s", label: "RESEARCH TIME" },
  { value: "6", label: "RESEARCH DIMENSIONS" },
];

export default function StatsStrip() {
  return (
    <div className="flex gap-10 mt-[52px] pt-7 border-t border-[#1A1D22]">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="font-serif text-[22px] font-light text-[var(--text)]">
            {stat.value}
          </div>
          <div className="text-[10px] text-[var(--text4)] tracking-[0.08em] mt-[3px] font-mono">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
