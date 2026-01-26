'use client';

import { motion } from 'framer-motion';

export default function Certifications() {
  const certifications = [
    {
      title: "Blockchain and Its Application",
      issuer: "NPTEL",
      year: "May 2025",
      link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs08/Course/NPTEL25CS08S55440166804210152.pdf"
    },
    {
      title: "Won 1st Prize in Ideation Challenge",
      issuer: "Department of Industries, Government Engineering College Khagaria",
      year: "2024",
      link: "https://drive.google.com/file/d/1KCr2yvimedIFoZGOFGSZQqFpQCdveraH/view?usp=sharing"
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
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
                Certifications & Achievements
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-600/20 flex items-center justify-center flex-shrink-0 group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                    <p className="text-gray-500 text-xs">{cert.year}</p>
                  </div>
                  <div className="text-purple-400 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
