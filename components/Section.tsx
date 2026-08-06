'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

// Every section shares one outer container (max-w-shell) so left edges line up
// down the whole page. Anything that draws a horizontal rule stays 'full' so
// every rule on the page is the same length; sections that are pure body copy
// use 'measure'. Inside a 'full' section, cap the text itself with
// max-w-detail rather than the section, so the rules stay full-bleed.
type Width = 'full' | 'measure';

const innerWidth: Record<Width, string> = {
  full: '',
  measure: 'max-w-measure',
};

export default function Section({
  id,
  title,
  meta,
  width = 'full',
  className = 'py-14',
  children,
}: {
  id?: string;
  title?: string;
  meta?: string;
  width?: Width;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`relative ${className}`}>
      <div className="mx-auto w-full max-w-shell px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={innerWidth[width]}
        >
          {title && (
            <header className="mb-8">
              <h2 className="text-[28px] font-bold text-[var(--th-ink)] leading-[1.2] tracking-tight">
                {title}
              </h2>
              {meta && <p className="mt-1.5 text-sm text-[var(--th-muted)]">{meta}</p>}
            </header>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}

export function SubHead({
  id,
  count,
  children,
}: {
  id?: string;
  count?: string;
  children: ReactNode;
}) {
  return (
    <h3
      id={id}
      className="flex items-baseline gap-2 text-lg font-bold text-[var(--th-ink)] mb-3 scroll-mt-24"
    >
      {children}
      {count && <span className="text-sm font-normal text-[var(--th-faint)]">{count}</span>}
    </h3>
  );
}

// "1 contest" / "3 contests" — counts are always derived from data length so
// they can't drift when rows are added.
export function plural(n: number, noun: string, pluralNoun = `${noun}s`) {
  return `${n} ${n === 1 ? noun : pluralNoun}`;
}
