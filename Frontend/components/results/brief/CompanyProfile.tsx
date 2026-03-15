import SectionLabel from "@/components/shared/SectionLabel";

type CompanyData = {
  description: string;
  hq: string;
  founded: string | number;
  headcount: string | number;
  stage: string;
};

export default function CompanyProfile({ data }: { data: CompanyData }) {
  return (
    <div className="py-[13px] px-[18px] border-b border-[var(--border)]">
      <SectionLabel>COMPANY PROFILE</SectionLabel>
      <p className="text-[11px] text-[var(--text2)] leading-[1.55] mb-2.5 font-sans">
        {data.description}
      </p>
      <div className="grid grid-cols-2 gap-1.5">
        <div className="bg-[var(--surface2)] py-[7px] px-2.5">
          <div className="text-[9px] text-[var(--text4)] mb-0.5 font-mono">
            HQ
          </div>
          <div className="text-[12px] text-[var(--text)] font-mono">
            {data.hq}
          </div>
        </div>
        <div className="bg-[var(--surface2)] py-[7px] px-2.5">
          <div className="text-[9px] text-[var(--text4)] mb-0.5 font-mono">
            Founded
          </div>
          <div className="text-[12px] text-[var(--text)] font-mono">
            {data.founded}
          </div>
        </div>
        <div className="bg-[var(--surface2)] py-[7px] px-2.5">
          <div className="text-[9px] text-[var(--text4)] mb-0.5 font-mono">
            Headcount
          </div>
          <div className="text-[12px] text-[var(--text)] font-mono">
            {data.headcount}
          </div>
        </div>
        <div className="bg-[var(--surface2)] py-[7px] px-2.5">
          <div className="text-[9px] text-[var(--text4)] mb-0.5 font-mono">
            Stage
          </div>
          <div className="text-[12px] text-[var(--text)] font-mono">
            {data.stage}
          </div>
        </div>
      </div>
    </div>
  );
}
