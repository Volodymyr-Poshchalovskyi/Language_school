//* The primary page component that composes various sections for the homepage.

// * All necessary imports for the sub-components that make up the page.
import CTA from '../components/MainPageComponents/CTA';
import GoalSlider from '../components/MainPageComponents/GoalSlider/GoalSlider';
import AboutSection from '../components/MainPageComponents/AboutSection';
import LearningOptions from '../components/MainPageComponents/LearningOptions';
import PricingSection from '../components/MainPageComponents/PricingSection';
import StatisticsSection from '../components/MainPageComponents/StatisticsSection';
import SocialMedia from '../components/MainPageComponents/SocialMedia';
import FAQComponent from '../components/MainPageComponents/FAQComponent/FAQComponent';

function MainPage() {
  // ! The component's main responsibility is to define the layout and order of the homepage.
  // * It serves as a container for all the specific sections.
  return (
    <div>
      <CTA />
      <GoalSlider />
      <AboutSection />
      <LearningOptions />
      <PricingSection />
      <StatisticsSection />
      <SocialMedia />
      <FAQComponent />
    </div>
  );
}

// * Exports the component for use in the main router.
export default MainPage;
