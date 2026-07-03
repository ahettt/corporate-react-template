import { cn } from '../../utils/cn'

// tabs = [{ key, label }]; індикатор ковзає, ширина = 100/N%
export default function EventTabs({ tabs, active, onChange }) {
  const activeIndex = Math.max(0, tabs.findIndex((t) => t.key === active))

  return (
    <div className="relative mt-8 md:mt-12">
      <div className="flex">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => onChange(t.key)}
            className={cn(
              'flex-1 px-2 py-4 text-center text-sm font-bold uppercase tracking-wide transition-colors md:text-base',
              t.key === active ? 'text-accent' : 'text-muted hover:text-ink',
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="h-px w-full bg-gray-200" />
      <div
        className="absolute bottom-0 left-0 h-[3px] bg-accent transition-transform duration-300 ease-out"
        style={{ width: `${100 / tabs.length}%`, transform: `translateX(${activeIndex * 100}%)` }}
      />
    </div>
  )
}