import { EXCELLENCE } from '../../constants/excellence'
import Section from '../ui/Section'
import Container from '../ui/Container'

export default function AboutExcellence() {
  return (
    <Section className="overflow-hidden">
      <Container>
        <h2 className="text-4xl font-semibold uppercase tracking-tight text-ink lg:text-center lg:text-5xl">
          {EXCELLENCE.title}
        </h2>
        <p className="mt-4 text-lg text-muted lg:mx-auto lg:max-w-4xl lg:text-center">
          {EXCELLENCE.intro}
        </p>

        {/* 1 → 2 → 4 колонки */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {EXCELLENCE.cards.map((card, i) => (
            <div key={i} className="bg-gray-50 p-8">
              <h3 className="text-lg font-bold uppercase leading-snug text-ink">{card.title}</h3>
              <ul className="mt-6 list-[square] space-y-4 pl-5 marker:text-accent">
                {card.items.map((it, ii) => (
                  <li key={ii} className="leading-relaxed text-ink/90">{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}