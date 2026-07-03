import { BsCalendar3, BsXCircleFill } from 'react-icons/bs'

export default function EmptyEvents({ title, text, cta, onCta }) {
  return (
    <div className="flex flex-col items-center py-20 text-center md:py-28">
      <span className="relative inline-block text-ink">
        <BsCalendar3 size={56} />
        <BsXCircleFill className="absolute -bottom-1 -right-2 rounded-full bg-white text-accent" size={26} />
      </span>
      <h3 className="mt-8 text-xl font-bold text-ink">{title}</h3>
      {text && <p className="mt-3 text-muted">{text}</p>}
      {cta && (
        <button
          type="button"
          onClick={onCta}
          className="mt-8 rounded-pill bg-accent px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-accent-hover"
        >
          {cta}
        </button>
      )}
    </div>
  )
}