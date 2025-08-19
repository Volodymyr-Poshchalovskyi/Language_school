//* Defines the main routing configuration for the application using react-router-dom.

// * Core routing components from 'react-router-dom'.
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// * Imports for all page components and the shared Layout wrapper.
import Layout from '../components/Layout/Layout';
import MainPage from '../pages/MainPage';
import ApplicationPage from '../pages/ApplicationPage';
import AboutPage from '../pages/AboutPage';
import DualForm from '../pages/DualForm';
import SingleForm from '../pages/SingleForm';
import NotFoundPage from '../pages/NotFoundPage';
// ! ЗМІНА ТУТ: Імпортуємо нову сторінку
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage';

export default function AppRouter() {
  return (
    // * Establishes the router context for all nested routes.
    <Router>
      <Routes>
        {/* ! The primary route path, using <Layout> to provide a consistent UI shell for child routes. */}
        <Route path="/" element={<Layout />}>
          {/* * The default route for the root path, rendering the main content. */}
          <Route index element={<MainPage />} />
          <Route path="application" element={<ApplicationPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="dual-form" element={<DualForm />} />
          <Route path="single-form" element={<SingleForm />} />
          {/* ! ЗМІНА ТУТ: Додаємо маршрут для сторінки політики конфіденційності */}
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          {/* ? Catch-all route for handling undefined paths and displaying a 404 page. */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}