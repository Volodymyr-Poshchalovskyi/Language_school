//* A responsive, touch-enabled slider component for showcasing different learning goals.
//* This version features a new layout for desktop controls and a fluid drag-and-swipe experience on mobile.

import React, { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { slides, colorVariants } from '../../../data/goalSliderData';
import Slide from './Slide';

const GoalSlider = () => {
  const [current, setCurrent] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  
  // ! Нові стани для плавного перетягування
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const touchStartX = useRef(0);

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

  // ! Оновлені обробники дотиків для плавності
  const handleTouchStart = (e) => {
    setIsDragging(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - touchStartX.current;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    
    // ? Визначаємо, чи достатньо сильно свайпнули для перемикання
    const swipeThreshold = 50; 
    if (dragOffset < -swipeThreshold) {
      handleNext();
    } else if (dragOffset > swipeThreshold) {
      handlePrev();
    }
    
    // ? Скидаємо зміщення, щоб слайдер плавно повернувся на місце
    setDragOffset(0);
  };

  // * Розрахунок зміщення для анімації
  const offset = current * (100 / slidesPerView);

  return (
    <section className="bg-slate-50 dark:bg-slate-900 transition-colors py-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="avoid-emoji text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-2">
          Німецька мова для ваших цілей
        </h2>
        <p className="avoid-emoji text-lg text-gray-600 dark:text-gray-300 text-center mb-12">
          Оберіть напрямок, який вас цікавить, і почніть свій шлях до успіху.
        </p>

        {/* ! Нова структура для десктопу: кнопки винесені за межі слайдера */}
        <div className="avoid-emoji hidden md:flex items-center justify-center gap-4">
          <button
            className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition p-3 rounded-full shadow-md dark:shadow-none"
            onClick={handlePrev}
            aria-label="Previous Slide"
          >
            <FaChevronLeft size={20} />
          </button>

          <div className="overflow-hidden flex-1">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${offset}%)` }}
            >
              {slides.map((slide, index) => {
                const colors = colorVariants[slide.color] || colorVariants.blue;
                return <Slide key={index} slide={slide} colors={colors} />;
              })}
            </div>
          </div>

          <button
            className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition p-3 rounded-full shadow-md dark:shadow-none"
            onClick={handleNext}
            aria-label="Next Slide"
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        {/* ! Окрема структура для мобільних пристроїв з новим, плавним свайпом */}
        <div className="avoid-emoji md:hidden">
          <div className="overflow-hidden">
            <div
              // ! Динамічний клас для плавного перетягування (вимикає анімацію під час руху пальця)
              className={`flex ${isDragging ? '' : 'transition-transform duration-500 ease-in-out'}`}
              // ! Новий стиль з calc() для руху слайдера вслід за пальцем
              style={{ transform: `translateX(calc(-${offset}% + ${dragOffset}px))` }}
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
        </div>

        {/* * Навігаційні крапки залишаються без змін */}
        <div className="flex justify-center items-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                current === idx
                  ? 'bg-blue-600'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
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