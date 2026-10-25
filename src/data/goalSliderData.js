// src/data/goalSliderData.js

import { FaHome, FaBriefcase, FaBook, FaGraduationCap } from 'react-icons/fa';

export const slides = [
  {
    icon: <FaHome size={32} />,
    title: 'Conversational German for life and everyday situations',
    points: [
      'Listening comprehension and correct pronunciation',
      'Communicating on public transport, in shops, cafes and hospitals',
      'Expressing your own thoughts freely',
    ],
    color: 'coral', // ! ЗМІНА ТУТ
  },
  {
    icon: <FaBriefcase size={32} />,
    title: "German for work and career growth",
    points: [
      'Preparation for professional development',
      'Business vocabulary and negotiations',
      'Confidence in the workplace',
    ],
    color: 'amber', // ! ЗМІНА ТУТ
  },
  {
    icon: <FaGraduationCap size={32} />,
    title: 'Preparation for international exams',
    points: [
      'Individual plan for Goethe-Zertifikat, Telc',
      'Getting familiar with task formats and criteria',
      'Mock tests to assess your level',
    ],
    color: 'gold', // ! ЗМІНА ТУТ
  },
  {
    icon: <FaBook size={32} />,
    title: 'In-depth study of grammar and vocabulary',
    points: [
      'Structuring complex grammar topics',
      'Expanding your vocabulary',
      'Practical tasks to reinforce your knowledge',
    ],
    color: 'coral', // ! ЗМІНА ТУТ
  },
];

export const colorVariants = {
  gold: {
    border: 'border-[#FFD700]',
    bg: 'bg-[#FFD700]/10',
    text: 'text-[#FFD700]',
    hex: '#FFD700',
  },
  coral: {
    border: 'border-[#E85F5C]',
    bg: 'bg-[#E85F5C]/10',
    text: 'text-[#E85F5C]',
    hex: '#E85F5C',
  },
  amber: {
    border: 'border-[#F6AA1C]',
    bg: 'bg-[#F6AA1C]/10',
    text: 'text-[#F6AA1C]',
    hex: '#F6AA1C',
  },
};
