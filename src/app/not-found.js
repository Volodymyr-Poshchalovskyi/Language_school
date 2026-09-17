import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="bg-[#69140E]/5 dark:bg-gray-900 transition-colors py-16 md:py-24 px-6 min-h-[70vh] flex items-center">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="avoid-emoji md:w-1/2 text-center md:text-left">
          <h1
            className="text-4xl md:text-5xl font-extrabold text-[#69140E] dark:text-white mb-4 leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span className="inline-block bg-[#E85F5C] text-white px-3 py-1 rounded-xl shadow-md transform -rotate-2">
              404
            </span>{' '}
            Сторінку не знайдено
          </h1>
          <p className="text-lg text-[#69140E]/80 dark:text-white/80 mb-8">
            На жаль, сторінка, яку ви шукаєте, не існує. Можливо, вона була
            переміщена або видалена.
          </p>

          <Link
            href="/"
            className="inline-block bg-[#FFD700] text-[#69140E] px-8 py-3 rounded-xl text-lg font-semibold hover:bg-[#F6AA1C] hover:scale-105 active:scale-95 transition-all shadow-md"
          >
            Повернутися на головну
          </Link>
        </div>

        {/* Decorative "Wo bin ich?" card */}
        <div className="avoid-emoji md:w-1/2 flex justify-center">
          <div className="relative w-64 sm:w-72">
            <div
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-[#FFD700] transform rotate-3"
              aria-hidden="true"
            />
            <div className="relative bg-white dark:bg-gray-800 rounded-[2rem] shadow-xl p-8 text-center transform -rotate-2">
              <p
                className="text-6xl font-black text-[#69140E] dark:text-white leading-none"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Wo?
              </p>
              <p className="mt-3 text-sm font-semibold text-[#69140E]/70 dark:text-white/70">
                Wo bin ich?
              </p>
              <p className="mt-1 text-xs text-[#69140E]/60 dark:text-white/60">
                «Де я?» — саме так ми запитуємо себе зараз.
              </p>
            </div>
            <span
              className="absolute -top-4 -right-4 px-3 py-1.5 rounded-xl bg-[#E85F5C] text-white text-sm font-extrabold shadow-lg rotate-6 select-none"
              aria-hidden="true"
            >
              Hilfe!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
