"use client";

import CTA from '../components/MainPageComponents/CTA';
import GoalSlider from '../components/MainPageComponents/GoalSlider/GoalSlider';
import AboutSection from '../components/MainPageComponents/AboutSection';
import LearningOptions from '../components/MainPageComponents/LearningOptions';
import JourneySection from '../components/MainPageComponents/JourneySection';
import PricingSection from '../components/MainPageComponents/PricingSection';
import StatisticsSection from '../components/MainPageComponents/StatisticsSection';
import SocialMedia from '../components/MainPageComponents/SocialMedia';
import FAQComponent from '../components/MainPageComponents/FAQComponent/FAQComponent';

export default function MainPage() {
  return (
    <div>
      <CTA />
      <GoalSlider />
      <AboutSection />
      <LearningOptions />
      <JourneySection />
      <PricingSection />
      <StatisticsSection />
      <SocialMedia />
      <FAQComponent />
    </div>
  );
}
