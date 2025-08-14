// * The main layout component for the application.
// * It provides a consistent structure and includes shared components like the header, footer, and animations.
// * This version now manages the site-wide dark mode state based on system preference.

import React, { useRef, useEffect } from 'react';
// * 'Outlet' renders the child route's component.
// * 'useLocation' provides access to the current URL path.
import { Outlet, useLocation } from 'react-router-dom';

// * Imports all shared layout and animation components.
import Header from '../LayoutComponents/Header';
import Footer from '../LayoutComponents/Footer';
import ProgresBar from '../Animations/ProgressBar';
import CallBackWidget from '../LayoutComponents/CallBackWidget';
import ScrollToTop from '../Animations/ScrollToTop';
import SupportSection from '../LayoutComponents/SupportSection';
import { EmojiFall } from '../Animations/EmojiFall';

export default function Layout() {
  // * A ref to target the main content area for the emoji animation.
  const mainContentRef = useRef(null);
  // * Hook to get the current location, which is passed to animations.
  const location = useLocation();

  // ! useEffect to detect system preference and apply the 'dark' class.
  // ? This effect runs only once on component mount.
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const htmlElement = document.documentElement;

    const setTheme = (e) => {
      if (e.matches) {
        htmlElement.classList.add('dark');
      } else {
        htmlElement.classList.remove('dark');
      }
    };
    
    // * Встановлюємо тему при першому завантаженні
    setTheme(prefersDark);

    // * Додаємо слухача для відслідковування змін у налаштуваннях системи
    prefersDark.addEventListener('change', setTheme);

    // * Очищаємо слухача, коли компонент розмонтовується
    return () => {
      prefersDark.removeEventListener('change', setTheme);
    };
  }, []);

  return (
    // * The main layout container. The 'dark' class is applied to the html element.
    <div className="layout" style={{ position: 'relative' }}>
      {/* ! The EmojiFall component is rendered here. 
          It uses 'stopRef' to define a safe landing zone and 'pathname' for caching. */}
      <EmojiFall stopRef={mainContentRef} pathname={location.pathname} />
      
      {/* * ScrollToTop ensures the user starts at the top of a new page. */}
      <ScrollToTop />
      {/* * A progress bar that tracks scroll position. */}
      <ProgresBar />
      {/* ! The Header component no longer receives theme-related props. */}
      <Header />
      {/* ! The 'main' tag is the container for all page-specific content. 
          'Outlet' dynamically renders the child route's component here. */}
      <main ref={mainContentRef}>
        <Outlet />
      </main>
      {/* * All other shared layout components. */}
      <CallBackWidget />
      <SupportSection />
      <Footer />
    </div>
  );
}