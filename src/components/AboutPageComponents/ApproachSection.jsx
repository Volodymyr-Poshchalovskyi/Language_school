import { useInView } from 'react-intersection-observer';
import Image4 from '../../assets/image1.png';

// * ApproachSection component shows the school's teaching approach
const ApproachSection = () => {
  // ? useInView hook for triggering animation when section enters viewport
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row items-center gap-12 mb-20"
    >
      <div className="avoid-emoji md:w-1/2 text-left">
        {/* ! Section title */}
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Наш підхід
        </h2>
        {/* ? Section description */}
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Ми створюємо унікальні програми навчання, які поєднують теорію з
          практикою, використовуючи сучасні технології. Наші студенти не просто
          отримують знання, а вчаться застосовувати їх у реальному житті.
        </p>
        {/* * Link to view programs */}
        <a
          href="#"
          className="inline-block bg-blue-600 dark:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-500 transition"
        >
          Переглянути програми
        </a>
      </div>
      <div className="avoid-emoji md:w-1/2 md:order-1">
        {/* * Animated image of students working */}
        <img
          src={Image4}
          alt="Студенти працюють"
          className={`w-full h-auto rounded-3xl shadow-lg dark:shadow-none transform rotate-2 transition duration-700 hover:scale-105 hover:rotate-0 dark:brightness-90 ${
            inView ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}
        />
      </div>
    </div>
  );
};

export default ApproachSection;
