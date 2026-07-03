import Breadcrumbs from './Breadcrumbs'
import { cn } from '../../utils/cn'

// Стандартна шапка: крихти + H1 (капс) + помаранчева лінія.
// Лінія — реальний елемент замість ::before (у React чистіше): mobile 288px, ширше на desktop.
export default function PageHeader({ breadcrumbs, title, className }) {
  return (
    <header className={cn('', className)}>
      {breadcrumbs?.length > 0 && <Breadcrumbs items={breadcrumbs} className="mb-4" />}

      <h1 className="text-4xl font-semibold uppercase leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
        {title}
      </h1>

      <span className="mt-6 block h-1 w-72 bg-accent md:w-[600px]" />
    </header>
  )
}