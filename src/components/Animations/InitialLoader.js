import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOADER_TIMEOUT = 30 * 60 * 1000;
const LAST_VISIT_KEY = 'lastVisitTimestamp';

const InitialLoader = ({ children }) => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const lastVisit = localStorage.getItem(LAST_VISIT_KEY);
    const currentTime = Date.now();

    if (!lastVisit || (currentTime - lastVisit > LOADER_TIMEOUT)) {
      setShowLoader(true);
      localStorage.setItem(LAST_VISIT_KEY, currentTime);
      
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 2000); 
      
      return () => clearTimeout(timer);
    }
  }, []);

  const loaderStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: '#FFFFFF', 
    display: 'flex',
    flexDirection: 'column', // Розміщуємо елементи вертикально
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
    overflow: 'hidden',
  };

  const spinnerStyle = {
    '--r1': '154%',
    '--r2': '68.5%',
    width: '300px',
    aspectRatio: '1',
    borderRadius: '50%',
    background:
      `radial-gradient(var(--r1) var(--r2) at top, transparent 79.5%, #69140E 80%),` +
      `radial-gradient(var(--r1) var(--r2) at bottom, #F6AA1C 79.5%, transparent 80%),` +
      `radial-gradient(var(--r1) var(--r2) at top, transparent 79.5%, #E85F5C 80%),` +
      `#FFFFFF`,
    backgroundSize: '50.5% 220%',
    backgroundPosition: '-100% 0%, 0% 0%, 100% 0%',
    backgroundRepeat: 'no-repeat',
    animation: 'wave-animation 2s infinite linear',
  };

  const textStyle = {
    marginTop: '20px', // Відступ від спінера
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#000000', // Колір тексту
  };

  const loaderVariants = {
    exit: { opacity: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          key="initial-loader"
          variants={loaderVariants}
          initial={{ opacity: 1 }}
          exit="exit"
          style={loaderStyle}
        >
          <div style={spinnerStyle}></div>
          <div style={textStyle}>Завантаження...</div>
        </motion.div>
      )}
      {children}
    </AnimatePresence>
  );
};

export default InitialLoader;