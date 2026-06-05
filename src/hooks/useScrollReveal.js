import { useEffect, useRef, useState } from 'react'

/**
 * Triggers a CSS animation when the element enters the viewport.
 * Usage:
 *   const { ref, isVisible } = useScrollReveal()
 *   <div ref={ref} className={isVisible ? 'animate-fade-up' : 'opacity-0'} />
 */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el) // fire once
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}
