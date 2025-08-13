import React, { useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom'; // 1. Додаємо useLocation
import Header from './Header';
import Footer from './Footer';
import ProgresBar from './ProgressBar';
import CallBackWidget from './CallBackWidget';
import ScrollToTop from './ScrollToTop';
import SupportSection from './SupportSection';
import { EmojiFall } from './EmojiFall';

export default function Layout() {
    const mainContentRef = useRef(null);
    const location = useLocation(); // 2. Отримуємо поточну локацію (URL)

    return (
        <div className="layout" style={{ position: 'relative' }}>
            {/* 3. Додаємо prop 'key' до компонента анімації */}
            <EmojiFall key={location.pathname} stopRef={mainContentRef} />

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