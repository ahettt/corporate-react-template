import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Star } from 'lucide-react'
import { FOOTER_COLUMNS, SOCIAL_LINKS, CONTACT_EMAIL, LOGO_URL } from '../../constants/navigation'
import { cn } from '../../utils/cn'
import Container from '../ui/Container'
import Button from '../ui/Button'

const POLICIES = [
  { label: 'Повідомлення про приватність', to: '/privacy-policy' },
  { label: 'Повідомлення про Cookies', to: '/cookies-policy' },
  { label: 'Політика якості', to: '/quality-policy' },
]

const COPYRIGHT =
  '©Copyright 2024 Yalantis – Full-stack mobile (iOS, Android) and web app design and development company. All Rights Reserved'

function ClutchIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M0 0 H35 A13 13 0 0 1 48 13 V48 H13 A13 13 0 0 1 0 35 Z" fill="#17313c" />
      <path d="M30.36 17.64 A9 9 0 1 0 30.36 30.36" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
      <circle cx="24" cy="24" r="3.4" fill="#f04335" />
    </svg>
  )
}

function Stars({ rating = 4.8, count = 5 }) {
  const pct = (rating / count) * 100
  const row = (colorClass) => (
    <div className={cn('flex gap-0.5', colorClass)}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={18} className="shrink-0" fill="currentColor" stroke="currentColor" />
      ))}
    </div>
  )
  return (
    <div className="relative inline-flex" aria-label={`Рейтинг ${rating} з ${count}`}>
      {row('text-[#702c2d]')}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pct}%` }}>
        {row('text-[#f04335]')}
      </div>
    </div>
  )
}

const CLUTCH_URL =
  'https://clutch.co/profile/yalantis?utm_source=widget&utm_medium=2&utm_campaign=widget&utm_content=logo#summary'

function ClutchRating() {
  return (
    <a
      href={CLUTCH_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Yalantis rating on Clutch"
      className="group flex items-center gap-3"
    >
      <ClutchIcon className="h-12 w-12 shrink-0" />
      <div>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-medium text-white">4.8</span>
          <Stars rating={4.8} />
        </div>
        <span className="text-sm text-white/60 transition-colors group-hover:text-[#ee4234]">
          Yalantis rating on Clutch
        </span>
      </div>
    </a>
  )
}

function FooterColumn({ title, to, className, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={cn('border-b border-white/10 lg:border-none', className)}>
      <div className="flex items-center justify-between">
        <Link
          to={to}
          className="block py-5 font-display text-lg font-semibold uppercase tracking-wide text-white transition-colors hover:text-accent lg:py-0"
        >
          {title}
        </Link>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={`${title}: розгорнути`}
          className="p-2 text-white lg:hidden"
        >
          <ChevronDown size={20} className={cn('transition-transform duration-300', open && 'rotate-180')} />
        </button>
      </div>

      <div
        className={cn(
          'grid transition-all duration-300 ease-in-out lg:grid-rows-[1fr] lg:opacity-100',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden lg:overflow-visible">
          <div className="pb-6 lg:mt-6 lg:pb-0">{children}</div>
        </div>
      </div>
    </div>
  )
}

function LinkList({ links }) {
  return (
    <ul className="space-y-4">
      {links.map((link) => (
        <li key={link.label}>
          <Link to={link.to} className="text-white transition-colors hover:text-accent">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default function Footer() {
  return (
    <footer className="bg-footer text-white">
      <Container>
        <div className="grid grid-cols-1 py-12 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-14 lg:py-20">
          <FooterColumn
            title={FOOTER_COLUMNS[0].title}
            to={FOOTER_COLUMNS[0].to}
            className="lg:col-start-1 lg:row-start-1"
          >
            <LinkList links={FOOTER_COLUMNS[0].links} />
          </FooterColumn>

          <FooterColumn
            title={FOOTER_COLUMNS[1].title}
            to={FOOTER_COLUMNS[1].to}
            className="lg:col-start-2 lg:row-start-1"
          >
            <LinkList links={FOOTER_COLUMNS[1].links} />
          </FooterColumn>

          <FooterColumn
            title={FOOTER_COLUMNS[2].title}
            to={FOOTER_COLUMNS[2].to}
            className="lg:col-start-3 lg:row-start-1"
          >
            <LinkList links={FOOTER_COLUMNS[2].links} />
          </FooterColumn>

          <FooterColumn title="Контакти" className="lg:col-start-1 lg:row-start-2">
            <div>
              <p className="text-xs uppercase tracking-wide text-white/50">Електронна пошта</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-2 inline-block text-white transition-colors hover:text-accent"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </FooterColumn>

          <div className="mt-6 grid grid-cols-2 gap-8 lg:col-start-4 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:grid-cols-1 lg:gap-12">
            {/* Група A */}
            <div className="flex flex-col items-start gap-6">
              <Button as={Link} to="/vacancies" variant="outline" className="uppercase tracking-wide">
                Вакансії
              </Button>
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
                    <Icon size={22} />
                  </a>
                ))}
              </div>
              <ClutchRating />
            </div>

            {/* Група B */}
            <div className="flex flex-col items-end text-right lg:items-start lg:text-left">
              <img
                src={"https://yalantis.ua/wp-content/uploads/2023/09/logo_white.svg"}
                alt="Yalantis"
                className="h-[25px] w-[112px]"
              />
              <p className="mt-4 max-w-xs text-sm text-white/50">{COPYRIGHT}</p>
              <div className="mt-6 flex flex-col gap-3">
                {POLICIES.map((p) => (
                  <Link
                    key={p.label}
                    to={p.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 underline decoration-white/30 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}