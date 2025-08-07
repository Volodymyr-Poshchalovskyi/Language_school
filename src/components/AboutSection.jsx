import React from 'react';
import Image from '../assets/foni-papik-pro-39ib-p-kartinki-dikii-kaban-na-prozrachnom-fone-1.png'; // Перевір правильність шляху
const AboutSection = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Ліва частина: Зображення */}
        <div className="md:w-1/2">
          <img
           
            src={Image}
            alt="Наша команда працює над проєктом"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Права частина: Текст */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Трохи про нашу{" "}
            <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-md">
              школу
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Ми — команда ентузіастів, яка прагне зробити вивчення німецької мови доступним, цікавим та ефективним для кожного. Наша місія — надихати вас на нові звершення.
          </p>
          <a
            href="#"
            className="inline-block text-red-600 bg-white border border-red-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-50 transition"
          >
            Дізнатись більше
          </a>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
