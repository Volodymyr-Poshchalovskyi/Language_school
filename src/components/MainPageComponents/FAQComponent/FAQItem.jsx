//* A reusable component for a single FAQ item with a toggleable answer.
//* It uses a CSS-based height transition for a smooth expand/collapse animation.

import React, { useState, useRef } from 'react';

// ! The component accepts 'question' and 'answer' as props.
const FAQItem = ({ question, answer }) => {
  // * State hook to track whether the answer is open or closed.
  const [isOpen, setIsOpen] = useState(false);
  // ? A ref is used to get a direct reference to the content div for its height calculation.
  const contentRef = useRef(null);

  // * Toggles the 'isOpen' state on click.
  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  // * Toggle on Enter/Space for keyboard accessibility.
  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleAnswer();
    }
  };

  return (
    // * Main container with click/keyboard handlers to toggle the state.
    <div
      role="button"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onClick={toggleAnswer}
      aria-expanded={isOpen}
      className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg dark:shadow-none p-6 group cursor-pointer transition duration-300 hover:shadow-xl hover:scale-105"
    >
      <div className="flex justify-between items-center">
        {/* * The question heading. */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 text-left">
          {question}
        </h3>
        {/* ! The icon rotates based on the 'isOpen' state. */}
        <span
          className={`text-3xl text-gray-400 dark:text-gray-300 group-hover:text-gray-600 dark:group-hover:text-gray-100 transition-transform duration-300 transform ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`}
        >
          +
        </span>
      </div>

      {/* * The answer content with a dynamic height transition. */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        // ? Use px and optional chaining to avoid null ref on first render.
        style={{
          height: isOpen ? `${contentRef.current?.scrollHeight || 0}px` : 0,
        }}
      >
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 pb-1 text-left">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;
