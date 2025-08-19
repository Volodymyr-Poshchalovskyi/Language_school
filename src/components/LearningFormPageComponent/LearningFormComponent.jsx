// src/components/LearningFormPageComponent/LearningFormComponent.jsx

import { Link } from 'react-router-dom';

function LearningFormPage({ data }) {
  const { theme } = data;

  return (
    <div
      className={`${theme.sectionBg} dark:bg-gray-900 py-16 md:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="avoid-emoji text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#69140E] dark:text-[#FFFFFF] tracking-tight">
            {data.title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-[#69140E]/80 dark:text-[#FFFFFF]/80">
            {data.subtitle}
          </p>
        </div>

        <div className="avoid-emoji bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#69140E] dark:text-[#FFFFFF] mb-3">
              {data.whatIsItTitle}
            </h2>
            <div
              className="prose prose-lg dark:prose-invert max-w-none text-[#69140E]/80 dark:text-[#FFFFFF]/80 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: data.whatIsItText }}
            />
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#69140E] dark:text-[#FFFFFF] mb-4">
              {data.forWhomTitle}
            </h2>
            <ul className="space-y-3 text-lg text-[#69140E]/80 dark:text-[#FFFFFF]/80">
              {data.forWhomList.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className={`${theme.checkmarkColor} mr-3 mt-1`}>
                    &#10003;
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#69140E] dark:text-[#FFFFFF] mb-4">
              Ключові переваги
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.advantages.map((advantage, index) => (
                // ! ЗМІНА ТУТ: Використовуємо новий клас для стилізації
                <div
                  key={index}
                  className={`${advantage.cardClasses} p-6 rounded-lg transition-all duration-300`}
                >
                  <h3 className="font-bold text-xl text-[#69140E] dark:text-[#FFFFFF] mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-[#69140E]/80 dark:text-[#FFFFFF]/80">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="avoid-emoji mt-12 text-center">
          <Link
            to={data.buttonLink}
            className={`inline-block ${theme.buttonBg} ${theme.buttonTextColor} font-bold py-3 px-8 rounded-lg text-lg ${theme.buttonHoverBg} transition-all transform hover:scale-105 shadow-md`}
          >
            {data.buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LearningFormPage;
