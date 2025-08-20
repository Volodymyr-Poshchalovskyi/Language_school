import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { socialMediaInfo } from '../../data/socialMediaData';

const SocialCard = ({ name, url, image, alt, buttonText, inView, index }) => {
  const [isDark, setIsDark] = useState(
    typeof document !== 'undefined' &&
      document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains('dark'));
    });
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const buttonClasses = `w-full inline-block rounded-lg bg-[#FFD700] px-5 py-3 text-sm font-medium text-[#69140E] transition hover:bg-[#F6AA1C] text-center`;

  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      scale={1.05}
      transitionSpeed={1500}
      className={`transition-all duration-700 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div
        className={`avoid-emoji bg-[#FFFFFF] dark:bg-gray-800 rounded-3xl shadow-lg group overflow-hidden flex flex-col min-h-[580px] h-full ${
          inView ? 'animate-float' : ''
        }`}
        style={{ animationDelay: `${index * -2}s` }}
      >
        <div className="flex-grow p-6 flex items-center justify-center">
          <img
            src={isDark ? image.dark : image.light}
            alt={alt}
            className="w-full h-full object-contain rounded-md"
          />
        </div>
        <div className="p-6 border-t border-[#69140E]/10 dark:border-[#FFFFFF]/10">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </Tilt>
  );
};

const SocialMedia = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="bg-[#69140E]/5 dark:bg-gray-900 py-16 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className="avoid-emoji text-4xl font-extrabold mb-12 text-[#69140E] dark:text-white"
          style={{ fontFamily: "'Viaoda Libre', cursive" }}
        >
          Ми в{' '}
          <span className="inline-block bg-[#FFD700] text-[#69140E] px-3 py-1 rounded-md shadow-md">
            соціальних
          </span>{' '}
          мережах
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
        >
          {socialMediaInfo.platforms.map((social, index) => (
            <SocialCard
              key={social.name}
              {...social}
              inView={inView}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
