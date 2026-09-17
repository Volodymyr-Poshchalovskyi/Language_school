import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import CTAImage from "../../assets/CTA.webp";

// Hero. Mobile: heading, wide 3:2 photo, compact card under it.
// Desktop (md+): full-screen section with the card overlaid on the photo.
const CTA = () => {
  return (
    <section className="w-full bg-[#69140E]/5 dark:bg-gray-900 relative overflow-hidden transition-colors duration-300 pt-6 pb-12 md:pt-0 md:pb-0 md:h-screen">
      {/* Header */}
      <div className="w-full text-center px-4 z-10 md:absolute md:top-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: 'var(--font-display)' }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wider leading-snug text-gray-900 dark:text-white"
        >
          <span className="block">Приєднуйся до</span>
          <span className="block mt-2">
            нашої{" "}
            <span className="bg-[#FFB400] text-gray-800 dark:text-gray-900 px-3 py-1 rounded-lg inline-block">
              спільноти
            </span>
          </span>
        </motion.h1>
      </div>

      {/* Image with card */}
      <motion.div
        className="w-full mt-8 px-4 md:mt-0 md:px-0 md:h-full flex flex-col md:flex-row justify-center items-center md:pt-24"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-full md:w-[78%] md:h-[60%]">
          <img
            src={CTAImage.src}
            alt="Community illustration"
            className="w-full aspect-[3/2] object-cover object-[40%_center] rounded-2xl shadow-lg md:aspect-auto md:h-full md:object-center md:shadow-none"
          />

          {/* Card: under the photo on mobile, overlaid bottom-right on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative -mt-8 mx-4 bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-lg flex flex-col gap-4 md:absolute md:mt-0 md:mx-0 md:bottom-6 md:right-6 md:max-w-xs md:p-6"
          >
            <p className="text-sm font-light text-gray-600 dark:text-white">
              Отримай доступ до унікальних можливостей та стань частиною чогось більшого вже сьогодні.
            </p>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full md:w-auto"
            >
              <Link
                href="/application"
                className="
                  w-full md:w-auto inline-flex items-center justify-center px-8 py-3 rounded-lg text-sm font-semibold
                  text-gray-800 dark:text-gray-900 shadow-md
                  transition-all duration-300 cursor-pointer animate-border-shimmer
                "
              >
                Подати заявку
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
