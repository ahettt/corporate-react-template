import { FaLinkedin, FaInstagram, FaGithub, FaYoutube } from 'react-icons/fa'

export const LOGO_URL = 'https://yalantis.ua/wp-content/uploads/2023/09/logo-dark.svg'

// Єдине джерело для десктоп мега-меню + мобільних акордеонів
export const MEGA_MENU = [
  {
    label: 'Про нас',
    to: '/company',
    layout: 'cards-list',
    cards: [
      {
        title: 'Про нас',
        text: 'Ознайомтеся з Yalantis як надійним технологічним партнером з галузевою експертизою',
        to: '/company#about',
      },
      {
        title: 'Наша місія',
        text: 'Дізнайтеся про місію та основні цінності компанії Yalantis',
        to: '/company#mission',
      },
      {
        title: 'Наші цінності',
        text: 'Дізнайтеся про спільні драйвери Yalantis, які дозволяють досягати більшого',
        to: '/company#values',
      },
    ],
    list: [
      { label: 'Команда менеджерів', to: '/company#team' },
      { label: 'Соціальна відповідальність', to: '/company#social' },
      { label: 'Внесок у галузь', to: '/company#impact' },
      { label: 'Клієнти та нагороди', to: '/company#clients' },
    ],
  },
  {
    label: 'Університет',
    to: '/careers',
    layout: 'cards-image',
    cards: [
      {
        title: 'Заходи для початківців',
        text: 'Зростайте професійно з Yalantis. Дізнайтеся більше про Yalantis Education та освітні активності.',
        to: '/careers#beginners',
      },
      {
        title: 'Співпраця з університетами',
        text: 'Дізнайтеся більше про партнерство Yalantis з закладами вищої освіти та переваги співпраці з нами.',
        to: '/careers#universities',
      },
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      alt: 'Yalantis Education',
    },
  },
  {
    label: 'Заходи',
    to: '/portfolio',
    layout: 'cards',
    cards: [
      {
        title: 'Заходи в Україні',
        text: 'Долучайтеся до подій від Yalantis у Дніпрі, Києві та Львові офлайн або онлайн.',
        to: '/portfolio#ua',
      },
      {
        title: 'Заходи в Польщі',
        text: 'Долучайтеся до подій від Yalantis у Польщі. Будуємо українське IT ком’юніті закордоном разом.',
        to: '/portfolio#pl',
      },
      {
        title: 'Заходи на Кіпрі',
        text: 'Долучайтеся до подій від Yalantis на Кіпрі. Будуємо українське IT ком’юніті закордоном разом.',
        to: '/portfolio#cy',
      },
      {
        title: 'Записи заходів',
        text: 'Дізнайтеся більше про минулі події від Yalantis, а також отримайте записи виступів спікерів.',
        to: '/portfolio#records',
      },
    ],
  },
  {
    label: 'Контакти',
    to: '',
    layout: 'contact',
    email: 'careers@yalantis.com',
  },
]

// Мобільні акордеони — похідні від MEGA_MENU (без контактів)
export const MENU_SECTIONS = MEGA_MENU
  .filter((s) => s.layout !== 'contact')
  .map((s) => ({
    label: s.label,
    to: s.to,
    links: [
      ...(s.cards?.map((c) => ({ label: c.title, to: c.to })) ?? []),
      ...(s.list ?? []),
    ],
  }))

// Контакти — окремий клікабельний лінк (без випадайки в мобільному меню)
export const CONTACTS_LINK = (() => {
  const c = MEGA_MENU.find((s) => s.layout === 'contact')
  return { label: c.label, to: c.to }
})()

// Десктопна навігація = заголовки секцій (DRY)
export const NAV_LINKS = MEGA_MENU.map(({ label, to, layout }) => ({
  label,
  to,
  isButton: layout === 'contact',
}))

export const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/yalantis', icon: FaLinkedin },
  { label: 'Instagram', href: 'https://www.instagram.com/yalantis', icon: FaInstagram },
  { label: 'GitHub', href: 'https://github.com/Yalantis', icon: FaGithub },
  { label: 'YouTube', href: 'https://www.youtube.com/@yalantis', icon: FaYoutube },
]

// Колонки футера (буде перероблено в Групі 5)
export const FOOTER_COLUMNS = [
  {
    title: 'Про нас',
    to: '/company',
    links: [
      { label: 'Про нас', to: '/company#about' },
      { label: 'Наша місія', to: '/company#mission' },
    ],
  },
  {
    title: 'Університет',
    to: '/careers',
    links: [
      { label: 'Головна сторінка', to: '/' },
      { label: 'Співпраця з університетами', to: '/careers#universities' },
      { label: 'Заходи для початківців', to: '/careers#beginners' },
    ],
  },
  {
    title: 'Заходи',
    to: '/portfolio',
    links: [
      { label: 'Заходи в Україні', to: '/portfolio#ua' },
      { label: 'Заходи в Польщі', to: '/portfolio#pl' },
      { label: 'Заходи на Кіпрі', to: '/portfolio#cy' },
      { label: 'Історія заходів', to: '/portfolio#history' },
    ],
  },
]

export const CONTACT_EMAIL = 'careers@yalantis.com'