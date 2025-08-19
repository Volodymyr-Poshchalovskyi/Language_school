//* A component that presents two learning options with a combined float and tilt animation.
//* This version has a more robust structure for animations and a default cursor on cards.

import React from 'react';
import { FaUser, FaUserFriends } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';

const LearningOptions = () => {
  const [refPersonal, inViewPersonal] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [refPaired, inViewPaired] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className="bg-[#69140E]/5 dark:bg-gray-900 transition-colors py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="avoid-emoji text-4xl font-bold text-[#69140E] dark:text-[#FFFFFF] mb-12">
          Обери свій формат навчання
        </h2>

        <div className="avoid-emoji grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center overflow-hidden">
          
          {/* ! ЗМІНА ТУТ: Додано зовнішній div для ref та анімації появи */}
          <div
            ref={refPersonal}
            className={`transition-all duration-700 ${
              inViewPersonal
                ? 'translate-x-0 opacity-100 delay-100'
                : '-translate-x-20 opacity-0'
            }`}
          >
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.05} transitionSpeed={1500}>
              <div
                className={`p-8 rounded-lg bg-white dark:bg-gray-800 shadow-md h-full cursor-default ${
                  inViewPersonal ? 'animate-float' : ''
                }`}
              >
                <div className="flex justify-center mb-4">
                  <FaUser className="text-[#E85F5C] text-6xl" />
                </div>
                <h3 className="text-3xl font-bold text-[#69140E] dark:text-[#FFFFFF] mb-4">
                  Індивідуальні заняття
                </h3>
                <p className="text-lg text-[#69140E]/80 dark:text-[#FFFFFF]/80 mb-6">
                  Фокус тільки на тобі. Наш викладач повністю адаптує програму під
                  твої потреби та темп навчання, забезпечуючи максимальну
                  ефективність.
                </p>
                <Link
                  to="/single-form"
                  className="inline-block bg-[#FFD700] text-[#69140E] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#F6AA1C] transition cursor-pointer"
                >
                  Дізнатися більше
                </Link>
              </div>
            </Tilt>
          </div>

          {/* ! ЗМІНА ТУТ: Те ж саме для другої картки */}
          <div
            ref={refPaired}
            className={`transition-all duration-700 ${
              inViewPaired
                ? 'translate-x-0 opacity-100 delay-300'
                : 'translate-x-20 opacity-0'
            }`}
          >
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.05} transitionSpeed={1500}>
              <div
                className={`p-8 rounded-lg bg-white dark:bg-gray-800 shadow-md h-full cursor-default ${
                  inViewPaired ? 'animate-float' : ''
                }`}
                style={{ animationDelay: '-3s' }}
              >
                <div className="flex justify-center mb-4">
                  <FaUserFriends className="text-[#F6AA1C] text-6xl" />
                </div>
                <h3 className="text-3xl font-bold text-[#69140E] dark:text-[#FFFFFF] mb-4">
                  Парні заняття
                </h3>
                <p className="text-lg text-[#69140E]/80 dark:text-[#FFFFFF]/80 mb-6">
                  Навчайтеся разом із другом або колегою! Це чудова можливість
                  обмінюватися ідеями та підтримувати один одного, роблячи процес
                  більш інтерактивним.
                </p>
                <Link
                  to="/dual-form"
                  className="inline-block bg-[#FFD700] text-[#69140E] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#F6AA1C] transition cursor-pointer"
                >
                  Дізнатися більше
                </Link>
              </div>
            </Tilt>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LearningOptions;