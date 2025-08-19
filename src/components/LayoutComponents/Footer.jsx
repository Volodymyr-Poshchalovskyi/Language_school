//* The Footer component, providing a consistent navigation and branding element at the bottom of every page.
// * This version is updated to have a distinct top border in dark mode.

import React from 'react';
// * 'Link' from 'react-router-dom' is used for client-side routing.
import { Link } from 'react-router-dom';
// ! Imports the site's logo from the assets folder.
import Logo from '../../assets/Logo.jpeg';

const Footer = () => {
  return (
    // ! Added `border-t`, padding classes to accommodate the mobile "notch" or safe area.
    <footer className="bg-white dark:bg-gray-900 px-6 pt-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] avoid-emoji transition-colors duration-300 border-t border-gray-200 dark:border-gray-700">
      <div className="w-full max-w-screen-xl mx-auto md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* * Brand logo and name, linked to the homepage. */}
          <Link
            to="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            {/* ! The logo image with specified height, width, and object fit. */}
            <img
              src={Logo}
              className="h-12 w-12 rounded-full object-cover"
              alt="Besondres Deutch Logo"
              width="48"
              height="48"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Besondres Deutch
            </span>
          </Link>
          {/* * A list of navigation links, including a special call-to-action link. */}
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
        {/* * A separator line and the copyright notice. */}
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