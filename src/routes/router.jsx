import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import HomePage from '../pages/HomePage'
import ServicesPage from '../pages/ServicesPage'
import IndustriesPage from '../pages/IndustriesPage'
import PortfolioPage from '../pages/PortfolioPage'
import CaseDetailPage from '../pages/CaseDetailPage'
import CompanyPage from '../pages/CompanyPage'
import CareersPage from '../pages/CareersPage'
// import ContactPage from '../pages/ContactPage'
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage'
import NotFoundPage from '../pages/NotFoundPage'
// import UniversityPage from '../pages/UniversityPage'
// import EventsPage from '../pages/EventsPage'
import VacanciesPage from '../pages/VacanciesPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // ← Header + Outlet + Footer на всіх сторінках
    children: [
      { index: true, element: <HomePage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'industries', element: <IndustriesPage /> },
      { path: 'portfolio', element: <PortfolioPage /> },
      { path: 'portfolio/:slug', element: <CaseDetailPage /> },
      { path: 'company', element: <CompanyPage /> },
      { path: 'careers', element: <CareersPage /> },
      // { path: 'contact', element: <ContactPage /> },
      { path: 'privacy-policy', element: <PrivacyPolicyPage /> },
      { path: '*', element: <NotFoundPage /> },
      { path: '/vacancies', element: <VacanciesPage /> },
      // { path: '/university', element: <UniversityPage /> },
      // { path: '/events', element: <EventsPage /> },
    ],
  },
])