export default function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-[9px] text-[var(--text4)] tracking-[0.14em] mb-2 font-mono uppercase">
      {children}
    </div>
  );
}
