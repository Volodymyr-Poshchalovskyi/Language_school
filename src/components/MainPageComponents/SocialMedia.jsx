// src/components/SocialMedia.jsx

//* A component that displays social media links and embedded posts.
//* It's structured to be highly modular, with data driving the content of each social card.

import React, { useEffect, useState } from 'react';
// ! Imports data from a centralized file.
import { socialMediaInfo } from '../../data/socialMediaData';

// === Internal Component: SocialCard ===
// * A reusable component for a single social media card.
// * It now renders a static image that changes based on the color theme.
const SocialCard = ({
  name,
  url,
  image, // This is now an object: { light, dark }
  alt,
  buttonText,
  buttonColor,
  buttonHoverColor,
}) => {
  // ? Track current theme state so the correct image can be displayed.
  const [isDark, setIsDark] = useState(
    typeof document !== 'undefined' &&
      document.documentElement.classList.contains('dark')
  );

  // ! Observe html class changes to update theme state dynamically.
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains('dark'));
    });
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // * Provide a safe dark fallback for buttons while preserving custom colors.
  const buttonClasses = `w-full inline-block rounded-lg ${buttonColor} px-5 py-3 text-sm font-medium text-white transition ${buttonHoverColor} text-center dark:shadow-none dark:text-white`;

  return (
    <div className="avoid-emoji bg-white dark:bg-gray-800 rounded-3xl shadow-lg dark:shadow-none group transition duration-300 hover:shadow-xl hover:scale-105 overflow-hidden flex flex-col min-h-[580px]">
      <div className="flex-grow p-6 flex items-center justify-center">
        {/*
         * Instead of complex rendering logic, we now always display an image.
         * The image source is chosen based on the isDark state.
         */}
        <img
          src={isDark ? image.dark : image.light}
          alt={alt}
          // ! Changed object-cover to object-contain to ensure the whole image is visible.
          className="w-full h-full object-contain rounded-md"
        />
      </div>
      <div className="p-6 border-t border-gray-100 dark:border-gray-700 bg-white/0 dark:bg-transparent">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

// === Main Component: SocialMedia ===
// * A container that maps over social media data to render `SocialCard` components.
const SocialMedia = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="avoid-emoji text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-12">
          Ми в соціальних мережах
        </h2>
        {/* ! Changed items-start to items-stretch to make all cards in a row equal height. */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* ! Dynamically renders each social card using the `socialMediaInfo` data. */}
          {socialMediaInfo.platforms.map((social) => (
            // * Spreads the properties of each social object as props to the SocialCard.
            <SocialCard key={social.name} {...social} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;