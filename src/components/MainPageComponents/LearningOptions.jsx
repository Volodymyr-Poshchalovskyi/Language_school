//* A component that presents two learning options with a fade-in-on-scroll animation.
//* Restyled with the new brand color palette and a neutral dark theme.

import React from 'react';
import { FaUser, FaUserFriends } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

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
    // ! ЗМІНА ТУТ: Фон секції змінено на ледь помітний відтінок bg-[#69140E]/5
    <section className="bg-[#69140E]/5 dark:bg-gray-900 transition-colors py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="avoid-emoji text-4xl font-bold text-[#69140E] dark:text-[#FFFFFF] mb-12">
          Обери свій формат навчання
        </h2>

        <div className="avoid-emoji grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center overflow-hidden">
          {/* --- Картка: Індивідуальні заняття --- */}
          <div
            ref={refPersonal}
            // ! ЗМІНА ТУТ: Фон карток змінено на білий (світла тема) та сірий (темна тема)
            className={`p-8 rounded-lg transition-all duration-700 transform ${
              inViewPersonal
                ? 'translate-x-0 opacity-100 delay-100'
                : '-translate-x-20 opacity-0'
            } bg-white dark:bg-gray-800 shadow-md`}
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
              className="inline-block bg-[#FFD700] text-[#69140E] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#F6AA1C] transition"
            >
              Дізнатися більше
            </Link>
          </div>

          {/* --- Картка: Парні заняття --- */}
          <div
            ref={refPaired}
            className={`p-8 rounded-lg transition-all duration-700 transform ${
              inViewPaired
                ? 'translate-x-0 opacity-100 delay-300'
                : 'translate-x-20 opacity-0'
            } bg-white dark:bg-gray-800 shadow-md`}
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
              className="inline-block bg-[#FFD700] text-[#69140E] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#F6AA1C] transition"
            >
              Дізнатися більше
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningOptions;