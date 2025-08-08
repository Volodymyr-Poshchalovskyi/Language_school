import React from 'react';
import { useInView } from 'react-intersection-observer';
import Image1 from '../assets/image1.png'; // Перевірте правильність шляху
import Image2 from '../assets/image1.png'; // Перевірте правильність шляху
import Image3 from '../assets/image1.png'; // Перевірте правильність шляху
import Image4 from '../assets/image1.png'; // Перевірте правильність шляху
import Image5 from '../assets/image1.png'; // Перевірте правильність шляху

const AboutPage = () => {
  // Хуки для кожної секції, анімація спрацьовує лише один раз
  const [refSection1, inViewSection1] = useInView({ threshold: 0.3, triggerOnce: false });
  const [refSection2, inViewSection2] = useInView({ threshold: 0.3, triggerOnce: true });
  const [refSection3, inViewSection3] = useInView({ threshold: 0.3, triggerOnce: true });
  const [refSection4, inViewSection4] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Про нашу школу
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Дізнайтеся більше про нашу місію, цінності та підхід до навчання.
          </p>
        </div>

        {/* Секція 1: Місія та фото */}
        <div ref={refSection1} className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <img
              src={Image1}
              alt="Фотографія школи"
              className={`w-full h-auto rounded-3xl shadow-lg transform -rotate-2 transition duration-700 hover:scale-105 hover:rotate-0 ${
                inViewSection1 ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}
            />
          </div>
          <div className="md:w-1/2 text-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наша місія
            </h2>
            <p className="text-lg text-gray-600">
              Ми віримо, що навчання має бути доступним, цікавим та ефективним для кожного. Наша мета — створити сприятливе середовище, де студенти можуть розкрити свій потенціал та досягти своїх цілей, отримуючи якісні знання.
            </p>
          </div>
        </div>

        {/* Секція 2: Команда та асиметричні фото */}
        <div ref={refSection2} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="text-left md:order-2">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наші викладачі
            </h2>
            <p className="text-lg text-gray-600">
              Наші викладачі — це досвідчені професіонали, які використовують інноваційні методики. Ми пропонуємо індивідуальний підхід, гнучкий графік та безліч додаткових матеріалів, щоб навчання було максимально комфортним та продуктивним.
            </p>
          </div>
          <div className="relative md:h-[400px] md:order-1">
            <img
              src={Image2}
              alt="Команда викладачів"
              className={`w-2/3 md:w-3/4 h-auto rounded-3xl shadow-lg absolute top-0 left-0 z-10 transform rotate-3 transition duration-700 hover:scale-110 hover:rotate-0 ${
                inViewSection2 ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}
            />
            <img
              src={Image3}
              alt="Групові заняття"
              className={`w-2/3 md:w-3/4 h-auto rounded-3xl shadow-lg absolute bottom-0 right-0 transform -rotate-6 transition duration-700 delay-200 hover:scale-110 hover:rotate-0 ${
                inViewSection2 ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
              }`}
            />
          </div>
        </div>

        {/* Секція 3: Відгуки та одиночне фото */}
        <div ref={refSection3} className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2 text-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наш підхід
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Ми створюємо унікальні програми навчання, які поєднують теорію з практикою, використовуючи сучасні технології. Наші студенти не просто отримують знання, а вчаться застосовувати їх у реальному житті.
            </p>
            <a
              href="#"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Переглянути програми
            </a>
          </div>
          <div className="md:w-1/2 md:order-1">
            <img
              src={Image4}
              alt="Студенти працюють"
              className={`w-full h-auto rounded-3xl shadow-lg transform rotate-2 transition duration-700 hover:scale-105 hover:rotate-0 ${
                inViewSection3 ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
              }`}
            />
          </div>
        </div>
        
        {/* Секція 4: Історія школи */}
        <div ref={refSection4} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative md:h-[400px]">
            <img
              src={Image5}
              alt="Ілюстрація історії"
              className={`w-2/3 h-auto rounded-3xl shadow-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform -rotate-3 transition duration-700 hover:scale-110 hover:rotate-0 ${
                inViewSection4 ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
              }`}
            />
          </div>
          <div className="text-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Історія школи
            </h2>
            <p className="text-lg text-gray-600">
              Наша школа була заснована у 2010 році з простою ідеєю: зробити освіту якісною та доступною. З того часу ми виросли, розширили нашу команду та допомогли тисячам студентів досягти успіху.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutPage;