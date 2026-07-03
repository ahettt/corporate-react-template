import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { LIFE_IMAGES, LIFE_CONTENT } from '../../constants/life'
import { cn } from '../../utils/cn'
import Section from '../ui/Section'
import Container from '../ui/Container'

const AUTOPLAY_DELAY = 5000
const FREEZE = 700
const FILL = AUTOPLAY_DELAY - FREEZE

function ProgressBar() {
  const [w, setW] = useState(0)
  useEffect(() => {
    const id = requestAnimationFrame(() => setW(100))
    return () => cancelAnimationFrame(id)
  }, [])
  return (
    <span className="absolute inset-x-0 bottom-0 h-[3px] overflow-hidden">
      <span
        className="block h-full bg-accent"
        style={{ width: `${w}%`, transition: `width ${FILL}ms cubic-bezier(0.05, 0.7, 0.1, 1)` }}
      />
    </span>
  )
}

// images / content дефолтяться на дані «Життя Yalantis» → HomePage без змін
export default function YalantisLife({ images = LIFE_IMAGES, content = LIFE_CONTENT }) {
  const [swiper, setSwiper] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const goTo = (i) => swiper?.slideToLoop(i)

  return (
    <Section className="overflow-hidden">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* ЛІВА: текст + (desktop) стрічка мініатюр */}
          <div className="min-w-0">
            <h2 className="text-4xl font-medium uppercase tracking-wide lg:text-5xl">
              <span className="text-ink">{content.titleLead}</span>{' '}
              <span className="text-accent">{content.titleAccent}</span>
            </h2>

            <h3 className="mt-6 text-2xl font-bold text-ink lg:text-3xl">{content.subtitle}</h3>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink lg:text-lg">
              {content.hashtag && (
                <a
                  href={content.hashtagUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  {content.hashtag}
                </a>
              )}
              {content.body}
            </p>

            {/* Стрічка мініатюр — desktop; кількість колонок = кількості фото */}
            <div
              className="mt-8 hidden gap-4 lg:grid"
              style={{ gridTemplateColumns: `repeat(${images.length}, minmax(0, 1fr))` }}
            >
              {images.map((src, i) => {
                const active = i === activeIndex
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Слайд ${i + 1}`}
                    className="relative aspect-[4/3] overflow-hidden rounded-md"
                  >
                    <img
                      src={src}
                      alt=""
                      aria-hidden="true"
                      className={cn(
                        'h-full w-full object-cover transition duration-500',
                        active ? 'grayscale-0' : 'grayscale',
                      )}
                    />
                    {active && <ProgressBar key={activeIndex} />}
                  </button>
                )
              })}
            </div>
          </div>

          {/* ПРАВА: велике активне фото */}
          <div className="relative min-w-0">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl lg:aspect-auto lg:h-[600px]">
              <Swiper
                modules={[Autoplay]}
                rewind
                slidesPerView={1}
                autoplay={{ delay: AUTOPLAY_DELAY, disableOnInteraction: false }}
                observer
                observeParents
                onSwiper={setSwiper}
                onSlideChange={(s) => setActiveIndex(s.realIndex)}
                className="h-full w-full"
              >
                {images.map((src, i) => (
                  <SwiperSlide key={i} className="h-full">
                    <img src={src} alt="" aria-hidden="true" className="h-full w-full object-cover" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Крапки — mobile */}
            <div className="mt-5 flex justify-center gap-2 lg:hidden">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Слайд ${i + 1}`}
                  className={cn(
                    'h-2.5 w-2.5 rounded-full transition',
                    i === activeIndex ? 'bg-accent' : 'bg-black/20',
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}