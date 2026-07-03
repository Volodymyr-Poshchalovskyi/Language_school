"use client";

import React from 'react';
import AboutHeader from '../../components/AboutPageComponents/AboutHeader';
import MissionSection from '../../components/AboutPageComponents/MissionSection';
import ApproachSection from '../../components/AboutPageComponents/ApproachSection';
import ReviewsSection from '../../components/AboutPageComponents/ReviewsSection';
import HistorySection from '../../components/AboutPageComponents/HistorySection';

export default function AboutPage() {
  return (
    <section className="bg-[#69140E]/5 dark:bg-gray-900 transition-colors py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <AboutHeader />
        <MissionSection />
        <ApproachSection />
        <ReviewsSection />
        <HistorySection />
      </div>
    </section>
  );
}
