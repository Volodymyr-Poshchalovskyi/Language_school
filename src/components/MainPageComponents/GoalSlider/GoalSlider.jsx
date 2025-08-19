import React, { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { slides, colorVariants } from '../../../data/goalSliderData';
import Slide from './Slide';

const GoalSlider = () => {
  const [current, setCurrent] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const touchStartCoords = useRef({ x: 0, y: 0 });
  const isSwipeHorizontal = useRef(null);

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

  const handleNext = () =>
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const handlePrev = () =>
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));

  const handleTouchStart = (e) => {
    setIsDragging(true);
    touchStartCoords.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
    isSwipeHorizontal.current = null;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = currentX - touchStartCoords.current.x;
    const diffY = currentY - touchStartCoords.current.y;

    if (isSwipeHorizontal.current === null) {
      if (Math.abs(diffX) > Math.abs(diffY)) {
        isSwipeHorizontal.current = true; // горизонт
      } else {
        isSwipeHorizontal.current = false; // вертикаль
      }
    }

    if (isSwipeHorizontal.current) {
      e.preventDefault(); // блокуємо вертикальний скрол тільки для горизонтального свайпу
      setDragOffset(diffX);
    }
  };

  const handleTouchEnd = () => {
    if (isSwipeHorizontal.current) {
      const swipeThreshold = 50;
      if (dragOffset < -swipeThreshold) handleNext();
      else if (dragOffset > swipeThreshold) handlePrev();
    }

    setIsDragging(false);
    isSwipeHorizontal.current = null;
    setDragOffset(0);
  };

  const offset = current * (100 / slidesPerView);

  // слухач із passive:false
  useEffect(() => {
    const slider = document.getElementById('mobile-slider-track');
    if (!slider) return;

    slider.addEventListener('touchmove', handleTouchMove, { passive: false });
    return () => slider.removeEventListener('touchmove', handleTouchMove);
  }, [isDragging]);

  return (
    <section className="bg-[#69140E]/5 dark:bg-gray-900 transition-colors py-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="avoid-emoji text-3xl md:text-4xl font-bold text-center text-[#69140E] dark:text-[#FFFFFF] mb-2">
          Німецька мова для ваших цілей
        </h2>
        <p className="avoid-emoji text-lg text-[#69140E]/80 dark:text-[#FFFFFF]/80 text-center mb-12">
          Оберіть напрямок, який вас цікавить, і почніть свій шлях до успіху.
        </p>

        {/* Desktop */}
        <div className="avoid-emoji hidden md:flex items-center justify-center gap-4">
          <button
            className="bg-[#FFFFFF] dark:bg-gray-800 text-[#69140E] dark:text-[#FFFFFF] hover:text-[#E85F5C] transition p-3 rounded-full shadow-md"
            onClick={handlePrev}
          >
            <FaChevronLeft size={20} />
          </button>
          <div className="overflow-hidden flex-1">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${offset}%)` }}
            >
              {slides.map((slide, index) => {
                const colors = colorVariants[slide.color] || colorVariants.gold;
                return <Slide key={index} slide={slide} colors={colors} />;
              })}
            </div>
          </div>
          <button
            className="bg-[#FFFFFF] dark:bg-gray-800 text-[#69140E] dark:text-[#FFFFFF] hover:text-[#E85F5C] transition p-3 rounded-full shadow-md"
            onClick={handleNext}
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        {/* Mobile */}
        <div className="avoid-emoji md:hidden">
          <div className="overflow-hidden touch-pan-y">
            <div
              id="mobile-slider-track"
              className="flex will-change-transform"
              style={{
                transform: `translateX(calc(-${offset}% + ${dragOffset}px))`,
                transition: isDragging
                  ? 'none'
                  : 'transform 0.45s cubic-bezier(0.22, 0.61, 0.36, 1)',
              }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {slides.map((slide, index) => {
                const colors = colorVariants[slide.color] || colorVariants.gold;
                return <Slide key={index} slide={slide} colors={colors} />;
              })}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                current === idx
                  ? 'bg-[#FFD700]'
                  : 'bg-[#69140E]/20 dark:bg-[#FFFFFF]/20 hover:bg-[#69140E]/40 dark:hover:bg-[#FFFFFF]/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalSlider;
