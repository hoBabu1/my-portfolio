'use client';

import { FaGithub, FaLinkedin, FaTelegram, FaDownload } from 'react-icons/fa';
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
      {/* Ambient background glows */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-500/[0.07] rounded-full blur-[120px] animate-glow"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-purple-500/[0.07] rounded-full blur-[120px] animate-glow [animation-delay:2s]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/[0.03] rounded-full blur-[150px]"></div>
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
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              &lt;/&gt;
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
          >
            <span className="text-white/90">Namaste, I am </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              BLOCKCHAIN DEV
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Smart contract developer and security researcher specializing in DeFi protocols. Price action trader in crypto with focus on risk-to-reward strategies.
          </motion.p>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 mb-12"
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span className="text-emerald-400 text-sm font-medium tracking-wide">Available for Work</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mb-14"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-500 hover:scale-[1.03]"
            >
              See My Projects
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-3 border border-white/10 rounded-xl font-medium hover:border-purple-500/40 hover:bg-white/[0.03] transition-all duration-500"
            >
              More About Me
            </button>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 border border-emerald-500/30 rounded-xl font-medium text-emerald-400 hover:bg-emerald-500/[0.08] hover:border-emerald-400/40 transition-all duration-500 flex items-center gap-2"
            >
              <FaDownload className="text-sm" />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex gap-3 justify-center"
          >
            {[
              { href: "https://github.com/hoBabu1", icon: <FaGithub className="text-xl" /> },
              { href: "https://www.linkedin.com/in/amankumarsah/", icon: <FaLinkedin className="text-xl" /> },
              { href: "https://x.com/thedhanyosmi", icon: <FaXTwitter className="text-xl" /> },
              { href: "https://t.me/ho_Babu", icon: <FaTelegram className="text-xl" /> },
              { href: "mailto:dhanyosmiresearcher@gmail.com", icon: <HiMail className="text-xl" />, noTarget: true },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target={social.noTarget ? undefined : "_blank"}
                rel={social.noTarget ? undefined : "noopener noreferrer"}
                className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.08] hover:border-purple-500/30 transition-all duration-500"
              >
                {social.icon}
              </a>
            ))}
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
        <div className="w-6 h-10 border-2 border-white/10 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}
