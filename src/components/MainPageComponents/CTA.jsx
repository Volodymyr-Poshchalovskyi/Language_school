//* A Call-to-Action (CTA) component designed for the homepage.
//* Restyled with the new brand color palette and a neutral dark theme.

import { Link } from 'react-router-dom';
import CTAImage from '../../assets/CTAImage.jpg';

const CTA = () => {
  return (
    // ! ЗМІНА ТУТ: Фон світлої теми змінено на ледь помітний відтінок bg-[#69140E]/5
    <section className="bg-[#69140E]/5 dark:bg-gray-900 py-12 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        <div className="avoid-emoji md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-[#69140E] dark:text-[#FFFFFF] mb-4">
            Приєднуйся до нашої{' '}
            <span className="inline-block bg-[#FFD700] text-[#69140E] px-3 py-1 rounded-md">
              спільноти
            </span>
          </h1>
          <p className="text-lg text-[#69140E]/80 dark:text-[#FFFFFF]/80 mb-6">
            Отримай доступ до унікальних можливостей та стань частиною чогось
            більшого вже сьогодні.
          </p>
          
          <Link
            to="/application"
            className="inline-block bg-[#FFD700] text-[#69140E] px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#F6AA1C] transition shadow-md"
          >
            Подати заявку
          </Link>
        </div>

        <div className="avoid-emoji md:w-1/2">
          <img
            src={CTAImage}
            alt="CTA Illustration"
            className="w-full h-auto rounded-lg shadow-md dark:brightness-90"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                'https://placehold.co/600x400/EEE/31343C?text=Image+Not+Found';
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;