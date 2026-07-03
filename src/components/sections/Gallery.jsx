import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { BsHandIndex, BsHandIndexFill } from 'react-icons/bs'
import { GALLERY_IMAGES } from '../../constants/gallery'
import { cn } from '../../utils/cn'
import Section from '../ui/Section'

function DragHint({ hidden }) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute left-1/2 top-1/2 z-20 h-20 w-20 -translate-x-1/2 -translate-y-1/2',
        'rounded-full bg-white shadow-lg transition-opacity duration-500',
        hidden ? 'opacity-0' : 'opacity-100',
      )}
    >
      {/* Стрілка <-> справа — ПІД рукою (рендериться першою) */}
      <svg viewBox="0 0 40 12" className="absolute right-1.5 top-[20px] h-3 w-10">
        <rect
          x="12"
          y="5"
          width="16"
          height="2"
          rx="1"
          fill="#ff6400"
          className="animate-hint-arrow-line"
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        />
        <polyline
          points="16 2 12 6 16 10"
          fill="none"
          stroke="#ff6400"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-hint-arrow-left"
        />
        <polyline
          points="24 2 28 6 24 10"
          fill="none"
          stroke="#ff6400"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-hint-arrow-right"
        />
      </svg>

      {/* Рука — НЕПРОЗОРА (білий fill + чорний контур), ПОВЕРХ стрілки */}
      <div className="absolute inset-x-0 bottom-4 flex justify-center">
        <div className="relative h-10 w-10 origin-bottom animate-hint-hand">
          <BsHandIndexFill className="absolute inset-0 h-full w-full text-white" />
          <BsHandIndex className="absolute inset-0 h-full w-full text-black" />
        </div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [hintHidden, setHintHidden] = useState(false)

  return (
    <Section className="overflow-hidden">
      <div className="relative">
        <Swiper
          loop
          centeredSlides
          slidesPerView={4}
          spaceBetween={16}
          onSliderMove={() => setHintHidden(true)}
        >
          {GALLERY_IMAGES.map((src, i) => (
            <SwiperSlide key={i}>
              <img
                src={src}
                alt=""
                aria-hidden="true"
                className="h-[250px] w-full rounded-xl object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <DragHint hidden={hintHidden} />
      </div>
    </Section>
  )
}