// Дані сторінки «Вакансії компанії» (/vacancies)
export const VACANCIES = {
  breadcrumbs: [
    { label: 'Головна', href: '/' },
    { label: 'Вакансії' },
  ],
  titleLead: 'вакансії компанії',
  titleAccent: 'Join us!',
  searchPlaceholder: 'пошук',
  mobileFiltersButton: 'Відкрити фільтри',
  filters: [
    { key: 'category', title: 'Категорії', options: [{ label: 'Software development' }] },
    {
      key: 'location',
      title: 'Локація',
      options: [
        { label: 'Ukraine', children: ['Kyiv', 'Lviv', 'Dnipro'] },
        { label: 'Poland', children: ['Warsaw'] },
        { label: 'Europe' },
      ],
    },
    { key: 'level', title: 'Рівень', options: [{ label: 'Senior' }, { label: 'Teach Lead' }] },
    { key: 'format', title: 'Формат роботи', options: [{ label: 'Office' }, { label: 'Hybrid' }, { label: 'Remote' }] },
  ],
}

export const VACANCIES_LIST = [
  {
    href: 'https://yalantis.ua/vacancies/hardware-engineer-consultant-on-demand/',
    title: 'Hardware Engineer / Consultant (on demand)',
    tags: ['Software development', 'Kyiv', 'Warsaw', 'Ukraine', 'Lviv', 'Dnipro', 'Poland', 'Europe', 'Senior', 'Teach Lead', 'Office / Hybrid / Remote'],
  },
]