import { cn } from '../../utils/cn'

// Обидві лінії якоряться зліва (left-0), позиція — через translateX, щоб
// transform завжди був визначений і анімація «закрутки» була гладкою
const BAR = 'absolute left-0 h-0.5 rounded-full bg-ink transition-all duration-300 ease-in-out'

export default function BurgerButton({ isOpen, onClick, className }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? 'Закрити меню' : 'Відкрити меню'}
      aria-expanded={isOpen}
      className={cn('relative z-[70] h-10 w-10 lg:hidden', className)}
    >
      {/* Верхня лінія: повна ширина, по центру */}
      <span
        className={cn(
          BAR,
          'w-7 translate-x-[6px]',
          isOpen ? 'top-[19px] rotate-[225deg]' : 'top-[15px]',
        )}
      />
      {/* Нижня лінія: коротка й прибита праворуч; у хресті доростає, центрується й закручується */}
      <span
        className={cn(
          BAR,
          isOpen
            ? 'top-[19px] w-7 translate-x-[6px] -rotate-[225deg]'
            : 'top-[23px] w-5 translate-x-[14px]',
        )}
      />
    </button>
  )
}