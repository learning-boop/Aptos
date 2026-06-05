import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind classes safely (same pattern as original zip build)
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
