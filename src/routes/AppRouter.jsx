// * Defines the main routing configuration for the application using react-router-dom.

// * Core routing components from 'react-router-dom'.
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// * Imports for all page components and the shared Layout wrapper.
import Layout from '../components/Layout/Layout';
import MainPage from '../pages/MainPage';
import ApplicationPage from '../pages/ApplicationPage';
import AboutPage from '../pages/AboutPage';
import DualForm from '../pages/DualForm';
import SingleForm from '../pages/SingleForm';
import NotFoundPage from '../pages/NotFoundPage';
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage';
import PageTransition from '../components/Animations/PageTransition'; 

// Допоміжний компонент для обробки анімації
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageTransition><MainPage /></PageTransition>} />
          <Route path="application" element={<PageTransition><ApplicationPage /></PageTransition>} />
          <Route path="about" element={<PageTransition><AboutPage /></PageTransition>} />
          <Route path="dual-form" element={<PageTransition><DualForm /></PageTransition>} />
          <Route path="single-form" element={<PageTransition><SingleForm /></PageTransition>} />
          <Route path="privacy-policy" element={<PageTransition><PrivacyPolicyPage /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default function AppRouter() {
  return (
    // * Establishes the router context for all nested routes.
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}