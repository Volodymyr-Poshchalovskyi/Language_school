// src/data/goalSliderData.js

import { FaHome, FaBriefcase, FaBook, FaGraduationCap } from 'react-icons/fa';

export const slides = [
  {
    icon: <FaHome size={32} />,
    title: 'Розмовна німецька для життя та побутових ситуацій',
    points: [
      'Сприйняття мови на слух, правильна вимова',
      'Спілкування в транспорті, магазинах, кафе, лікарні',
      'Вільне висловлювання власних думок',
    ],
    color: 'coral', // ! ЗМІНА ТУТ
  },
  {
    icon: <FaBriefcase size={32} />,
    title: "Німецька для роботи та кар'єрного зростання",
    points: [
      'Підготовка до професійного розвитку',
      'Ділова лексика та ведення переговорів',
      'Впевненість у робочому середовищі',
    ],
    color: 'amber', // ! ЗМІНА ТУТ
  },
  {
    icon: <FaGraduationCap size={32} />,
    title: 'Підготовка до міжнародних іспитів',
    points: [
      'Індивідуальний план для Goethe-Zertifikat, Telc',
      'Знайомство з форматом завдань та критеріями',
      'Пробні тестування для оцінки рівня',
    ],
    color: 'gold', // ! ЗМІНА ТУТ
  },
  {
    icon: <FaBook size={32} />,
    title: 'Поглиблене вивчення граматики та лексики',
    points: [
      'Систематизація складних граматичних тем',
      'Розширення словникового запасу',
      'Практичні завдання для закріплення знань',
    ],
    color: 'coral', // ! ЗМІНА ТУТ
  },
];

// Цей об'єкт залишається без змін
export const colorVariants = {
  gold: {
    border: 'border-[#FFD700]',
    bg: 'bg-[#FFD700]/10',
    text: 'text-[#FFD700]',
  },
  coral: {
    border: 'border-[#E85F5C]',
    bg: 'bg-[#E85F5C]/10',
    text: 'text-[#E85F5C]',
  },
  amber: {
    border: 'border-[#F6AA1C]',
    bg: 'bg-[#F6AA1C]/10',
    text: 'text-[#F6AA1C]',
  },
};
