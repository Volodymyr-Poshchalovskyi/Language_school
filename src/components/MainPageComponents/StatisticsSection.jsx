import { FaUserGraduate, FaClipboardList, FaHandshake } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import React from 'react';

const StatisticsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const statisticsCards = [
    {
      icon: <FaUserGraduate className="text-gray-800 dark:text-gray-200 text-5xl" />,
      value: '450+',
      title: 'Студентів',
      description:
        'Всього за півроку роботи нашої школи, багато студентів уже досягли значних успіхів.',
    },
    {
      icon: <FaClipboardList className="text-gray-800 dark:text-gray-200 text-5xl" />,
      value: '5200+',
      title: 'Уроків на місяць',
      description:
        'Не втрачай свій шанс і приєднуйся до тих, хто вже навчається прямо зараз.',
    },
    {
      icon: <FaHandshake className="text-gray-800 dark:text-gray-200 text-5xl" />,
      value: '16+',
      title: 'Партнерів',
      description:
        'Це провідні компанії, з якими ми тісно співпрацюємо, пропонуючи нашим студентам нові послуги.',
    },
  ];

  return (
    <section className="bg-[#69140E]/5 dark:bg-gray-900 transition-colors py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className="avoid-emoji font-extrabold text-4xl mb-12 leading-snug text-[#69140E] dark:text-white"
          style={{ fontFamily: "'Viaoda Libre', cursive", fontWeight: 800 }}
        >
          Що кажуть цифри?
          <div className="mt-4 text-[#69140E] dark:text-white">
            <span className="bg-[#FFD700] text-[#69140E] px-4 py-2 rounded-md shadow-md">
              Статистика
            </span>{" "}
            нашої школи
          </div>
        </h2>

        <div
          ref={ref}
          className="avoid-emoji grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {statisticsCards.map((card, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1500}
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
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
