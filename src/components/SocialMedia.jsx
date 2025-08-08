import React from 'react';

const SocialMedia = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
          Ми в соціальних мережах
        </h2>
        
        {/* Асиметричний макет з анімаціями */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {/* Блок 1: Instagram (займає 2 колонки на md-екранах) */}
          <div className="md:col-span-2 relative bg-white rounded-3xl shadow-lg p-6 group transition duration-300 hover:shadow-xl hover:scale-105 hover:-rotate-1">
            <div className="relative overflow-hidden rounded-2xl mb-4">
              <img
                src="https://via.placeholder.com/600x400?text=Instagram+Post" // Замініть на свій скріншот
                alt="Instagram post"
                className="w-full h-auto object-cover transition duration-300 group-hover:scale-110"
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Instagram</h3>
              <p className="text-gray-600 mb-4">Наші найяскравіші моменти та історії.</p>
              <a
                href="#" // Замініть на посилання
                className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-pink-600 transition duration-300"
              >
                Переглянути в Instagram
              </a>
            </div>
          </div>

          {/* Блок 2: TikTok */}
          <div className="md:col-span-1 relative bg-white rounded-3xl shadow-lg p-6 group transition duration-300 hover:shadow-xl hover:scale-105 hover:rotate-1">
            <div className="relative overflow-hidden rounded-2xl mb-4">
              <img
                src="https://via.placeholder.com/300x500?text=TikTok+Video" // Замініть на свій скріншот або відео
                alt="TikTok video"
                className="w-full h-auto object-cover transition duration-300 group-hover:scale-110"
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">TikTok</h3>
              <p className="text-gray-600 mb-4">Короткі та веселі відеоролики.</p>
              <a
                href="#" // Замініть на посилання
                className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-800 transition duration-300"
              >
                Переглянути в TikTok
              </a>
            </div>
          </div>
          
          {/* Блок 3: LinkedIn */}
          <div className="md:col-span-1 relative bg-white rounded-3xl shadow-lg p-6 group transition duration-300 hover:shadow-xl hover:scale-105 hover:-rotate-1">
            <div className="relative overflow-hidden rounded-2xl mb-4">
              <img
                src="https://via.placeholder.com/500x300?text=LinkedIn+Post" // Замініть на свій скріншот
                alt="Telegram post"
                className="w-full h-auto object-cover transition duration-300 group-hover:scale-110"
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Telegram</h3>
              <p className="text-gray-600 mb-4">Професійні новини та кар'єрні можливості.</p>
              <a
                href="#" // Замініть на посилання
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition duration-300"
              >
                Переглянути в Telegram
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialMedia;