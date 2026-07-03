import Section from '../ui/Section'
import Container from '../ui/Container'
import { cn } from '../../utils/cn'
import { CONTRIBUTION, CONTRIBUTION_STATS } from '../../constants/contribution'

function StatCard({ stat, className }) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center bg-[#fdf2ec] px-8 py-12 text-center',
        className,
      )}
    >
      <p className="text-5xl font-bold text-accent md:text-6xl">{stat.value}</p>
      <p className="mt-3 text-base leading-relaxed text-ink md:text-lg">{stat.text}</p>
    </div>
  )
}

export default function AboutContribution() {
  const stats = CONTRIBUTION_STATS

  return (
    <Section className="bg-white">
      <Container>
        <h2 className="text-3xl font-bold uppercase leading-tight md:text-5xl">
          <span className="text-ink">{CONTRIBUTION.titleLead}</span>{' '}
          <span className="text-accent">{CONTRIBUTION.titleAccent}</span>
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted md:mt-8 md:text-xl">
          {CONTRIBUTION.intro}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, i) => (
            <StatCard
              key={`${stat.value}-${stat.text}`}
              stat={stat}
              // остання картка: на tablet займає обидві колонки, на desktop — одну
              className={i === stats.length - 1 ? 'md:col-span-2 lg:col-span-1' : undefined}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}