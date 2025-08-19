//* A Call-to-Action (CTA) component designed for the homepage.
//* Features a magnetic CTA button and default cursor on text areas.

import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import CTAImage from '../../assets/CTAImage.jpg';

const CTA = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button || window.innerWidth < 1024) return;

    const activationDistance = 150;

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = button.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;

      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance < activationDistance) {
        gsap.to(button, {
          x: deltaX * 0.5,
          y: deltaY * 0.5,
          duration: 0.6,
          ease: 'power3.out',
        });
      } else {
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: 'elastic.out(1, 0.5)',
        });
      }
    };

    const onMouseLeaveWindow = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.5)',
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    document.documentElement.addEventListener('mouseleave', onMouseLeaveWindow);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.documentElement.removeEventListener(
        'mouseleave',
        onMouseLeaveWindow
      );
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.5)',
      });
    };
  }, []);

  return (
    <section className="bg-[#69140E]/5 dark:bg-gray-900 py-12 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* ! ЗМІНА ТУТ: Додано клас `cursor-default` */}
        <div className="avoid-emoji md:w-1/2 text-center md:text-left cursor-default">
          <h1 className="text-4xl font-bold text-[#69140E] dark:text-[#FFFFFF] mb-4">
            Приєднуйся до нашої{' '}
            <span className="inline-block bg-[#FFD700] text-[#69140E] px-3 py-1 rounded-md">
              спільноти
            </span>
          </h1>
          <p className="text-lg text-[#69140E]/80 dark:text-[#FFFFFF]/80 mb-6">
            Отримай доступ до унікальних можливостей та стань частиною чогось
            більшого вже сьогодні.
          </p>

          <Link
            ref={buttonRef}
            to="/application"
            // ! ЗМІНА ТУТ: Додано `cursor-pointer` для гарантії правильного курсора на кнопці
            className="inline-flex items-center gap-x-2 bg-[#FFD700] text-[#69140E] px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#F6AA1C] transition shadow-md group cursor-pointer"
          >
            <span>Подати заявку</span>
            <span className="transition-transform duration-300 ease-in-out transform -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
              →
            </span>
          </Link>
        </div>

        <div className="avoid-emoji md:w-1/2">
          <img
            src={CTAImage}
            alt="CTA Illustration"
            className="w-full h-auto rounded-lg shadow-md dark:brightness-90"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                'https://placehold.co/600x400/EEE/31343C?text=Image+Not+Found';
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
