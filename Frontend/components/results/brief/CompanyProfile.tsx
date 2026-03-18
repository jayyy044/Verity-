import SectionLabel from "@/components/shared/SectionLabel";

type CompanyData = {
  business_model: string,
  description : string,
  founded : string | number,
  hq : string,
  name : string,
  sector : string,
  vertical : string,
  website : string,
  // headcount: number
};

export default function CompanyProfile({ data }: { data: CompanyData }) {
  return (
    <div className="py-[13px] px-[18px] border-b border-[var(--border)]">
      <SectionLabel>COMPANY PROFILE</SectionLabel>
      <p className="text-[13px] text-[var(--text2)] leading-[1.25]  mb-2.5 font-sans">
        {data.description}
      </p>
      <div className="grid grid-cols-2 gap-1.5">
        <div className="bg-[var(--surface2)] py-[7px] px-2.5">
          <div className="text-[11px] text-[var(--text2)] mb-0.5 font-mono font-bold tracking-[0.05em]">
            Founded
          </div>
          <div className="text-[12px] text-[var(--text)] font-mono">
            {data.founded}
          </div>
        </div>
        <div className="bg-[var(--surface2)] py-[7px] px-2.5">
          <div className="text-[11px] text-[var(--text2)] mb-0.5 font-mono font-bold tracking-[0.05em]">
            Location 
          </div>
          <div className="text-[12px] text-[var(--text)] font-mono">
            {data.hq.toUpperCase()}
          </div>
        </div>
        <div className="bg-[var(--surface2)] py-[7px] px-2.5">
          <div className="text-[11px] text-[var(--text2)] mb-0.5 font-mono font-bold tracking-[0.05em]">
            Vertical 
          </div>
          <div className="text-[12px] text-[var(--text)] font-mono">
            {data.sector}
          </div>
        </div>
        {/* <div className="bg-[var(--surface2)] py-[7px] px-2.5">
          <div className="text-[11px] text-[var(--text2)] mb-0.5 font-mono font-bold tracking-[0.05em]">
            Headcount 
          </div>
          <div className="text-[12px] text-[var(--text)] font-mono">
            {`~ ${data.headcount || 'Not Found'} `}
          </div>
        </div> */}
      </div>
    </div>
  );
}
