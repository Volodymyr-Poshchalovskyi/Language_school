import React, { useState, useRef, useEffect } from 'react';
import { FaHome, FaBriefcase, FaBook, FaChevronLeft, FaChevronRight, FaGraduationCap } from 'react-icons/fa';


// TODO: fix mobile slider


// Дані для слайдів залишаються без змін
const slides = [
  {
    icon: <FaHome size={32} />,
    title: "Розмовна німецька для життя та побутових ситуацій: спілкуйся вільно та підтримуй різноманітні теми",
    points: [
      "Навчимо сприймати розмовну німецьку мову на слух, читати та правильно вимовляти слова та речення під час живого спілкування",
      "Розберемо на прикладах як спілкуватися в транспорті, магазинах, кафе, банку, лікарні",
      "Навчимо висловлювати власні думки німецькою за допомогою простих та складних конструкцій"
    ]
  },
  {
    icon: <FaBriefcase size={32} />,
    title: "Німецька для роботи та навчання: стань кращим спеціалістом",
    points: [
      "Підготуємо вас до професійного розвитку та нових досягнень",
      "Познайомимо з лексикою, що необхідна для роботи, ведення переговорів та додамо впевненості у власних силах"
    ]
  },
  {
    icon: <FaBook size={32} />,
    title: "Тестовий слайд: для прикладу роботи каруселі",
    points: [
      "Це демонстраційний слайд",
      "Він додається для перевірки логіки перемикання",
      "На мобілках доступний свайп!"
    ]
  },
  {
    icon: <FaGraduationCap size={32} />, 
    title: "Підготовка до міжнародних іспитів: отримай сертифікат",
    points: [
      "Розробимо індивідуальний план підготовки до Goethe-Zertifikat, Telc тощо",
      "Ознайомимо з форматом завдань та критеріями оцінювання",
      "Проведемо пробні тестування для оцінки рівня знань"
    ]
  }
];

const GoalSlider = () => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(1);

  // Хук для відстеження зміни розміру екрана, щоб зробити слайдер адаптивним
  useEffect(() => {
    const handleResize = () => {
      const newSlidesPerView = window.innerWidth < 768 ? 1 : 2;
      setSlidesPerView(newSlidesPerView);
      // Скидаємо поточний слайд, щоб уникнути виходу за межі при зміні вигляду
      setCurrent(0); 
    };

    handleResize(); // Встановлюємо початкове значення
    window.addEventListener('resize', handleResize);

    // Прибираємо слухач подій при демонтажі компонента
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Останній валідний індекс, з якого може починатися слайдер
  const maxIndex = slides.length > slidesPerView ? slides.length - slidesPerView : 0;

  const handleNext = () => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Обробники свайпу залишаються без змін
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) handleNext(); // свайп вліво
    if (diff < -50) handlePrev(); // свайп вправо
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Розрахунок відсотка для зсуву контейнера слайдів
  const offset = current * (100 / slidesPerView);

  return (
    <section className="bg-white py-12 font-sans">
      <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-8 px-4">
        Німецька мова онлайн<br />для досягнення ваших цілей
      </h1>
      
      {/* Контейнер для слайдера та стрілок, що займає ~90% ширини */}
      <div className="w-11/12 mx-auto flex items-center justify-center">
        {/* Стрілка "Назад" (видима тільки на десктопі) */}
        <button
          className="hidden md:block text-gray-600 hover:text-red-600 transition p-2 rounded-full"
          onClick={handlePrev}
          aria-label="Previous Slide"
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Головний контейнер слайдера, який обрізає контент */}
        <div className="flex-1 overflow-hidden mx-2 md:mx-4">
          {/* Контейнер, що рухається вліво-вправо */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${offset}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Рендеримо слайди */}
            {slides.map((slide, index) => (
              <div
                key={index}
                // Кожен слайд займає 100% ширини на мобілках, 50% на десктопі
                className="flex-shrink-0 w-full md:w-1/2 p-3" 
              >
                <div className="bg-gray-50 rounded-2xl shadow-lg p-6 h-full flex flex-col">
                    <div className="mb-4 text-red-600">{slide.icon}</div>
                    <h2 className="font-bold text-lg text-gray-900 mb-4">{slide.title}</h2>
                    <ul className="list-disc pl-5 text-sm space-y-2 text-gray-700">
                      {slide.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Стрілка "Вперед" (видима тільки на десктопі) */}
        <button
          className="hidden md:block text-gray-600 hover:text-red-600 transition p-2 rounded-full"
          onClick={handleNext}
          aria-label="Next Slide"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default GoalSlider;