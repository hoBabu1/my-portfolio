'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCoins, FaTicketAlt, FaFileInvoice, FaEye } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: "Decentralized Stablecoin",
      description: "An algorithmic stablecoin protocol where users deposit WETH and WBTC as collateral to mint USD-pegged tokens. Features include over-collateralization, liquidation mechanisms with bonuses, and comprehensive security measures.",
      icon: <FaCoins className="text-3xl" />,
      tags: ["Solidity", "Foundry", "Chainlink", "DeFi", "Stablecoin"],
      features: [
        "Deposit WETH/WBTC for USD-pegged token minting",
        "Liquidation system with incentive bonuses",
        "ReentrancyGuard and custom security modifiers",
        "30+ comprehensive unit tests"
      ],
      github: "https://github.com/hoBabu1/Decentralized-Stable-Coin/tree/master",
      demo: "https://sepolia.etherscan.io/address/0x3613ad520b0565e32233be06117633da2bc60ba7#code"
    },
    {
      title: "Smart Contract Raffle",
      description: "A provably fair blockchain lottery system utilizing Chainlink VRF for verifiable randomness and Chainlink Automation for seamless execution. Built with cross-chain deployment capability.",
      icon: <FaTicketAlt className="text-3xl" />,
      tags: ["Solidity", "Chainlink VRF", "Chainlink", "Foundry"],
      features: [
        "Chainlink VRF for verifiable randomness",
        "Automated execution via Chainlink Keepers",
        "Cross-chain deployment with mock testing",
        "Gas-optimized raffle mechanics"
      ],
      github: "https://github.com/hoBabu1/Raffle_Smart_Contract-Foundry-",
      demo: "https://sepolia.etherscan.io/address/0xe7ae1641191a407b98638c5b2fbcc879f7ec5a92"
    }
  ];

  const hackathonProjects: {
    title: string;
    description: string;
    icon: React.ReactNode;
    tags: string[];
    features: string[];
    github: string;
    demo: string;
    demoVideo?: string;
    certificate?: string;
    pptVideo?: string;
  }[] = [
    {
      title: "My Invoice NFT - Full-Stack DApp",
      description: "FutureStack GenAI Hackathon project. A full-stack decentralized application with intuitive UI for NFT-based invoice management. Smart contracts written independently with comprehensive testing, frontend created using AI assistance. Solo participant.",
      icon: <FaFileInvoice className="text-3xl" />,
      tags: ["Solidity", "Foundry", "AI-Assisted", "IPFS", "Full-Stack"],
      features: [
        "Full-stack decentralized application with intuitive UI",
        "Smart contracts written independently with comprehensive testing",
        "Frontend created using AI assistance (entire frontend)",
        "Gas-optimized smart contracts",
        "NFT-based invoice management system"
      ],
      github: "https://github.com/hoBabu1/AI-on-chain-Invoice",
      demo: "https://ai-on-chain-invoice.vercel.app/",
      demoVideo: "https://www.youtube.com/watch?v=uZyOd4QUZdE&feature=youtu.be",
      certificate: "https://drive.google.com/file/d/1Ev1UXbrkqr-Sh5w_6n6_zERgSMFp00qq/view?pli=1"
    },
    {
      title: "Wallet Spy",
      description: "Solana Privacy Hack project. A privacy-focused wallet surveillance tool built on Solana. Solo participant.",
      icon: <FaEye className="text-3xl" />,
      tags: ["Solana", "Privacy", "Web3", "Hackathon"],
      features: [
        "Privacy-focused wallet analysis on Solana",
        "Real-time wallet activity monitoring",
        "Solo hackathon project"
      ],
      github: "https://github.com/hoBabu1/solana-hackathon?tab=readme-ov-file",
      demo: "https://solana-hackathon-one.vercel.app/",
      demoVideo: "https://www.youtube.com/watch?v=QaZ58nyLoy0",
      pptVideo: "https://www.youtube.com/watch?v=sc2ds5biT8k"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
            <p className="text-gray-500 max-w-2xl mx-auto">
              A selection of my blockchain development work, focusing on DeFi protocols, smart contract security, and Web3 infrastructure.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                viewport={{ once: true }}
                className="glass-card-hover overflow-hidden group"
              >
                {/* Project Header */}
                <div className="p-6 border-b border-white/[0.04]">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-purple-500/[0.08] border border-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/[0.12] transition-all duration-500">
                      <div className="text-purple-400">
                        {project.icon}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.08] hover:border-purple-500/30 transition-all duration-500"
                      >
                        <FaGithub className="text-lg" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.08] hover:border-purple-500/30 transition-all duration-500"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                </div>

                {/* Project Features */}
                <div className="p-6">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Key Features</h4>
                  <ul className="space-y-2 mb-6">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-purple-500/60 mt-1 flex-shrink-0">▹</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-500/[0.06] border border-purple-500/10 rounded-full text-purple-300/80 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hackathon Projects Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Hackathon Projects
                </span>
              </h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto"></div>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {hackathonProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="glass-card overflow-hidden hover:border-amber-500/20 transition-all duration-500"
                >
                  {/* Project Header */}
                  <div className="p-6 border-b border-white/[0.04]">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 rounded-xl bg-amber-500/[0.08] border border-amber-500/10 flex items-center justify-center">
                        <div className="text-amber-400">
                          {project.icon}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.08] hover:border-amber-500/30 transition-all duration-500"
                        >
                          <FaGithub className="text-lg" />
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.08] hover:border-amber-500/30 transition-all duration-500"
                        >
                          <FaExternalLinkAlt className="text-sm" />
                        </a>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                    {/* Demo Video, PPT Video & Certificate */}
                    <div className="flex flex-wrap gap-2">
                      {project.demoVideo && (
                        <a
                          href={project.demoVideo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/[0.06] border border-red-500/10 rounded-xl text-red-300/80 text-sm hover:bg-red-500/[0.12] hover:border-red-500/20 transition-all duration-500"
                        >
                          <span>🎥</span>
                          <span>Demo Video</span>
                        </a>
                      )}
                      {project.pptVideo && (
                        <a
                          href={project.pptVideo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/[0.06] border border-orange-500/10 rounded-xl text-orange-300/80 text-sm hover:bg-orange-500/[0.12] hover:border-orange-500/20 transition-all duration-500"
                        >
                          <span>📊</span>
                          <span>PPT Video</span>
                        </a>
                      )}
                      {project.certificate && (
                        <a
                          href={project.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/[0.06] border border-blue-500/10 rounded-xl text-blue-300/80 text-sm hover:bg-blue-500/[0.12] hover:border-blue-500/20 transition-all duration-500"
                        >
                          <span>📜</span>
                          <span>Certificate</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Features */}
                  <div className="p-6">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Key Features</h4>
                    <ul className="space-y-2 mb-6">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                          <span className="text-amber-500/60 mt-1 flex-shrink-0">▹</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-amber-500/[0.06] border border-amber-500/10 rounded-full text-amber-300/80 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/hoBabu1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border border-white/10 rounded-xl font-medium text-gray-400 hover:text-white hover:border-purple-500/30 hover:bg-white/[0.03] transition-all duration-500"
            >
              <FaGithub />
              View More on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
