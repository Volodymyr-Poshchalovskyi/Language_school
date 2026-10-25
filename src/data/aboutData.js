// Content of the "About" page. Edit texts here, not in the components.

import {
  FaComments,
  FaLaptop,
  FaRoute,
  FaGraduationCap,
} from 'react-icons/fa';

export const aboutHeader = {
  eyebrow: 'Online German language school',
  titleStart: 'About our',
  titleHighlight: 'school',
  subtitle:
    'Learn more about our mission, values and approach to teaching.',
  stats: [
    { value: '450+', label: 'students' },
    { value: '5200+', label: 'lessons per month' },
    { value: 'A1–C1', label: 'levels taught' },
  ],
};

export const mission = {
  title: 'Our mission',
  text: 'We believe learning should be accessible, engaging and effective for everyone. Our goal is to create an environment where you are not afraid to speak German from the very first lesson, unlock your potential and reach your goals: a new job, a move abroad or an exam.',
  founderCaption: 'Founder and teacher of the school',
  bubbles: ['Ach so!', 'Na klar!', 'Ja, genau?'],
  button: { text: 'Book a trial lesson', href: '/application' },
};

export const approach = {
  title: 'Our approach',
  text: 'We combine live speaking practice with a clear grammar system. No boring lectures: in every lesson you speak, act out role-play dialogues and get feedback right away.',
  principles: [
    {
      Icon: FaComments,
      title: 'Speaking from the first lesson',
      text: 'You do the talking for at least half of every lesson.',
      color: 'coral',
    },
    {
      Icon: FaLaptop,
      title: 'Interactive online format',
      text: 'An interactive whiteboard, videos and game-based exercises instead of a textbook.',
      color: 'gold',
    },
    {
      Icon: FaRoute,
      title: 'Personal plan',
      text: 'A program built around your goal, pace and schedule.',
      color: 'amber',
    },
    {
      Icon: FaGraduationCap,
      title: 'Exam preparation',
      text: 'Goethe-Zertifikat and Telc: format, strategy, mock tests.',
      color: 'maroon',
    },
  ],
  buttons: [
    { text: 'Individual lessons', href: '/single-form', primary: true },
    { text: 'Pair lessons', href: '/dual-form', primary: false },
  ],
};

export const reviews = {
  title: 'What our students say',
  items: [
    {
      quote:
        'After six months of lessons I passed Goethe B1 on my first try. What I like most is that in class we really speak instead of just going through grammar.',
      name: 'Olena Petrenko',
      level: 'A2 → B1',
      goal: 'Goethe-Zertifikat preparation',
      color: 'coral',
    },
    {
      quote:
        'I study in a pair with a colleague. The flexible schedule lets me combine learning with work, and the dialogues in class helped me get through a job interview in German with confidence.',
      name: 'Maksym Ivanenko',
      level: 'B1 → B2',
      goal: 'German for work',
      color: 'gold',
    },
    {
      quote:
        'I started from zero before moving abroad. The teacher is very patient and explains things simply and with humor. After just three months I can comfortably talk in shops and at the doctor.',
      name: 'Anna Kovalchuk',
      level: '0 → A2',
      goal: 'Conversational German for everyday life',
      color: 'amber',
    },
  ],
};

export const history = {
  title: 'Our story',
  text: 'The school grew out of a small blog about German on social media. The idea was simple: to show that German can be learned easily, with fun and with real results.',
  milestones: [
    {
      title: 'The idea and first videos',
      text: 'Short videos about real-life German win their first followers.',
    },
    {
      title: 'First students',
      text: 'We launch individual online lessons and the pair learning format.',
    },
    {
      title: 'Community',
      text: 'Instagram, TikTok and Telegram bring together everyone learning German with us.',
    },
    {
      title: 'Today',
      text: '450+ students and over 5200 lessons every month. And this is just the beginning.',
    },
  ],
};

// Brand palette used across the About page.
export const aboutColors = {
  gold: { bg: 'bg-[#FFD700]/15', text: 'text-[#B8860B] dark:text-[#FFD700]', solid: 'bg-[#FFD700] text-[#69140E]' },
  coral: { bg: 'bg-[#E85F5C]/15', text: 'text-[#E85F5C]', solid: 'bg-[#E85F5C] text-white' },
  amber: { bg: 'bg-[#F6AA1C]/15', text: 'text-[#C77F0B] dark:text-[#F6AA1C]', solid: 'bg-[#F6AA1C] text-[#69140E]' },
  maroon: { bg: 'bg-[#69140E]/10 dark:bg-white/10', text: 'text-[#69140E] dark:text-white', solid: 'bg-[#69140E] text-white' },
};
