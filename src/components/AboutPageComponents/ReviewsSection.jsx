import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaStar } from 'react-icons/fa';
import { reviews, aboutColors } from '../../data/aboutData';

const initialsOf = (name) =>
  name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('');

// Student reviews with initials avatars (no stock photos).
const ReviewsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="mb-24" aria-labelledby="reviews-heading">
      <h2
        id="reviews-heading"
        className="avoid-emoji text-center text-3xl sm:text-4xl font-extrabold text-[#69140E] dark:text-white mb-12"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {reviews.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {reviews.items.map((r, index) => {
          const colors = aboutColors[r.color];
          return (
            <article
              key={r.name}
              className={`avoid-emoji relative flex flex-col bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-md border border-[#69140E]/5 dark:border-white/5 transition-all duration-700 hover:-translate-y-1 hover:shadow-xl ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <span
                className="absolute top-5 right-7 text-7xl leading-none font-black text-[#FFD700]/30 dark:text-[#FFD700]/15 select-none"
                aria-hidden="true"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                “
              </span>

              <div className="flex items-center gap-1 text-[#F6AA1C] mb-4" aria-label="Оцінка 5 з 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
              </div>

              <p className="text-[#69140E]/85 dark:text-white/85 leading-relaxed mb-6 flex-grow">
                {r.quote}
              </p>

              <div className="flex items-center gap-4 pt-5 border-t border-[#69140E]/10 dark:border-white/10">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-sm shadow-sm shrink-0 ${colors.solid}`}
                  aria-hidden="true"
                >
                  {initialsOf(r.name)}
                </div>
                <div className="text-left min-w-0">
                  <p className="font-bold text-[#69140E] dark:text-white truncate">{r.name}</p>
                  <p className="text-xs text-[#69140E]/70 dark:text-white/70 truncate">{r.goal}</p>
                </div>
                <span
                  className={`ml-auto shrink-0 text-xs font-extrabold px-2.5 py-1 rounded-full ${colors.bg} ${colors.text}`}
                >
                  {r.level}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ReviewsSection;
