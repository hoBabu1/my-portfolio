'use client';

import Section, { plural } from './Section';
import { thClass, tdClass, tdWrapClass, linkClass, tableClass, rowClass } from './tableStyles';

type Row = {
  id: string;
  date: string;
  project: string;
  projectLink: string | null;
  track: string;
  result: string;
  team: string;
  detailId: string;
};

const rows: Row[] = [
  {
    id: 'swarm-escrow',
    date: 'Jul 2026',
    project: 'Swarm Escrow',
    projectLink: 'https://swarm-escrow.vercel.app/',
    track: 'BOT Chain Builder Challenge #1 — AI Agent track',
    result: 'Won #3',
    team: 'Solo',
    detailId: 'detail-swarm-escrow',
  },
  {
    id: 'aixpo',
    date: 'March 2026',
    project: 'Smart Road Damage Detection System',
    projectLink: null,
    track: 'Aixpo — College Hackathon',
    result: 'Won #1',
    team: 'Team',
    detailId: 'detail-aixpo',
  },
  {
    id: 'wallet-spy',
    date: 'Jan 2026',
    project: 'Wallet Spy',
    projectLink: 'https://solana-hackathon-one.vercel.app/',
    track: 'Solana Privacy Hack',
    result: 'N/A',
    team: 'Solo',
    detailId: 'detail-wallet-spy',
  },
  {
    id: 'invoice-nft',
    date: 'Sept 2025',
    project: 'My Invoice NFT',
    projectLink: 'https://ai-on-chain-invoice.vercel.app/',
    track: 'FutureStack GenAI Hackathon',
    result: 'N/A',
    team: 'Solo',
    detailId: 'detail-invoice-nft',
  },
];

export default function Hackathon() {
  return (
    <Section id="hackathon" title="Hackathon" meta={plural(rows.length, 'hackathon')}>
      <div className="overflow-x-auto">
        <table className={`${tableClass} min-w-[880px]`}>
          <colgroup>
            <col className="w-[4%]" />
            <col className="w-[10%]" />
            <col className="w-[20%]" />
            <col className="w-[24%]" />
            <col className="w-[10%]" />
            <col className="w-[12%]" />
            <col className="w-[20%]" />
          </colgroup>
          <thead>
            <tr>
              <th className={thClass}>#</th>
              <th className={thClass}>Date</th>
              <th className={thClass}>Project</th>
              <th className={thClass}>Track</th>
              <th className={thClass}>Result</th>
              <th className={thClass}>Solo/Team</th>
              <th className={thClass}>More Info</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.id} className={rowClass}>
                <td className={tdClass}>{i + 1}</td>
                <td className={tdClass} data-label="Date">{row.date}</td>
                <td className={tdWrapClass} data-label="Project">
                  {row.projectLink ? (
                    <a href={row.projectLink} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {row.project}
                    </a>
                  ) : (
                    row.project
                  )}
                </td>
                <td className={tdWrapClass} data-label="Track">{row.track}</td>
                <td className={tdWrapClass} data-label="Result">{row.result}</td>
                <td className={tdClass} data-label="Solo/Team">{row.team}</td>
                <td className={tdClass} data-label="More Info">
                  <a href={`#${row.detailId}`} className={linkClass}>
                    More Info
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
