import React from 'react';

function DualForm() {
  return (
    <div className="bg-purple-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Уроки в Парі
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
            Вивчайте німецьку разом із другом або партнером — це мотивуюче, ефективно та вигідно!
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Що таке урок в парі?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Це заняття, на якому викладач працює <strong>одночасно з двома студентами</strong> приблизно однакового рівня. Такий формат додає елемент здорової конкуренції та дозволяє відпрацьовувати діалоги в реалістичних умовах, зберігаючи при цьому значну увагу викладача до кожного.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Цей формат ідеально підходить вам, якщо ви:</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 mt-1">&#10003;</span>
                <span>Хочете займатися разом із другом, колегою або членом родини.</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 mt-1">&#10003;</span>
                <span>Шукаєте більш бюджетний варіант, ніж індивідуальні уроки, але з більшою увагою, ніж у групі.</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 mt-1">&#10003;</span>
                <span>Краще засвоюєте матеріал, коли маєте партнера для діалогів та спільних завдань.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ключові переваги</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-purple-100 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-purple-900 mb-2">Мотивація та підтримка</h3>
                <p className="text-purple-800">Навчатися з партнером веселіше! Ви можете підтримувати та мотивувати один одного, що покращує регулярність занять.</p>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-teal-900 mb-2">Практика живих діалогів</h3>
                <p className="text-teal-800">Це ідеальне середовище для відпрацювання реальних розмов, суперечок та рольових ігор німецькою мовою.</p>
              </div>

            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
            <a 
              href="#contact"
              className="inline-block bg-purple-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-purple-700 transition-transform transform hover:scale-105"
            >
              Записати пару на урок
            </a>
        </div>
      </div>
    </div>
  );
}

export default DualForm;