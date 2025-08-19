export const singleFormData = {
  theme: {
    sectionBg: 'bg-[#FEF2F2]',
    checkmarkColor: 'text-[#E85F5C]',
    buttonBg: 'bg-[#E85F5C]',
    buttonHoverBg: 'hover:bg-[#d1504e]',
    buttonTextColor: 'text-white',
  },
  title: 'Індивідуальні Уроки',
  subtitle: 'Максимум уваги викладача та персоналізована програма для найшвидшого досягнення мети.',
  whatIsItTitle: 'Що таке індивідуальний урок?',
  whatIsItText: 'Це формат, де весь час та увага викладача присвячені <strong>лише вам</strong>. Програма навчання на 100% адаптується під ваші цілі, темп та сильні й слабкі сторони.',
  forWhomTitle: 'Цей формат ідеально підходить вам, якщо ви:',
  forWhomList: [
    'Хочете досягти мети у стислі терміни.',
    'Соромитеся говорити в групі та потребуєте безпечного простору для практики.',
    'Маєте специфічні цілі, наприклад, підготовка до співбесіди.',
  ],
  advantages: [
    {
      title: 'Повна персоналізація',
      description: 'Викладач будує урок навколо ваших потреб.',
      // ! ЗМІНА ТУТ: Новий стиль для картки
      cardClasses: 'bg-white dark:bg-gray-800 border-l-4 border-[#E85F5C]',
    },
    {
      title: 'Максимум практики',
      description: "Ви говорите щонайменше 50% уроку.",
      // ! ЗМІНА ТУТ: Новий стиль для картки
      cardClasses: 'bg-white dark:bg-gray-800 border-l-4 border-[#F6AA1C]',
    },
  ],
  buttonText: 'Записатися на консультацію',
  buttonLink: '/application?format=single',
};