'use client';

import Section, { SubHead, plural } from './Section';
import { thClass, tdClass, tdWrapClass, linkClass, tableClass, rowClass } from './tableStyles';

type Row = {
  id: string;
  period: string;
  company: string;
  companyLink: string;
  role: string;
  stack: string;
  proofLabel: string;
  proofHref: string | null;
  proofExternal: boolean;
  detailId: string;
};

const remoteRows: Row[] = [
  {
    id: 'defilords',
    period: 'Jun 2026 – Present',
    company: 'Defilords',
    companyLink: 'https://defilords.finance/',
    role: 'Blockchain Engineer',
    stack: 'Blockchain, Solidity',
    proofLabel: '-',
    proofHref: null,
    proofExternal: false,
    detailId: 'detail-defilords',
  },
  {
    id: 'bima-labs',
    period: 'Aug 2024 – Aug 2025',
    company: 'Bima Labs',
    companyLink: 'https://bima.money/',
    role: 'Smart Contract Developer',
    stack: 'Solidity, Foundry, LayerZero, Chainlink CCIP',
    proofLabel: 'View',
    proofHref: '#detail-bima-labs',
    proofExternal: false,
    detailId: 'detail-bima-labs',
  },
  {
    id: 'one-world-nation',
    period: 'Oct 2022 – Aug 2023',
    company: 'One World Nation',
    companyLink: 'https://www.linkedin.com/company/oneworldnation/?originalSubdomain=in',
    role: 'Chart Analyst & Moderator',
    stack: 'Trading, Technical Analysis, Community',
    proofLabel: 'Link',
    proofHref: 'https://drive.google.com/file/d/1-MPUFw6vHKACoPtvHEMovW9j03ruyWJK/view?usp=sharing',
    proofExternal: true,
    detailId: 'detail-one-world-nation',
  },
];

const onsiteRows: Row[] = [
  {
    id: 'iccc-intern',
    period: 'December 2025',
    company: 'Smart City Patna Limited',
    companyLink: 'https://www.smartpatna.co.in/home.aspx',
    role: 'ICCC Intern',
    stack: 'IoT, SCADA, GIS',
    proofLabel: 'Link',
    proofHref: 'https://drive.google.com/file/d/1Iwv9MM4WZ7VPafFBwjKsoTfumDYisYW8/view?usp=drivesdk',
    proofExternal: true,
    detailId: 'detail-iccc-intern',
  },
];

function ExperienceTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-x-auto">
      <table className={`${tableClass} min-w-[820px]`}>
        <colgroup>
          <col className="w-[4%]" />
          <col className="w-[13%]" />
          <col className="w-[15%]" />
          <col className="w-[15%]" />
          <col className="w-[23%]" />
          <col className="w-[15%]" />
          <col className="w-[15%]" />
        </colgroup>
        <thead>
          <tr>
            <th className={thClass}>#</th>
            <th className={thClass}>Period</th>
            <th className={thClass}>Company</th>
            <th className={thClass}>Role</th>
            <th className={thClass}>Stack</th>
            <th className={thClass}>Proof of Work</th>
            <th className={thClass}>More Info</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.id} className={rowClass}>
              <td className={tdClass}>{i + 1}</td>
              <td className={tdWrapClass} data-label="Period">{row.period}</td>
              <td className={tdWrapClass} data-label="Company">
                <a href={row.companyLink} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {row.company}
                </a>
              </td>
              <td className={tdWrapClass} data-label="Role">{row.role}</td>
              <td className={tdWrapClass} data-label="Stack">{row.stack}</td>
              <td className={tdClass} data-label="Proof of Work">
                {row.proofHref ? (
                  <a
                    href={row.proofHref}
                    {...(row.proofExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className={linkClass}
                  >
                    {row.proofLabel}
                  </a>
                ) : (
                  <span className="text-[var(--th-faint)]">-</span>
                )}
              </td>
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
  );
}

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      meta={plural(remoteRows.length + onsiteRows.length, 'role')}
    >
      <SubHead id="experience-remote" count={plural(remoteRows.length, 'role')}>
        Remote
      </SubHead>
      <div className="mb-10">
        <ExperienceTable rows={remoteRows} />
      </div>

      <SubHead id="experience-onsite" count={plural(onsiteRows.length, 'role')}>
        Onsite
      </SubHead>
      <ExperienceTable rows={onsiteRows} />
    </Section>
  );
}
