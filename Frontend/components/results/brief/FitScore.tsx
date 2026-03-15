import SectionLabel from "@/components/shared/SectionLabel";

type FitLevel = "strong" | "moderate" | "weak";

type Tag = {
  label: string;
  match?: boolean;
};

type FitData = {
  level: FitLevel;
  tags: Tag[];
  rationale: string;
};

export default function FitScore({ data }: { data: FitData }) {
  const badgeStyles = {
    strong: {
      bg: "rgba(61,184,122,0.12)",
      text: "#3DB87A",
      border: "rgba(61,184,122,0.25)",
      label: "STRONG",
    },
    moderate: {
      bg: "rgba(245,158,11,0.12)",
      text: "#F59E0B",
      border: "rgba(245,158,11,0.25)",
      label: "MODERATE",
    },
    weak: {
      bg: "rgba(224,82,82,0.12)",
      text: "#E05252",
      border: "rgba(224,82,82,0.25)",
      label: "WEAK",
    },
  };

  const badge = badgeStyles[data.level] || badgeStyles.strong;

  return (
    <div className="py-[13px] px-[18px] border-b border-[var(--border)]">
      <SectionLabel>THESIS FIT SCORE</SectionLabel>
      <div className="bg-[var(--surface2)] border-l-2 border-l-[var(--gold)] py-2.5 px-3.5">
        <div className="flex items-center justify-between mb-1.5">
          <div className="text-[9px] text-[var(--text4)] tracking-[0.08em] font-mono">
            SAGARD FIT
          </div>
          <div
            className="text-[10px] font-medium py-[3px] px-2.5 font-mono"
            style={{
              background: badge.bg,
              color: badge.text,
              border: `1px solid ${badge.border}`,
            }}
          >
            {badge.label}
          </div>
        </div>
        <div className="flex gap-[5px] mb-[7px]">
          {data.tags.map((tag, index) => (
            <div
              key={index}
              className={`text-[9px] py-[3px] px-2 font-mono ${
                tag.match
                  ? "border border-[var(--gold-border)] text-[var(--gold)] bg-[var(--gold-bg)]"
                  : "border border-[var(--border)] text-[var(--text3)] bg-transparent"
              }`}
            >
              {tag.label}
            </div>
          ))}
        </div>
        <p className="text-[11px] text-[var(--text2)] leading-[1.5] font-sans">
          {data.rationale}
        </p>
      </div>
    </div>
  );
}
