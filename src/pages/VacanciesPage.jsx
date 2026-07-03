import { useMemo, useState } from 'react'
import { BsSearch, BsChevronUp, BsCheck2, BsArrowUpRight } from 'react-icons/bs'
import Container from '../components/ui/Container'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import Benefits from '../components/sections/Benefits'
import Contacts from '../components/sections/Contacts'
import { cn } from '../utils/cn'
import { VACANCIES, VACANCIES_LIST } from '../constants/vacancies'

/* — Один рядок-чекбокс — */
function CheckRow({ label, bold, checked, onChange }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 py-2">
      <input type="checkbox" checked={checked} onChange={onChange} className="h-5 w-5 shrink-0 accent-accent" />
      <span className={cn('text-ink', bold && 'font-bold')}>{label}</span>
    </label>
  )
}

/* — Група фільтрів (акордеон + вкладені локації) — */
function FilterGroup({ group, selected, onToggle }) {
  const [open, setOpen] = useState(true)
  const [openParents, setOpenParents] = useState({})

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-sm font-bold uppercase tracking-wide text-ink">{group.title}</span>
        <BsChevronUp className={cn('text-ink transition-transform', !open && 'rotate-180')} size={16} />
      </button>

      {open && (
        <div className="mt-2">
          {group.options.map((opt) => {
            const hasChildren = opt.children?.length > 0
            const parentOpen = openParents[opt.label] ?? true
            return (
              <div key={opt.label}>
                <div className="flex items-center justify-between">
                  <CheckRow
                    label={opt.label}
                    bold={hasChildren}
                    checked={selected.has(opt.label)}
                    onChange={() => onToggle(opt.label)}
                  />
                  {hasChildren && (
                    <button
                      type="button"
                      onClick={() => setOpenParents((p) => ({ ...p, [opt.label]: !parentOpen }))}
                      aria-label="Розгорнути"
                    >
                      <BsChevronUp className={cn('text-ink transition-transform', !parentOpen && 'rotate-180')} size={16} />
                    </button>
                  )}
                </div>
                {hasChildren && parentOpen && (
                  <div className="ml-6">
                    {opt.children.map((child) => (
                      <CheckRow
                        key={child}
                        label={child}
                        checked={selected.has(child)}
                        onChange={() => onToggle(child)}
                      />
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

/* — Картка вакансії — */
function VacancyCard({ vacancy }) {
  return (
    <a
      href={vacancy.href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="group block border-b border-gray-200 bg-white px-6 py-8 transition-colors duration-200 hover:border-accent md:px-10"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold uppercase leading-snug text-ink md:text-2xl">{vacancy.title}</h3>
        <BsArrowUpRight
          className="mt-1 shrink-0 text-accent transition-transform duration-300 group-hover:rotate-90"
          size={26}
        />
      </div>
      <ul className="mt-5 flex flex-wrap gap-3">
        {vacancy.tags.map((tag) => (
          <li
            key={tag}
            className="inline-flex items-center gap-2 rounded-pill border border-gray-200 px-4 py-1.5 text-sm text-ink"
          >
            <BsCheck2 className="text-accent" size={18} />
            {tag}
          </li>
        ))}
      </ul>
    </a>
  )
}

/* — Сторінка — */
export default function VacanciesPage() {
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(() => new Set())
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const toggle = (label) =>
    setSelected((prev) => {
      const next = new Set(prev)
      next.has(label) ? next.delete(label) : next.add(label)
      return next
    })

  const filtered = useMemo(() => {
    const perGroup = VACANCIES.filters.map((g) =>
      g.options.flatMap((o) => [o.label, ...(o.children || [])]).filter((l) => selected.has(l)),
    )
    const q = search.trim().toLowerCase()
    return VACANCIES_LIST.filter((v) => {
      if (q && !v.title.toLowerCase().includes(q)) return false
      return perGroup.every(
        (sel) => sel.length === 0 || sel.some((l) => v.tags.some((t) => t.toLowerCase().includes(l.toLowerCase()))),
      )
    })
  }, [search, selected])

  const filtersPanel = (
    <div className="border border-gray-200 bg-white px-6 py-2">
      {VACANCIES.filters.map((group) => (
        <FilterGroup key={group.key} group={group} selected={selected} onToggle={toggle} />
      ))}
    </div>
  )

  return (
    <>
      {/* Hero */}
      <Container className="pt-8 md:pt-12">
        {/* ⚠️ декоративний топографічний патерн у шапці — URL асета невідомий, хук лишено */}
        <Breadcrumbs items={VACANCIES.breadcrumbs} />
        <h1 className="mt-6 text-4xl font-bold uppercase leading-tight md:mt-8 md:text-6xl">
          <span className="block text-ink">{VACANCIES.titleLead}</span>
          <span className="block text-accent">{VACANCIES.titleAccent}</span>
        </h1>

        {/* Пошук */}
        <div className="relative mt-10">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={VACANCIES.searchPlaceholder}
            className="w-full border border-gray-200 bg-white px-6 py-5 pr-14 uppercase tracking-wide text-ink shadow-sm outline-none placeholder:text-muted focus:border-accent"
          />
          <BsSearch className="absolute right-6 top-1/2 -translate-y-1/2 text-muted" size={20} />
        </div>
      </Container>

      {/* Main: фільтри + список */}
      <Container className="mt-10 pb-16 md:pb-24">
        <button
          type="button"
          onClick={() => setMobileFiltersOpen((v) => !v)}
          className="mb-6 w-full rounded-pill border border-gray-300 px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink lg:hidden"
        >
          {VACANCIES.mobileFiltersButton}
        </button>

        <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-10">
          <aside className={cn('mb-8 lg:mb-0 lg:block', !mobileFiltersOpen && 'hidden')}>
            {filtersPanel}
          </aside>

          <div>
            {filtered.length > 0 ? (
              <ul>
                {filtered.map((v) => (
                  <li key={v.href}>
                    <VacancyCard vacancy={v} />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="py-16 text-center text-muted">За вашим запитом вакансій не знайдено.</p>
            )}
          </div>
        </div>
      </Container>

      {/* Домашні секції (реюз) */}
      <Benefits />
      <Contacts bannerTitle="Не знайшли вакансію?" />
    </>
  )
}