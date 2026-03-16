"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const sampleCompanies = [
  "Wealthsimple",
  "League Inc.",
  "Cohere Health",
  "Nuvei",
];

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      const slug = query
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
      router.push(`/results/${slug}?name=${encodeURIComponent(query.trim())}`);
    }
  };

  const handlePillClick = (company: string) => {
    const slug = company
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    router.push(`/results/${slug}?name=${encodeURIComponent(company)}`);
  };

  return (
    <div className="w-full max-w-[50vw]">
      <form onSubmit={handleSubmit}>
        <div className="flex border border-[var(--border2)] bg-[var(--surface)] focus-within:border-[var(--gold)]">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter company name  (e.g. Wealthsimple, League Inc., Cohere Health)"
            className="flex-1 bg-transparent border-none outline-none text-[var(--text)] font-mono text-[13px] py-[13px] px-[18px] tracking-[0.02em] placeholder:text-[var(--text4)]"
          />
          <button
            type="submit"
            className="bg-[var(--gold)] border-none text-black font-mono text-[11px] font-medium px-6 tracking-[0.08em] cursor-pointer whitespace-nowrap hover:opacity-90 transition-opacity"
          >
            MAP IT &rarr;
          </button>
        </div>
      </form>

      <div className="flex items-center gap-2 flex-wrap justify-center mt-4">
        <span className="text-[15px] text-[var(--text4)] tracking-[0.06em] font-mono font-bold">
          TRY:
        </span>
        {sampleCompanies.map((company) => (
          <button
            key={company}
            onClick={() => handlePillClick(company)}
            className="border border-[var(--border)] bg-transparent text-[var(--text3)] font-mono text-[15px] py-1 px-3 cursor-pointer tracking-[-0.5px] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
          >
            {company}
          </button>
        ))}
      </div>
    </div>
  );
}
