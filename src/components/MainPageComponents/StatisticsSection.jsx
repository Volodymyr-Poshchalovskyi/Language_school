//* A static component that displays key statistics about the school.
//* Restyled with the new brand color palette and a neutral dark theme.

import { FaUserGraduate, FaClipboardList, FaHandshake } from 'react-icons/fa';

const StatisticsSection = () => {
  return (
    // ! ЗМІНА ТУТ: Фон темного режиму змінено на нейтральний dark:bg-gray-900
    <section className="bg-[#69140E]/5 dark:bg-gray-900 transition-colors py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="avoid-emoji text-4xl font-bold text-[#69140E] dark:text-[#FFFFFF] mb-12">
          Що кажуть цифри?
          <div className="mt-4 inline-block bg-[#FFD700] text-[#69140E] px-6 py-2 rounded-lg shadow-md">
            Статистика нашої школи
          </div>
        </h2>

        <div className="avoid-emoji grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* --- Картка 1: Студенти --- */}
          {/* ! ЗМІНА ТУТ: Фон карток в темному режимі змінено на dark:bg-gray-800 */}
          <div className="avoid-emoji bg-[#FFFFFF] dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <FaUserGraduate className="text-[#E85F5C] text-5xl" />
            </div>
            <h3 className="text-5xl font-bold text-[#69140E] dark:text-[#FFFFFF] mb-2">
              450+
            </h3>
            <p className="text-xl font-semibold text-[#69140E] dark:text-[#FFFFFF] mb-4">
              Студентів
            </p>
            <p className="text-[#69140E]/80 dark:text-[#FFFFFF]/80">
              Всього за півроку роботи нашої школи, багато студентів уже досягли
              значних успіхів.
            </p>
          </div>

          {/* --- Картка 2: Уроки --- */}
          <div className="avoid-emoji bg-[#FFFFFF] dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <FaClipboardList className="text-[#E85F5C] text-5xl" />
            </div>
            <h3 className="text-5xl font-bold text-[#69140E] dark:text-[#FFFFFF] mb-2">
              5200+
            </h3>
            <p className="text-xl font-semibold text-[#69140E] dark:text-[#FFFFFF] mb-4">
              Уроків на місяць
            </p>
            <p className="text-[#69140E]/80 dark:text-[#FFFFFF]/80">
              Не втрачай свій шанс і приєднуйся до тих, хто вже навчається прямо
              зараз.
            </p>
          </div>

          {/* --- Картка 3: Партнери --- */}
          <div className="avoid-emoji bg-[#FFFFFF] dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <FaHandshake className="text-[#E85F5C] text-5xl" />
            </div>
            <h3 className="text-5xl font-bold text-[#69140E] dark:text-[#FFFFFF] mb-2">
              16+
            </h3>
            <p className="text-xl font-semibold text-[#69140E] dark:text-[#FFFFFF] mb-4">
              Партнерів
            </p>
            <p className="text-[#69140E]/80 dark:text-[#FFFFFF]/80">
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