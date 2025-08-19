// src/components/LayoutComponents/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.jpeg';

const Footer = () => {
  return (
    <footer className="bg-[#FFFFFF] dark:bg-gray-900 px-6 pt-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] avoid-emoji transition-colors duration-300 border-t border-[#69140E]/10 dark:border-[#FFFFFF]/10">
      <div className="w-full max-w-screen-xl mx-auto md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="flex items-center justify-center sm:justify-start mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src={Logo}
              className="h-12 w-12 rounded-full object-cover"
              alt="Besondres Deutch Logo"
              width="48"
              height="48"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#69140E] dark:text-[#FFFFFF]">
              Besondres Deutch
            </span>
          </Link>

          {/* ! ВИПРАВЛЕННЯ: Змінено класи для коректного відображення на мобільних */}
          <ul className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-start gap-y-4 gap-x-4 mb-6 text-sm font-medium text-[#69140E]/70 dark:text-[#FFFFFF]/70 sm:mb-0">
            <li>
              <Link
                to="/"
                className="hover:text-[#E85F5C] hover:underline transition-colors"
              >
                Головна
              </Link>
            </li>
            <li>
              <Link
                to="/single-form"
                className="hover:text-[#E85F5C] hover:underline transition-colors"
              >
                Персональні заняття
              </Link>
            </li>
            <li>
              <Link
                to="/dual-form"
                className="hover:text-[#E85F5C] hover:underline transition-colors"
              >
                Групові заняття
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-[#E85F5C] hover:underline transition-colors"
              >
                Про нас
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-[#E85F5C] hover:underline transition-colors"
              >
                Політика конфіденційності
              </Link>
            </li>
            <li className="w-full sm:w-auto mt-4 sm:mt-0">
              <Link
                to="/application"
                className="inline-flex w-full justify-center sm:w-auto items-center gap-x-1 rounded-md bg-[#FFD700] px-4 py-2 text-sm font-semibold text-[#69140E] shadow-sm hover:bg-[#F6AA1C] transition"
              >
                Подати Заявку
              </Link>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-[#69140E]/10 sm:mx-auto dark:border-[#FFFFFF]/10 lg:my-8" />

        <div className="text-center">
          <span className="block text-sm text-[#69140E]/70 dark:text-[#FFFFFF]/70">
            © 2025{' '}
            <Link
              to="/"
              className="hover:text-[#E85F5C] hover:underline transition-colors"
            >
              Besondres Deutch™
            </Link>
            . All Rights Reserved.
          </span>
          <span className="block mt-4 text-sm text-[#69140E]/70 dark:text-[#FFFFFF]/70">
            Developed by:{' '}
            <a
              href="https://github.com/Volodymyr-Poshchalovskyi"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#E85F5C] transition-colors"
            >
              Volodymyr Poshchalivskyi
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
