import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.jpeg'; // 1. Використовуємо ваш логотип

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            {/* --- ЗМІНЕНО ТУТ --- */}
            <img
              src={Logo}
              className="h-12 w-12 rounded-full object-cover" // 2. Змінено розмір та форму
              alt="Besondres Deutch Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Besondres Deutch
            </span>
          </Link>
          <ul className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/" className="hover:underline">
                Головна
              </Link>
            </li>
            <li>
              <Link to="/single-form" className="hover:underline">
                Персональні заняття
              </Link>
            </li>
            <li>
              <Link to="/dual-form" className="hover:underline">
                Групові заняття
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                Про нас
              </Link>
            </li>
            
            <li className="flex-1">
              <Link
                to="/application"
                className="inline-flex items-center gap-x-1 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition justify-center md:justify-start"
              >
                Подати Заявку
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{' '}
          <Link to="/" className="hover:underline">
            Besondres Deutch™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
