import Section from '../ui/Section'
import Container from '../ui/Container'
import { BENEFITS } from '../../constants/benefits'
import { useInView } from '../../hooks/useInView'
import { cn } from '../../utils/cn'

export default function Benefits() {
  const [ref, inView] = useInView()

  return (
    <Section>
      <Container>
        <h2 className="mb-12 text-center text-3xl font-semibold uppercase text-ink sm:text-4xl lg:mb-16 lg:text-5xl">
          Наші переваги
        </h2>

        {/* lg:grid-cols-3 — за скріном (8 карток: 3+3+2). Для 4 колонок → lg:grid-cols-4 */}
        <div
          ref={ref}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {BENEFITS.map((benefit, i) => (
            // Зовнішній div — поява (reveal + stagger). Внутрішній — hover-lift.
            // Розведено, щоб transform-и не конфліктували й delay не гальмував hover.
            <div
              key={benefit.title}
              className={cn(
                'transition-all duration-700 ease-out',
                inView
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              )}
              style={{ transitionDelay: inView ? `${i * 80}ms` : '0ms' }}
            >
              <div className="flex h-full items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 transition duration-300 ease-out hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <img
                    src={benefit.icon}
                    alt=""
                    aria-hidden="true"
                    className="h-7 w-7"
                  />
                </span>
                <p className="text-lg leading-snug text-ink">{benefit.title}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}