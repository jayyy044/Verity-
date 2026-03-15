import SectionLabel from "@/components/shared/SectionLabel";

type NewsItem = {
  type: "positive" | "neutral" | "negative";
  text: string;
};

type NewsData = {
  sentiment: "positive" | "neutral" | "negative";
  sentimentScore: number;
  items: NewsItem[];
};

export default function NewsSection({ data }: { data: NewsData }) {
  const sentimentColors: Record<"positive" | "neutral" | "negative", string> = {
    positive: "var(--green)",
    neutral: "var(--text3)",
    negative: "var(--red)",
  };

  return (
    <div className="py-[13px] px-[18px] border-b border-[var(--border)]">
      <SectionLabel>NEWS &amp; SENTIMENT</SectionLabel>

      <div className="flex items-center gap-2 mb-2.5">
        <div
          className="text-[9px] tracking-[0.08em] font-mono uppercase"
          style={{ color: sentimentColors[data.sentiment] }}
        >
          {data.sentiment}
        </div>
        <div className="flex-1 h-[3px] bg-[var(--surface2)]">
          <div
            className="h-full transition-all duration-300"
            style={{
              width: `${data.sentimentScore}%`,
              background: sentimentColors[data.sentiment],
            }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        {data.items.map((item, index) => (
          <div
            key={index}
            className="py-2 px-2.5 bg-[var(--surface2)]"
            style={{ borderLeft: `2px solid ${sentimentColors[item.type]}` }}
          >
            <p className="text-[11px] text-[var(--text2)] leading-[1.4] font-mono">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
