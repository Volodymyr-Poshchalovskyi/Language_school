//* A container component for the Frequently Asked Questions section.
//* It dynamically generates a list of questions and answers from a data source.

import React from 'react';
// ! Imports the FAQ data from a centralized data file.
import { faqData } from '../../../data/faqData';
// * Imports the reusable component for a single FAQ item.
import FAQItem from './FAQItem';

const FAQComponent = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 transition-colors py-16 px-4">
      <div className="max-w-7xl mx-auto text-center dark:text-gray-100">
        {/* * The main heading for the FAQ section. */}
        <h2 className="avoid-emoji text-4xl font-extrabold text-gray-900 dark:text-white mb-12">
          Часті запитання (FAQ)
        </h2>

        {/* ! Dynamically maps over the `faqData` array to render each FAQ item. */}
        <div className="avoid-emoji space-y-6 max-w-4xl mx-auto text-left dark:text-gray-300">
          {faqData.map((item, index) => (
            <FAQItem
              key={index} // ? Using the index as a key is acceptable here since the list is static.
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
