'use client';

import ProofLink from './ProofLink';
import Section, { plural } from './Section';
import { thClass, tdClass, tdWrapClass, tableClass, rowClass } from './tableStyles';

type Row = {
  id: string;
  title: string;
  issuer: string;
  year: string;
  link: string;
};

const rows: Row[] = [
  {
    id: 'nptel-blockchain',
    title: 'Blockchain and Its Application',
    issuer: 'NPTEL',
    year: 'May 2025',
    link: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs08/Course/NPTEL25CS08S55440166804210152.pdf',
  },
  {
    id: 'ideation-challenge',
    title: 'Won 1st Prize in Ideation Challenge',
    issuer: 'Department of Industries, Government Engineering College Khagaria',
    year: '2024',
    link: 'https://drive.google.com/file/d/1KCr2yvimedIFoZGOFGSZQqFpQCdveraH/view?usp=sharing',
  },
];

export default function Certifications() {
  return (
    <Section id="certifications" title="Certification" meta={plural(rows.length, 'certificate')}>
      <div className="overflow-x-auto">
        <table className={`${tableClass} min-w-[680px]`}>
          <colgroup>
            <col className="w-[4%]" />
            <col className="w-[34%]" />
            <col className="w-[38%]" />
            <col className="w-[12%]" />
            <col className="w-[12%]" />
          </colgroup>
          <thead>
            <tr>
              <th className={thClass}>#</th>
              <th className={thClass}>Title</th>
              <th className={thClass}>Issuer</th>
              <th className={thClass}>Year</th>
              <th className={thClass}>View</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.id} className={rowClass}>
                <td className={tdClass}>{i + 1}</td>
                <td className={tdWrapClass} data-label="Title">{row.title}</td>
                <td className={tdWrapClass} data-label="Issuer">{row.issuer}</td>
                <td className={tdClass} data-label="Year">{row.year}</td>
                <td className={tdClass} data-label="View">
                  <ProofLink href={row.link}>View</ProofLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
