import { FaUserGraduate, FaClipboardList, FaHandshake } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import React from 'react';

const StatisticsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const statisticsCards = [
    {
      icon: <FaUserGraduate className="text-gray-800 dark:text-gray-200 text-5xl" />,
      value: '450+',
      title: 'Students',
      description:
        'In just six months since our school opened, many students have already achieved great results.',
    },
    {
      icon: <FaClipboardList className="text-gray-800 dark:text-gray-200 text-5xl" />,
      value: '5200+',
      title: 'Lessons per month',
      description:
        'Do not miss your chance: join those who are already learning right now.',
    },
    {
      icon: <FaHandshake className="text-gray-800 dark:text-gray-200 text-5xl" />,
      value: '16+',
      title: 'Partners',
      description:
        'Leading companies we work closely with to offer our students new services.',
    },
  ];

  return (
    <section className="bg-[#69140E]/5 dark:bg-gray-900 transition-colors py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className="avoid-emoji font-extrabold text-4xl mb-12 leading-snug text-[#69140E] dark:text-white"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
        >
          What do the numbers say?
          <div className="mt-4 text-[#69140E] dark:text-white">
            <span className="bg-[#FFD700] text-[#69140E] px-4 py-2 rounded-md shadow-md">
              Facts
            </span>{" "}
            about our school
          </div>
        </h2>

        <div
          ref={ref}
          className="avoid-emoji grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {statisticsCards.map((card, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className={`bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md h-full cursor-default ${
                  inView ? 'animate-float' : ''
                }`}
                style={{ animationDelay: `${index * -2}s` }}
              >
                <div className="flex justify-center mb-4">{card.icon}</div>
                <h3 className="text-5xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  {card.value}
                </h3>
                <p className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  {card.title}
                </p>
                <p className="text-[#69140E]/80 dark:text-[#FFFFFF]/80">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
