'use client';

import { useState } from 'react';
import Section from './Section';

export type FeedItem = {
  id: string;
  title: string;
  meta: string;
  href?: string;
};

export default function FeedList({
  id,
  title,
  itemNoun,
  items,
}: {
  id: string;
  title: string;
  itemNoun: string;
  items: FeedItem[];
}) {
  const [filter, setFilter] = useState('');

  const filtered = items.filter((item) =>
    (item.title + ' ' + item.meta).toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Section
      id={id}
      title={title}
      meta={`${items.length} ${itemNoun}`}
      className="py-14 scroll-mt-24"
    >
      <div className="flex flex-wrap gap-2.5 mb-[22px] -mt-3">
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder={`Filter ${items.length} ${itemNoun}`}
          aria-label={`Filter ${itemNoun}`}
          className="flex-1 min-w-[240px] max-w-[400px] px-3.5 py-2.5 text-sm rounded border border-[var(--th-line)] bg-[var(--th-surface)] text-[var(--th-body)] focus:outline-none focus:border-[var(--th-ink)] transition-colors duration-150"
        />
      </div>

      <div className="border-t-2 border-[var(--th-ink)]">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-1 sm:gap-4 sm:items-baseline py-[15px] px-0.5 border-b border-[var(--th-line)] hover:bg-[var(--th-raised)] transition-colors duration-150"
          >
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[17px] leading-snug text-[var(--th-ink)] hover:text-[var(--th-muted)] transition-colors duration-150"
              >
                {item.title}
              </a>
            ) : (
              <span className="text-[17px] leading-snug text-[var(--th-ink)]">{item.title}</span>
            )}
            <span className="text-[13px] leading-snug text-[var(--th-muted)] whitespace-nowrap">
              {item.meta}
            </span>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="py-6 text-sm text-[var(--th-muted)]">No matches.</p>
        )}
      </div>
    </Section>
  );
}
