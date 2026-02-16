'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaShieldAlt } from 'react-icons/fa';

export default function Banner() {
  return (
    <div className="fixed top-16 md:top-20 left-0 right-0 z-40 bg-white/[0.03] backdrop-blur-xl border-b border-white/[0.06]">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-6 md:gap-10 py-2.5 text-sm">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <FaRocket className="text-amber-400 text-xs" />
            <span className="text-gray-300 font-medium">
              Currently building <span className="text-amber-400 font-semibold">Labs Buzz</span>
            </span>
          </motion.div>
          <span className="text-white/10 hidden sm:inline">|</span>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <FaShieldAlt className="text-emerald-400 text-xs" />
            <span className="text-gray-300 font-medium">
              Learning <span className="text-emerald-400 font-semibold">Web3 Security</span>
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
