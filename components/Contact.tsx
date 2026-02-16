'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-xl" />,
      label: "Email",
      value: "dhanyosmiresearcher@gmail.com",
      link: "mailto:dhanyosmiresearcher@gmail.com"
    },
    {
      icon: <FaPhone className="text-xl" />,
      label: "Phone",
      value: "+91 6204238614",
      link: "tel:+916204238614"
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      label: "Timezone",
      value: "IST (GMT +5:30)",
      link: null
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="text-2xl" />,
      url: "https://github.com/hoBabu1",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-2xl" />,
      url: "https://www.linkedin.com/in/amankumarsah/",
    },
    {
      name: "X (Twitter)",
      icon: <FaXTwitter className="text-2xl" />,
      url: "https://x.com/thedhanyosmi",
    },
    {
      name: "Telegram",
      icon: <FaTelegram className="text-2xl" />,
      url: "https://t.me/ho_Babu",
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
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
                Get In Touch
              </span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
            <p className="text-gray-500 max-w-2xl mx-auto">
              I'm currently open to new opportunities in blockchain development and security research.
              Feel free to reach out if you'd like to collaborate or just want to connect!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Availability Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-card border-emerald-500/10 p-6 mb-12 text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></span>
                <span className="text-2xl font-bold text-emerald-400">Available for Work</span>
              </div>
              <p className="text-gray-500">
                Open to full-time positions, freelance projects, and consulting opportunities
              </p>
            </motion.div>

            {/* Contact Info Cards */}
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      className="block glass-card-hover p-6 text-center group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-purple-500/[0.08] border border-purple-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/[0.12] transition-all duration-500">
                        <div className="text-purple-400">
                          {info.icon}
                        </div>
                      </div>
                      <h3 className="text-gray-500 text-xs uppercase tracking-wider mb-2">{info.label}</h3>
                      <p className="text-white font-medium text-sm break-all">{info.value}</p>
                    </a>
                  ) : (
                    <div className="glass-card p-6 text-center">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/[0.08] border border-purple-500/10 flex items-center justify-center mx-auto mb-4">
                        <div className="text-purple-400">
                          {info.icon}
                        </div>
                      </div>
                      <h3 className="text-gray-500 text-xs uppercase tracking-wider mb-2">{info.label}</h3>
                      <p className="text-white font-medium text-sm">{info.value}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h3 className="text-lg font-semibold text-white mb-6 text-center">Connect With Me</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-transparent hover:bg-white/[0.05] hover:border-purple-500/20 transition-all duration-500 group"
                  >
                    <div className="text-gray-500 group-hover:text-white transition-colors duration-300">
                      {social.icon}
                    </div>
                    <span className="text-gray-500 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <a
                href="mailto:dhanyosmiresearcher@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-500 hover:scale-[1.03]"
              >
                <FaEnvelope />
                Send Me an Email
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-20 pt-8 border-t border-white/[0.04]"
      >
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Blockchain Developer Portfolio. Built with Next.js & Tailwind CSS.
        </p>
      </motion.div>
    </section>
  );
}
