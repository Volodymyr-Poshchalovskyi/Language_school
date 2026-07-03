import React from 'react';
import { motion } from 'framer-motion';

const Slide = ({ slide, index, size, colors }) => {
  const paddedIndex = String(index + 1).padStart(2, '0');
  const isLarge = size === 'large';
  const isMedium = size === 'medium';

  return (
    <div className="w-full h-full">
      <motion.div
        whileHover={{
          y: -6,
          scale: 1.01,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        className={`relative overflow-hidden flex flex-col justify-between transition-all duration-500 shadow-md hover:shadow-xl group h-full ${
          isLarge
            ? 'p-8 md:p-12 bg-gradient-to-br from-white via-white to-[#FFD700]/5 dark:from-gray-800 dark:to-gray-900 border-2 border-[#FFD700] rounded-[2.5rem] min-h-[22rem]'
            : isMedium
            ? 'p-8 md:p-10 bg-white/70 dark:bg-gray-800/50 backdrop-blur-md border border-[#69140E]/15 dark:border-white/5 rounded-[2rem] min-h-[20rem]'
            : 'p-6 md:p-8 bg-white/50 dark:bg-gray-800/30 backdrop-blur-md border border-[#69140E]/10 dark:border-white/5 rounded-[1.5rem] min-h-[18rem]'
        }`}
      >
        {/* Editorial giant background number */}
        <div className={`absolute right-6 top-6 font-black select-none pointer-events-none text-gray-200/30 dark:text-gray-700/10 font-sans tracking-tighter transition-all duration-500 group-hover:scale-110 group-hover:text-[#FFD700]/10 ${
          isLarge ? 'text-8xl md:text-9xl' : isMedium ? 'text-7xl md:text-8xl' : 'text-6xl md:text-7xl'
        }`}>
          {paddedIndex}
        </div>

        {/* Content Top */}
        <div>
          {/* Icon Bubble & Badge */}
          <div className="flex items-center justify-between mb-6">
            <div
              className={`rounded-2xl flex items-center justify-center ${colors.bg} ${colors.text} shadow-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                isLarge ? 'w-16 h-16' : 'w-12 h-12'
              }`}
            >
              {slide.icon}
            </div>
            {isLarge ? (
              <span className="text-[10px] font-extrabold uppercase tracking-widest bg-[#FFD700] text-[#69140E] px-3.5 py-1.5 rounded-full shadow-sm animate-pulse">
                Найпопулярніший напрямок
              </span>
            ) : (
              <span className={`text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full ${colors.bg} ${colors.text}`}>
                Ціль
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className={`font-extrabold text-[#69140E] dark:text-white mb-6 leading-snug tracking-tight ${
            isLarge ? 'text-2xl md:text-3xl max-w-xl' : isMedium ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
          }`}>
            {slide.title}
          </h3>
        </div>

        {/* Points list */}
        <ul className={`mt-auto ${
          isLarge ? 'grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4' : 'space-y-4'
        }`}>
          {slide.points.map((point, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08, duration: 0.3 }}
              viewport={{ once: true }}
              className="flex items-start gap-3 group/item"
            >
              <span className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${colors.bg} ${colors.text} transition-all duration-300 group-hover/item:bg-[#FFD700] group-hover/item:text-[#69140E] group-hover/item:scale-110`}>
                ✓
              </span>
              <span className={`text-[#69140E]/85 dark:text-gray-200/90 leading-relaxed transition-colors duration-300 group-hover/item:text-[#E85F5C] dark:group-hover/item:text-[#FFD700] ${
                isLarge ? 'text-base font-semibold' : 'text-sm md:text-base'
              }`}>
                {point}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Slide;
