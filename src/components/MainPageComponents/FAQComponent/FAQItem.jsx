//* A reusable component for a single FAQ item with a toggleable answer.
//* Restyled with the new brand color palette and a neutral dark theme.

import React, { useState, useRef } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleAnswer();
    }
  };

  return (
    // ! ЗМІНА ТУТ: Фон темного режиму змінено на нейтральний dark:bg-gray-800
    <div
      role="button"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onClick={toggleAnswer}
      aria-expanded={isOpen}
      className="bg-[#FFFFFF] dark:bg-gray-800 rounded-3xl shadow-lg p-6 group cursor-pointer transition duration-300 hover:shadow-xl hover:scale-105"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl md:text-2xl font-bold text-[#69140E] dark:text-[#FFFFFF] text-left">
          {question}
        </h3>
        <span
          className={`text-3xl transition-all duration-300 transform ${
            isOpen
              ? 'rotate-45 text-[#FFD700]'
              : 'rotate-0 text-[#69140E]/40 dark:text-[#FFFFFF]/40 group-hover:text-[#E85F5C]'
          }`}
        >
          +
        </span>
      </div>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          height: isOpen ? `${contentRef.current?.scrollHeight || 0}px` : 0,
        }}
      >
        <p className="text-lg text-[#69140E]/80 dark:text-[#FFFFFF]/80 mt-4 pb-1 text-left">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;
