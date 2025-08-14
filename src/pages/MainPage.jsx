import CTA from '../components/MainPageComponents/CTA';
import GoalSlider from '../components/MainPageComponents/GoalSlider/GoalSlider';
import AboutSection from '../components/MainPageComponents/AboutSection';
import LearningOptions from '../components/MainPageComponents/LearningOptions';
import PricingSection from '../components/MainPageComponents/PricingSection';
import StatisticsSection from '../components/MainPageComponents/StatisticsSection';
import SocialMedia from '../components/MainPageComponents/SocialMedia';
import FAQComponent from '../components/MainPageComponents/FAQComponent/FAQComponent';

function MainPage() {
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

export default MainPage;
