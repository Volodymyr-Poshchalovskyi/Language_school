import React from 'react';
import { FaPhone } from 'react-icons/fa';
// 1. Імпортуємо дані з єдиного джерела
import { socialMediaInfo } from '../../data/socialMediaData';

const Support = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      {/* Заголовок компонента */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight avoid-emoji">
          Ми завжди на зв'язку
        </h1>
        <p className="mt-4 text-xl text-gray-600 avoid-emoji">
          Ваші запитання та відгуки важливі для нас.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Блок з номером телефону - ліва частина */}
        <div className="avoid-emoji md:w-1/2 bg-white rounded-3xl shadow-lg p-8 group transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:rotate-1 hover:-translate-y-2">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Зв'яжіться з нами
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Зателефонуйте нам для швидкої допомоги або консультації.
          </p>
          <a
            href={`tel:${socialMediaInfo.contactPhone.number}`} // 2. Використовуємо дані
            className="inline-flex items-center justify-center w-full md:w-auto text-blue-600 bg-blue-100 px-6 py-4 rounded-full text-xl font-bold transition duration-300 transform hover:bg-blue-200 hover:scale-105 hover:-translate-y-1"
          >
            <FaPhone className="mr-3 transition-transform duration-300 group-hover:rotate-6" />
            {socialMediaInfo.contactPhone.display} {/* 2. Використовуємо дані */}
          </a>
        </div>

        {/* Блок з соцмережами - права частина */}
        <div className="avoid-emoji md:w-1/2 bg-white rounded-3xl shadow-lg p-8 group transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-rotate-1 hover:-translate-y-2">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Наші соцмережі
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Підписуйтесь, щоб бути в курсі новин та оновлень.
          </p>
          <div className="flex justify-center md:justify-start gap-8">
            {/* 3. Динамічно генеруємо іконки */}
            {socialMediaInfo.platforms.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 ${social.hoverColor} transition duration-300 group-hover:scale-125 ${social.rotation}`}
              >
                <social.Icon className="text-5xl" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;