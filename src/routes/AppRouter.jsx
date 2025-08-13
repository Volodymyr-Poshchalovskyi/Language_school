import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import MainPage from '../pages/MainPage';
import ApplicationPage from '../pages/ApplicationPage';
import AboutPage from '../pages/AboutPage';
import DualForm from '../pages/DualForm';
import SingleForm from '../pages/SingleForm';
import NotFoundPage from '../pages/NotFoundPage';


export default function AppRouter() {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="application" element={<ApplicationPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="dual-form" element={<DualForm />} />
          <Route path="single-form" element={<SingleForm />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
