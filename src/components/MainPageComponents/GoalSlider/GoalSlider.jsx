import React from 'react';
import { slides, colorVariants } from '../../../data/goalSliderData';
import Slide from './Slide';
import { motion } from 'framer-motion';

const GoalSlider = () => {
  return (
    <section className="bg-[#69140E]/5 dark:bg-gray-900 transition-colors py-20 px-4 md:px-8 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="avoid-emoji font-extrabold text-4xl md:text-5xl mb-4 text-[#69140E] dark:text-white leading-tight"
            style={{ fontFamily: "'Viaoda Libre', cursive" }}
          >
            Німецька мова для ваших{" "}
            <span className="relative inline-block text-[#69140E] dark:text-white">
              <span className="relative z-10 bg-[#FFD700] text-[#69140E] px-4 py-1 rounded-2xl shadow-md inline-block transform -rotate-1">
                цілей
              </span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="avoid-emoji text-lg md:text-xl text-[#69140E]/80 dark:text-[#FFFFFF]/80"
          >
            Оберіть напрямок, який відповідає вашим прагненням, і почніть ефективне навчання з першого дня.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="avoid-emoji grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          
          {/* Card 1: Conversational German (Small - Col 1) */}
          <div className="col-span-1">
            <Slide index={0} slide={slides[0]} size="small" colors={colorVariants[slides[0].color]} />
          </div>

          {/* Card 3: Exam Prep (Large - Featured - Col 2 & 3) */}
          <div className="col-span-1 md:col-span-2">
            <Slide index={2} slide={slides[2]} size="large" colors={colorVariants[slides[2].color]} />
          </div>

          {/* Card 2: Career German (Medium - Col 1 & 2) */}
          <div className="col-span-1 md:col-span-2">
            <Slide index={1} slide={slides[1]} size="medium" colors={colorVariants[slides[1].color]} />
          </div>

          {/* Card 4: Grammar & Vocabulary (Extra Small - Col 3) */}
          <div className="col-span-1">
            <Slide index={3} slide={slides[3]} size="small" colors={colorVariants[slides[3].color]} />
          </div>

        </div>

      </div>
    </section>
  );
};

export default GoalSlider;
