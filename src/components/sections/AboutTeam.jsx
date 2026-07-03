import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { BsChevronLeft, BsChevronRight, BsLinkedin } from 'react-icons/bs'
import Section from '../ui/Section'
import Container from '../ui/Container'
import { cn } from '../../utils/cn'
import { TEAM, TEAM_MEMBERS } from '../../constants/team'

// Кругла кнопка-стрілка. Hover → помаранчева заливка. dead-end → фейд + вимкнена.
function ArrowButton({ dir, disabled, onClick, className }) {
  return (
    <button
      type="button"
      aria-label={dir === 'prev' ? 'Попередній слайд' : 'Наступний слайд'}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'flex h-16 w-16 items-center justify-center rounded-full border border-gray-300',
        'text-ink transition-colors duration-200',
        'hover:border-accent hover:bg-accent hover:text-white',
        disabled && 'pointer-events-none opacity-30',
        className,
      )}
    >
      {dir === 'prev' ? <BsChevronLeft size={20} /> : <BsChevronRight size={20} />}
    </button>
  )
}

function TeamCard({ member }) {
  return (
    <div className="group">
      <a
        href={member.linkedin}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="block"
      >
        <div className="relative overflow-hidden bg-gradient-to-b from-[#dfe6ec] to-[#eef2f5]">
          <div className="aspect-[4/5] w-full">
            <img
              src={member.image}
              alt={member.name}
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
          </div>
          {/* Оверлей-іконка: сіра → LinkedIn-синя на hover. Лише desktop/tablet. */}
          <BsLinkedin
            className="absolute bottom-3 right-3 hidden text-[#c2c2c8] transition-colors duration-200 group-hover:text-[#0a66c2] md:block"
            size={34}
          />
        </div>

        <h3 className="mt-5 text-xl font-bold text-ink md:text-2xl">{member.name}</h3>
        <p className="mt-2 text-sm uppercase tracking-wide text-muted">{member.role}</p>
      </a>

      {/* Мобільне текстове посилання «linkedin» (замість оверлея). */}
      <a
        href={member.linkedin}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="mt-3 inline-flex items-center gap-2 text-[#0a66c2] md:hidden"
      >
        <BsLinkedin size={20} />
        <span className="text-base">linkedin</span>
      </a>
    </div>
  )
}

export default function AboutTeam() {
  const [swiper, setSwiper] = useState(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  const [current, setCurrent] = useState(1)
  const [progress, setProgress] = useState(0)

  const total = TEAM_MEMBERS.length

  const sync = (sw) => {
    setIsBeginning(sw.isBeginning)
    setIsEnd(sw.isEnd)
    setCurrent(sw.activeIndex + 1)
    setProgress(sw.progress)
  }

  return (
    <Section className="bg-[#f4f4f4]">
      <Container>
        {/* Заголовок */}
        <h2 className="text-3xl font-bold uppercase leading-tight md:text-5xl">
          <span className="text-accent">{TEAM.titleAccent}</span>{' '}
          <span className="text-ink">{TEAM.titleRest}</span>
        </h2>

        {/* Інтро + desktop-стрілки праворуч */}
        <div className="mt-6 flex items-start justify-between gap-8 md:mt-8">
          <p className="max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            {TEAM.intro}
          </p>
          <div className="hidden shrink-0 items-center gap-4 lg:flex">
            <ArrowButton dir="prev" disabled={isBeginning} onClick={() => swiper?.slidePrev()} />
            <ArrowButton dir="next" disabled={isEnd} onClick={() => swiper?.slideNext()} />
          </div>
        </div>

        {/* Мобільний лічильник + прогрес-лінія (як скрол-скролбар) */}
        <div className="mt-8 md:hidden">
          <div className="text-base text-ink">
            {current}/{total}
          </div>
          <div className="relative mt-3 h-px w-full bg-gray-300">
            <span
              className="absolute left-0 top-0 h-px bg-ink transition-transform duration-300 ease-out"
              style={{
                width: `${100 / total}%`,
                transform: `translateX(${progress * (total - 1) * 100}%)`,
              }}
            />
          </div>
        </div>

        {/* Слайдер + tablet-стрілки (вертикально, у правому жолобі) */}
        <div className="mt-10 flex items-stretch gap-6 md:mt-12">
          <div className="min-w-0 flex-1">
            <Swiper
              onSwiper={(sw) => {
                setSwiper(sw)
                sync(sw)
              }}
              onSlideChange={sync}
              onProgress={(sw) => setProgress(sw.progress)}
              onResize={sync}
              observer
              observeParents
              grabCursor
              spaceBetween={16}
              slidesPerView={1.15}
              breakpoints={{
                768: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 4.2, spaceBetween: 16 },
              }}
            >
              {TEAM_MEMBERS.map((member) => (
                <SwiperSlide key={member.linkedin} className="h-auto">
                  <TeamCard member={member} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="hidden shrink-0 flex-col items-center justify-center gap-5 md:flex lg:hidden">
            <ArrowButton dir="prev" disabled={isBeginning} onClick={() => swiper?.slidePrev()} />
            <ArrowButton dir="next" disabled={isEnd} onClick={() => swiper?.slideNext()} />
          </div>
        </div>
      </Container>
    </Section>
  )
}