export const tiers = [
  {
    name: 'Basic',
    id: 'tier-basic',
    href: '/application?tier=basic',
    priceMonthly: '$67',
    description:
      'The ideal plan for those just starting their German learning journey.',
    features: [
      '10 lessons per month',
      'Access to basic materials',
      'Community support',
    ],
    featured: false,
  },
  {
    name: 'Standard',
    id: 'tier-standard',
    href: '/application?tier=standard',
    priceMonthly: '$111',
    description: 'The best choice for steady progress and deep knowledge.',
    features: [
      '20 lessons per month',
      'Access to all materials',
      'Individual consultations',
      'Access to exclusive webinars',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    id: 'tier-premium',
    href: '/application?tier=premium',
    priceMonthly: 'Negotiable',
    description:
      'Maximum support and an individual approach for rapid progress.',
    features: [
      'Unlimited lessons',
      'Personal mentor',
      'Individual program',
      'Priority 24/7 support',
      'Exam preparation',
    ],
    featured: false,
  },
];
