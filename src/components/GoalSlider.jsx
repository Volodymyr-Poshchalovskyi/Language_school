import React, { useState, useRef, useEffect } from 'react';
import { FaHome, FaBriefcase, FaBook, FaChevronLeft, FaChevronRight, FaGraduationCap } from 'react-icons/fa';

// Дані для слайдів з доданими кольорами для дизайну
const slides = [
  {
    icon: <FaHome size={32} />,
    title: "Розмовна німецька для життя та побутових ситуацій",
    points: [
      "Сприйняття мови на слух, правильна вимова",
      "Спілкування в транспорті, магазинах, кафе, лікарні",
      "Вільне висловлювання власних думок"
    ],
    color: "blue"
  },
  {
    icon: <FaBriefcase size={32} />,
    title: "Німецька для роботи та кар'єрного зростання",
    points: [
      "Підготовка до професійного розвитку",
      "Ділова лексика та ведення переговорів",
      "Впевненість у робочому середовищі"
    ],
    color: "purple"
  },
  {
    icon: <FaGraduationCap size={32} />, 
    title: "Підготовка до міжнародних іспитів",
    points: [
      "Індивідуальний план для Goethe-Zertifikat, Telc",
      "Знайомство з форматом завдань та критеріями",
      "Пробні тестування для оцінки рівня"
    ],
    color: "green"
  },
  {
    icon: <FaBook size={32} />,
    title: "Поглиблене вивчення граматики та лексики",
    points: [
      "Систематизація складних граматичних тем",
      "Розширення словникового запасу",
      "Практичні завдання для закріплення знань"
    ],
    color: "orange"
  }
];

// Об'єкт з кольорами для Tailwind CSS
const colorVariants = {
  blue: {
    bg: 'bg-blue-100',
    text: 'text-blue-600',
    border: 'border-blue-500'
  },
  purple: {
    bg: 'bg-purple-100',
    text: 'text-purple-600',
    border: 'border-purple-500'
  },
  green: {
    bg: 'bg-green-100',
    text: 'text-green-600',
    border: 'border-green-500'
  },
  orange: {
    bg: 'bg-orange-100',
    text: 'text-orange-600',
    border: 'border-orange-500'
  },
};

const GoalSlider = () => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const newSlidesPerView = window.innerWidth < 768 ? 1 : 2;
      setSlidesPerView(newSlidesPerView);
      setCurrent(0); 
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = slides.length > slidesPerView ? slides.length - slidesPerView : 0;

  const handleNext = () => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const offset = current * (100 / slidesPerView);

  return (
    <section className="bg-slate-50 py-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">
          Німецька мова для ваших цілей
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Оберіть напрямок, який вас цікавить, і почніть свій шлях до успіху.
        </p>
      
        <div className="relative">
          {/* Контейнер слайдера */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${offset}%)` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {slides.map((slide, index) => {
                const colors = colorVariants[slide.color] || colorVariants.blue;
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full md:w-1/2 p-3" 
                  >
                    <div className={`bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col border-t-4 ${colors.border}`}>
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${colors.bg} ${colors.text}`}>
                          {slide.icon}
                        </div>
                        <h3 className="font-bold text-xl text-gray-900 mb-4 flex-grow">{slide.title}</h3>
                        <ul className="space-y-3 text-gray-600">
                          {slide.points.map((point, i) => (
                            <li key={i} className="flex items-start">
                              <span className={`mr-3 mt-1 ${colors.text}`}>&#10003;</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Стрілки навігації */}
          <button
            className="hidden md:block absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition p-3 rounded-full shadow-md"
            onClick={handlePrev}
            aria-label="Previous Slide"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition p-3 rounded-full shadow-md"
            onClick={handleNext}
            aria-label="Next Slide"
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        {/* Пагінація (крапки) */}
        <div className="flex justify-center items-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                current === idx ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalSlider;
