// src/components/MainPageComponents/FAQComponent.jsx
import React from 'react';
import { faqData } from '../../../data/faqData'; // 1. Імпортуємо дані
import FAQItem from './FAQItem'; // 2. Імпортуємо компонент для одного питання

const FAQComponent = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="avoid-emoji text-4xl font-extrabold text-gray-900 mb-12">
          Часті запитання (FAQ)
        </h2>

        <div className="avoid-emoji space-y-6 max-w-4xl mx-auto">
          {/* 3. Динамічно створюємо список питань */}
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQComponent;