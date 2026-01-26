'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaChartLine } from 'react-icons/fa';

export default function Experience() {
  const experiences = [
    {
      title: "Smart Contract Developer",
      company: "Digichain (Bima Labs – DeFi Protocol)",
      period: "Aug 2024 – Aug 2025",
      icon: <FaBriefcase className="text-2xl" />,
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
      title: "Chart Analyst & Moderator",
      company: "One World Nation",
      period: "Oct 2022 – Aug 2023",
      icon: <FaChartLine className="text-2xl" />,
      achievements: [
        {
          text: "Conducted live crypto chart reading sessions for 5000+ community members",
          linkText: null,
          link: null
        },
        {
          text: "Achieved 33% increase in community engagement through technical analysis insights",
          linkText: null,
          link: null
        },
        {
          text: "Improved response time by 25% with enhanced moderation and user support",
          linkText: null,
          link: null
        },
        {
          text: "Provided market analysis and trading guidance to community members",
          linkText: null,
          link: null
        }
      ],
      certificate: "View Certificate",
      certificateLink: "https://drive.google.com/file/d/1-MPUFw6vHKACoPtvHEMovW9j03ruyWJK/view?usp=sharing",
      tags: ["Trading", "Technical Analysis", "Community Management", "Crypto"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 transform md:-translate-x-1/2"></div>

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 * index }}
                  viewport={{ once: true }}
                  className="relative mb-12 md:pl-1/2 md:ml-auto"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform md:-translate-x-1/2 -translate-y-1/2 z-10 ring-4 ring-black"></div>

                  <div className="ml-8 md:ml-8">
                    <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group">
                      {/* Icon and Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-600/20 flex items-center justify-center flex-shrink-0 group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                          <div className="text-purple-400">
                            {exp.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                          <p className="text-purple-400 font-medium mb-1">{exp.company}</p>
                          <p className="text-gray-500 text-sm">{exp.period}</p>
                        </div>
                      </div>

                      {/* Achievements */}
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                            <span className="text-purple-500 mt-1.5 flex-shrink-0">▹</span>
                            <span className="flex-1">
                              {achievement.text}
                              {achievement.link && (
                                <>
                                  {' - '}
                                  <a
                                    href={achievement.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200 underline"
                                  >
                                    {achievement.linkText}
                                  </a>
                                </>
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Certificate Link */}
                      {exp.certificate && (
                        <div className="mb-4">
                          <a
                            href={exp.certificateLink || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200"
                          >
                            <span>📜</span>
                            <span className="underline">{exp.certificate}</span>
                          </a>
                        </div>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
