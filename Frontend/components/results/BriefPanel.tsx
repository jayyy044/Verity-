import CompanyProfile from "./brief/CompanyProfile";
import FitScore from "./brief/FitScore";
import MarketSection from "./brief/MarketSection";
import NewsSection from "./brief/NewsSection";
import ConfidenceFooter from "./brief/ConfidenceFooter";

export default function BriefPanel({
  companyName,
  data,
}: {
  companyName: string;
  data: any;
}) {
  return (
    <div className="flex flex-col overflow-y-auto bg-[var(--surface)] brief-scrollbar h-full">
      {/* Header */}
      <div className="py-3.5 px-[18px] border-b border-[var(--border)] bg-[var(--surface)] sticky top-0 z-10">
        <div className="font-serif text-[19px] font-light text-[var(--text)] mb-0.5">
          {companyName}
        </div>
        <div className="text-[10px] text-[var(--text3)] tracking-[0.04em] font-mono">
          {data.stage} &middot; {data.sector} &middot; {data.location}
        </div>
      </div>

      {/* Sections */}
      <CompanyProfile data={data.profile} />
      <FitScore data={data.fit} />
      <MarketSection data={data.market} />
      <NewsSection data={data.news} />

      {/* Footer */}
      <ConfidenceFooter
        level={data.confidence.level}
        notes={data.confidence.notes}
      />
    </div>
  );
}
