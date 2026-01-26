'use client';

import { motion } from 'framer-motion';
import { SiSolidity, SiJavascript, SiPython, SiRust, SiTypescript } from 'react-icons/si';
import { FaTools, FaVial, FaCubes } from 'react-icons/fa';

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <SiSolidity className="text-2xl" />,
      skills: [
        { name: "Solidity", level: 95, icon: <SiSolidity /> },
        { name: "JavaScript", level: 85, icon: <SiJavascript /> },
        { name: "TypeScript", level: 85, icon: <SiTypescript /> },
        { name: "Python", level: 75, icon: <SiPython /> },
        { name: "Rust", level: 50, icon: <SiRust />, badge: "Learning" },
      ]
    },
    {
      title: "Development Tools",
      icon: <FaTools className="text-2xl" />,
      skills: [
        { name: "Foundry", level: 95 },
        { name: "Hardhat", level: 90 },
        { name: "Slither", level: 85 },
        { name: "Git/GitHub", level: 90 },
        { name: "VS Code", level: 95 },
      ]
    },
    {
      title: "Testing & Security",
      icon: <FaVial className="text-2xl" />,
      skills: [
        { name: "Unit Testing", level: 95 },
        { name: "Fuzz Testing", level: 90 },
        { name: "Integration Testing", level: 85 },
        { name: "Security Auditing", level: 80 },
        { name: "Code Coverage Analysis", level: 90 },
      ]
    },
    {
      title: "Blockchain & Web3",
      icon: <FaCubes className="text-2xl" />,
      skills: [
        { name: "EVM", level: 90 },
        { name: "DeFi Protocols", level: 90 },
        { name: "NFTs (ERC-721)", level: 85 },
        { name: "ERC-20 Tokens", level: 95 },
        { name: "Chainlink Oracles", level: 85 },
        { name: "LayerZero", level: 80 },
        { name: "UUPS Proxy", level: 85 },
        { name: "ZK Proofs", level: 70 },
      ]
    }
  ];

  const certifications = [
    {
      title: "Smart Contract Security",
      issuer: "Cyfrin Updraft",
      year: "2024 - Present",
      status: "In Progress"
    },
    {
      title: "Blockchain and Its Application",
      issuer: "NPTEL",
      year: "May 2025",
      status: "Completed"
    },
    {
      title: "FutureStack Gen AI Hackathon",
      issuer: "Winner - 1st Prize",
      year: "2024",
      status: "Achievement"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
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
                Skills & Expertise
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * categoryIndex }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                    <div className="text-purple-400">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {skill.icon && <span className="text-gray-400">{skill.icon}</span>}
                          <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                          {skill.badge && (
                            <span className="px-2 py-0.5 bg-blue-500/20 border border-blue-500/30 rounded text-blue-300 text-xs">
                              {skill.badge}
                            </span>
                          )}
                        </div>
                        <span className="text-gray-500 text-xs">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Certifications & Achievements
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">{cert.title}</h4>
                  <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-gray-500 text-xs">{cert.year}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      cert.status === 'Completed'
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                        : cert.status === 'In Progress'
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                        : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
