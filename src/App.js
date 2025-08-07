import Footer from "./components/Footer";
import Header from "./components/Header";
import CTA from "./components/CTA";
import GoalSlider from "./components/GoalSlider";
import AboutSection from "./components/AboutSection";
import StatisticsSection from "./components/StatisticsSection";
import ProgressBar from "./components/ProgressBar";
import LearningOptions from "./components/LearningOptions";


function App() {
  return (
    <div className="App">
    <ProgressBar />
    <Header />
    <CTA></CTA>
    <GoalSlider/>
    <AboutSection />
    <StatisticsSection />
    <LearningOptions />
    <Footer />
    </div>
  );
}

export default App;
