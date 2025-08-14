//* A responsive, touch-enabled slider component for showcasing different learning goals.
//* It dynamically adjusts the number of visible slides based on the viewport width.

import React, { useState, useRef, useEffect } from 'react';
// * Imports icons for slider navigation.
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// ! Imports data and styling configurations from external files.
import { slides, colorVariants } from '../../../data/goalSliderData';
// * Imports the single slide component.
import Slide from './Slide';

const GoalSlider = () => {
  // * State hooks for managing the current slide index and number of slides visible.
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(1);

  // ! useEffect hook to handle responsive behavior.
  useEffect(() => {
    // * Responds to window resize events to update `slidesPerView`.
    const handleResize = () => {
      const newSlidesPerView = window.innerWidth < 768 ? 1 : 2;
      setSlidesPerView(newSlidesPerView);
      setCurrent(0); // ? Resets the slider to the first slide on resize for consistency.
    };

    // * Sets initial state and adds the event listener.
    handleResize();
    window.addEventListener('resize', handleResize);
    // ! Cleanup function to prevent memory leaks.
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // * Calculates the maximum possible index for the slider to prevent out-of-bounds errors.
  const maxIndex =
    slides.length > slidesPerView ? slides.length - slidesPerView : 0;

  // * Handlers for manual slide navigation.
  const handleNext = () => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // ! Touch event handlers for mobile devices.
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    // ? Swipes trigger a slide change if the movement is significant.
    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // * Calculates the translation offset for the slider animation.
  const offset = current * (100 / slidesPerView);

  return (
    <section className="bg-slate-50 py-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        {/* * Section headings with `avoid-emoji` class. */}
        <h2 className="avoid-emoji text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">
          Німецька мова для ваших цілей
        </h2>
        <p className="avoid-emoji text-lg text-gray-600 text-center mb-12">
          Оберіть напрямок, який вас цікавить, і почніть свій шлях до успіху.
        </p>

        <div className="avoid-emoji relative">
          {/* * Slider container. `overflow-hidden` is essential for the horizontal layout. */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              // ! Applies the calculated offset to animate the slides.
              style={{ transform: `translateX(-${offset}%)` }}
              // * Attaches touch event handlers for swiping functionality.
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* * Maps over the slides data to render individual Slide components. */}
              {slides.map((slide, index) => {
                const colors = colorVariants[slide.color] || colorVariants.blue;
                return <Slide key={index} slide={slide} colors={colors} />;
              })}
            </div>
          </div>

          {/* * Navigation buttons for desktop screens. */}
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

        {/* * Slider navigation dots. */}
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
