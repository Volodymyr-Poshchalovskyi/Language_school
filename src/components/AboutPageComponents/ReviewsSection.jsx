import { useInView } from 'react-intersection-observer';
import Avatar1 from '../../assets/image1.png'; 
import Avatar2 from '../../assets/image1.png'; 
import Avatar3 from '../../assets/image1.png'; 

const ReviewsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div ref={ref} className="text-center mb-20">
      <h2 className="avoid-emoji text-4xl font-bold text-gray-900 mb-12">
        Що кажуть про нас
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          className={`avoid-emoji bg-gray-50 p-8 rounded-2xl shadow-md transform transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-gray-600 italic mb-6">
            "Неймовірний досвід! Викладачі дуже терплячі та професійні. Я
            нарешті зрозумів складні теми, які довго не міг опанувати."
          </p>
          <div className="flex items-center justify-center">
            <img
              src={Avatar1}
              alt="Аватар студента"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-bold text-gray-900">Олена Петренко</p>
              <p className="text-sm text-gray-500">
                Студент курсу "Веб-розробка"
              </p>
            </div>
          </div>
        </div>
        <div
          className={`avoid-emoji bg-gray-50 p-8 rounded-2xl shadow-md transform transition-all duration-500 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-gray-600 italic mb-6">
            "Гнучкий графік дозволив поєднувати навчання з роботою. Дуже
            задоволений результатом і отриманими знаннями. Рекомендую!"
          </p>
          <div className="flex items-center justify-center">
            <img
              src={Avatar2}
              alt="Аватар студента"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-bold text-gray-900">Максим Іваненко</p>
              <p className="text-sm text-gray-500">
                Студент курсу "Python для аналітики"
              </p>
            </div>
          </div>
        </div>
        <div
          className={`avoid-emoji bg-gray-50 p-8 rounded-2xl shadow-md transform transition-all duration-500 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-gray-600 italic mb-6">
            "Найкраща інвестиція у власну освіту. Підтримка на кожному етапі та
            дружня атмосфера зробили процес навчання дуже приємним."
          </p>
          <div className="flex items-center justify-center">
            <img
              src={Avatar3}
              alt="Аватар студента"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-bold text-gray-900">Анна Ковальчук</p>
              <p className="text-sm text-gray-500">
                Студент курсу "UI/UX Дизайн"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
