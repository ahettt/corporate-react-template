import { useEffect, useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { VALUES, VALUES_INTRO, VALUE_ROTATE_MS } from '../../constants/values'
import { cn } from '../../utils/cn'
import Section from '../ui/Section'
import Container from '../ui/Container'

// Прогрес-бар активного пункту (desktop): 0→100 за VALUE_ROTATE_MS, лінійно
function TitleProgress() {
  const [w, setW] = useState(0)
  useEffect(() => {
    const id = requestAnimationFrame(() => setW(100))
    return () => cancelAnimationFrame(id)
  }, [])
  return (
    <span className="absolute inset-x-0 bottom-0 h-[3px] overflow-hidden">
      <span
        className="block h-full bg-accent"
        style={{ width: `${w}%`, transition: `width ${VALUE_ROTATE_MS}ms linear` }}
      />
    </span>
  )
}

// Тіло цінності (спільне для desktop і mobile): абзаци + квадратні списки
function ValueBody({ content }) {
  return content.map((b, i) =>
    b.type === 'ul' ? (
      <ul key={i} className="mt-3 list-[square] space-y-1 pl-5 marker:text-accent">
        {b.items.map((it, ii) => (
          <li key={ii} className="text-ink/90">{it}</li>
        ))}
      </ul>
    ) : (
      <p key={i} className="mt-3 leading-relaxed text-ink/90">{b.text}</p>
    ),
  )
}

export default function AboutValues() {
  const [active, setActive] = useState(0)
  const [openMobile, setOpenMobile] = useState(0)

  // Автозміна активної цінності кожні VALUE_ROTATE_MS (desktop-логіка)
  useEffect(() => {
    const t = setTimeout(() => setActive((a) => (a + 1) % VALUES.length), VALUE_ROTATE_MS)
    return () => clearTimeout(t)
  }, [active])

  const current = VALUES[active]

  return (
    <Section className="overflow-hidden">
      <Container>
        <h2 className="text-4xl font-medium uppercase tracking-wide text-accent lg:text-5xl">
          {VALUES_INTRO.title}
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-muted">{VALUES_INTRO.text}</p>

        {/* ===== DESKTOP: список-таби + панель контенту ===== */}
        <div className="mt-10 hidden gap-8 lg:grid lg:grid-cols-[minmax(0,360px)_1fr]">
          <ul>
            {VALUES.map((v, i) => {
              const isActive = i === active
              return (
                <li key={v.id} className="border-b border-gray-200">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={cn(
                      'group relative flex w-full items-center gap-4 px-4 py-5 text-left transition-colors',
                      isActive ? 'bg-gray-50' : 'hover:bg-gray-50/60',
                    )}
                  >
                    {/* Іконка: звичайна → hover/активна (кольорова) */}
                    <span className="relative h-11 w-11 shrink-0">
                      <img
                        src={v.icon}
                        alt=""
                        aria-hidden="true"
                        className={cn('h-11 w-11', isActive ? 'hidden' : 'block group-hover:hidden')}
                      />
                      <img
                        src={v.iconHover}
                        alt=""
                        aria-hidden="true"
                        className={cn('h-11 w-11', isActive ? 'block' : 'hidden group-hover:block')}
                      />
                    </span>
                    <span className="text-lg text-ink">{v.title}</span>
                    {isActive && <TitleProgress key={active} />}
                  </button>
                </li>
              )
            })}
          </ul>

          <div key={active} className="bg-gray-50 p-8">
            <h3 className="text-2xl font-semibold uppercase text-ink">{current.title}</h3>
            <div className="mt-4">
              <ValueBody content={current.content} />
            </div>
            <img
              src={current.image}
              alt=""
              aria-hidden="true"
              className="mt-6 h-auto w-full rounded object-cover"
            />
          </div>
        </div>

        {/* ===== MOBILE: акордеон ===== */}
        <ul className="mt-8 space-y-3 lg:hidden">
          {VALUES.map((v, i) => {
            const isOpen = i === openMobile
            return (
              <li key={v.id} className="bg-gray-50">
                <button
                  type="button"
                  onClick={() => setOpenMobile(isOpen ? -1 : i)}
                  className="flex w-full items-center gap-4 px-4 py-4 text-left"
                >
                  <img src={v.iconHover} alt="" aria-hidden="true" className="h-10 w-10 shrink-0" />
                  <span className="text-lg text-ink">{v.title}</span>
                  <BsChevronDown
                    className={cn(
                      'ml-auto h-5 w-5 shrink-0 text-ink transition-transform',
                      isOpen && 'rotate-180',
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-5">
                    <ValueBody content={v.content} />
                    <img
                      src={v.image}
                      alt=""
                      aria-hidden="true"
                      className="mt-5 h-auto w-full rounded object-cover"
                    />
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </Container>
    </Section>
  )
}