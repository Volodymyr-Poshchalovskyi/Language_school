import React, { useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ProgresBar from './ProgressBar';
import CallBackWidget from './CallBackWidget';
import ScrollToTop from './ScrollToTop';
import SupportSection from './SupportSection';
import { EmojiFall } from './EmojiFall';

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