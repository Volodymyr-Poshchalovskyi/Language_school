// src/components/MainPageComponents/GoalSlider.jsx
import React, { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { slides, colorVariants } from '../../../data/goalSliderData';
import Slide from './Slide';

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

  const maxIndex =
    slides.length > slidesPerView ? slides.length - slidesPerView : 0;

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
        <h2 className="avoid-emoji text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">
          Німецька мова для ваших цілей
        </h2>
        <p className="avoid-emoji text-lg text-gray-600 text-center mb-12">
          Оберіть напрямок, який вас цікавить, і почніть свій шлях до успіху.
        </p>

        <div className="avoid-emoji relative">
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
                return <Slide key={index} slide={slide} colors={colors} />;
              })}
            </div>
          </div>

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

        <div className="flex justify-center items-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                current === idx
                  ? 'bg-blue-600'
                  : 'bg-gray-300 hover:bg-gray-400'
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
