"use client";

import React, { useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from '../components/LayoutComponents/Header';
import Footer from '../components/LayoutComponents/Footer';
import ProgresBar from '../components/Animations/ProgressBar';
import CallBackWidget from '../components/LayoutComponents/CallBackWidget';
import ScrollToTop from '../components/Animations/ScrollToTop';
import SupportSection from '../components/LayoutComponents/SupportSection';
import { EmojiFall } from '../components/Animations/EmojiFall';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function ClientLayout({ children }) {
  const mainContentRef = useRef(null);
  const layoutRef = useRef(null);
  const pathname = usePathname();

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

  // useEffect for layout background animation on scroll
  useEffect(() => {
    const layoutElement = layoutRef.current;

    const ctx = gsap.context(() => {
      gsap.to(layoutElement, {
        backgroundColor: 'rgba(246, 170, 28, 0.05)', // end color F6AA1C with 5% opacity
        ease: 'none',
        scrollTrigger: {
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      });
    }, layoutRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={layoutRef}
      className="layout bg-[#69140E]/5 pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)] transition-colors duration-300"
      style={{ position: 'relative' }}
    >
      <EmojiFall stopRef={mainContentRef} pathname={pathname} />
      <ScrollToTop />
      <ProgresBar />
      <Header />
      <main className="mt-23" ref={mainContentRef}>
        {children}
      </main>
      <CallBackWidget />
      <SupportSection />
      <Footer />
    </div>
  );
}
