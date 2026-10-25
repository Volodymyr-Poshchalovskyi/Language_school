// src/data/socialMediaData.js

// ! Import all necessary images for both light and dark themes
import instagramAccountImage from '../assets/InstagramAcc.jpg';
import instagramAccountDarkImage from '../assets/InstagramAccDark.jpg';
import tiktokAccountImage from '../assets/TikTokAcc.jpg';
import tiktokAccountDarkImage from '../assets/TikTokAccDark.jpg';
import telegramAccountImage from '../assets/TelegramAcc.jpg';
import telegramAccountDarkImage from '../assets/TelegramAccDark.jpg';

import { FaTelegramPlane, FaInstagram, FaTiktok } from 'react-icons/fa';

export const socialMediaInfo = {
  contactPhone: {
    number: '+380681529702',
    display: '+38 (068) 152-97-02',
  },
  platforms: [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/besonderes.deutsch/',
      Icon: FaInstagram,
      hoverColor: 'hover:text-pink-500',
      rotation: 'group-hover:-rotate-6',
      // * The image is now an object with light and dark theme versions.
      // * The 'type' property is no longer needed.
      image: {
        light: instagramAccountImage,
        dark: instagramAccountDarkImage,
      },
      alt: 'Instagram profile besonderes.deutsch',
      buttonText: 'Go to Instagram',
      buttonColor: 'bg-pink-500',
      buttonHoverColor: 'hover:bg-pink-600',
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@besonderes.deutsch',
      Icon: FaTiktok,
      hoverColor: 'hover:text-black',
      rotation: 'group-hover:rotate-6',
      image: {
        light: tiktokAccountImage,
        dark: tiktokAccountDarkImage,
      },
      alt: 'TikTok profile besonderes.deutsch',
      buttonText: 'Go to TikTok',
      buttonColor: 'bg-black',
      buttonHoverColor: 'hover:bg-gray-800',
    },
    {
      name: 'Telegram',
      url: 'https://t.me/turbo_deutsch',
      Icon: FaTelegramPlane,
      hoverColor: 'hover:text-sky-500',
      rotation: 'group-hover:rotate-6',
      image: {
        light: telegramAccountImage,
        dark: telegramAccountDarkImage,
      },
      alt: 'Telegram profile turbo_deutsch',
      buttonText: 'Go to Telegram',
      buttonColor: 'bg-sky-500',
      buttonHoverColor: 'hover:bg-sky-600',
    },
  ],
};
