export default function ProofLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 ml-2 px-2.5 py-1 rounded-full bg-[var(--th-fill)] text-[var(--th-on-ink)] text-xs font-semibold align-middle hover:bg-[var(--th-fill-hover)] transition-colors duration-150 whitespace-nowrap"
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
