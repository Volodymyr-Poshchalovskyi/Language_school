import React from 'react';
import { FaPhone, FaTelegramPlane, FaInstagram, FaFacebook } from 'react-icons/fa';

const Support = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      {/* Заголовок компонента */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Ми завжди на зв'язку
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Ваші запитання та відгуки важливі для нас.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Блок з номером телефону - ліва частина */}
        <div className="md:w-1/2 bg-white rounded-3xl shadow-lg p-8 group transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:rotate-1 hover:-translate-y-2">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Зв'яжіться з нами</h2>
          <p className="text-lg text-gray-600 mb-6">
            Зателефонуйте нам для швидкої допомоги або консультації.
          </p>
          <a
            href="tel:+380991234567" // Замініть на свій номер
            className="inline-flex items-center justify-center w-full md:w-auto text-blue-600 bg-blue-100 px-6 py-4 rounded-full text-xl font-bold transition duration-300 transform hover:bg-blue-200 hover:scale-105 hover:-translate-y-1"
          >
            <FaPhone className="mr-3 transition-transform duration-300 group-hover:rotate-6" />
            +38 (099) 123-45-67
          </a>
        </div>

        {/* Блок з соцмережами - права частина */}
        <div className="md:w-1/2 bg-white rounded-3xl shadow-lg p-8 group transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-rotate-1 hover:-translate-y-2">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Наші соцмережі</h2>
          <p className="text-lg text-gray-600 mb-6">
            Підписуйтесь, щоб бути в курсі новин та оновлень.
          </p>
          <div className="flex justify-center md:justify-start gap-8">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300 group-hover:scale-125 group-hover:rotate-6">
              <FaTelegramPlane className="text-5xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500 transition duration-300 group-hover:scale-125 group-hover:-rotate-6">
              <FaInstagram className="text-5xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-800 transition duration-300 group-hover:scale-125 group-hover:rotate-6">
              <FaFacebook className="text-5xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;