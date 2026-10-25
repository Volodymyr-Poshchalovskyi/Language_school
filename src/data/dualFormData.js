export const dualFormData = {
  theme: {
    sectionBg: 'bg-[#FEF2F2]',
    checkmarkColor: 'text-[#FFD700]',
    buttonBg: 'bg-[#FFD700]',
    buttonHoverBg: 'hover:bg-[#F6AA1C]',
    buttonTextColor: 'text-[#69140E]',
  },
  title: 'Lessons in Pairs',
  subtitle:
    'Learn German together with a friend or partner: it is motivating, effective and good value!',
  whatIsItTitle: 'What is a pair lesson?',
  whatIsItText:
    'It is a lesson where the teacher works <strong>with two students at once</strong> at roughly the same level. This format adds an element of healthy competition and lets you practice dialogues.',
  forWhomTitle: 'This format is perfect for you if you:',
  forWhomList: [
    'Want to study together with a friend, colleague or family member.',
    'Are looking for a more affordable option than individual lessons.',
    'Learn better when you have a partner for dialogues.',
  ],
  advantages: [
    {
      title: 'Motivation and support',
      description:
        'Learning with a partner is more fun! You can support and motivate each other.',
      // ! ЗМІНА ТУТ: Новий стиль для картки
      cardClasses: 'bg-white dark:bg-gray-800 border-l-4 border-[#FFD700]',
    },
    {
      title: 'Real dialogue practice',
      description:
        'It is the ideal setting for practicing real conversations and role-plays.',
      // ! ЗМІНА ТУТ: Новий стиль для картки
      cardClasses: 'bg-white dark:bg-gray-800 border-l-4 border-[#E85F5C]',
    },
  ],
  buttonText: 'Book a pair lesson',
  buttonLink: '/application?format=dual',
};
