import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { MENU_SECTIONS, SOCIAL_LINKS, LOGO_URL } from '../../constants/navigation'
import { cn } from '../../utils/cn'
import Container from '../ui/Container'
import Button from '../ui/Button'

export default function MobileMenu({ isOpen, onClose }) {
  const [openLabel, setOpenLabel] = useState(null)

  useEffect(() => {
    if (!isOpen) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex flex-col bg-white lg:hidden"
      role="dialog"
      aria-modal="true"
    >
      {/* Топ-бар: лого (хрестик — морфінг-бургер у хедері, z-70) */}
      <Container className="flex h-20 shrink-0 items-center">
        <Link to="/" onClick={onClose} className="flex items-center">
          <img src={LOGO_URL} alt="Yalantis" className="h-[47.44px] w-[86px]" />
        </Link>
      </Container>

      {/* Акордеони */}
      <Container as="nav" className="flex-1 overflow-y-auto" aria-label="Мобільна навігація">
        {MENU_SECTIONS.map((section) => {
          const open = openLabel === section.label
          return (
            <div key={section.label} className="border-b border-ink/10">
              <button
                type="button"
                onClick={() => setOpenLabel(open ? null : section.label)}
                aria-expanded={open}
                className="group flex w-full items-center justify-between py-6 text-left"
              >
                <span className="font-display text-2xl font-semibold uppercase text-ink transition-colors group-hover:text-accent">
                  {section.label}
                </span>
                <ChevronDown
                  size={24}
                  className={cn(
                    'text-ink transition-transform duration-300 [transform-style:preserve-3d]',
                    open && '[transform:rotateX(180deg)]',
                  )}
                />
              </button>

              <div
                className={cn(
                  'grid transition-all duration-300 ease-in-out',
                  open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                )}
              >
                <ul className="overflow-hidden">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        onClick={onClose}
                        className="block py-2.5 text-lg text-ink/80 transition-colors hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li className="h-2" aria-hidden="true" />
                </ul>
              </div>
            </div>
          )
        })}
      </Container>

      {/* Низ: соцмережі + кнопка */}
      <Container className="flex shrink-0 items-center justify-between gap-4 py-6">
        <div className="flex items-center gap-5">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-gray-400 transition-colors hover:text-accent"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
        <Button as={Link} to="/vacancies" onClick={onClose} className="uppercase tracking-wide">
          Вакансії
        </Button>
      </Container>
    </div>
  )
}