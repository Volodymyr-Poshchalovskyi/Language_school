import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Besondres Deutch
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Головна
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Персональні заняття 
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Групові заняття
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Про нас
              </a>
            </li>

            <li className="me-4 md:me-6">
              <a
                href="https://t.me/your_support_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-2 rounded-md bg-blue-100 px-3 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-200 transition"
              >
                {/* Іконка Telegram */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 240 240"
                  fill="none"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <circle cx="120" cy="120" r="120" fill="#2CA5E0" />
                  <path
                    d="M86.3 162.6c-1.5 0-1.8-0.7-1.4-1.5l7.3-21.7 40.1-38.3-55.1 34.5-23.7-7.4c-1.4-0.4-1.4-1.4 0.3-2l88.3-34.1c1.7-0.7 3.3 0.4 2.7 3l-15.9 66.6c-0.3 1.5-1.1 1.9-2.3 1.2l-24.9-18.4-12.9 12.4c-0.5 0.5-1.1 0.8-1.8 0.8z"
                    fill="white"
                  />
                </svg>
                Підтримка
              </a>
            </li>

            <li>
              <a
                href="#"
                className="inline-flex items-center gap-x-1 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition"
              >
                Подати Заявку
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{' '}
          <a href="https://flowbite.com/" className="hover:underline">
            Besondres Deutch™
          </a>
          . All Rights Reserved. 
        </span>
      </div>
    </footer>
  );
};

export default Footer;
