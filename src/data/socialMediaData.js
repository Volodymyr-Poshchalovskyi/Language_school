import tiktokAccountImage from '../assets/TikTokAcc.jpg';
import { FaTelegramPlane, FaInstagram, FaTiktok } from 'react-icons/fa';

export const socialMediaInfo = {
  contactPhone: {
    number: '+380991234567',
    display: '+38 (099) 123-45-67',
  },
  platforms: [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/besonderes.deutsch/',
      Icon: FaInstagram,
      hoverColor: 'hover:text-pink-500',
      rotation: 'group-hover:-rotate-6',
      embedUrl: 'https://www.instagram.com/reel/DC4EY2HsZoT/?utm_source=ig_embed&utm_campaign=loading',
      buttonText: 'Перейти в Instagram',
      buttonColor: 'bg-pink-500',
      buttonHoverColor: 'hover:bg-pink-600',
      type: 'embed',
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@besonderes.deutsch',
      Icon: FaTiktok,
      hoverColor: 'hover:text-black',
      rotation: 'group-hover:rotate-6',
      image: tiktokAccountImage,
      alt: 'Профіль TikTok besonderes.deutsch',
      buttonText: 'Перейти в TikTok',
      buttonColor: 'bg-black',
      buttonHoverColor: 'hover:bg-gray-800',
      type: 'image',
    },
    {
      name: 'Telegram',
      url: 'https://t.me/turbo_deutsch',
      Icon: FaTelegramPlane,
      hoverColor: 'hover:text-sky-500',
      rotation: 'group-hover:rotate-6',
      embedPost: 'turbo_deutsch/36', // <-- Змінено тут
      buttonText: 'Перейти в Telegram',
      buttonColor: 'bg-sky-500',
      buttonHoverColor: 'hover:bg-sky-600',
      type: 'embed',
    },
  ],
};
