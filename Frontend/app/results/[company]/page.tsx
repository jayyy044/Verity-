import Topbar from "@/components/results/Topbar";
import EcosystemMap from "@/components/results/EcosystemMap";
import BriefPanel from "@/components/results/BriefPanel";

// Sample data for demonstration
const getMockData = (companyName: string) => ({
  stage: "GROWTH STAGE",
  sector: "FINTECH",
  location: "TORONTO, ON",
  profile: {
    description:
      "Canada's largest digital investment platform offering commission-free stock trading, automated investing, tax filing, and crypto trading.",
    hq: "Toronto, ON",
    founded: "2014",
    headcount: "~900",
    stage: "Growth",
  },
  fit: {
    level: "strong",
    tags: [
      { label: "FinTech", match: true },
      { label: "PE", match: true },
      { label: "North America", match: false },
    ],
    rationale:
      "Strong thesis fit across Sagard's FinTech focus. Sagard Wealth Partners creates a natural synergy angle on HNW client acquisition and digital distribution.",
  },
  market: {
    tam: "$45B+",
    vertical: "Neo-brokerage",
    tailwinds:
      "Rising retail investor participation · Digital-first wealth accumulation · Shift from high-fee advisors",
    headwinds: "Rate pressure on trading volumes · Crypto regulatory scrutiny",
  },
  news: {
    sentiment: "positive",
    sentimentScore: 76,
    items: [
      {
        type: "positive",
        text: "Raised $750M Series E at $5B valuation — still benchmark for Canadian fintech",
      },
      {
        type: "positive",
        text: "Launched Wealthsimple Tax, expanding platform beyond investing",
      },
      {
        type: "neutral",
        text: "Partnership with major Canadian banks for account linking",
      },
    ],
  },
  confidence: {
    level: "high",
    notes:
      "Strong web presence, multiple corroborating sources, confirmed funding history.",
  },
});

type ResultsPageParams = {
  company: string;
};

export default async function ResultsPage({
  params,
}: {
  params?: ResultsPageParams;
}) {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const rawCompany = params?.company || "company";
  const companyName = rawCompany
    .toString()
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c: string) => c.toUpperCase());
  const data = getMockData(companyName);

  return (
    <div className="w-full bg-[var(--bg)] border border-[var(--border)] flex flex-col h-screen">
      <Topbar companyName={companyName} fitLevel={data.fit.level} />

      <div className="grid grid-cols-[1fr_340px] flex-1 overflow-hidden">
        <div className="border-r border-[var(--border)]">
          <EcosystemMap companyName={companyName} />
        </div>
        <BriefPanel companyName={companyName} data={data} />
      </div>
    </div>
  );
}
