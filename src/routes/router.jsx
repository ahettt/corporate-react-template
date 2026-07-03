import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import HomePage from '../pages/HomePage'
import ServicesPage from '../pages/ServicesPage'
import IndustriesPage from '../pages/IndustriesPage'
import PortfolioPage from '../pages/PortfolioPage'
import CaseDetailPage from '../pages/CaseDetailPage'
import CompanyPage from '../pages/CompanyPage'
import CareersPage from '../pages/CareersPage'
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage'
import NotFoundPage from '../pages/NotFoundPage'
import VacanciesPage from '../pages/VacanciesPage'
import CookiesPolicyPage from '../pages/CookiesPolicyPage'
import QualityPolicyPage from '../pages/QualityPolicyPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'industries', element: <IndustriesPage /> },
      { path: 'portfolio', element: <PortfolioPage /> },
      { path: 'portfolio/:slug', element: <CaseDetailPage /> },
      { path: 'company', element: <CompanyPage /> },
      { path: 'careers', element: <CareersPage /> },
      { path: 'privacy-policy', element: <PrivacyPolicyPage /> },
      { path: 'cookies-policy', element: <CookiesPolicyPage /> },   // ← нове
      { path: 'quality-policy', element: <QualityPolicyPage /> }, 
      { path: '*', element: <NotFoundPage /> },
      { path: '/vacancies', element: <VacanciesPage /> },
    ],
  },
])