import React from 'react';
import { useInView } from 'react-intersection-observer';
import { history } from '../../data/aboutData';

const dotColors = ['bg-[#E85F5C]', 'bg-[#F6AA1C]', 'bg-[#FFD700]', 'bg-[#69140E] dark:bg-white'];

// School history as a vertical timeline.
const HistorySection = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center"
      aria-labelledby="history-heading"
    >
      {/* Text */}
      <div
        className={`avoid-emoji text-center md:text-left transition-all duration-700 ${
          inView ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
        }`}
      >
        <h2
          id="history-heading"
          className="text-3xl sm:text-4xl font-extrabold text-[#69140E] dark:text-white mb-5"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {history.title}
        </h2>
        <p className="text-lg text-[#69140E]/80 dark:text-white/80 leading-relaxed">
          {history.text}
        </p>
      </div>

      {/* Timeline */}
      <ol className="avoid-emoji relative pl-8 space-y-6">
        <span
          className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-[#E85F5C] via-[#FFD700] to-[#69140E]/40 dark:to-white/40"
          aria-hidden="true"
        />
        {history.milestones.map((m, i) => (
          <li
            key={m.title}
            className={`relative transition-all duration-700 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{ transitionDelay: `${150 + i * 150}ms` }}
          >
            <span
              className={`absolute -left-8 top-5 w-6 h-6 rounded-full border-4 border-[#FBF3F2] dark:border-gray-900 shadow ${dotColors[i % dotColors.length]}`}
              aria-hidden="true"
            />
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-md border border-[#69140E]/5 dark:border-white/5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#E85F5C] dark:text-[#FFD700]">
                Крок {i + 1}
              </span>
              <h3 className="font-extrabold text-[#69140E] dark:text-white mt-1 mb-1">
                {m.title}
              </h3>
              <p className="text-sm text-[#69140E]/75 dark:text-white/75 leading-relaxed">
                {m.text}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default HistorySection;
