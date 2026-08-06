'use client';

import ProofLink from './ProofLink';
import Section from './Section';

const remoteExperience = [
  {
    id: 'detail-defilords',
    title: "Blockchain Engineer",
    company: "Defilords",
    period: "June 2026 – Present",
    achievements: [
      {
        text: "Building and shipping blockchain infrastructure at Defilords",
        linkText: null,
        link: null
      }
    ],
    tags: ["Blockchain", "Solidity"]
  },
  {
    id: 'detail-bima-labs',
    title: "Smart Contract Developer",
    company: "Digichain (Bima Labs — DeFi Protocol)",
    period: "Aug 2024 – Aug 2025",
    achievements: [
      {
        text: "Implemented UUPS upgradable smart contracts using Succinct Protocol for on-chain ZKP verification",
        linkText: "View Code",
        link: "https://github.com/hoBabu1/ZKP-Verification-Upgradable-Smart-Contract-"
      },
      {
        text: "Configured LayerZero v2 messaging and DVN with Foundry scripts for cross-chain debugging",
        linkText: "View Scripts",
        link: "https://github.com/hoBabu1/Debugging-Testing-Scripts-Bima/tree/master/LayerZero"
      },
      {
        text: "Integrated Chainlink CCIP for lock/unlock mechanism in cross-chain USBD transfers",
        linkText: "View Guide",
        link: "https://github.com/hoBabu1/Chainlink-CCIP-Guide-Lock-Unlock"
      },
      {
        text: "Developed PSM core logic with >95% code coverage using unit and fuzz tests in Foundry",
        linkText: "View PR",
        link: "https://github.com/Bima-Labs/bima-v1-core/pull/130/commits"
      },
      {
        text: "Optimized Hardhat deployment scripts with automated contract verification",
        linkText: "View Commit",
        link: "https://github.com/Bima-Labs/bima-v1-core/pull/132/commits/f400e50615b502deb075a81439825891c479fddf"
      },
      {
        text: "Deployed to 20+ blockchain networks and managed oracle/price-feed integrations",
        linkText: "View Scripts",
        link: "https://github.com/hoBabu1/Debugging-Testing-Scripts-Bima"
      }
    ],
    tags: ["Solidity", "Foundry", "LayerZero", "Chainlink CCIP", "UUPS", "ZKP", "DeFi"]
  },
  {
    id: 'detail-one-world-nation',
    title: "Chart Analyst & Moderator",
    company: "One World Nation",
    period: "Oct 2022 – Aug 2023",
    achievements: [
      {
        text: "Ran live crypto chart reading sessions, beginner to advanced, for 5000+ community members",
        linkText: null,
        link: null
      },
      {
        text: "Grew community engagement by 33% through technical analysis insights",
        linkText: null,
        link: null
      },
      {
        text: "Improved response time by 25% through moderation and user support",
        linkText: null,
        link: null
      }
    ],
    certificate: "View Certificate",
    certificateLink: "https://drive.google.com/file/d/1-MPUFw6vHKACoPtvHEMovW9j03ruyWJK/view?usp=sharing",
    tags: ["Trading", "Technical Analysis", "Community"]
  }
];

const onsiteExperience = [
  {
    id: 'detail-iccc-intern',
    title: "ICCC Intern",
    company: "Patna Smart City Limited, Patna, Bihar",
    period: "December 2025",
    achievements: [
      {
        text: "Trained at the Integrated Command & Control Center (ICCC) on urban IoT infrastructure — environmental sensors, RLVD & smart cameras, outdoor LED/VMD systems",
        linkText: null,
        link: null
      },
      {
        text: "Studied Integrated Solid Waste Management (ISWM) and IIT Delhi Pump Automation for smart city operations",
        linkText: null,
        link: null
      },
      {
        text: "Trained on CDCP (Certified Data Center Professional) standards with an L&T Technology expert",
        linkText: null,
        link: null
      },
      {
        text: "Hands-on exposure to SCADA systems, GIS mapping, and IoT sensor networks",
        linkText: null,
        link: null
      }
    ],
    certificate: "View Certificate",
    certificateLink: "https://drive.google.com/file/d/1Iwv9MM4WZ7VPafFBwjKsoTfumDYisYW8/view?usp=drivesdk",
    tags: ["IoT", "SCADA", "GIS", "Smart City"]
  }
];

type ExpEntry = {
  id: string;
  title: string;
  company: string;
  period: string;
  achievements: { text: string; linkText: string | null; link: string | null }[];
  tags: string[];
  certificate?: string;
  certificateLink?: string;
};

function ExperienceEntry({ exp }: { exp: ExpEntry }) {
  return (
    <div id={exp.id} className="py-8 border-b border-[var(--th-line)] last:border-0">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
        <h4 className="text-lg font-semibold text-[var(--th-ink)]">
          {exp.title} <span className="font-normal text-[var(--th-muted)]">— {exp.company}</span>
        </h4>
        <span className="text-sm text-[var(--th-faint)] whitespace-nowrap">{exp.period}</span>
      </div>

      <ul className="space-y-3 mb-4 max-w-detail">
        {exp.achievements.map((achievement, i) => (
          <li key={i} className="text-[var(--th-body)] text-base leading-relaxed flex items-start gap-2.5">
            <span className="text-[var(--th-faint)] mt-[3px] flex-shrink-0 text-lg leading-none">•</span>
            <span className="flex-1">
              {achievement.text}
              {achievement.link && <ProofLink href={achievement.link}>{achievement.linkText}</ProofLink>}
            </span>
          </li>
        ))}
      </ul>

      {exp.certificate && (
        <div className="mb-4">
          <ProofLink href={exp.certificateLink || '#'}>{exp.certificate}</ProofLink>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {exp.tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 border border-[var(--th-line)] rounded-full text-[var(--th-muted)] text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ExperienceDetails() {
  return (
    <Section id="experience-details" title="Experience — Full Details">
      <h3 className="text-[13px] font-bold text-[var(--th-faint)] uppercase tracking-[0.14em] mb-2 pt-2 border-t-2 border-[var(--th-ink)]">
        Remote
      </h3>
      <div className="mb-10">
        {remoteExperience.map((exp) => (
          <ExperienceEntry key={exp.id} exp={exp} />
        ))}
      </div>

      <h3 className="text-[13px] font-bold text-[var(--th-faint)] uppercase tracking-[0.14em] mb-2 pt-2 border-t-2 border-[var(--th-ink)]">
        Onsite
      </h3>
      <div>
        {onsiteExperience.map((exp) => (
          <ExperienceEntry key={exp.id} exp={exp} />
        ))}
      </div>
    </Section>
  );
}
