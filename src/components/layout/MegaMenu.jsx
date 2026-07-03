import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { MEGA_MENU } from '../../constants/navigation'
import { cn } from '../../utils/cn'
import Container from '../ui/Container'

function Card({ card }) {
  return (
    <Link
      to={card.to}
      className="group/card flex flex-col bg-surface p-6 transition-colors hover:bg-surface/60"
    >
      <h3 className="font-display text-lg font-semibold text-ink">{card.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{card.text}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent">
        Читати далі
        <ArrowRight size={16} className="transition-transform group-hover/card:translate-x-1" />
      </span>
    </Link>
  )
}

function PanelContent({ section }) {
  switch (section.layout) {
    // 3 картки + список
    case 'cards-list':
      return (
        <div className="grid grid-cols-5 gap-6">
          <div aria-hidden="true" /> {/* gutter під лого */}
          {section.cards.map((card) => (
            <Card key={card.title} card={card} />
          ))}
          <ul className="space-y-4">
            {section.list.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="text-base text-ink transition-colors hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )

    // 2 картки + зображення
    case 'cards-image':
      return (
        <div className="grid grid-cols-4 gap-6">
          <div aria-hidden="true" />
          {section.cards.map((card) => (
            <Card key={card.title} card={card} />
          ))}
          <div className="overflow-hidden">
            <img src={section.image.src} alt={section.image.alt} className="h-full w-full object-cover" />
          </div>
        </div>
      )

    // 4 картки
    case 'cards':
      return (
        <div className="grid grid-cols-5 gap-6">
          <div aria-hidden="true" />
          {section.cards.map((card) => (
            <Card key={card.title} card={card} />
          ))}
        </div>
      )

    // центрований email
    case 'contact':
      return (
        <div className="flex flex-col items-center py-4 text-center">
          <span className="text-xs uppercase tracking-widest text-muted">Електронна пошта</span>
          <a
            href={`mailto:${section.email}`}
            className="mt-2 text-lg text-ink transition-colors hover:text-accent"
          >
            {section.email}
          </a>
        </div>
      )

    default:
      return null
  }
}

export default function MegaMenu({ activeSection }) {
  return (
    <>
      {MEGA_MENU.map((section) => {
        const isActive = activeSection === section.label
        return (
          <div
            key={section.label}
            className={cn(
              'absolute left-0 top-full w-full border-t border-ink/10 bg-white shadow-lg',
              'transition-all duration-200 ease-out',
              isActive
                ? 'pointer-events-auto translate-y-0 opacity-100'
                : 'pointer-events-none translate-y-2 opacity-0',
            )}
          >
            <Container className="py-10">
              <PanelContent section={section} />
            </Container>
          </div>
        )
      })}
    </>
  )
}