import { cn } from '../../utils/cn'

const variants = {
  primary: 'bg-accent text-white hover:bg-accent-hover',
  secondary: 'bg-ink text-white hover:bg-ink/90',
  // Прозора + оранжева рамка/текст → на hover заливка оранжевим, білий текст
  outline: 'border-2 border-accent bg-transparent text-accent hover:bg-accent hover:text-white',
  ghost: 'bg-transparent text-ink hover:bg-ink/5',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  as: Component = 'button',
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={cn(
        'inline-flex items-center justify-center rounded-pill font-medium transition-colors duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}