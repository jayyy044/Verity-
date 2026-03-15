"use client";

export default function Logo({ size = "default" }) {
  const logoSize =
    size === "small" ? "w-6 h-6 text-[9px]" : "w-[26px] h-[26px] text-[10px]";
  const textSize = size === "small" ? "text-[14px]" : "text-[15px]";

  return (
    <div className="flex items-center gap-2.5">
      <div
        className={`${logoSize} bg-[var(--gold)] flex items-center justify-center font-medium text-black font-mono`}
      >
        SI
      </div>
      <div
        className={`font-serif ${textSize} font-light text-[var(--text)] tracking-[0.02em]`}
      >
        Sagard <span className="text-[var(--gold)]">Intelligence</span>
      </div>
    </div>
  );
}
