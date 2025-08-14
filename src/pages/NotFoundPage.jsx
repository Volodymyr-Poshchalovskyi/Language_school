//* A dedicated page component for displaying a 404 "Not Found" error.

// * Imports the illustration image from the assets folder.
import Image from '../assets/image1.png';

const NotFoundPage = () => {
  return (
    // * Main section with responsive padding and centering. Supports dark mode.
    <section className="bg-white dark:bg-gray-900 transition-colors pt-[7.5rem] pb-12 px-6 min-h-screen flex items-center">
      {/* ! Uses a flexbox layout that adapts to mobile and desktop views. */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* * Left pane: Text content for the 404 message. */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* * The 404 heading with a highlighted badge. */}
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-md">
              404
            </span>{' '}
            - Сторінку не знайдено
          </h1>
          {/* * Descriptive text for the error. */}
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            На жаль, сторінка, яку ви шукаєте, не існує. Можливо, вона була
            переміщена або видалена.
          </p>
          {/* ? A call-to-action link to return to the homepage. */}
          <a
            href="/"
            className="inline-block text-blue-600 dark:text-blue-300 bg-white dark:bg-transparent border border-blue-600 dark:border-blue-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/5 transition"
          >
            Повернутися на головну
          </a>
        </div>

        {/* * Right pane: The illustrative image. */}
        <div className="md:w-1/2">
          {/* * Image element with responsive and accessible attributes. */}
          <img
            src={Image}
            alt="404 Illustration"
            className="w-full h-auto rounded-lg shadow-md dark:shadow-none dark:brightness-90 transition"
          />
        </div>
      </div>
    </section>
  );
};

// * Exports the component for use in the router as a catch-all route.
export default NotFoundPage;
