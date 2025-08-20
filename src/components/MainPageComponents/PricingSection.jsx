import { FaCheckCircle } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import { tiers } from '../../data/pricingData';

const PricingSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      id="pricing"
      className="bg-[#69140E]/5 dark:bg-gray-900 transition-colors py-20 px-6"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl mb-4 leading-snug text-[#69140E] dark:text-white"
          style={{ fontFamily: "'Viaoda Libre', cursive" }}
        >
          Обери свій ідеальний{" "}
          <span className="inline-block bg-[#FFD700] text-[#69140E] px-3 py-1 rounded-md shadow-md">
            план
          </span>
        </h2>

        <p className="avoid-emoji mt-2 text-lg text-[#69140E]/80 dark:text-white/80 mb-12">
          Знайди тариф, який ідеально підійде для твоїх цілей та темпу навчання.
        </p>

        <div
          ref={ref}
          className="avoid-emoji grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {tiers.map((tier, index) => (
            <Tilt
              key={tier.id}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              transitionSpeed={1500}
              className={`
                transition-all duration-700
                ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className={`
                  bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md flex flex-col h-full cursor-default
                  ${tier.featured ? 'border-2 border-[#FFD700]' : ''}
                  ${inView ? 'animate-float' : ''}
                `}
                style={{ animationDelay: `${index * -2}s` }}
              >
                <div className="flex-grow">
                  <h3
                    id={tier.id}
                    className={`text-2xl font-bold mb-4 ${
                      tier.featured
                        ? 'text-[#FFD700]'
                        : 'text-[#69140E] dark:text-white'
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p className="mt-4 flex items-baseline justify-center gap-x-2">
                    <span className="text-4xl font-semibold text-[#69140E] dark:text-white">
                      {tier.priceMonthly}
                    </span>
                    {tier.priceMonthly !== 'Договірна' && (
                      <span className="text-lg text-[#69140E]/70 dark:text-white/70">
                        /місяць
                      </span>
                    )}
                  </p>
                  <p className="mt-6 text-base text-[#69140E]/80 dark:text-white/80">
                    {tier.description}
                  </p>
                  <ul
                    role="list"
                    className="mt-8 space-y-3 text-sm text-[#69140E] dark:text-white"
                  >
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3 items-center">
                        <FaCheckCircle className="h-5 w-5 flex-none text-[#F6AA1C]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={tier.href}
                  aria-describedby={tier.id}
                  className={`
                    mt-8 block w-full rounded-lg px-3 py-3 text-center text-lg font-semibold transition cursor-pointer
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
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
