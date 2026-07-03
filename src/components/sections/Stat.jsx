import { cn } from '../../utils/cn'
import { useInView } from '../../hooks/useInView'

export default function Stat({ value, text, index = 0 }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 90}ms` }}
      className={cn(
        'transition-all duration-700 ease-out',
        inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
      )}
    >
      <p className="font-display text-5xl font-medium text-accent sm:text-6xl">{value}</p>
      <p className="mt-3 max-w-xs text-base leading-relaxed text-muted">{text}</p>
    </div>
  )
}