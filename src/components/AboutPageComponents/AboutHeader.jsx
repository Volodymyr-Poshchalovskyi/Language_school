import React from 'react';

// * AboutHeader component displays the header section for the About page
const AboutHeader = () => {
  return (
    <div className="avoid-emoji text-center mb-16">
      {/* ! Main title for the About page */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight">
        Про нашу школу
      </h1>
      {/* ? Subtitle describing the school's mission and values */}
      <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
        Дізнайтеся більше про нашу місію, цінності та підхід до навчання.
      </p>
    </div>
  );
};

export default AboutHeader;
