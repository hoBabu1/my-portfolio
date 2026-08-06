'use client';

import ProofLink from './ProofLink';
import Section from './Section';

function Para({ children }: { children: React.ReactNode }) {
  return <p className="text-[var(--th-body)] text-base leading-relaxed max-w-detail">{children}</p>;
}

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2 max-w-detail">
      {items.map((t, i) => (
        <li key={i} className="text-[var(--th-body)] text-base leading-relaxed flex items-start gap-2.5">
          <span className="text-[var(--th-faint)] mt-[3px] flex-shrink-0 text-lg leading-none">•</span>
          <span className="flex-1">{t}</span>
        </li>
      ))}
    </ul>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 border border-[var(--th-line)] rounded-full text-[var(--th-muted)] text-xs">
      {children}
    </span>
  );
}

function DetailEntry({
  id,
  title,
  subtitle,
  proofs,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  proofs?: { label: string; href: string }[];
  children?: React.ReactNode;
}) {
  return (
    <div id={id} className="py-8 border-b border-[var(--th-line)] last:border-0">
      <h4 className="text-lg font-semibold text-[var(--th-ink)] mb-2">{title}</h4>

      {subtitle && <p className="text-[var(--th-muted)] text-base mb-3 max-w-detail">{subtitle}</p>}

      {proofs && proofs.length > 0 && (
        <div className="flex flex-wrap gap-2 -ml-2 mb-4">
          {proofs.map((p) => (
            <ProofLink key={p.label} href={p.href}>
              {p.label}
            </ProofLink>
          ))}
        </div>
      )}

      {children && <div className="space-y-3">{children}</div>}
    </div>
  );
}

export default function ProjectDetails() {
  return (
    <Section id="project-details" title="Project — Full Details">
          <DetailEntry
            id="detail-prompt-arena"
            title="Prompt Arena"
            subtitle="Full-stack, real-time AI writing competition platform"
            proofs={[{ label: 'Live Demo', href: 'https://prompt-arena1.vercel.app/' }]}
          >
            <Para>
              Hosted a live event with 50+ student participants, handling concurrent team
              registrations, real-time test entries, and automated evaluation under production
              load.
            </Para>
            <Bullets
              items={[
                'Complete competition lifecycle engine (draft → scheduled → live → ended → evaluating → completed) with server-side state reconciliation',
                'Role-based access control for admins and students with a lobby-based dashboard and real-time countdown',
                'Uniquely assigned questions per team per section, with auto-finalization of unsubmitted answers on timeout',
                'AI-powered evaluation using Google Gemini and Anthropic Claude APIs with a per-competition provider selector',
                '🏆 Automatic leaderboard generation after scoring; hosted 50+ concurrent participants in production',
              ]}
            />
            <div className="flex flex-wrap gap-2 pt-1">
              {['Next.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Gemini API', 'Claude API', 'Vercel'].map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </DetailEntry>

          <DetailEntry
            id="detail-stablecoin"
            title="Decentralized Stablecoin"
            subtitle="Algorithmic, over-collateralized stablecoin protocol"
            proofs={[
              { label: 'GitHub', href: 'https://github.com/hoBabu1/Decentralized-Stable-Coin/tree/master' },
              { label: 'Contract', href: 'https://sepolia.etherscan.io/address/0x3613ad520b0565e32233be06117633da2bc60ba7#code' },
            ]}
          >
            <Para>
              Users deposit WETH and WBTC as collateral to mint USD-pegged tokens, with
              over-collateralization, liquidation mechanisms, and comprehensive security measures.
            </Para>
            <Bullets
              items={[
                'Deposit WETH/WBTC for USD-pegged token minting',
                'Liquidation system with incentive bonuses',
                'ReentrancyGuard and custom security modifiers',
                '30+ comprehensive unit tests',
              ]}
            />
            <div className="flex flex-wrap gap-2 pt-1">
              {['Solidity', 'Foundry', 'Chainlink', 'DeFi', 'Stablecoin'].map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </DetailEntry>

          <DetailEntry
            id="detail-raffle"
            title="Smart Contract Raffle"
            subtitle="Provably fair blockchain lottery system"
            proofs={[
              { label: 'GitHub', href: 'https://github.com/hoBabu1/Raffle_Smart_Contract-Foundry-' },
              { label: 'Contract', href: 'https://sepolia.etherscan.io/address/0xe7ae1641191a407b98638c5b2fbcc879f7ec5a92' },
            ]}
          >
            <Para>
              Utilizes Chainlink VRF for verifiable randomness and Chainlink Automation for
              seamless execution, built with cross-chain deployment capability.
            </Para>
            <Bullets
              items={[
                'Chainlink VRF for verifiable randomness',
                'Automated execution via Chainlink Keepers',
                'Cross-chain deployment with mock testing',
                'Gas-optimized raffle mechanics',
              ]}
            />
            <div className="flex flex-wrap gap-2 pt-1">
              {['Solidity', 'Chainlink VRF', 'Chainlink', 'Foundry'].map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </DetailEntry>
    </Section>
  );
}
