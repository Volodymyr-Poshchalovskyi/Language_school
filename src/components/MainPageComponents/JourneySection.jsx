import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendarAlt, FaChalkboardTeacher, FaClipboardList, FaGraduationCap, FaTrophy } from 'react-icons/fa';

const steps = [
  {
    icon: <FaCalendarAlt size={28} />,
    title: '1. Заявка та консультація',
    desc: 'Заповнюєте коротку форму на сайті. Ми зв’язуємося з вами, щоб обговорити ваші цілі (робота, переїзд, іспити) та зручний розклад.',
    badge: 'Початок',
    color: 'from-[#FFD700] to-[#F6AA1C]',
  },
  {
    icon: <FaClipboardList size={28} />,
    title: '2. Визначення рівня',
    desc: 'Проходимо швидке тестування на ваші поточні знання граматики та розмовних навичок. Це дозволяє підібрати ідеальну програму.',
    badge: 'Аналіз',
    color: 'from-[#E85F5C] to-[#C13835]',
  },
  {
    icon: <FaChalkboardTeacher size={28} />,
    title: '3. Індивідуальний підхід',
    desc: 'Ви отримуєте персоналізований навчальний план, розроблений під ваші часові рамки та професійний напрямок.',
    badge: 'План',
    color: 'from-[#F6AA1C] to-[#E85F5C]',
  },
  {
    icon: <FaGraduationCap size={28} />,
    title: '4. Інтерактивні заняття',
    desc: 'Навчання проходить на зручній онлайн-платформі з використанням інтерактивних дошок, відеоматеріалів та розмовних клубів.',
    badge: 'Навчання',
    color: 'from-[#FFD700] to-[#E85F5C]',
  },
  {
    icon: <FaTrophy size={28} />,
    title: '5. Досягнення цілі',
    desc: 'Складаєте внутрішній іспит, отримуєте сертифікат школи та, головне — впевненість у спілкуванні німецькою мовою!',
    badge: 'Фініш',
    color: 'from-[#F6AA1C] to-[#FFD700]',
  },
];

const JourneySection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="bg-[#69140E]/5 dark:bg-gray-900 transition-colors py-20 px-6 relative overflow-hidden font-sans">

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="avoid-emoji font-extrabold text-4xl md:text-5xl mt-6 mb-4 text-[#69140E] dark:text-white leading-tight"
            style={{ fontFamily: "'Viaoda Libre', cursive" }}
          >
            Як проходить ваше{" "}
            <span className="relative inline-block text-[#69140E] dark:text-white">
              <span className="relative z-10 bg-[#FFD700] text-[#69140E] px-4 py-1 rounded-2xl shadow-md inline-block transform rotate-1">
                навчання
              </span>
            </span>
          </motion.h2>
          <p className="text-lg text-[#69140E]/80 dark:text-[#FFFFFF]/80 mt-4">
            Всього 5 простих кроків відділяють вас від вільного володіння німецькою мовою.
          </p>
        </div>

        {/* Step Tabs Grid */}
        <div
          ref={ref}
          className="avoid-emoji grid grid-cols-1 lg:grid-cols-5 gap-4 mb-10"
        >
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <motion.button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`relative p-5 rounded-2xl border text-left transition-all duration-300 flex flex-row lg:flex-col gap-4 items-center lg:items-start group cursor-pointer ${
                  isActive
                    ? 'bg-[#FFD700] border-[#FFD700] text-[#69140E] shadow-xl'
                    : 'bg-white/80 border-gray-100 dark:bg-gray-900/80 dark:border-gray-800 text-[#69140E] dark:text-white hover:bg-[#69140E]/5 dark:hover:bg-white/5 hover:border-gray-200'
                }`}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                {/* Step badge */}
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md ${
                  isActive ? 'bg-[#69140E]/15 text-[#69140E]' : 'bg-[#69140E]/10 text-[#69140E] dark:bg-white/10 dark:text-[#FFD700]'
                }`}>
                  {step.badge}
                </span>

                {/* Icon bubble */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                  isActive ? 'bg-[#69140E]/10 text-[#69140E]' : 'bg-[#69140E]/10 text-[#69140E] dark:bg-white/5 dark:text-white group-hover:bg-[#FFD700] group-hover:text-[#69140E]'
                }`}>
                  {step.icon}
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-extrabold text-sm tracking-tight lg:mt-2">
                    {step.title}
                  </h3>
                  <span className={`text-xs block lg:hidden mt-1 ${isActive ? 'text-[#69140E]/80' : 'text-[#69140E]/70 dark:text-white/70'}`}>
                    Натисніть для деталей
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Detailed Description Panel */}
        <div className="relative bg-white/70 dark:bg-gray-900/60 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/20 dark:border-gray-800 shadow-xl overflow-hidden min-h-[16rem] flex flex-col justify-center">
          {/* Accent decoration */}
          <div className={`absolute -right-20 -bottom-20 w-44 h-44 rounded-full bg-gradient-to-tr ${steps[activeStep].color} opacity-20 filter blur-3xl`} />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${steps[activeStep].color} text-white flex items-center justify-center shadow-lg`}>
                  {steps[activeStep].icon}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <span className="text-sm font-extrabold uppercase tracking-widest text-[#E85F5C] dark:text-[#FFD700]">
                    Крок {activeStep + 1}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#69140E] dark:text-white mt-2 mb-4">
                    {steps[activeStep].title.substring(3)}
                  </h3>
                  <p className="text-lg text-[#69140E]/80 dark:text-white/80 leading-relaxed">
                    {steps[activeStep].desc}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default JourneySection;
