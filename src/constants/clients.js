const BASE = 'https://yalantis.ua/wp-content/uploads/2023/10/'

export const CLIENTS = {
  // весь заголовок ink, uppercase, по центру
  title: 'Наші клієнти та нагороди',
}

export const CLIENT_LOGOS = [
  { name: 'RAK', src: `${BASE}logo__partners_rak.svg` },
  { name: 'Toyota Tsusho', src: `${BASE}logo_partners_toyota.svg` },
  { name: 'KPMG', src: `${BASE}logo__partners_kpmg.svg` },
  { name: 'Google x', src: `${BASE}logo__googlex.svg` },
  { name: 'Healthfully', src: `${BASE}logo__partners_healthfully.svg` },
  { name: 'Orbis systems', src: `${BASE}logo__partners_orbis.svg` },
  { name: 'Lifeworks', src: `${BASE}logo__partners_lifeworks.svg` },
  { name: '123Sourcing', src: `${BASE}logo_partners_123sourcing.svg` },
  { name: 'Scholz Databank', src: `${BASE}logo_partners_scholz.svg` },
]

export const CLIENT_AWARDS = [
  { name: 'Top IoT Company', src: `${BASE}clutch_iot_company.svg` },
  { name: 'Top Software Developers — Financial Services', src: `${BASE}clutch_software_devs_financial_services.svg` },
  { name: 'Top Software Developers — Medical', src: `${BASE}clutch_software_devs_financial_medical-1.svg` },
  { name: 'Top IT Services Company', src: `${BASE}clutch_it_services.svg` },
  { name: 'Top Staff Augmentation Company', src: `${BASE}clutch_staff_augmentation_company_ukr.svg` },
  { name: 'Top Software Developers', src: `${BASE}clutch_software_devs.svg` },
  { name: 'Modernization Service', src: `${BASE}clutch_modernization_service.svg` },
  { name: 'Enterprise App', src: `${BASE}clutch_enterprise_app.svg` },
  { name: 'Superbcompanies', src: `${BASE}superbcompanies.com-original.svg` },
  { name: 'Top Offshore Software Development', src: `${BASE}top-offshore-software-development-companies.svg` },
  { name: 'Top Software Development', src: `${BASE}top-software-development-companies.svg` },
  { name: 'Intelligence App Developers', src: `${BASE}clutch_intelligence_app_developers.svg` },
]

// Тайминги індикатора: заливка 4с, утримання 1с (autoplay delay = сума)
export const AWARD_FILL_MS = 4000
export const AWARD_HOLD_MS = 1000