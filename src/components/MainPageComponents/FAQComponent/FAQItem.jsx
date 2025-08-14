// src/components/FAQPageComponents/FAQItem.jsx
import React, { useState, useRef } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="bg-white rounded-3xl shadow-lg p-6 group cursor-pointer transition duration-300 hover:shadow-xl hover:scale-105"
      onClick={toggleAnswer}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 text-left">{question}</h3>
        {/* Іконка, яка обертається */}
        <span
          className={`text-3xl text-gray-400 group-hover:text-gray-600 transition-transform duration-300 transform ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`}
        >
          +
        </span>
      </div>

      {/* Відповідь з плавною анімацією розгортання */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ height: isOpen ? contentRef.current.scrollHeight : 0 }}
      >
        <p className="text-lg text-gray-600 mt-4 pb-1 text-left">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
