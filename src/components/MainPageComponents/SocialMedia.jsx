// src/components/SocialMedia.jsx

//* A component that displays social media links and embedded posts.
//* Restyled with the new brand color palette and a neutral dark theme.

import React, { useEffect, useState } from 'react';
import { socialMediaInfo } from '../../data/socialMediaData';

// === Internal Component: SocialCard ===
const SocialCard = ({
  name,
  url,
  image,
  alt,
  buttonText,
}) => {
  const [isDark, setIsDark] = useState(
    typeof document !== 'undefined' &&
      document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains('dark'));
    });
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const buttonClasses = `w-full inline-block rounded-lg bg-[#FFD700] px-5 py-3 text-sm font-medium text-[#69140E] transition hover:bg-[#F6AA1C] text-center`;

  return (
    // ! ЗМІНА ТУТ: Фон карток в темному режимі змінено на dark:bg-gray-800
    <div className="avoid-emoji bg-[#FFFFFF] dark:bg-gray-800 rounded-3xl shadow-lg group transition duration-300 hover:shadow-xl hover:scale-105 overflow-hidden flex flex-col min-h-[580px]">
      <div className="flex-grow p-6 flex items-center justify-center">
        <img
          src={isDark ? image.dark : image.light}
          alt={alt}
          className="w-full h-full object-contain rounded-md"
        />
      </div>
      <div className="p-6 border-t border-[#69140E]/10 dark:border-[#FFFFFF]/10">
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
const SocialMedia = () => {
  return (
    // ! ЗМІНА ТУТ: Фон темного режиму змінено на нейтральний dark:bg-gray-900
    <section className="bg-[#69140E]/5 dark:bg-gray-900 py-16 px-4 transition-colors duration-300">
      <div className="avoid-emoji max-w-7xl mx-auto text-center">
        <h2 className="avoid-emoji text-4xl font-extrabold text-[#69140E] dark:text-[#FFFFFF] mb-12">
          Ми в соціальних мережах
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {socialMediaInfo.platforms.map((social) => (
            <SocialCard key={social.name} {...social} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;