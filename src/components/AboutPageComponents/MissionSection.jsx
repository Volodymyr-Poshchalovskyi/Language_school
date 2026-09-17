import React from 'react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import FounderPhoto from '../../assets/Logo.jpeg';
import { mission } from '../../data/aboutData';

// Speech bubbles floating around the portrait, in brand colors.
const bubbleStyles = [
  'bg-[#FFD700] text-[#69140E] -top-4 -left-2 sm:-left-8 rotate-[-6deg]',
  'bg-white dark:bg-gray-800 text-[#69140E] dark:text-white -bottom-4 -left-2 sm:-left-6 rotate-[4deg]',
  'bg-[#E85F5C] text-white top-1/3 -right-3 sm:-right-8 rotate-[6deg]',
];

const MissionSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 mb-24"
    >
      {/* Founder portrait with decorative frame */}
      <div className="avoid-emoji w-full md:w-1/2 flex justify-center">
        <div
          className={`relative w-64 sm:w-80 lg:w-96 transition-all duration-700 ${
            inView ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
          }`}
        >
          {/* Offset color plate behind the photo */}
          <div
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2.5rem] bg-[#FFD700] transform -rotate-3"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 -translate-x-3 -translate-y-3 rounded-[2.5rem] border-2 border-[#E85F5C]/60 transform rotate-2"
            aria-hidden="true"
          />
          <img
            src={FounderPhoto.src}
            alt={mission.founderCaption}
            width="729"
            height="729"
            className="relative w-full aspect-square object-cover rounded-[2.5rem] shadow-xl transform -rotate-1 transition-transform duration-700 hover:rotate-0 hover:scale-[1.02] dark:brightness-95"
          />

          {mission.bubbles.map((text, i) => (
            <span
              key={text}
              className={`absolute px-4 py-2 rounded-2xl text-sm sm:text-base font-extrabold shadow-lg select-none transition-all duration-700 ${bubbleStyles[i]} ${
                inView ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
              aria-hidden="true"
            >
              {text}
            </span>
          ))}

          <p className="mt-8 text-center text-sm font-semibold text-[#69140E]/70 dark:text-white/70">
            {mission.founderCaption}
          </p>
        </div>
      </div>

      {/* Text */}
      <div
        className={`avoid-emoji w-full md:w-1/2 text-center md:text-left transition-all duration-700 delay-150 ${
          inView ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
        }`}
      >
        <h2
          className="text-3xl sm:text-4xl font-extrabold text-[#69140E] dark:text-white mb-5"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {mission.title}
        </h2>
        <p className="text-lg text-[#69140E]/80 dark:text-white/80 mb-8 leading-relaxed">
          {mission.text}
        </p>
        <Link
          href={mission.button.href}
          className="inline-block bg-[#FFD700] text-[#69140E] px-8 py-3 rounded-xl text-lg font-semibold hover:bg-[#F6AA1C] hover:scale-105 active:scale-95 transition-all shadow-md"
        >
          {mission.button.text}
        </Link>
      </div>
    </div>
  );
};

export default MissionSection;
