// Дані сторінки «Заходи компанії» (/events)
export const EVENTS = {
  breadcrumbs: [
    { label: 'Головна', href: '/' },
    { label: 'Заходи' },
  ],
  title: 'Заходи компанії',
  tabs: [
    { key: 'records', label: 'Записи заходів' },
    { key: 'ukraine', label: 'Заходи в Україні' },
    { key: 'poland', label: 'Заходи в Польщі' },
    { key: 'cyprus', label: 'Заходи на Кіпрі' },
  ],
  empty: {
    title: 'Наразі у нас не заплановано подій',
    text: 'Ви можете переглянути записи минулих заходів',
    cta: 'Перейти до записів',
  },
}

export const EVENTS_RECORDS = [
  {
    href: 'https://yalantis.ua/events/yalantis-networking-meetup/',
    image: 'https://yalantis.ua/wp-content/uploads/2024/01/yalantis-networking-meetup.png',
    accent: 'Yalantis',
    rest: 'Networking Meetup',
    text: 'offline meetup',
    tags: ['Networking'],
  },
  {
    href: 'https://yalantis.ua/events/yalantis-meetup-aiml-edition/',
    image: 'https://yalantis.ua/wp-content/uploads/2024/01/yalantis-meetup_-aiml-edition.png',
    accent: 'Yalantis meetup:',
    rest: 'AI&ML edition',
    text: 'online meetup',
    tags: ['AI', 'Junior-Middle', 'Middle +', 'ML'],
  },
  {
    href: 'https://yalantis.ua/events/yalantis-meetup-iot-edition/',
    image: 'https://yalantis.ua/wp-content/uploads/2024/01/yalantis-meetup_-iot-edition.png',
    accent: 'Yalantis meetup:',
    rest: 'IoT EDITION',
    text: 'online meetup',
    tags: ['IoT', 'Junior-Middle', 'Middle +'],
  },
  {
    href: 'https://yalantis.ua/events/yalantis-meetup-embedded-edition/',
    image: 'https://yalantis.ua/wp-content/uploads/2024/01/yalantis-meetup_-embedded-edition.png',
    accent: 'Yalantis meetup:',
    rest: 'Embedded edition',
    text: 'online meetup',
    tags: ['Embedded', 'Junior-Middle', 'Middle +'],
  },
  {
    href: 'https://yalantis.ua/events/yalantis-meetup-rust-edition/',
    image: 'https://yalantis.ua/wp-content/uploads/2024/01/yalantis-meetup_-rust-edition.png',
    accent: 'Yalantis meetup:',
    rest: 'RUST EDITION',
    text: 'online meetup',
    tags: ['Junior-Middle', 'Middle +', 'Rust'],
  },
  {
    href: 'https://yalantis.ua/events/yalantis-meetup-bidata/',
    image: 'https://yalantis.ua/wp-content/uploads/2024/01/yalantis-meetup_-bidata.png',
    accent: 'Yalantis meetup:',
    rest: 'BI&Data',
    text: 'online meetup',
    tags: ['BI', 'Data', 'Junior-Middle', 'Middle +'],
  },
  {
    href: 'https://yalantis.ua/events/yalantis-meetup-android-edition/',
    image: 'https://yalantis.ua/wp-content/uploads/2023/12/event-card-1-2.png',
    accent: 'Yalantis meetup: Android edition',
    rest: '',
    text: 'Реєстрація завершена',
    tags: ['Middle', 'Middle +'],
  },
]