import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CTAImage from "../../assets/CTAImage.jpg";

const CTA = () => {
  return (
    <section className="w-full h-screen bg-[#69140E]/5 dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Header */}
      <div className="absolute top-12 w-full text-center px-4 z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: "'Viaoda Libre', cursive" }}
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

      {/* Image with overlay card */}
      <motion.div
        className="w-full h-full flex justify-center items-center pt-24"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-[78%] h-[60%]">
          <img
            src={CTAImage}
            alt="Community illustration"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* Overlay Card bottom-right */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute bottom-6 right-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg max-w-xs"
          >
            <p className="text-sm font-light text-gray-600 dark:text-white mb-4">
              Отримай доступ до унікальних можливостей та стань частиною чогось більшого вже сьогодні.
            </p>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to="/application"
                className="
                  inline-flex items-center justify-center px-8 py-3 rounded-lg text-sm font-semibold
                  text-gray-800 dark:text-gray-900 bg-[#FFB400] shadow-md
                  transition-all duration-300 cursor-pointer
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
