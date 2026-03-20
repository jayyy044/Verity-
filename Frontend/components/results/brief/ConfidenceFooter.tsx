type ConfidenceLevel = {
  score : "High" | "Medium" | "Low",
  note : string
};

export default function ConfidenceFooter({data}: {data : ConfidenceLevel}) {
  const badgeStyles = {
    High: {
      bg: "rgba(61,184,122,0.1)",
      text: "#3DB87A",
    },
    Medium: {
      bg: "rgba(245,158,11,0.1)",
      text: "#F59E0B",
    },
    Low: {
      bg: "rgba(224,82,82,0.1)",
      text: "#E05252",
    },
  };

  const badge = badgeStyles[data.score];

  return (
    <div className="py-2 px-[18px] flex items-center gap-2 text-[12px] text-[var(--text4)] border-t border-[var(--border)] bg-[var(--surface3)] font-mono">
      <span>Research confidence:</span>
      <span
        className="py-0.5 px-2"
        style={{ background: badge.bg, color: badge.text, fontSize: '12px'}}
      >
        {data.score.toUpperCase()}
      </span>
      <span className="flex-1 text-[#333] ml-1 ">{data.note}</span>
    </div>
  );
}
