import React, { useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../LayoutComponents/Header';
import Footer from '../LayoutComponents/Footer';
import ProgresBar from '../Animations/ProgressBar';
import CallBackWidget from '../LayoutComponents/CallBackWidget';
import ScrollToTop from '../Animations/ScrollToTop';
import SupportSection from '../LayoutComponents/SupportSection';
import { EmojiFall } from '../Animations/EmojiFall';

export default function Layout() {
  const mainContentRef = useRef(null);
  const location = useLocation();

  return (
    <div className="layout" style={{ position: 'relative' }}>
      {/* Передаємо pathname як звичайний пропс для внутрішньої логіки */}
      <EmojiFall stopRef={mainContentRef} pathname={location.pathname} />

      <ScrollToTop />
      <ProgresBar />
      <Header />
      <main ref={mainContentRef}>
        <Outlet />
      </main>
      <CallBackWidget />
      <SupportSection />
      <Footer />
    </div>
  );
}
