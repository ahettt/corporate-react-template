const FLAG_BASE = 'https://yalantis.ua/wp-content/uploads/2023/09'

export const ABOUT_LEAD = {
  title: 'Про нас',
  paragraph:
    'Yalantis — українська компанія з розробки програмного забезпечення та IT-консалтингу з 15-річним досвідом, центрами розробки в Дніпрі, Києві, Львові, Ларнаці (Кіпр), Варшаві (Польща) та майже 500 експертами, які співпрацюють по всьому світу.',
}

export const STATS = [
  { value: '№1', text: 'українська компанія з розробки програмного забезпечення за версією Manifest' },
  { value: '35+', text: 'клієнтів з активними проєктами' },
  { value: '15', text: 'років досвіду' },
  { value: '10+', text: 'партнерів, які співпрацюють з Yalantis більше 7 років' },
]

export const OFFICES = [
  {
    country: 'Польща',
    flag: `${FLAG_BASE}/poland2.svg`,
    addresses: ['123 al. Jerozolimskie, Warsaw, 00-001'],
  },
  {
    country: 'Україна',
    flag: `${FLAG_BASE}/ukraine.svg`,
    addresses: [
      'Василя Стуса 12, Львів, 79000',
      'Проспект Дмитра Яворницького 5, Дніпро, 49005',
      'Іллінська 8, Київ, 04070',
    ],
  },
  {
    country: 'Кіпр',
    // ⚠️ URL із даних веде на poland.svg — ймовірно одрук; заміни на cyprus.svg за потреби
    flag: `${FLAG_BASE}/poland.svg`,
    addresses: ['8 Athinon Street, Larnaca, 6023'],
  },
  {
    country: 'Естонія',
    flag: `${FLAG_BASE}/estonia.svg`,
    addresses: ['12 Parda, Tallinn, 10151'],
  },
]

export const MAP_BG = 'https://yalantis.ua/wp-content/uploads/2023/12/bg-1-1.png'