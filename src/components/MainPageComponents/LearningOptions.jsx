import React from 'react';
import { FaUser, FaUserFriends } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom'; // 1. Додано імпорт Link

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
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="avoid-emoji text-4xl font-bold text-gray-900 mb-12">
          Обери свій формат навчання
        </h2>

        <div className="avoid-emoji grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center overflow-hidden">
          {/* Індивідуальні заняття */}
          <div
            ref={refPersonal}
            className={`bg-gray-100 p-8 rounded-lg shadow-md transition-all duration-700 transform ${
              inViewPersonal
                ? 'translate-x-0 opacity-100 delay-100'
                : '-translate-x-20 opacity-0'
            }`}
          >
            <div className="flex justify-center mb-4">
              <FaUser className="text-blue-600 text-6xl" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Індивідуальні заняття
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Фокус тільки на тобі. Наш викладач повністю адаптує програму під
              твої потреби та темп навчання, забезпечуючи максимальну
              ефективність.
            </p>
            {/* 2. Замінено <a> на <Link> */}
            <Link
              to="/single-form"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Дізнатися більше
            </Link>
          </div>

          {/* Парні заняття */}
          <div
            ref={refPaired}
            className={`bg-gray-100 p-8 rounded-lg shadow-md transition-all duration-700 transform ${
              inViewPaired
                ? 'translate-x-0 opacity-100 delay-300'
                : 'translate-x-20 opacity-0'
            }`}
          >
            <div className="flex justify-center mb-4">
              <FaUserFriends className="text-green-600 text-6xl" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Парні заняття
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Навчайтеся разом із другом або колегою! Це чудова можливість
              обмінюватися ідеями та підтримувати один одного, роблячи процес
              більш інтерактивним.
            </p>
            {/* 3. Замінено <a> на <Link> */}
            <Link
              to="/dual-form"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
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
