'use client';

import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { SiDevdotto, SiMedium, SiGithub } from 'react-icons/si';

export default function BlogPosts() {
  const articles = [
    {
      title: "How EVM Works",
      platform: "Dev.to",
      platformIcon: <SiDevdotto className="text-lg" />,
      topics: ["EVM", "Blockchain Internals"],
      link: "https://dev.to/dhanyosmi/understanding-evmethereum-virtual-machine-2dh7",
    },
    {
      title: "My First Hackathon",
      platform: "Medium",
      platformIcon: <SiMedium className="text-lg" />,
      topics: ["Experience", "Learning"],
      link: "https://medium.com/@dhanyosmiblog/my-first-hackathon-eb52a5e6a2f6",
    },
    {
      title: "You Can't Trade Without Knowing This",
      platform: "Medium",
      platformIcon: <SiMedium className="text-lg" />,
      topics: ["Trading", "Technical Analysis"],
      link: "https://medium.com/@dhanyosmiblog/you-cant-trade-without-knowing-this-fab251d97983",
    },
    {
      title: "Chainlink CCIP Implementation",
      platform: "GitHub",
      platformIcon: <SiGithub className="text-lg" />,
      topics: ["Cross-Chain", "Chainlink"],
      link: "https://github.com/hoBabu1/Chainlink-CCIP-Guide-Lock-Unlock",
    }
  ];

  return (
    <section id="blog" className="py-20 relative">
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
                Latest Blog Posts
              </span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Technical articles and insights on blockchain development, smart contracts, and crypto trading.
            </p>
          </div>

          {/* Articles */}
          <div className="max-w-4xl mx-auto">
            {/* Desktop Table View */}
            <div className="hidden md:block glass-card overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/[0.04]">
                    <th className="text-left py-4 px-6 text-gray-500 font-medium text-xs uppercase tracking-wider">Title</th>
                    <th className="text-left py-4 px-6 text-gray-500 font-medium text-xs uppercase tracking-wider">Platform</th>
                    <th className="text-left py-4 px-6 text-gray-500 font-medium text-xs uppercase tracking-wider">Topics</th>
                    <th className="text-center py-4 px-6 text-gray-500 font-medium text-xs uppercase tracking-wider">Read</th>
                  </tr>
                </thead>
                <tbody>
                  {articles.map((article, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="border-b border-white/[0.03] last:border-0 hover:bg-white/[0.02] transition-all duration-500 group"
                    >
                      <td className="py-4 px-6">
                        <span className="text-white font-medium group-hover:text-purple-400 transition-colors duration-300">
                          {article.title}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2 text-gray-500">
                          {article.platformIcon}
                          <span>{article.platform}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex flex-wrap gap-2">
                          {article.topics.map((topic, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-purple-500/[0.06] border border-purple-500/10 rounded text-purple-300/80 text-xs"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <a
                          href={article.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.04] border border-white/[0.06] rounded-xl text-gray-400 text-sm hover:text-white hover:bg-white/[0.08] hover:border-purple-500/30 transition-all duration-500"
                        >
                          Link
                          <FaExternalLinkAlt className="text-xs" />
                        </a>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              {articles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="glass-card-hover p-6"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-white font-semibold text-lg">{article.title}</h3>
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.08] transition-all duration-500"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    {article.platformIcon}
                    <span>{article.platform}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {article.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-purple-500/[0.06] border border-purple-500/10 rounded text-purple-300/80 text-xs"
                      >
                        {topic}
                      </span>
                    ))}
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
