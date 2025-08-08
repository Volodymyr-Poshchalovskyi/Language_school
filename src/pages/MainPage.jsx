import CTA from "../components/CTA";
import GoalSlider from "../components/GoalSlider";
import AboutSection from "../components/AboutSection";
import LearningOptions from "../components/LearningOptions";    
import PricingSection from "../components/PricingSection";
import StatisticsSection from "../components/StatisticsSection";
import SocialMedia from "../components/SocialMedia";
import FAQComponent from "../components/FAQComponent";
import SupportSection from "../components/SupportSection";







function MainPage() {
    return ( <div>
    <CTA/>
    <GoalSlider/>
    <AboutSection/>
    <LearningOptions/>
    <PricingSection/>
    <StatisticsSection/>
    <SocialMedia/>
    <FAQComponent/>
    <SupportSection/>
    </div> );
}

export default MainPage;