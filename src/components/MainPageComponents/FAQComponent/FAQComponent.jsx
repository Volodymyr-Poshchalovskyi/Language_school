//* A container component for the Frequently Asked Questions section.
//* Restyled with the new brand color palette and a neutral dark theme.

import React from 'react';
import { faqData } from '../../../data/faqData';
import FAQItem from './FAQItem';

const FAQComponent = () => {
  return (
    <section className="bg-[#69140E]/5 dark:bg-gray-900 transition-colors py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2
  className="avoid-emoji text-4xl font-extrabold mb-12 text-[#69140E] dark:text-white"
  style={{ fontFamily: "'Viaoda Libre', cursive" }}
>
  Часті запитання{' '}
  <span className="inline-block bg-[#FFD700] text-[#69140E] px-3 py-1 rounded-md shadow-md">
    FAQ
  </span>
</h2>



        <div className="avoid-emoji space-y-6 max-w-4xl mx-auto text-left">
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
