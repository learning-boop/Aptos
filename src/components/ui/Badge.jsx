import { cn } from '@/lib/utils'

/**
 * Small pill badge — used in the hero eyebrow label.
 */
export function Badge({ children, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5',
        'px-3 py-1 rounded-full',
        'text-[11px] font-medium tracking-luxe uppercase',
        'border border-[var(--color-gold)]/30',
        'text-[var(--color-gold-deep)]',
        'bg-[var(--color-gold)]/10',
        className,
      )}
    >
      {children}
    </span>
  )
}
