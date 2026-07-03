import Section from '../ui/Section'
import Container from '../ui/Container'
import { ABOUT_LEAD, STATS } from '../../constants/about'
import Stat from './Stat'

export default function About() {
  return (
    <Section id="about">
      <Container>
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-3">
          {/* Лід-текст */}
          <div className="lg:col-span-1">
            <h2 className="font-display text-4xl font-bold uppercase text-ink sm:text-5xl">
              {ABOUT_LEAD.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">{ABOUT_LEAD.paragraph}</p>
          </div>

          {/* Метрики 2×2 */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-2">
            {STATS.map((stat, i) => (
              <Stat key={stat.value} value={stat.value} text={stat.text} index={i} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}