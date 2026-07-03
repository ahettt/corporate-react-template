import { NavLink } from 'react-router-dom'
import { NAV_LINKS } from '../../constants/navigation'
import { cn } from '../../utils/cn'

// Спільні класи для лінка й кнопки-заглушки (щоб виглядали однаково)
const linkClass = (isActive) =>
  cn(
    'relative py-2 text-sm font-medium uppercase tracking-wide transition-colors',
    'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full',
    'after:origin-left after:bg-accent after:transition-transform after:duration-300',
    'hover:text-accent hover:after:scale-x-100',
    isActive ? 'text-accent after:scale-x-100' : 'text-ink after:scale-x-0',
  )

export default function Navbar({ onSectionEnter }) {
  return (
    <nav className="flex items-center gap-8" aria-label="Головна навігація">
      {NAV_LINKS.map((link) =>
        link.isButton ? (
          // «Контакти» — кнопка без дії (ховер усе одно відкриває панель мега-меню)
          <button
            key={link.label}
            type="button"
            onMouseEnter={() => onSectionEnter?.(link.label)}
            className={linkClass(false)}
          >
            {link.label}
          </button>
        ) : (
          <NavLink
            key={link.label}
            to={link.to}
            onMouseEnter={() => onSectionEnter?.(link.label)}
            className={({ isActive }) => linkClass(isActive)}
          >
            {link.label}
          </NavLink>
        ),
      )}
    </nav>
  )
}