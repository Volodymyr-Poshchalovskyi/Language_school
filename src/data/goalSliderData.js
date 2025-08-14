import {
  FaHome,
  FaBriefcase,
  FaBook,
  FaGraduationCap,
} from 'react-icons/fa';


export const slides = [
  {
    icon: <FaHome size={32} />,
    title: 'Розмовна німецька для життя та побутових ситуацій',
    points: [
      'Сприйняття мови на слух, правильна вимова',
      'Спілкування в транспорті, магазинах, кафе, лікарні',
      'Вільне висловлювання власних думок',
    ],
    color: 'blue',
  },
  {
    icon: <FaBriefcase size={32} />,
    title: "Німецька для роботи та кар'єрного зростання",
    points: [
      'Підготовка до професійного розвитку',
      'Ділова лексика та ведення переговорів',
      'Впевненість у робочому середовищі',
    ],
    color: 'purple',
  },
  {
    icon: <FaGraduationCap size={32} />,
    title: 'Підготовка до міжнародних іспитів',
    points: [
      'Індивідуальний план для Goethe-Zertifikat, Telc',
      'Знайомство з форматом завдань та критеріями',
      'Пробні тестування для оцінки рівня',
    ],
    color: 'green',
  },
  {
    icon: <FaBook size={32} />,
    title: 'Поглиблене вивчення граматики та лексики',
    points: [
      'Систематизація складних граматичних тем',
      'Розширення словникового запасу',
      'Практичні завдання для закріплення знань',
    ],
    color: 'orange',
  },
];


export const colorVariants = {
  blue: {
    bg: 'bg-blue-100',
    text: 'text-blue-600',
    border: 'border-blue-500',
  },
  purple: {
    bg: 'bg-purple-100',
    text: 'text-purple-600',
    border: 'border-purple-500',
  },
  green: {
    bg: 'bg-green-100',
    text: 'text-green-600',
    border: 'border-green-500',
  },
  orange: {
    bg: 'bg-orange-100',
    text: 'text-orange-600',
    border: 'border-orange-500',
  },
};
