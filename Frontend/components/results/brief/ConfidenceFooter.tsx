type ConfidenceLevel = "high" | "medium" | "low";

export default function ConfidenceFooter({
  level = "high",
  notes,
}: {
  level?: ConfidenceLevel;
  notes: string;
}) {
  const badgeStyles = {
    high: {
      bg: "rgba(61,184,122,0.1)",
      text: "#3DB87A",
    },
    medium: {
      bg: "rgba(245,158,11,0.1)",
      text: "#F59E0B",
    },
    low: {
      bg: "rgba(224,82,82,0.1)",
      text: "#E05252",
    },
  };

  const badge = badgeStyles[level] || badgeStyles.high;

  return (
    <div className="py-2 px-[18px] flex items-center gap-2 text-[9px] text-[var(--text4)] border-t border-[var(--border)] bg-[var(--surface3)] font-mono">
      <span>Research confidence:</span>
      <span
        className="py-0.5 px-2"
        style={{ background: badge.bg, color: badge.text }}
      >
        {level.toUpperCase()}
      </span>
      <span className="flex-1 text-[#333]">{notes}</span>
    </div>
  );
}
