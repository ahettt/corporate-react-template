import Container from '../ui/Container'
import Breadcrumbs from '../ui/Breadcrumbs'
import { ABOUT_HERO } from '../../constants/company'

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Декоративний фон-патерн (топографічні хвилі) — потрібен асет із теми.
          Дай URL — і розкоментуй:
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('URL_ПАТЕРНА')] bg-cover bg-center"
      /> */}

      <Container className="py-10 md:py-16">
        <Breadcrumbs items={ABOUT_HERO.breadcrumbs} />

        {/* Тайтл: ліворуч на мобілці/планшеті, по центру на desktop */}
        <h1 className="mt-10 text-5xl font-semibold uppercase tracking-tight text-ink md:text-6xl lg:mt-14 lg:text-center lg:text-7xl">
          {ABOUT_HERO.titleLead} <span className="text-accent">{ABOUT_HERO.titleAccent}</span>
        </h1>

        <p className="mt-8 text-lg leading-relaxed text-ink/80 md:text-xl lg:mt-10 lg:text-2xl">
          {ABOUT_HERO.intro}
        </p>

        {/* ≤767 — 1 колонка, md — 2, lg — 4 */}
        <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {ABOUT_HERO.stats.map((s, i) => (
            <li
              key={i}
              className="rounded-sm bg-gradient-to-b from-white to-surface px-6 py-8 text-center"
            >
              <p className="text-4xl font-semibold text-accent md:text-5xl">{s.value}</p>
              <p className="mt-3 text-muted">{s.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}