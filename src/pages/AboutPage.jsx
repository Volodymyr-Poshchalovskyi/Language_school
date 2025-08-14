//* A page component that serves as a container for the 'About' section of the website.
//* It composes several smaller, focused components to build the complete page view.

import React from 'react';
// * Imports for all the sub-components that make up the page.
import AboutHeader from '../components/AboutPageComponents/AboutHeader';
import MissionSection from '../components/AboutPageComponents/MissionSection';
import ApproachSection from '../components/AboutPageComponents/ApproachSection';
import ReviewsSection from '../components/AboutPageComponents/ReviewsSection';
import HistorySection from '../components/AboutPageComponents/HistorySection';

const AboutPage = () => {
  // ! The component's main responsibility is to define the logical layout and order of sections.
  return (
    // * Main section with responsive padding and centering. Supports dark mode.
    <section className="bg-white dark:bg-gray-900 transition-colors py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <AboutHeader />
        <MissionSection />
        <ApproachSection />
        <ReviewsSection />
        <HistorySection />
      </div>
    </section>
  );
};

// * Exports the component for use in the main router.
export default AboutPage;
