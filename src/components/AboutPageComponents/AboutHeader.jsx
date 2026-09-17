import React from 'react';
import { motion } from 'framer-motion';
import { aboutHeader } from '../../data/aboutData';

// Header of the About page: eyebrow, title with highlighted word, subtitle and key numbers.
const AboutHeader = () => {
  return (
    <div className="avoid-emoji text-center mb-16 md:mb-24">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-gray-800 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#69140E] dark:text-white shadow-sm"
      >
        <span className="flex overflow-hidden rounded-sm" aria-hidden="true">
          <span className="w-2 h-3 bg-black" />
          <span className="w-2 h-3 bg-[#DD0000]" />
          <span className="w-2 h-3 bg-[#FFCE00]" />
        </span>
        {aboutHeader.eyebrow}
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#69140E] dark:text-white leading-tight"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {aboutHeader.titleStart}{' '}
        <span className="inline-block bg-[#FFD700] text-[#69140E] px-4 py-1 rounded-2xl shadow-md transform -rotate-1">
          {aboutHeader.titleHighlight}
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 text-lg md:text-xl text-[#69140E]/80 dark:text-white/80 max-w-2xl mx-auto"
      >
        {aboutHeader.subtitle}
      </motion.p>

      <motion.dl
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto"
      >
        {aboutHeader.stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm px-2 py-4 sm:px-4 sm:py-5 shadow-sm border border-[#69140E]/5 dark:border-white/5"
          >
            <dt className="order-2 text-[11px] sm:text-sm text-[#69140E]/70 dark:text-white/70 mt-1">
              {stat.label}
            </dt>
            <dd className="text-xl sm:text-3xl font-extrabold text-[#69140E] dark:text-[#FFD700]">
              {stat.value}
            </dd>
          </div>
        ))}
      </motion.dl>
    </div>
  );
};

export default AboutHeader;
