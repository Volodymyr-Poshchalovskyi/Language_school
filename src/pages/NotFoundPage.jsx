//* A dedicated page component for displaying a 404 "Not Found" error.
//* Restyled with the new brand color palette.

import { Link } from 'react-router-dom';
import Image from '../assets/image1.png';

const NotFoundPage = () => {
  return (
    // ! ЗМІНА ТУТ: Фон світлої теми змінено на ледь помітний відтінок
    <section className="bg-[#69140E]/5 dark:bg-gray-900 transition-colors pt-[7.5rem] pb-12 px-6 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-[#69140E] dark:text-[#FFFFFF] mb-4">
            <span className="inline-block bg-[#E85F5C] text-white px-3 py-1 rounded-md">
              404
            </span>{' '}
            - Сторінку не знайдено
          </h1>
          <p className="text-lg text-[#69140E]/80 dark:text-[#FFFFFF]/80 mb-6">
            На жаль, сторінка, яку ви шукаєте, не існує. Можливо, вона була
            переміщена або видалена.
          </p>
          
          <Link
            to="/"
            className="inline-block bg-[#FFD700] text-[#69140E] px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#F6AA1C] transition shadow-md"
          >
            Повернутися на головну
          </Link>
        </div>

        <div className="md:w-1/2">
          <img
            src={Image}
            alt="404 Illustration"
            className="w-full h-auto rounded-lg shadow-md dark:brightness-90 transition"
          />
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;