import SectionLabel from "@/components/shared/SectionLabel";

type MarketData = {
  tam: string;
  vertical: string;
  tailwinds: string;
  headwinds: string;
};

export default function MarketSection({ data }: { data: MarketData }) {
  return (
    <div className="py-[13px] px-[18px] border-b border-[var(--border)]">
      <SectionLabel>MARKET</SectionLabel>
      <div className="grid grid-cols-2 gap-1.5 mb-2.5">
        <div className="bg-[var(--surface2)] py-2 px-2.5">
          <div className="text-[9px] text-[var(--text4)] mb-[3px] font-mono">
            TAM
          </div>
          <div className="text-[11px] text-[var(--text)] font-mono">
            {data.tam}
          </div>
        </div>
        <div className="bg-[var(--surface2)] py-2 px-2.5">
          <div className="text-[9px] text-[var(--text4)] mb-[3px] font-mono">
            Vertical
          </div>
          <div className="text-[11px] text-[var(--text)] font-mono">
            {data.vertical}
          </div>
        </div>
      </div>

      <div className="text-[9px] text-[var(--green)] tracking-[0.1em] mb-[5px] font-mono">
        TAILWINDS
      </div>
      <p className="text-[11px] text-[var(--text2)] leading-[1.6] mb-2 font-sans">
        {data.tailwinds}
      </p>

      <div className="text-[9px] text-[var(--red)] tracking-[0.1em] mb-[5px] font-mono">
        HEADWINDS
      </div>
      <p className="text-[11px] text-[var(--text2)] leading-[1.6] font-sans">
        {data.headwinds}
      </p>
    </div>
  );
}
