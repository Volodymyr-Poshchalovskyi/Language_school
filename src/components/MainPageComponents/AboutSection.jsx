//* A component that displays a brief "About Us" section on the main page.
//* Restyled with the new brand color palette and a neutral dark theme.

import { Link } from 'react-router-dom';
import AboutSectionImage from '../../assets/AboutSectionImage.jpg';

const AboutSection = () => {
  return (
    // ! ЗМІНА ТУТ: Фон світлої теми змінено на ледь помітний відтінок bg-[#69140E]/5
    <section className="bg-[#69140E]/5 dark:bg-gray-900 transition-colors py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        <div className="avoid-emoji md:w-1/2">
          <img
            src={AboutSectionImage}
            alt="Наша команда працює над проєктом"
            className="w-full h-auto rounded-lg shadow-md dark:brightness-90"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                'https://placehold.co/600x400/EEE/31343C?text=Image+Not+Found';
            }}
          />
        </div>

        <div className="avoid-emoji md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-[#69140E] dark:text-[#FFFFFF] mb-4">
            Трохи про нашу{' '}
            <span className="inline-block bg-[#FFD700] text-[#69140E] px-3 py-1 rounded-md">
              школу
            </span>
          </h2>
          <p className="text-lg text-[#69140E]/80 dark:text-[#FFFFFF]/80 mb-6">
            Ми — команда ентузіастів, яка прагне зробити вивчення німецької мови
            доступним, цікавим та ефективним для кожного. Наша місія — надихати
            вас на нові звершення.
          </p>
          
          <Link
            to="/about"
            className="inline-block text-[#E85F5C] bg-transparent border border-[#E85F5C] px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#E85F5C] hover:text-white transition"
          >
            Дізнатись більше
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;