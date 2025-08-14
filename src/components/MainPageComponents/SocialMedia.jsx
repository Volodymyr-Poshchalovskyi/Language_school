//* A component that displays social media links and embedded posts.
//* It's structured to be highly modular, with data driving the content of each social card.

import React, { useEffect, useRef, useState } from 'react';
// ! Imports data from a centralized file.
import { socialMediaInfo } from '../../data/socialMediaData';

// === Internal Component: SocialCard ===
// * A reusable component for a single social media card.
// * It dynamically renders content based on the 'type' prop (image or embed).
const SocialCard = ({
  name,
  url,
  embedUrl,
  image,
  alt,
  buttonText,
  buttonColor,
  buttonHoverColor,
  type,
  embedPost,
}) => {
  // ? A ref is used to target the container for the embedded content.
  const embedContainerRef = useRef(null);
  // ? Track current theme state so embedded content can adapt.
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

  // ! useEffect hook to handle the logic for embedding external scripts.
  useEffect(() => {
    // * Checks if the card type is 'embed' and if a container ref exists.
    if (type === 'embed' && embedContainerRef.current) {
      if (name === 'Instagram') {
        // * Asynchronously loads the Instagram embed script.
        // ? A timeout is used to allow the DOM to render the blockquote first.
        setTimeout(() => {
          if (window.instgrm) {
            window.instgrm.Embeds.process();
          } else {
            const script = document.createElement('script');
            script.src = '//www.instagram.com/embed.js';
            script.async = true;
            document.body.appendChild(script);
          }
        }, 100);
      } else if (name === 'Telegram' && embedPost) {
        // * Dynamically creates and appends the Telegram embed script.
        // ! Clear existing content before appending to avoid duplication.
        embedContainerRef.current.innerHTML = '';

        const telegramScript = document.createElement('script');
        telegramScript.async = true;
        telegramScript.src = 'https://telegram.org/js/telegram-widget.js?22';
        telegramScript.setAttribute('data-telegram-post', embedPost);
        telegramScript.setAttribute('data-width', '100%');
        // * Pass theme hint to widget if available.
        telegramScript.setAttribute('data-theme', isDark ? 'dark' : 'light');
        embedContainerRef.current.appendChild(telegramScript);
      }
    }
    // * Re-run when embed-related props or theme change.
  }, [type, name, embedPost, embedUrl, isDark]); // * The effect reruns when these props change.

  // * A helper function to conditionally render content based on the `type`.
  const renderContent = () => {
    switch (type) {
      case 'embed':
        if (name === 'Instagram') {
          // * Renders the Instagram blockquote for the embed script to process.
          return (
            <div
              ref={embedContainerRef}
              className={`w-full h-full flex items-center justify-center rounded-md transition-colors ${
                isDark ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <blockquote
                className={`instagram-media ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                }`}
                data-instgrm-permalink={embedUrl}
                data-instgrm-version="14"
                style={{
                  border: 0,
                  borderRadius: '3px',
                  boxShadow:
                    '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                  margin: '1px',
                  maxWidth: '540px',
                  minWidth: '326px',
                  padding: 0,
                  width: 'calc(100% - 2px)',
                }}
              ></blockquote>
            </div>
          );
        }
        // * Container for other embeds like Telegram.
        return (
          <div
            ref={embedContainerRef}
            className={`w-full h-full flex items-center justify-center rounded-md transition-colors ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}
          />
        );
      case 'image':
        // * Renders a simple image for platforms without embeds.
        // * Apply mild adjustments in dark mode for better contrast.
        return (
          <img
            src={image}
            alt={alt}
            className={`w-full h-full object-cover transition-filter duration-300 ${
              isDark ? 'filter brightness-90' : ''
            }`}
          />
        );
      default:
        return null;
    }
  };

  // * Provide a safe dark fallback for buttons while preserving custom colors.
  const buttonClasses = `w-full inline-block rounded-lg ${buttonColor} px-5 py-3 text-sm font-medium text-white transition ${buttonHoverColor} text-center dark:shadow-none dark:text-white`;

  return (
    <div className="avoid-emoji bg-white dark:bg-gray-800 rounded-3xl shadow-lg dark:shadow-none group transition duration-300 hover:shadow-xl hover:scale-105 overflow-hidden flex flex-col min-h-[580px]">
      <div className="flex-grow p-6 flex items-center justify-center">
        {renderContent()}
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
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
