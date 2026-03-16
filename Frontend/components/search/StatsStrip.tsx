const stats = [
  { value: "20+", label: "SOURCES PER ANALYSIS" },
  { value: "Live", label: "REAL-TIME DATA" },
  { value: "<60s", label: "PROCESSING TIME" },
  { value: "6", label: "ANALYSIS DIMENSIONS" },
];

export default function StatsStrip() {
  return (
    <div className="flex gap-10 mt-[40px] pt-7 border-t border-[#1A1D22] w-[70vw] justify-center">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="font-serif text-[24px] font-light text-[var(--text)]">
            {stat.value}
          </div>
          <div className="text-[12px] text-[var(--text4)] tracking-[0.08em] mt-[3px] font-mono">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
