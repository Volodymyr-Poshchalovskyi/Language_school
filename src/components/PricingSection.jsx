import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom'; // 1. Додано імпорт Link

const tiers = [
  {
    name: 'Базовий',
    id: 'tier-basic',
    href: '/application?tier=basic', // Змінено для передачі параметрів
    priceMonthly: '1500₴',
    description: "Ідеальний план для тих, хто тільки починає свій шлях у вивченні німецької.",
    features: ['10 уроків на місяць', 'Доступ до базових матеріалів', 'Підтримка спільноти'],
    featured: false,
  },
  {
    name: 'Стандартний',
    id: 'tier-standard',
    href: '/application?tier=standard', // Змінено для передачі параметрів
    priceMonthly: '2500₴',
    description: 'Оптимальний вибір для впевненого прогресу та глибоких знань.',
    features: ['20 уроків на місяць', 'Доступ до всіх матеріалів', 'Індивідуальні консультації', 'Доступ до закритих вебінарів'],
    featured: true,
  },
  {
    name: 'Преміум',
    id: 'tier-premium',
    href: '/application?tier=premium', // Змінено для передачі параметрів
    description: 'Максимальний рівень підтримки та індивідуальний підхід для швидкого зростання.',
    features: [
      'Необмежена кількість уроків',
      'Особистий куратор',
      'Індивідуальна програма',
      'Пріоритетна підтримка 24/7',
      'Підготовка до іспитів',
    ],
    featured: false,
  },
];

const PricingSection = () => {
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

        <div 
          ref={ref} 
          className="avoid-emoji grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {tiers.map((tier, index) => (
            <div
              key={tier.id}
              className={`
                bg-white p-8 rounded-lg shadow-md transition-all duration-700 flex flex-col
                ${tier.featured ? 'scale-105 shadow-xl border-2 border-orange-500' : ''}
                ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
              `}
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
                  <span className="text-lg text-gray-500">/місяць</span>
                </p>
                <p className="mt-6 text-base text-gray-600">
                  {tier.description}
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3 items-center">
                      <FaCheckCircle className="h-5 w-5 flex-none text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              {/* 2. Замінено <a> на <Link> */}
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
