import Section from '../ui/Section'
import Container from '../ui/Container'
import { SOCIAL, SOCIAL_ITEMS } from '../../constants/social'

function SocialCard({ item }) {
  return (
    <div className="h-full bg-[#f5f5f5] p-8 lg:p-10">
      <h3 className="text-base font-bold uppercase leading-snug tracking-wide text-ink lg:text-lg">
        {item.titleLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h3>

      <ul className="mt-6 space-y-4">
        {item.points.map((point) => (
          <li key={point} className="flex items-start gap-4">
            {/* помаранчевий квадрат-маркер */}
            <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 bg-accent" />
            <span className="text-[15px] leading-relaxed text-muted">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function AboutSocial() {
  return (
    <Section className="relative overflow-hidden bg-white">
      {/*
        ⚠️ Декоративний фон-патерн (помаранчеві «сузір'я»/топографічні лінії
        у правому верхньому куті, бліде тло під текстом) — URL асета невідомий.
        Хук лишено закоментованим, як у AboutHero/AboutValues.
        Дай посилання на асет або скажи «апроксимувати» (можу згенерувати inline-SVG).

        <img
          src="{URL}"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 w-1/2 select-none opacity-60"
        />
      */}
      <Container className="relative">
        <h2 className="max-w-3xl text-3xl font-bold uppercase leading-tight text-ink md:text-5xl">
          {SOCIAL.title}
        </h2>

        <p className="mt-6 max-w-3xl whitespace-pre-line text-lg leading-relaxed text-muted md:mt-8 md:text-xl">
          {SOCIAL.intro}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {SOCIAL_ITEMS.map((item) => (
            <SocialCard key={item.titleLines.join(' ')} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  )
}