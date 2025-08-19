// * The main layout component for the application.
// * It provides a consistent structure and includes shared components like the header, footer, and animations.
// * This version manages site-wide dark mode and animates the background on scroll.

import React, { useRef, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
// ! ЗМІНА ТУТ: Імпорт GSAP та плагіна ScrollTrigger
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from '../LayoutComponents/Header';
import Footer from '../LayoutComponents/Footer';
import ProgresBar from '../Animations/ProgressBar';
import CallBackWidget from '../LayoutComponents/CallBackWidget';
import ScrollToTop from '../Animations/ScrollToTop';
import SupportSection from '../LayoutComponents/SupportSection';
import { EmojiFall } from '../Animations/EmojiFall';

// ! ЗМІНА ТУТ: Реєстрація плагіна ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Layout() {
  const mainContentRef = useRef(null);
  // ! ЗМІНА ТУТ: Створено ref для головного контейнера layout
  const layoutRef = useRef(null);
  const location = useLocation();

  // useEffect for system dark mode preference
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const htmlElement = document.documentElement;

    const setTheme = (e) => {
      htmlElement.classList.toggle('dark', e.matches);
    };

    setTheme(prefersDark);
    prefersDark.addEventListener('change', setTheme);

    return () => {
      prefersDark.removeEventListener('change', setTheme);
    };
  }, []);

  // ! ЗМІНА ТУТ: Новий useEffect для анімації фону при скролі
  useEffect(() => {
    const layoutElement = layoutRef.current;

    const ctx = gsap.context(() => {
      gsap.to(layoutElement, {
        // * GSAP автоматично інтерполює колір від початкового до кінцевого.
        // * Початковий колір задано через Tailwind клас `bg-[#69140E]/5`.
        backgroundColor: 'rgba(246, 170, 28, 0.05)', // * кінцевий колір F6AA1C з 5% прозорістю
        ease: 'none', // * лінійна анімація без прискорення/сповільнення
        scrollTrigger: {
          trigger: document.documentElement,
          start: 'top top', // * початок анімації, коли верх сторінки на верху в'юпорта
          end: 'bottom bottom', // * кінець, коли низ сторінки внизу в'юпорта
          scrub: 1, // * плавно "прив'язує" анімацію до скролу (з затримкою в 1с)
        },
      });
    }, layoutRef); // * Обмежуємо область дії GSAP цим компонентом

    // * Очищення при розмонтуванні
    return () => ctx.revert();
  }, []);

  return (
    // ! ЗМІНА ТУТ: Додано ref та початковий колір фону
    <div
      ref={layoutRef}
      className="layout bg-[#69140E]/5 pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)] transition-colors duration-300"
      style={{ position: 'relative' }}
    >
      <EmojiFall stopRef={mainContentRef} pathname={location.pathname} />
      <ScrollToTop />
      <ProgresBar />
      <Header />
      <main className='mt-23' ref={mainContentRef}>
        <Outlet />
      </main>
      <CallBackWidget />
      <SupportSection />
      <Footer />
    </div>
  );
}