export const CONTACTS = {
  bannerTitle: 'Надсилайте CV та ставайте частиною команди',
  openButton: 'надіслати cv',
  modalTitle: 'надіслати cv',

  fields: {
    name: { label: 'Ім’я' },
    surname: { label: 'Прізвище' },
    email: { label: 'Адреса електронної пошти' },
    phone: { label: 'Номер телефону' },
  },

  sourcePlaceholder: 'Де ви про нас почули?',
  sourceOptions: [
    'Івенти',
    'Сайти з пошуку роботи',
    'Dou',
    'Друзі/колеги',
    'Рекрутер',
    'Facebook',
    'Instagram',
    'Університет',
    'Інше',
  ],

  commentPlaceholder: 'Додатковий коментар',
  commentMax: 3000,

  fileLabel: 'Завантажити резюме',
  fileHint:
    'Завантажте файл з одним із таких розширень: .pdf, .docx, .odt, .ods, .ppt/x, .xls/x, .rtf, .txt',
  fileAccept: '.pdf,.docx,.odt,.ods,.ppt,.pptx,.xls,.xlsx,.rtf,.txt',

  privacyLabel: 'Я приймаю вашу',
  privacyLink: { text: 'Політику конфіденційності', href: '/privacy-policy/' },

  cancel: 'відмінити',
  submit: 'Надіслати резюме',

  errors: {
    email: 'Введіть коректний email',
    phone: 'Будь ласка, введіть номер телефону.',
  },

  thanks: {
    title: 'Дякуємо, що обираєте Yalantis!',
    text: 'Ми отримали ваше резюме і найближчим часом зв’яжемося з вами.',
    back: 'повернутися на головну',
  },
}