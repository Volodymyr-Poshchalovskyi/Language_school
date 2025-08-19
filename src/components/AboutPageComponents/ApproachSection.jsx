import { useInView } from 'react-intersection-observer';
import Image4 from '../../assets/image1.png';

// * ApproachSection component shows the school's teaching approach
const ApproachSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row items-center gap-12 mb-20"
    >
      <div className="avoid-emoji md:w-1/2 text-left">
        {/* ! Нова тема: Оновлені кольори тексту */}
        <h2 className="text-4xl font-bold text-[#69140E] dark:text-[#FFFFFF] mb-4">
          Наш підхід
        </h2>
        <p className="text-lg text-[#69140E]/80 dark:text-[#FFFFFF]/80 mb-6">
          Ми створюємо унікальні програми навчання, які поєднують теорію з
          практикою, використовуючи сучасні технології. Наші студенти не просто
          отримують знання, а вчаться застосовувати їх у реальному житті.
        </p>
        {/* ! Нова тема: Оновлена кнопка */}
        <a
          href="#"
          className="inline-block bg-[#FFD700] text-[#69140E] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#F6AA1C] transition shadow-md"
        >
          Переглянути програми
        </a>
      </div>
      <div className="avoid-emoji md:w-1/2 md:order-1">
        <img
          src={Image4}
          alt="Студенти працюють"
          className={`w-full h-auto rounded-3xl shadow-lg transform rotate-2 transition duration-700 hover:scale-105 hover:rotate-0 dark:brightness-90 ${
            inView ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}
        />
      </div>
    </div>
  );
};

export default ApproachSection;