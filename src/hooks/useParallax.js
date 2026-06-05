import { useEffect, useRef } from 'react'

/**
 * Subtle parallax offset on scroll — used for the hero background layer.
 * @param {number} speed  — 0 = no movement, 0.5 = half scroll speed
 */
export function useParallax(speed = 0.35) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleScroll = () => {
      const scrollY = window.scrollY
      el.style.transform = `translateY(${scrollY * speed}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return ref
}
