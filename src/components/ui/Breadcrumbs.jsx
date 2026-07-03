import { Link } from 'react-router-dom'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { cn } from '../../utils/cn'

// items: [{ label, href? }, ...] — останній елемент вважається поточною сторінкою (без лінка)
export default function Breadcrumbs({ items = [], className }) {
  if (!items.length) return null
  const parent = items[items.length - 2]

  return (
    <nav
      aria-label="Навігаційна стежка"
      className={cn('text-sm font-medium uppercase tracking-wide', className)}
    >
      {/* Mobile: «← Назад» до батьківської сторінки */}
      {parent?.href && (
        <Link
          to={parent.href}
          className="flex items-center gap-2 text-muted transition-colors hover:text-accent md:hidden"
        >
          <BsArrowLeft className="h-4 w-4" />
          {parent.label}
        </Link>
      )}

      {/* Desktop: повна стежка */}
      <ol className="hidden items-center gap-2 md:flex">
        {items.map((item, i) => {
          const last = i === items.length - 1
          return (
            <li key={i} className="flex items-center gap-2">
              {item.href && !last ? (
                <Link to={item.href} className="text-muted transition-colors hover:text-accent">
                  {item.label}
                </Link>
              ) : (
                <span className={last ? 'text-accent' : 'text-muted'}>{item.label}</span>
              )}
              {!last && <BsArrowRight className="h-4 w-4 text-muted" />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}