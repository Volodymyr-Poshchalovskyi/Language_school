import React from 'react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { approach, aboutColors } from '../../data/aboutData';

// Teaching approach: text on one side, a 2x2 grid of principle cards on the other.
const ApproachSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20 mb-24"
    >
      {/* Principle cards */}
      <div className="avoid-emoji w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {approach.principles.map((item, i) => {
          const colors = aboutColors[item.color];
          return (
            <div
              key={item.title}
              className={`group bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-md border border-[#69140E]/5 dark:border-white/5 transition-all duration-700 hover:-translate-y-1 hover:shadow-xl ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              } ${i % 2 === 1 ? 'sm:translate-y-6' : ''}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-4 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 ${colors.bg} ${colors.text}`}
              >
                <item.Icon />
              </div>
              <h3 className="font-extrabold text-[#69140E] dark:text-white mb-1.5 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-[#69140E]/75 dark:text-white/75 leading-relaxed">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>

      {/* Text */}
      <div
        className={`avoid-emoji w-full md:w-1/2 text-center md:text-left transition-all duration-700 ${
          inView ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
        }`}
      >
        <h2
          className="text-3xl sm:text-4xl font-extrabold text-[#69140E] dark:text-white mb-5"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {approach.title}
        </h2>
        <p className="text-lg text-[#69140E]/80 dark:text-white/80 mb-8 leading-relaxed">
          {approach.text}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
          {approach.buttons.map((btn) => (
            <Link
              key={btn.href}
              href={btn.href}
              className={`inline-block px-8 py-3 rounded-xl text-lg font-semibold transition-all hover:scale-105 active:scale-95 shadow-md ${
                btn.primary
                  ? 'bg-[#FFD700] text-[#69140E] hover:bg-[#F6AA1C]'
                  : 'bg-transparent text-[#E85F5C] border border-[#E85F5C] hover:bg-[#E85F5C] hover:text-white'
              }`}
            >
              {btn.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApproachSection;
