import React from 'react';
import Link from 'next/link';
import Logo from '../../assets/Logo.jpeg';
import { FaInstagram, FaTelegram, FaTiktok, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import { socialMediaInfo } from '../../data/socialMediaData';

const Footer = () => {
  return (
    <footer className="relative bg-white dark:bg-gray-950 px-6 pt-16 pb-[calc(2rem+env(safe-area-inset-bottom))] transition-colors duration-300 border-t border-[#69140E]/10 dark:border-gray-800 overflow-hidden">
      {/* Decorative ambient glowing spot */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#FFD700]/5 dark:bg-[#FFD700]/2 rounded-full filter blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E85F5C]/5 dark:bg-[#E85F5C]/2 rounded-full filter blur-[80px] pointer-events-none" />

      <div className="w-full max-w-screen-xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: School Brand & Mission */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <img
                src={Logo.src}
                className="h-12 w-12 rounded-full object-cover border-2 border-transparent group-hover:border-[#FFD700] transition-all duration-300"
                alt="Besondres Deutch Logo"
                width="48"
                height="48"
              />
              <span className="self-center text-2xl font-extrabold tracking-wide text-[#69140E] dark:text-[#FFFFFF]" style={{ fontFamily: "'Viaoda Libre', cursive" }}>
                Besondres Deutch
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-[#69140E]/70 dark:text-white/70 max-w-sm">
              Ваша преміальна школа німецької мови. Ми допомагаємо руйнувати мовні бар'єри, готуватися до іспитів та кар'єрного зростання за допомогою сучасних інтерактивних методик.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#69140E] dark:text-white mb-6">
              Навігація
            </h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3.5 text-sm font-medium text-center md:text-left">
              <li>
                <Link href="/" className="text-[#69140E]/75 dark:text-white/70 hover:text-[#E85F5C] dark:hover:text-[#FFD700] transition-colors">
                  Головна
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#69140E]/75 dark:text-white/70 hover:text-[#E85F5C] dark:hover:text-[#FFD700] transition-colors">
                  Про нас
                </Link>
              </li>
              <li>
                <Link href="/single-form" className="text-[#69140E]/75 dark:text-white/70 hover:text-[#E85F5C] dark:hover:text-[#FFD700] transition-colors">
                  Індивідуально
                </Link>
              </li>
              <li>
                <Link href="/dual-form" className="text-[#69140E]/75 dark:text-white/70 hover:text-[#E85F5C] dark:hover:text-[#FFD700] transition-colors">
                  В парі
                </Link>
              </li>
              <li className="col-span-2">
                <Link href="/privacy-policy" className="text-[#69140E]/75 dark:text-white/70 hover:text-[#E85F5C] dark:hover:text-[#FFD700] transition-colors">
                  Політика конфіденційності
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contacts & Social Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#69140E] dark:text-white mb-6">
              Контакти та соціальні мережі
            </h3>
            <ul className="space-y-3.5 mb-6 text-sm text-[#69140E]/80 dark:text-white/80">
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <FaPhoneAlt className="text-[#E85F5C]" />
                <a href={`tel:${socialMediaInfo.contactPhone.number}`} className="hover:underline hover:text-[#E85F5C] transition-colors">
                  {socialMediaInfo.contactPhone.display}
                </a>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <FaEnvelope className="text-[#E85F5C]" />
                <a href="mailto:info@besondresdeutch.com" className="hover:underline hover:text-[#E85F5C] transition-colors">
                  info@besondresdeutch.com
                </a>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <FaClock className="text-[#E85F5C]" />
                <span>Пн-Сб: 09:00 - 20:00</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#69140E]/5 dark:bg-white/5 flex items-center justify-center text-[#69140E] dark:text-white hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white transition-all duration-300 hover:scale-110 shadow-md"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://t.me/ashveme"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="w-10 h-10 rounded-full bg-[#69140E]/5 dark:bg-white/5 flex items-center justify-center text-[#69140E] dark:text-white hover:bg-[#0088cc] hover:text-white transition-all duration-300 hover:scale-110 shadow-md"
              >
                <FaTelegram size={18} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 rounded-full bg-[#69140E]/5 dark:bg-white/5 flex items-center justify-center text-[#69140E] dark:text-white hover:bg-[#000000] hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 hover:scale-110 shadow-md"
              >
                <FaTiktok size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Separator line */}
        <hr className="my-8 border-[#69140E]/10 dark:border-gray-800" />

        {/* Bottom Bar: Copyrights & Developer Info */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left text-xs text-[#69140E]/60 dark:text-white/60">
          <span>
            © 2026{' '}
            <Link href="/" className="font-semibold hover:text-[#E85F5C] dark:hover:text-[#FFD700] transition-colors">
              Besondres Deutch™
            </Link>
            . Всі права захищено.
          </span>
          <div className="flex items-center gap-4">
            <span>
              Розробка:{' '}
              <a
                href="https://github.com/Volodymyr-Poshchalovskyi"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold hover:text-[#E85F5C] dark:hover:text-[#FFD700] transition-colors"
              >
                Volodymyr Poshchalivskyi
              </a>
            </span>
            <Link href="/application" className="bg-[#FFD700] text-[#69140E] px-4 py-1.5 rounded-full font-bold shadow-sm hover:bg-[#F6AA1C] hover:scale-105 active:scale-95 transition-all">
              Подати заявку
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
