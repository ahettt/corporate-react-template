import { cn } from '../../utils/cn'

export default function Section({
  as: Component = 'section',
  className,
  children,
  ...props
}) {
  return (
    <Component className={cn('py-16 md:py-24', className)} {...props}>
      {children}
    </Component>
  )
}