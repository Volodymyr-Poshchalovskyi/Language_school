import { useInView } from 'react-intersection-observer';
import Image5 from '../../assets/image1.png';

const HistorySection = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      aria-labelledby="history-heading"
    >
      {/* Image */}
      <div className="avoid-emoji relative flex justify-center md:h-[400px]">
        <img
          src={Image5}
          alt="Ілюстрація історії"
          loading="lazy"
          decoding="async"
          className={`
            w-full max-w-[280px] h-auto rounded-3xl shadow-lg
            transition duration-700 hover:scale-110 hover:rotate-0 dark:brightness-90
            ${inView ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}

            md:w-2/3 md:absolute md:top-1/2 md:left-1/2
            md:-translate-x-1/2 md:-translate-y-1/2 md:transform md:-rotate-3
          `}
        />
      </div>

      {/* Text */}
      <div className="avoid-emoji text-left">
        <h2
          id="history-heading"
          className="text-4xl font-bold text-[#69140E] dark:text-[#FFFFFF] mb-4"
        >
          Історія школи
        </h2>
        <p className="text-lg text-[#69140E]/80 dark:text-[#FFFFFF]/80">
          Наша школа була заснована у 2010 році з простою ідеєю: зробити освіту
          якісною та доступною. З того часу ми виросли, розширили нашу команду
          та допомогли тисячам студентів досягти успіху.
        </p>
      </div>
    </div>
  );
};

export default HistorySection;
