import { useInView } from 'react-intersection-observer';
import Image5 from '../../assets/image1.png'; 

const HistorySection = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      <div className="avoid-emoji relative md:h-[400px]">
        <img
          src={Image5}
          alt="Ілюстрація історії"
          className={`w-2/3 h-auto rounded-3xl shadow-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform -rotate-3 transition duration-700 hover:scale-110 hover:rotate-0 ${
            inView ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
          }`}
        />
      </div>
      <div className="avoid-emoji text-left">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Історія школи</h2>
        <p className="text-lg text-gray-600">
          Наша школа була заснована у 2010 році з простою ідеєю: зробити освіту
          якісною та доступною. З того часу ми виросли, розширили нашу команду
          та допомогли тисячам студентів досягти успіху.
        </p>
      </div>
    </div>
  );
};

export default HistorySection;
