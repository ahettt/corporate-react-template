import { BsArrowUpRight, BsCheck2 } from 'react-icons/bs'
import { cn } from '../../utils/cn'

// mediaClassName — розмір/пропорція прев'ю (різні між сторінками):
//   Університет: 'aspect-[310/183] md:w-[310px]' (дефолт)
//   Заходи:      'aspect-[425/235] md:w-[425px]'
export default function EventCard({ event, mediaClassName = 'aspect-[310/183] md:w-[310px]' }) {
  return (
    <a
      href={event.href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="group block border-b border-gray-200 py-8 transition-colors duration-200 hover:border-accent"
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-10">
        <div className={cn('w-full overflow-hidden md:shrink-0', mediaClassName)}>
          <img src={event.image} alt={event.accent} loading="lazy" className="h-full w-full object-cover" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-bold uppercase leading-snug md:text-2xl lg:text-3xl">
              <span className="text-accent">{event.accent}</span>
              {event.rest && <span className="text-ink"> {event.rest}</span>}
            </h3>
            <BsArrowUpRight
              className="mt-1 shrink-0 text-accent transition-transform duration-300 group-hover:rotate-90"
              size={26}
            />
          </div>

          {event.text && <p className="mt-4 text-muted">{event.text}</p>}

          {event.tags?.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-3">
              {event.tags.map((tag) => (
                <li
                  key={tag}
                  className="inline-flex items-center gap-2 rounded-pill border border-gray-200 px-4 py-1.5 text-sm text-ink"
                >
                  <BsCheck2 className="text-accent" size={18} />
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </a>
  )
}