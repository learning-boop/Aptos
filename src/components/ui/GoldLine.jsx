import { cn } from '@/lib/utils'

/**
 * The gold gradient line used as a section divider throughout the original site.
 */
export function GoldLine({ className }) {
  return (
    <div
      className={cn('gold-line h-px w-full opacity-60', className)}
      aria-hidden="true"
    />
  )
}
