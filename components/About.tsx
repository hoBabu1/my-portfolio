'use client';

import { motion } from 'framer-motion';
import { FaShieldAlt, FaCode, FaChartLine, FaChalkboardTeacher } from 'react-icons/fa';

export default function About() {
  const highlights = [
    {
      icon: <FaCode className="text-2xl" />,
      title: "Smart Contract Development",
      description: "1+ year experience building DeFi protocols, implementing UUPS upgradeable contracts and cross-chain solutions"
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Security Research",
      description: "Aspiring security researcher with hands-on experience in auditing, fuzzing, and securing DeFi primitives"
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: "Crypto Trading",
      description: "Price action trader focusing on Solana with emphasis on risk-to-reward strategies. Chart analyst for 5000+ community members."
    },
    {
      icon: <FaChalkboardTeacher className="text-2xl" />,
      title: "Community Speaker",
      description: "Invited speaker at Rotaract Club of Pune Wisdom to conduct sessions on blockchain technology and Web3"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
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
                About Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
            >
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Smart contract developer and security researcher with expertise in DeFi protocols, adversarial testing,
                and building secure blockchain infrastructure. Currently learning and expanding my skills in smart contract
                security auditing to become a leading security researcher in the Web3 space.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Previously worked at <span className="text-purple-400 font-semibold">Bima Labs (DeFi Protocol)</span> as a
                Smart Contract Developer, where I implemented zero-knowledge proof verification, integrated LayerZero v2 and
                Chainlink CCIP for cross-chain operations, and deployed smart contracts across 20+ blockchain networks.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Beyond development, I'm an active <span className="text-green-400 font-semibold">crypto trader</span> specializing
                in price action trading, primarily  emphasis on risk-to-reward strategies.
                I've{' '}
                <a
                  href="https://medium.com/@dhanyosmiblog/you-cant-trade-without-knowing-this-fab251d97983"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  written about trading strategies
                </a>
                {' '}and share insights with the community.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm passionate about contributing to the blockchain community through{' '}
                <a
                  href="https://www.linkedin.com/posts/amankumarsah_web3-blockchain-nfts-activity-7387471891743199234-YYXT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  speaking engagements
                </a>
                {' '}and educational sessions, helping others understand Web3 technology.
              </p>
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-600/20 flex items-center justify-center mb-4 group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                  <div className="text-purple-400">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
