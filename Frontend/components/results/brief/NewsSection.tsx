import SectionLabel from "@/components/shared/SectionLabel";

type RecentEvent = { // Fixed typo "Recemt"
  date: string,
  event: string
}

type NewsData = {
  // Fixed casing to match your data: "Positive" | "Neutral" | "Negative"
  sentiment: "Positive" | "Neutral" | "Negative" | "positive" | "neutral" | "negative";
  summary: string; // Fixed typo "summar" -> "summary"
  recent_events: RecentEvent[];
};

export default function NewsSection({ news }: { news: NewsData }) {
  // Optional: Add a safety check if news is undefined

  const sentimentColors = {
    positive: 'var(--green)',
    neutral: 'var(--text3)',
    negative: 'var(--red)'
  }

  // Normalize sentiment to lowercase for the color mapping
  const sentiment = news.sentiment?.toLowerCase() as "positive" | "neutral" | "negative";
  const sentimentScore = sentiment === 'positive' ? 80 : sentiment === 'negative' ? 30 : 50;
  return (
    <div className="py-[13px] px-[18px] border-b border-[var(--border)]">
    <SectionLabel>NEWS & SENTIMENT</SectionLabel>
    
    <div className="flex items-center gap-2 mb-2.5">
      <div 
        className="text-[11.5px] tracking-[0.04em] font-mono uppercase"
        style={{ color: sentimentColors[sentiment] }}
      >
        {news?.sentiment || ''}
      </div>
      <div className="flex-1 h-[3px] bg-[var(--surface2)]">
        <div 
          className="h-full transition-all duration-300"
          style={{ 
            width: `${sentimentScore}%`, 
            background: sentimentColors[sentiment] 
          }}
        />
      </div>
    </div>

    {/* Summary */}
    {news?.summary && (
      <p className="text-[12.5px] text-[var(--text2)] leading-[1.2] font-sans mb-3">
        {news.summary}
      </p>
    )}
    
    {/* Recent Events */}
    {news?.recent_events?.length > 0 && (
      <div className="flex flex-col gap-1.5">
        {news.recent_events.map((item, index) => (
          <div 
            key={index}
            className="py-2 px-2.5 bg-[var(--surface2)]"
            style={{ borderLeft: `2px solid ${sentimentColors[sentiment]}` }}
          >
            <div className="text-[11px] text-[var(--text4)] font-mono mb-0.5">{item.date}</div>
            <p className="text-[12.5px] text-[var(--text2)] leading-[1.4] font-sans">
              {item.event}
            </p>
          </div>
        ))}
      </div>
    )}
  </div>
  );
}
