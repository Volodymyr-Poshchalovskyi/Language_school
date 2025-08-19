//* A pricing section component that displays various subscription tiers.
//* Restyled with the new brand color palette and a neutral dark theme.

import { FaCheckCircle } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { tiers } from '../../data/pricingData';

const PricingSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      id="pricing"
      className="bg-[#69140E]/5 dark:bg-gray-900 transition-colors py-20 px-6"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="avoid-emoji text-4xl font-bold text-[#69140E] dark:text-[#FFFFFF] mb-4">
          Обери свій ідеальний план
        </h2>
        <p className="avoid-emoji mt-2 text-lg text-[#69140E]/80 dark:text-[#FFFFFF]/80 mb-12">
          Знайди тариф, який ідеально підійде для твоїх цілей та темпу навчання.
        </p>

        <div
          ref={ref}
          className="avoid-emoji grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {tiers.map((tier, index) => (
            <div
              key={tier.id}
              // ! ЗМІНА ТУТ: Фон карток в темному режимі змінено на нейтральний dark:bg-gray-800
              className={`
                bg-[#FFFFFF] dark:bg-gray-800 p-8 rounded-lg shadow-md transition-all duration-700 flex flex-col
                ${
                  tier.featured
                    ? 'scale-105 shadow-xl border-2 border-[#FFD700]'
                    : ''
                }
                ${
                  inView
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex-grow">
                <h3
                  id={tier.id}
                  className={`text-2xl font-bold mb-4 ${
                    tier.featured
                      ? 'text-[#FFD700]'
                      : 'text-[#69140E] dark:text-[#FFFFFF]'
                  }`}
                >
                  {tier.name}
                </h3>
                <p className="mt-4 flex items-baseline justify-center gap-x-2">
                  <span className="text-4xl font-semibold tracking-tight text-[#69140E] dark:text-[#FFFFFF]">
                    {tier.priceMonthly}
                  </span>
                  {tier.priceMonthly !== 'Договірна' && (
                    <span className="text-lg text-[#69140E]/70 dark:text-[#FFFFFF]/70">
                      /місяць
                    </span>
                  )}
                </p>
                <p className="mt-6 text-base text-[#69140E]/80 dark:text-[#FFFFFF]/80">
                  {tier.description}
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm text-[#69140E] dark:text-[#FFFFFF]"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3 items-center">
                      <FaCheckCircle className="h-5 w-5 flex-none text-[#F6AA1C]" />
                      <span>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to={tier.href}
                aria-describedby={tier.id}
                className={`
                  mt-8 block w-full rounded-lg px-3 py-3 text-center text-lg font-semibold transition
                  ${
                    tier.featured
                      ? 'bg-[#FFD700] text-[#69140E] hover:bg-[#F6AA1C]'
                      : 'bg-transparent text-[#E85F5C] border border-[#E85F5C] hover:bg-[#E85F5C] hover:text-white'
                  }
                `}
              >
                Почати навчання
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;