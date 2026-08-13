'use client';

import Section, { SubHead, plural } from './Section';
import { thClass, tdClass, tdWrapClass, linkClass, tableClass, rowClass } from './tableStyles';

type Row = {
  id: string;
  date: string;
  project: string;
  platform: string;
  vulnerabilities: string;
  report: string | null;
  language: string;
  rank: string;
  rankLink?: string;
};

const contests: Row[] = [
  {
    id: 'battlechain',
    date: 'Jul 2026',
    project: 'BattleChain Confidence Pools',
    platform: 'CodeHawks',
    vulnerabilities: '1M, 1L',
    report: 'https://codehawks.cyfrin.io/c/2026-07-battlechain-confidence-pools',
    language: 'Solidity',
    rank: '#1',
    rankLink: 'https://codehawks.cyfrin.io/c/2026-07-battlechain-confidence-pools/results',
  },
];

const privateAudits: Row[] = [
  {
    id: 'private-audit-1',
    date: 'Jul 2026',
    project: '[Private]',
    platform: 'Private Client',
    vulnerabilities: '3C, 3H, 3M, 4L',
    report: null,
    language: 'Solidity',
    rank: 'Solo',
  },
];

function AuditTable({ rows, showRank = true }: { rows: Row[]; showRank?: boolean }) {
  return (
    <div className="overflow-x-auto">
      <table className={`${tableClass} min-w-[780px]`}>
        <colgroup>
          <col className="w-[4%]" />
          <col className="w-[10%]" />
          <col className={showRank ? 'w-[24%]' : 'w-[33%]'} />
          <col className="w-[14%]" />
          <col className="w-[19%]" />
          <col className="w-[9%]" />
          <col className="w-[11%]" />
          {showRank && <col className="w-[9%]" />}
        </colgroup>
        <thead>
          <tr>
            <th className={thClass}>#</th>
            <th className={thClass}>Date</th>
            <th className={thClass}>Project</th>
            <th className={thClass}>Platform</th>
            <th className={thClass}>Vulnerabilities</th>
            <th className={thClass}>Report</th>
            <th className={thClass}>Language</th>
            {showRank && <th className={thClass}>Rank</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.id} className={rowClass}>
              <td className={tdClass}>{i + 1}</td>
              <td className={tdClass} data-label="Date">{row.date}</td>
              <td className={tdWrapClass} data-label="Project">
                {row.report ? (
                  <a href={row.report} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {row.project}
                  </a>
                ) : (
                  <span className="text-[var(--th-faint)]">{row.project}</span>
                )}
              </td>
              <td className={tdClass} data-label="Platform">{row.platform}</td>
              <td className={tdClass} data-label="Vulnerabilities">{row.vulnerabilities}</td>
              <td className={tdClass} data-label="Report">
                {row.report ? (
                  <a href={row.report} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    Link
                  </a>
                ) : (
                  <span className="text-[var(--th-faint)]">[Private]</span>
                )}
              </td>
              <td className={tdClass} data-label="Language">{row.language}</td>
              {showRank && (
                <td className={tdClass} data-label="Rank">
                  {row.rankLink ? (
                    <a href={row.rankLink} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {row.rank}
                    </a>
                  ) : (
                    row.rank
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function AuditContest() {
  return (
    <Section
      id="audit-contest"
      title="Audits"
      meta={plural(contests.length + privateAudits.length, 'engagement')}
    >
      <SubHead count={plural(contests.length, 'contest')}>Contests</SubHead>
      <div className="mb-10">
        <AuditTable rows={contests} />
      </div>

      <SubHead count={plural(privateAudits.length, 'audit')}>
        <span aria-hidden="true">🔒</span> Private Audits
      </SubHead>
      <AuditTable rows={privateAudits} showRank={false} />
    </Section>
  );
}
