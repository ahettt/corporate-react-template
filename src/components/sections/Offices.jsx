import { OFFICES, MAP_BG } from '../../constants/about'
import { cn } from '../../utils/cn'
import { useInView } from '../../hooks/useInView'
import Section from '../ui/Section'
import Container from '../ui/Container'
import OfficeCountry from './OfficeCountry'

export default function Offices() {
  const [ref, inView] = useInView()
  return (
    <Section className="bg-gradient-to-br white">
      <Container>
        <div
          ref={ref}
          className={cn(
            'relative transition-all duration-700 ease-out',
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
          )}
        >
          {/* Текстова скляна картка — 3/5, у потоці, поверх мапи */}
          <div className="relative z-10 rounded-2xl border border-white/60 bg-white/10 p-6 shadow-xl shadow-ink/5 backdrop-blur-md sm:p-8 lg:w-3/5 lg:p-10">
            <h2 className="font-display text-2xl font-semibold uppercase tracking-wide text-ink sm:text-3xl">
              Офіси компанії
            </h2>

            <div className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {OFFICES.map((office) => (
                <OfficeCountry
                  key={office.country}
                  {...office}
                  className={cn(
                    office.addresses.length > 1 && 'sm:col-start-2 sm:row-start-1 sm:row-span-3',
                  )}
                />
              ))}
            </div>
          </div>

          {/* Мапа — під карткою, праворуч; на мобайлі просто нижче */}
          <div className="mt-8 lg:absolute lg:right-0 lg:top-2/5 lg:z-0 lg:mt-0 lg:w-1/2 lg:-translate-y-1/2">
            <img
              src={MAP_BG}
              alt="Мапа офісів Yalantis: Польща, Україна, Кіпр, Естонія"
              className="w-full object-contain"
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}