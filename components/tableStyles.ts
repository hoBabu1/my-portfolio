// Shared cell/link classes for every data table on the page. Previously these
// four strings were copy-pasted into all six table components, which had
// already let one of them drift.

export const thClass =
  'text-left text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--th-muted)] pb-2.5 pr-4 border-b-2 border-[var(--th-ink)] whitespace-nowrap';

export const tdClass =
  'py-3.5 pr-4 border-b border-[var(--th-line)] text-[15px] text-[var(--th-body)] whitespace-nowrap';

export const tdWrapClass =
  'py-3.5 pr-4 border-b border-[var(--th-line)] text-[15px] text-[var(--th-body)] whitespace-normal break-words';

export const linkClass =
  'text-[var(--th-ink)] underline decoration-[var(--th-line)] hover:decoration-[var(--th-ink)]';

export const tableClass = 'mobile-card-table w-full border-collapse table-fixed';

export const rowClass = 'hover:bg-[var(--th-raised)] transition-colors duration-150';
