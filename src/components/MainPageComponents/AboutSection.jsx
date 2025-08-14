//* A component that displays a brief "About Us" section on the main page.
//* It features an image and a short description with a call-to-action link.

import { Link } from 'react-router-dom';
// ! Imports the main image for this section from the assets folder.
import AboutSectionImage from '../../assets/AboutSectionImage.jpg';

const AboutSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 transition-colors py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* ! Left side: The image container. */}
        <div className="avoid-emoji md:w-1/2">
          <img
            src={AboutSectionImage}
            alt="Наша команда працює над проєктом"
            className="w-full h-auto rounded-lg shadow-md dark:shadow-none dark:brightness-90"
            // ? Provides an `onError` fallback to a placeholder image if the primary image fails to load.
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                'https://placehold.co/600x400/EEE/31343C?text=Image+Not+Found';
            }}
          />
        </div>

        {/* ! Right side: Text content and CTA. */}
        <div className="avoid-emoji md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Трохи про нашу{' '}
            <span className="inline-block bg-red-600 dark:bg-red-500 text-white px-3 py-1 rounded-md">
              школу
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ми — команда ентузіастів, яка прагне зробити вивчення німецької мови
            доступним, цікавим та ефективним для кожного. Наша місія — надихати
            вас на нові звершення.
          </p>
          {/* * A navigation link that uses `react-router-dom` to go to the full about page. */}
          <Link
            to="/about"
            className="inline-block text-red-600 dark:text-red-400 bg-white dark:bg-transparent border border-red-600 dark:border-red-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-50 dark:hover:bg-red-900/5 transition"
          >
            Дізнатись більше
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
