//* A Call-to-Action (CTA) component designed for the homepage.
//* It encourages user engagement by linking to the application form.
//* This version is updated to use padding for full dark mode background coverage.

// ! Imports the `Link` component for client-side routing.
import { Link } from 'react-router-dom';
// * Imports the hero image for this section.
import CTAImage from '../../assets/CTAImage.jpg';

const CTA = () => {
  return (
    // ! The section now has a full-width background color with padding,
    // ! ensuring no white gaps in dark mode. The external margin is removed.
    <section className="bg-white dark:bg-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* * Left side: Text content and the CTA button. */}
        <div className="avoid-emoji md:w-1/2 text-center md:text-left">
          {/* ! Added dark mode classes for the heading text. */}
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Приєднуйся до нашої{' '}
            <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-md">
              спільноти
            </span>
          </h1>
          {/* ! Added dark mode classes for the paragraph text. */}
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Отримай доступ до унікальних можливостей та стань частиною чогось
            більшого вже сьогодні.
          </p>
          {/* ! Updated the Link button with dark mode classes. */}
          <Link
            to="/application"
            className="inline-block text-blue-600 bg-white border border-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition dark:text-blue-500 dark:bg-gray-700 dark:border-blue-500 dark:hover:bg-gray-600"
          >
            Подати заявку
          </Link>
        </div>

        {/* * Right side: The image container. */}
        <div className="avoid-emoji md:w-1/2">
          <img
            src={CTAImage}
            alt="CTA Illustration"
            className="w-full h-auto rounded-lg shadow-md"
            // ? Includes an `onError` handler to provide a fallback placeholder image.
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