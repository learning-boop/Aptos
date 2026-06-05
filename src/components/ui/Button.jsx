import { cn } from '@/lib/utils'

const variants = {
  primary:
    'bg-[var(--color-gold)] text-[var(--color-navy)] font-medium ' +
    'hover:bg-[var(--color-gold-light)] ' +
    'border border-[var(--color-gold)] ' +
    'shadow-[0_4px_20px_rgba(192,160,98,0.25)]',

  outline:
    'border border-[var(--color-gold)] text-[var(--color-gold-deep)] bg-transparent ' +
    'hover:bg-[var(--color-gold)]/10',

  ghost:
    'bg-transparent text-[var(--color-foreground)] ' +
    'hover:bg-[var(--color-muted)]',

  'glass-dark':
    'glass-dark text-white border-white/20 ' +
    'hover:border-white/40 hover:bg-white/10',

  navy:
    'bg-[var(--color-navy)] text-white border border-white/10 ' +
    'hover:bg-[var(--color-slate-deep)]',
}

const sizes = {
  sm:  'h-10  px-5  text-[12px] tracking-[0.16em]',
  md:  'h-12  px-7  text-[12px] tracking-[0.16em]',
  lg:  'h-14  px-9  text-[13px] tracking-[0.14em]',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center gap-2 whitespace-nowrap',
        'font-medium uppercase rounded-sm',
        'transition-all duration-300 ease-in-out',
        'cursor-pointer select-none',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]',
        'disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
