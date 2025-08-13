import React from 'react';
import { Link } from 'react-router-dom'; // 1. Імпортуємо Link

function SingleForm() {
  return (
    <div className="bg-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        <div className="avoid-emoji text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Індивідуальні Уроки
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
            Максимум уваги викладача та персоналізована програма для найшвидшого досягнення мети.
          </p>
        </div>

        <div className="avoid-emoji bg-white rounded-2xl shadow-xl p-8 md:p-12">
          
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Що таке індивідуальний урок?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Це формат, де весь час та увага викладача присвячені <strong>лише вам</strong>. Програма навчання на 100% адаптується під ваші цілі, темп та сильні й слабкі сторони. Кожна хвилина уроку використовується для вашого особистого прогресу.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Цей формат ідеально підходить вам, якщо ви:</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">&#10003;</span>
                <span>Хочете досягти мети (напр., скласти іспит B2) у стислі терміни.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">&#10003;</span>
                <span>Соромитеся говорити в групі та потребуєте безпечного простору для практики.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">&#10003;</span>
                <span>Маєте специфічні цілі, наприклад, підготовка до співбесіди чи вивчення професійної лексики.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ключові переваги</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-blue-900 mb-2">Повна персоналізація</h3>
                <p className="text-blue-800">Викладач будує урок навколо ваших потреб, приділяючи увагу саме тим темам і навичкам, які вам потрібні.</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-green-900 mb-2">Максимум практики</h3>
                <p className="text-green-800">Ви говорите щонайменше 50% уроку, що є запорукою швидкого подолання мовного бар'єра.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="avoid-emoji mt-12 text-center">
            {/* 2. Замінюємо <a> на <Link> з параметром */}
            <Link 
              to="/application?format=single"
              className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
            >
              Записатися на консультацію
            </Link>
        </div>
      </div>
    </div>
  );
}

export default SingleForm;
