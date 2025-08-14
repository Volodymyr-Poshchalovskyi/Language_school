//* A static component that displays key statistics about the school.
//* It serves a purely presentational role and does not manage any state or logic.

// * Imports icons from `react-icons` to visually represent each statistic.
import { FaUserGraduate, FaClipboardList, FaHandshake } from 'react-icons/fa';

const StatisticsSection = () => {
  return (
    // * Section background adapts to theme
    <section className="bg-gray-100 dark:bg-gray-900 transition-colors py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* * The main heading and a subheading for the section. */}
        <h2 className="avoid-emoji text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12">
          Що кажуть цифри?
          <div className="mt-4 inline-block bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-6 py-2 rounded-lg shadow-md dark:shadow-sm">
            Статистика нашої школи
          </div>
        </h2>

        {/* ! Container for the statistics cards, arranged in a responsive grid. */}
        <div className="avoid-emoji grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* * Card 1: Students. */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md dark:shadow-none hover:shadow-xl dark:hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <FaUserGraduate className="text-orange-500 dark:text-orange-400 text-5xl" />
            </div>
            <h3 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              450+
            </h3>
            <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Студентів
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Всього за півроку роботи нашої школи, багато студентів уже досягли
              значних успіхів.
            </p>
          </div>

          {/* * Card 2: Lessons. */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md dark:shadow-none hover:shadow-xl dark:hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <FaClipboardList className="text-orange-500 dark:text-orange-400 text-5xl" />
            </div>
            <h3 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              5200+
            </h3>
            <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Уроків на місяць
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Не втрачай свій шанс і приєднуйся до тих, хто вже навчається прямо
              зараз.
            </p>
          </div>

          {/* * Card 3: Partners. */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md dark:shadow-none hover:shadow-xl dark:hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <FaHandshake className="text-orange-500 dark:text-orange-400 text-5xl" />
            </div>
            <h3 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              16+
            </h3>
            <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Партнерів
            </p>
            <p className="text-gray-600 dark:text-gray-400">
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
