//* A pricing section component that displays various subscription tiers.
//* It dynamically generates cards from an external data source and includes a fade-in-on-scroll animation.

import { FaCheckCircle } from 'react-icons/fa';
// ! `useInView` detects when the component enters the viewport to trigger animations.
import { useInView } from 'react-intersection-observer';
// * `Link` for client-side routing to the application forms.
import { Link } from 'react-router-dom';
// ! Imports the pricing data from a centralized file.
import { tiers } from '../../data/pricingData';

const PricingSection = () => {
  // * Sets up a single observer for the entire pricing grid.
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="pricing" className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="avoid-emoji text-4xl font-bold text-gray-900 mb-4">
          Обери свій ідеальний план
        </h2>
        <p className="avoid-emoji mt-2 text-lg text-gray-600 mb-12">
          Знайди тариф, який ідеально підійде для твоїх цілей та темпу навчання.
        </p>

        {/* ! The ref is attached to the parent div, triggering animations for all child cards. */}
        <div
          ref={ref}
          className="avoid-emoji grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* * Dynamically maps over the `tiers` array to render each pricing card. */}
          {tiers.map((tier, index) => (
            <div
              key={tier.id}
              className={`
                bg-white p-8 rounded-lg shadow-md transition-all duration-700 flex flex-col
                ${tier.featured ? 'scale-105 shadow-xl border-2 border-orange-500' : ''}
                ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
              `}
              // ? Staggered animation: each card has a slightly longer delay.
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex-grow">
                <h3
                  id={tier.id}
                  className={`text-2xl font-bold mb-4 ${
                    tier.featured ? 'text-orange-500' : 'text-gray-900'
                  }`}
                >
                  {tier.name}
                </h3>
                <p className="mt-4 flex items-baseline justify-center gap-x-2">
                  <span className="text-4xl font-semibold tracking-tight text-gray-900">
                    {tier.priceMonthly}
                  </span>
                  {/* * Conditionally renders the monthly price label. */}
                  {tier.priceMonthly !== 'Договірна' && (
                    <span className="text-lg text-gray-500">/місяць</span>
                  )}
                </p>
                <p className="mt-6 text-base text-gray-600">
                  {tier.description}
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm text-gray-600"
                >
                  {/* * Maps over each tier's features. */}
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3 items-center">
                      <FaCheckCircle className="h-5 w-5 flex-none text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              {/* ! The CTA button links to the correct application form. */}
              <Link
                to={tier.href}
                aria-describedby={tier.id}
                className={`
                  mt-8 block w-full rounded-lg px-3 py-3 text-center text-lg font-semibold
                  ${
                    tier.featured
                      ? 'bg-orange-500 text-white hover:bg-orange-600 transition'
                      : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 transition'
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
