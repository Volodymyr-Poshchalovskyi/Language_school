import React from 'react';
import { useInView } from 'react-intersection-observer';
import Avatar1 from '../../assets/image1.png';
import Avatar2 from '../../assets/image1.png';
import Avatar3 from '../../assets/image1.png';

// * ReviewsSection component displays student reviews
const ReviewsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const reviews = [
    {
      quote:
        'Неймовірний досвід! Викладачі дуже терплячі та професійні. Я нарешті зрозумів складні теми, які довго не міг опанувати.',
      avatar: Avatar1,
      name: 'Олена Петренко',
      role: 'Студент курсу "Веб-розробка"',
    },
    {
      quote:
        'Гнучкий графік дозволив поєднувати навчання з роботою. Дуже задоволений результатом і отриманими знаннями. Рекомендую!',
      avatar: Avatar2,
      name: 'Максим Іваненко',
      role: 'Студент курсу "Python для аналітики"',
    },
    {
      quote:
        'Найкраща інвестиція у власну освіту. Підтримка на кожному етапі та дружня атмосфера зробили процес навчання дуже приємним.',
      avatar: Avatar3,
      name: 'Анна Ковальчук',
      role: 'Студент курсу "UI/UX Дизайн"',
    },
  ];

  return (
    <section ref={ref} className="text-center mb-20">
      {/* ! Нова тема: Оновлений колір заголовка */}
      <h2 className="avoid-emoji text-4xl font-bold text-[#69140E] dark:text-[#FFFFFF] mb-12">
        Що кажуть про нас
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((r, index) => (
          <article
            key={index}
            // ! Нова тема: Правильний фон для карток (білий / темно-сірий)
            className={`avoid-emoji bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md transform transition-all duration-700 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 120}ms` }}
            aria-live="polite"
          >
            <p className="text-[#69140E]/80 dark:text-[#FFFFFF]/80 italic mb-6">
              "{r.quote}"
            </p>
            <div className="flex items-center justify-center">
              <img
                src={r.avatar}
                alt={`Аватар ${r.name}`}
                loading="lazy"
                decoding="async"
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <p className="font-bold text-[#69140E] dark:text-[#FFFFFF]">
                  {r.name}
                </p>
                <p className="text-sm text-[#69140E]/70 dark:text-[#FFFFFF]/70">
                  {r.role}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
