import React from 'react';

// * AboutHeader component displays the header section for the About page
const AboutHeader = () => {
  return (
    <div className="avoid-emoji text-center mb-16">
      {/* ! Нова тема: Оновлені кольори тексту */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-[#69140E] dark:text-[#FFFFFF] leading-tight">
        Про нашу школу
      </h1>
      <p className="mt-4 text-xl text-[#69140E]/80 dark:text-[#FFFFFF]/80">
        Дізнайтеся більше про нашу місію, цінності та підхід до навчання.
      </p>
    </div>
  );
};

export default AboutHeader;
