import React from 'react';
import Image from '../assets/image1.png'; // Перевір правильність шляху



const CTA = () => {
  return (
    <section className="bg-white py-12 px-6 mt-18">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Ліва частина: Текст */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Приєднуйся до нашої{" "}
            <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-md">
              спільноти
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Отримай доступ до унікальних можливостей та стань частиною чогось більшого вже сьогодні.
          </p>
          <a
            href="#"
            className="inline-block text-blue-600 bg-white border border-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition"
          >
            Подати заявку
          </a>
        </div>

        {/* Права частина: Зображення */}
        <div className="md:w-1/2">
          <img
            src={Image}
            alt="CTA Illustration"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
