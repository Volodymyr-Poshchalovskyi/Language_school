// * A component for the support section, displaying contact information and social media links.
// * This version has been restyled with the new brand color palette and a neutral dark theme.

import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { socialMediaInfo } from '../../data/socialMediaData';

const Support = () => {
  return (
    <section className="bg-[#69140E]/5 dark:bg-gray-900 py-16 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#69140E] dark:text-[#FFFFFF] leading-tight avoid-emoji">
          Ми завжди на зв'язку
        </h1>
        <p className="mt-4 text-xl text-[#69140E]/80 dark:text-[#FFFFFF]/80 avoid-emoji">
          Ваші запитання та відгуки важливі для нас.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        
        <div className="avoid-emoji w-full md:w-1/2 bg-[#FFFFFF] dark:bg-gray-800 rounded-3xl shadow-lg p-8 group transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:rotate-1 hover:-translate-y-2">
          <h2 className="text-3xl font-extrabold text-[#69140E] dark:text-[#FFFFFF] mb-4">
            Зв'яжіться з нами
          </h2>
          <p className="text-lg text-[#69140E]/80 dark:text-[#FFFFFF]/80 mb-6">
            Зателефонуйте нам для швидкої допомоги або консультації.
          </p>
          <a
            href={`tel:${socialMediaInfo.contactPhone.number}`}
            // ! ЗМІНА ТУТ: Додано `whitespace-nowrap` та змінено розмір тексту на адаптивний `text-lg md:text-xl`
            className="inline-flex items-center justify-center w-full md:w-auto bg-[#FFD700] text-[#69140E] px-6 py-4 rounded-full text-lg md:text-xl font-bold whitespace-nowrap transition duration-300 transform hover:bg-[#F6AA1C] hover:scale-105 hover:-translate-y-1"
          >
            <FaPhone className="mr-3 transition-transform duration-300 group-hover:rotate-6" />
            {socialMediaInfo.contactPhone.display}
          </a>
        </div>

        <div className="avoid-emoji w-full md:w-1/2 bg-[#FFFFFF] dark:bg-gray-800 rounded-3xl shadow-lg p-8 group transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-rotate-1 hover:-translate-y-2">
          <h2 className="text-3xl font-extrabold text-[#69140E] dark:text-[#FFFFFF] mb-4">
            Наші соцмережі
          </h2>
          <p className="text-lg text-[#69140E]/80 dark:text-[#FFFFFF]/80 mb-6">
            Підписуйтесь, щоб бути в курсі новин та оновлень.
          </p>
          <div className="flex justify-center md:justify-start gap-8">
            {socialMediaInfo.platforms.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#69140E]/40 dark:text-[#FFFFFF]/40 hover:text-[#E85F5C] transition duration-300 group-hover:scale-125"
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