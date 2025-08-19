import { useInView } from 'react-intersection-observer';
import Image1 from '../../assets/image1.png';
import { Link } from 'react-router-dom';

// * MissionSection component displays the school's mission
const MissionSection = () => {
  // ? useInView hook for animation on scroll
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row items-center gap-12 mb-20"
    >
      <div className="avoid-emoji md:w-1/2">
        {/* * Animated school photo */}
        <img
          src={Image1}
          alt="Фотографія школи"
          loading="lazy"
          decoding="async"
          className={`w-full h-auto rounded-3xl shadow-lg transform -rotate-2 transition duration-700 hover:scale-105 hover:rotate-0 dark:brightness-90 ${
            inView ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}
        />
      </div>
      <div className="avoid-emoji md:w-1/2 text-left">
        {/* ! Нова тема: Оновлені кольори тексту */}
        <h2 className="text-4xl font-bold text-[#69140E] dark:text-[#FFFFFF] mb-4">
          Наша місія
        </h2>
        <p className="text-lg text-[#69140E]/80 dark:text-[#FFFFFF]/80 mb-6">
          Ми віримо, що навчання має бути доступним, цікавим та ефективним для
          кожного. Наша мета — створити сприятливе середовище, де студенти
          можуть розкрити свій потенціал та досягти своїх цілей, отримуючи
          якісні знання.
        </p>
        {/* ! Нова тема: Оновлена кнопка */}
        <Link
          to="/programs"
          aria-label="Переглянути програми"
          className="inline-block bg-[#FFD700] text-[#69140E] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#F6AA1C] transition shadow-md"
        >
          Переглянути програми
        </Link>
      </div>
    </div>
  );
};

export default MissionSection;
