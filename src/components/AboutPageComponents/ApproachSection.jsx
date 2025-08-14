import { useInView } from 'react-intersection-observer';
import Image4 from '../../assets/image1.png'; 

const ApproachSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row items-center gap-12 mb-20"
    >
      <div className="avoid-emoji md:w-1/2 text-left">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Наш підхід</h2>
        <p className="text-lg text-gray-600 mb-6">
          Ми створюємо унікальні програми навчання, які поєднують теорію з
          практикою, використовуючи сучасні технології. Наші студенти не просто
          отримують знання, а вчаться застосовувати їх у реальному житті.
        </p>
        <a
          href="#"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Переглянути програми
        </a>
      </div>
      <div className="avoid-emoji md:w-1/2 md:order-1">
        <img
          src={Image4}
          alt="Студенти працюють"
          className={`w-full h-auto rounded-3xl shadow-lg transform rotate-2 transition duration-700 hover:scale-105 hover:rotate-0 ${
            inView ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}
        />
      </div>
    </div>
  );
};

export default ApproachSection;
