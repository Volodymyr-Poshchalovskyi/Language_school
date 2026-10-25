export const singleFormData = {
  theme: {
    sectionBg: 'bg-[#FEF2F2]',
    checkmarkColor: 'text-[#E85F5C]',
    buttonBg: 'bg-[#E85F5C]',
    buttonHoverBg: 'hover:bg-[#d1504e]',
    buttonTextColor: 'text-white',
  },
  title: 'Individual Lessons',
  subtitle:
    'Maximum teacher attention and a personalized program to reach your goal as fast as possible.',
  whatIsItTitle: 'What is an individual lesson?',
  whatIsItText:
    'It is a format where all of the teacher’s time and attention is devoted <strong>only to you</strong>. The study program is 100% adapted to your goals, pace, strengths and weaknesses.',
  forWhomTitle: 'This format is perfect for you if you:',
  forWhomList: [
    'Want to reach your goal in a short time.',
    'Feel shy speaking in a group and need a safe space to practice.',
    'Have specific goals, such as preparing for a job interview.',
  ],
  advantages: [
    {
      title: 'Full personalization',
      description: 'The teacher builds each lesson around your needs.',
      // ! ЗМІНА ТУТ: Новий стиль для картки
      cardClasses: 'bg-white dark:bg-gray-800 border-l-4 border-[#E85F5C]',
    },
    {
      title: 'Maximum practice',
      description: 'You speak for at least 50% of the lesson.',
      // ! ЗМІНА ТУТ: Новий стиль для картки
      cardClasses: 'bg-white dark:bg-gray-800 border-l-4 border-[#F6AA1C]',
    },
  ],
  buttonText: 'Book a consultation',
  buttonLink: '/application?format=single',
};
