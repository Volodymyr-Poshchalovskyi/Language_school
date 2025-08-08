import React, { useState, useRef } from 'react';

// Компонент для одного питання FAQ з анімацією
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
        <h3 className="text-2xl font-bold text-gray-800">
          {question}
        </h3>
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
        <p className="text-lg text-gray-600 mt-4 pb-1">
          {answer}
        </p>
      </div>
    </div>
  );
};

// Головний компонент залишається без змін
const FAQComponent = () => {
  const faqData = [
    {
      question: "Як я можу зв'язатися з підтримкою?",
      answer: "Ви можете зв'язатися з нами через форму на сторінці контактів або написавши на електронну пошту support@example.com."
    },
    {
      question: "Чи можна змінити моє замовлення після оплати?",
      answer: "На жаль, після оплати замовлення змінити його вже неможливо. Будь ласка, перевіряйте всі деталі перед підтвердженням."
    },
    {
      question: "Які способи оплати ви приймаєте?",
      answer: "Ми приймаємо оплату за допомогою банківських карт Visa/Mastercard, PayPal та Apple Pay."
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
          Часті запитання (FAQ)
        </h2>
        
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQComponent;