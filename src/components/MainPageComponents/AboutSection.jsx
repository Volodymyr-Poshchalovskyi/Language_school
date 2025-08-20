import React from "react";
import { useInView } from "react-intersection-observer";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import AboutSectionImage from "../../assets/AboutSectionImage.jpg";

const AboutSection = () => {
  const [refLeft, inViewLeft] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [refRight, inViewRight] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className="bg-[#69140E]/5 dark:bg-gray-900 transition-colors py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image with tilt */}
        <div
          ref={refLeft}
          className={`md:w-1/2 transition-all duration-700 ease-out ${
            inViewLeft
              ? "translate-x-0 opacity-100"
              : "-translate-x-12 opacity-0"
          }`}
        >
          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1500}
          >
            <div className="avoid-emoji">
              <img
                src={AboutSectionImage}
                alt="Наша команда працює над проєктом"
                className="w-full h-auto rounded-2xl shadow-xl dark:brightness-90"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x400/EEE/31343C?text=Image+Not+Found";
                }}
              />
            </div>
          </Tilt>
        </div>

        {/* Right: Text content */}
        <div
          ref={refRight}
          className={`md:w-1/2 transition-all duration-700 ease-out ${
            inViewRight
              ? "translate-x-0 opacity-100"
              : "translate-x-12 opacity-0"
          }`}
        >
          <Tilt
            tiltMaxAngleX={3}
            tiltMaxAngleY={3}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1200}
          >
            <div className="avoid-emoji text-center md:text-left cursor-default p-4">
              <h2
                className="text-4xl md:text-5xl mb-6 leading-snug text-[#69140E] dark:text-white"
                style={{ fontFamily: "'Viaoda Libre', cursive" }}
              >
                Трохи про нашу{" "}
                <span className="inline-block bg-[#FFD700] text-[#69140E] px-4 py-2 rounded-md shadow-md">
                  школу
                </span>
              </h2>

              <p className="text-lg md:text-xl font-sans text-[#69140E]/80 dark:text-[#FFFFFF]/80 mb-8 leading-relaxed">
                Ми — команда ентузіастів, яка прагне зробити вивчення німецької
                мови доступним, цікавим та ефективним для кожного. Наша місія —
                надихати вас на нові звершення.
              </p>
              <Link
                to="/about"
                className="inline-block text-[#E85F5C] bg-transparent border border-[#E85F5C] px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-[#E85F5C] hover:text-white transition cursor-pointer"
              >
                Дізнатись більше
              </Link>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
