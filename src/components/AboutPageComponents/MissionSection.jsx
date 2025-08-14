import { useInView } from 'react-intersection-observer';
import Image1 from '../../assets/image1.png'; 

const MissionSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row items-center gap-12 mb-20"
    >
      <div className="avoid-emoji md:w-1/2">
        <img
          src={Image1}
          alt="Фотографія школи"
          className={`w-full h-auto rounded-3xl shadow-lg transform -rotate-2 transition duration-700 hover:scale-105 hover:rotate-0 ${
            inView ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}
        />
      </div>
      <div className="avoid-emoji md:w-1/2 text-left">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Наша місія</h2>
        <p className="text-lg text-gray-600">
          Ми віримо, що навчання має бути доступним, цікавим та ефективним для
          кожного. Наша мета — створити сприятливе середовище, де студенти
          можуть розкрити свій потенціал та досягти своїх цілей, отримуючи
          якісні знання.
        </p>
      </div>
    </div>
  );
};

export default MissionSection;
