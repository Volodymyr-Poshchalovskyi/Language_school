import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Визначаємо варіанти для анімації входу та виходу сторінки
const pageVariants = {
  initial: {
    // Початкове положення - повністю прозоре
    opacity: 0,
  },
  in: {
    // Кінцеве положення - повна прозорість
    opacity: 1,
  },
  out: {
    // Анімація виходу - стає повністю прозорою
    opacity: 0,
  },
};

// Визначаємо налаштування переходу
const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.5,
};

const PageTransition = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="in"
        exit="out"
        transition={pageTransition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;