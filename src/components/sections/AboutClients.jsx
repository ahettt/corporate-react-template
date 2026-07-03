import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { cn } from '../../utils/cn'
import Section from '../ui/Section'
import Container from '../ui/Container'
import {
  CLIENTS,
  CLIENT_LOGOS,
  CLIENT_AWARDS,
  AWARD_FILL_MS,
  AWARD_HOLD_MS,
} from '../../constants/clients'

// Прогрес-заливка активного «булета»: 0→100% за duration (inline-transition, як у Gallery).
// Ремонтується по key={tick} при зміні сторінки → рестарт анімації.
function ProgressFill({ duration }) {
  const [w, setW] = useState(0)
  useEffect(() => {
    const id = requestAnimationFrame(() => setW(100))
    return () => cancelAnimationFrame(id)
  }, [])
  return (
    <span
      className="absolute inset-y-0 left-0 bg-accent"
      style={{ width: `${w}%`, transition: `width ${duration}ms linear` }}
    />
  )
}

export default function AboutClients() {
  const [swiper, setSwiper] = useState(null)
  const [pageCount, setPageCount] = useState(0)
  const [activePage, setActivePage] = useState(0)
  const [tick, setTick] = useState(0)

  // snapGrid.length = кількість сторінок (без loop-клонів, бо rewind)
  const sync = (sw) => {
    setPageCount(sw.snapGrid.length)
    setActivePage(sw.snapIndex)
    setTick((t) => t + 1)
  }

  const goToPage = (p) => {
    if (!swiper) return
    swiper.slideTo(p * (swiper.params.slidesPerGroup || 1))
  }

  return (
    <Section className="bg-white">
      <Container>
        <h2 className="text-center text-3xl font-bold uppercase leading-tight text-ink md:text-5xl">
          {CLIENTS.title}
        </h2>

        {/* Логотипи клієнтів */}
        <ul className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12 md:mt-16 lg:grid-cols-3">
          {CLIENT_LOGOS.map((logo, i) => (
            <li
              key={logo.name}
              className={cn(
                'flex h-16 items-center justify-center',
                i === CLIENT_LOGOS.length - 1 && 'col-span-2 lg:col-span-1',
              )}
            >
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                className="max-h-12 w-auto max-w-full object-contain"
              />
            </li>
          ))}
        </ul>

        {/* Каруселя нагород */}
        <div className="mt-16 md:mt-20">
          <Swiper
            modules={[Autoplay]}
            onSwiper={(sw) => {
              setSwiper(sw)
              sync(sw)
            }}
            onSlideChange={sync}
            onBreakpoint={sync}
            onResize={sync}
            rewind
            observer
            observeParents
            speed={800}
            autoplay={{ delay: AWARD_FILL_MS + AWARD_HOLD_MS, disableOnInteraction: false }}
            spaceBetween={24}
            slidesPerView={3}
            slidesPerGroup={3}
            breakpoints={{ 1024: { slidesPerView: 6, slidesPerGroup: 6 } }}
          >
            {CLIENT_AWARDS.map((award) => (
              <SwiperSlide key={award.src} className="flex justify-center">
                <img
                  src={award.src}
                  alt={award.name}
                  loading="lazy"
                  className="h-44 w-auto object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Пагінація-прогрес */}
          <div className="mt-12 flex items-center justify-center gap-2">
            {Array.from({ length: pageCount }).map((_, p) => (
              <button
                key={p}
                type="button"
                aria-label={`Сторінка ${p + 1}`}
                onClick={() => goToPage(p)}
                className="relative h-1 w-12 overflow-hidden bg-gray-300"
              >
                {p === activePage && <ProgressFill key={tick} duration={AWARD_FILL_MS} />}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}