'use client';

import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiMail } from 'react-icons/hi';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-block"
          >
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              &lt;/&gt;
            </div>
          </motion.div>

          {/* Main heading with gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-white">Namaste 🙏, I am </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              BLOCKCHAIN DEV
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Smart contract developer and security researcher specializing in DeFi protocols. Price action trader in crypto with focus on risk-to-reward strategies.
          </motion.p>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-12"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-green-400 text-sm font-medium">Available for Work</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              See My Projects
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-3 border border-gray-700 rounded-lg font-medium hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
            >
              More About Me
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex gap-6 justify-center"
          >
            <a
              href="https://github.com/hoBabu1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-110"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/amankumarsah/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="https://x.com/thedhanyosmi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-110"
            >
              <FaXTwitter className="text-xl" />
            </a>
            <a
              href="https://t.me/ho_Babu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-110"
            >
              <FaTelegram className="text-xl" />
            </a>
            <a
              href="mailto:dhanyosmiresearcher@gmail.com"
              className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-110"
            >
              <HiMail className="text-xl" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}
