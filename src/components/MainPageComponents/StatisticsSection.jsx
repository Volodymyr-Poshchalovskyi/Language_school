import React from 'react';
import { FaUserGraduate, FaClipboardList, FaHandshake } from 'react-icons/fa';

const StatisticsSection = () => {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Заголовок компонента */}
        <h2 className="avoid-emoji text-4xl font-bold text-gray-900 mb-12">
          Що кажуть цифри?
          <div className="mt-4 inline-block bg-white text-gray-900 px-6 py-2 rounded-lg shadow-md">
            Статистика нашої школи
          </div>
        </h2>

        {/* Контейнер для карток зі статистикою */}
        <div className="avoid-emoji grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Картка 1: Студенти */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <FaUserGraduate className="text-orange-500 text-5xl" />
            </div>
            <h3 className="text-5xl font-bold text-gray-900 mb-2">450+</h3>
            <p className="text-xl font-semibold text-gray-700 mb-4">
              Студентів
            </p>
            <p className="text-gray-600">
              Всього за півроку роботи нашої школи, багато студентів уже досягли
              значних успіхів.
            </p>
          </div>

          {/* Картка 2: Уроки */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <FaClipboardList className="text-orange-500 text-5xl" />
            </div>
            <h3 className="text-5xl font-bold text-gray-900 mb-2">5200+</h3>
            <p className="text-xl font-semibold text-gray-700 mb-4">
              Уроків на місяць
            </p>
            <p className="text-gray-600">
              Не втрачай свій шанс і приєднуйся до тих, хто вже навчається прямо
              зараз.
            </p>
          </div>

          {/* Картка 3: Партнери */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <FaHandshake className="text-orange-500 text-5xl" />
            </div>
            <h3 className="text-5xl font-bold text-gray-900 mb-2">16+</h3>
            <p className="text-xl font-semibold text-gray-700 mb-4">
              Партнерів
            </p>
            <p className="text-gray-600">
              Це провідні компанії, з якими ми тісно співпрацюємо, пропонуючи
              нашим студентам нові послуги.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
