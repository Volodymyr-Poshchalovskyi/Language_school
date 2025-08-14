// * A component for the support section, displaying contact information and social media links.
// * It dynamically pulls data from a single source for easier maintenance.
// * This version is updated to support dark mode.

import React from 'react';
// * Imports the phone icon from 'react-icons'.
import { FaPhone } from 'react-icons/fa';
// ! Imports all social media and contact data from a centralized data file.
import { socialMediaInfo } from '../../data/socialMediaData';

const Support = () => {
  return (
    // ! Added dark mode classes for the section's background.
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4">
      {/* * Component title and subtitle. */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        {/* ! Added dark mode classes for the heading text. */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight avoid-emoji">
          Ми завжди на зв'язку
        </h1>
        {/* ! Added dark mode classes for the subtitle text. */}
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 avoid-emoji">
          Ваші запитання та відгуки важливі для нас.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* ! Left side: Phone number block.
            Updated with dark mode styling for the background and text. */}
        <div className="avoid-emoji md:w-1/2 bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 group transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:rotate-1 hover:-translate-y-2">
          {/* ! Added dark mode classes for the heading text. */}
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
            Зв'яжіться з нами
          </h2>
          {/* ! Added dark mode classes for the paragraph text. */}
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Зателефонуйте нам для швидкої допомоги або консультації.
          </p>
          <a
            href={`tel:${socialMediaInfo.contactPhone.number}`}
            className="inline-flex items-center justify-center w-full md:w-auto text-blue-600 bg-blue-100 px-6 py-4 rounded-full text-xl font-bold transition duration-300 transform hover:bg-blue-200 hover:scale-105 hover:-translate-y-1"
          >
            <FaPhone className="mr-3 transition-transform duration-300 group-hover:rotate-6" />
            {socialMediaInfo.contactPhone.display}
          </a>
        </div>

        {/* ! Right side: Social media block.
            Updated with dark mode styling for the background and text. */}
        <div className="avoid-emoji md:w-1/2 bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 group transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-rotate-1 hover:-translate-y-2">
          {/* ! Added dark mode classes for the heading text. */}
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
            Наші соцмережі
          </h2>
          {/* ! Added dark mode classes for the paragraph text. */}
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Підписуйтесь, щоб бути в курсі новин та оновлень.
          </p>
          <div className="flex justify-center md:justify-start gap-8">
            {/* * Maps over the platforms array to render each social media icon. */}
            {socialMediaInfo.platforms.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                // ! Added a dark mode class for the icon color.
                className={`text-gray-400 dark:text-gray-500 ${social.hoverColor} transition duration-300 group-hover:scale-125 ${social.rotation}`}
              >
                <social.Icon className="text-5xl" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;