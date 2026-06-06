
import { useState, useEffect, useRef, useCallback } from 'react'
import { cn } from '@/lib/utils'
import { GoldLine } from '@/components/ui/GoldLine'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Star, ChevronLeft, ChevronRight, Quote, ExternalLink } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Sarah M.',
    age: 49,
    area: 'Jawline & Neck',
    rating: 5,
    quote: 'The results are absolutely incredible. I look like myself, just 10 years younger. The team made me feel completely at ease throughout, and I was back to work the next day.',
    weeks: '3 months post-treatment',
    platform: 'Google',
    initials: 'SM',
  },
  {
    name: 'Diane K.',
    age: 54,
    area: 'Mid-Face Lift',
    rating: 5,
    quote: "I was nervous about any procedure but this was so much gentler than I expected. My cheekbones are back and friends keep asking if I've had a holiday. The best investment I've made.",
    weeks: '6 weeks post-treatment',
    platform: 'Google',
    initials: 'DK',
  },
  {
    name: 'Rachel T.',
    age: 46,
    area: 'Brow & Temple',
    rating: 5,
    quote: "I'd been considering a surgical brow lift for years. This achieved the same result with no downtime whatsoever. I'm absolutely delighted and have already recommended it to three friends.",
    weeks: '4 weeks post-treatment',
    platform: 'Trustpilot',
    initials: 'RT',
  },
  {
    name: 'Amanda P.',
    age: 52,
    area: 'Full Face',
    rating: 5,
    quote: 'The attention to detail and the personalised approach truly set this clinic apart. My results look completely natural — exactly what I wanted. Will definitely be returning.',
    weeks: '8 weeks post-treatment',
    platform: 'Google',
    initials: 'AP',
  },
]

function Stars({ count }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="text-[var(--color-gold)] fill-[var(--color-gold)]" />
      ))}
    </div>
  )
}

function PlatformBadge({ platform }) {
  const isGoogle = platform === 'Google'
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide"
      style={{
        background: isGoogle ? 'rgba(66,133,244,0.12)' : 'rgba(0,185,100,0.12)',
        border: `1px solid ${isGoogle ? 'rgba(66,133,244,0.3)' : 'rgba(0,185,100,0.3)'}`,
        color: isGoogle ? '#4285F4' : '#00B964',
      }}
    >
      {isGoogle ? (
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      ) : (
        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
        </svg>
      )}
      {platform} Verified
      <ExternalLink size={8} />
    </span>
  )
}

/* Desktop-only card — shown in 3-col peek grid */
function TestimonialCard({ t, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'relative rounded-2xl p-6 md:p-8 cursor-pointer select-none w-full',
        'transition-all duration-500 ease-out',
        isActive
          ? 'opacity-100 scale-100'
          : 'opacity-40 scale-[0.96] hover:opacity-60',
      )}
      style={{
        background: isActive
          ? 'linear-gradient(135deg, rgba(192,160,98,0.08) 0%, rgba(15,28,55,0.9) 100%)'
          : 'rgba(15,28,55,0.5)',
        border: isActive
          ? '1px solid rgba(192,160,98,0.35)'
          : '1px solid rgba(255,255,255,0.06)',
        boxShadow: isActive
          ? '0 0 0 1px rgba(192,160,98,0.1), 0 20px 60px rgba(0,0,0,0.4)'
          : 'none',
        backdropFilter: 'blur(12px)',
      }}
    >
      {isActive && (
        <Quote size={32} className="text-[var(--color-gold)]/15 absolute top-6 right-6" aria-hidden />
      )}

      <div className="flex items-center gap-3 mb-4">
        <Stars count={t.rating} />
        <PlatformBadge platform={t.platform} />
      </div>

      <blockquote
        className={cn(
          'font-serif leading-relaxed mb-6 italic transition-all duration-500',
          isActive ? 'text-white text-lg md:text-xl' : 'text-white/70 text-base line-clamp-3',
        )}
      >
        "{t.quote}"
      </blockquote>

      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
          style={{
            background: 'linear-gradient(135deg, rgba(192,160,98,0.25), rgba(192,160,98,0.08))',
            border: '1px solid rgba(192,160,98,0.35)',
          }}
        >
          <span className="font-serif text-sm text-[var(--color-gold)]">{t.initials}</span>
        </div>
        <div>
          <p className="text-white font-medium text-[13px]">{t.name}, {t.age}</p>
          <p className="text-white/45 text-[11px] font-light">{t.area} · {t.weeks}</p>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  const [active, setActive] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState(null)
  const { ref, isVisible } = useScrollReveal()

  const count = TESTIMONIALS.length

  const prev = useCallback(() => {
    setActive(i => (i - 1 + count) % count)
    setIsAutoPlaying(false)
  }, [count])

  const next = useCallback(() => {
    setActive(i => (i + 1) % count)
    setIsAutoPlaying(false)
  }, [count])

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return
    const id = setInterval(() => setActive(i => (i + 1) % count), 5000)
    return () => clearInterval(id)
  }, [isAutoPlaying, count])

  // Keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next])

  // Native touch swipe for mobile
  const onTouchStart = (e) => setTouchStart(e.touches[0].clientX)
  const onTouchEnd = (e) => {
    if (touchStart === null) return
    const delta = touchStart - e.changedTouches[0].clientX
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev()
    setTouchStart(null)
  }

  const t = TESTIMONIALS[active]

  return (
    <section className="py-20 md:py-32 bg-[var(--color-navy)] overflow-hidden" id="reviews">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div
          ref={ref}
          className={cn(
            'text-center mb-10 md:mb-14 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          )}
        >
          <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--color-gold)] mb-4">
            Patient Stories
          </p>
          <GoldLine className="w-16 mx-auto mb-6 opacity-40" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Real <em className="italic text-gradient-gold">experiences</em>
          </h2>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <div className="flex items-center gap-0.5">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={14} className="text-[var(--color-gold)] fill-[var(--color-gold)]" />
              ))}
            </div>
            <span className="text-white/80 text-[13px] font-light">4.9</span>
            <span className="text-white/40 text-[12px]">· Based on 200+ verified reviews</span>
          </div>
        </div>

        {/* ── MOBILE carousel (< md) — full-width single sliding card ── */}
        <div
          className="md:hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Slide window */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {TESTIMONIALS.map((item, i) => (
                <div key={i} className="w-full shrink-0 px-1">
                  <div
                    className="rounded-2xl p-6 w-full"
                    style={{
                      background: 'linear-gradient(135deg, rgba(192,160,98,0.08) 0%, rgba(15,28,55,0.9) 100%)',
                      border: '1px solid rgba(192,160,98,0.35)',
                      boxShadow: '0 0 0 1px rgba(192,160,98,0.1), 0 20px 60px rgba(0,0,0,0.4)',
                    }}
                  >
                    {/* Stars + badge */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <Stars count={item.rating} />
                      <PlatformBadge platform={item.platform} />
                    </div>

                    {/* Quote */}
                    <blockquote className="font-serif text-[17px] leading-relaxed text-white italic mb-6">
                      "{item.quote}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                        style={{
                          background: 'linear-gradient(135deg, rgba(192,160,98,0.25), rgba(192,160,98,0.08))',
                          border: '1px solid rgba(192,160,98,0.35)',
                        }}
                      >
                        <span className="font-serif text-sm text-[var(--color-gold)]">{item.initials}</span>
                      </div>
                      <div>
                        <p className="text-white font-medium text-[13px]">{item.name}, {item.age}</p>
                        <p className="text-white/45 text-[11px] font-light">{item.area} · {item.weeks}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile controls */}
          <div className="mt-6 flex items-center justify-between px-1">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setActive(i); setIsAutoPlaying(false) }}
                  className={cn(
                    'rounded-full transition-all duration-300',
                    i === active
                      ? 'w-6 h-1.5 bg-[var(--color-gold)]'
                      : 'w-1.5 h-1.5 bg-white/25 hover:bg-white/50',
                  )}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:border-[var(--color-gold)]/50 hover:text-[var(--color-gold)] transition-all duration-200"
                aria-label="Previous review"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:border-[var(--color-gold)]/50 hover:text-[var(--color-gold)] transition-all duration-200"
                aria-label="Next review"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* ── DESKTOP 3-card peek layout (≥ md) ── */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="grid grid-cols-3 gap-4 items-start">
              {[-1, 0, 1].map(offset => {
                const idx = (active + offset + count) % count
                return (
                  <TestimonialCard
                    key={idx}
                    t={TESTIMONIALS[idx]}
                    isActive={offset === 0}
                    onClick={() => {
                      if (offset !== 0) { offset > 0 ? next() : prev() }
                    }}
                  />
                )
              })}
            </div>
            {/* Gradient fade edges */}
            <div
              className="absolute inset-y-0 left-0 w-8 pointer-events-none z-10"
              style={{ background: 'linear-gradient(90deg, var(--color-navy), transparent)' }}
            />
            <div
              className="absolute inset-y-0 right-0 w-8 pointer-events-none z-10"
              style={{ background: 'linear-gradient(270deg, var(--color-navy), transparent)' }}
            />
          </div>

          {/* Desktop controls */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setActive(i); setIsAutoPlaying(false) }}
                  className={cn(
                    'rounded-full transition-all duration-300',
                    i === active
                      ? 'w-6 h-1.5 bg-[var(--color-gold)]'
                      : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40',
                  )}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-3">
              {isAutoPlaying && (
                <div className="relative w-7 h-7">
                  <svg className="w-7 h-7 -rotate-90" viewBox="0 0 28 28">
                    <circle cx="14" cy="14" r="11" fill="none" stroke="rgba(192,160,98,0.15)" strokeWidth="2"/>
                    <circle
                      cx="14" cy="14" r="11"
                      fill="none"
                      stroke="rgba(192,160,98,0.7)"
                      strokeWidth="2"
                      strokeDasharray="69.1"
                      strokeDashoffset="0"
                      strokeLinecap="round"
                      style={{ animation: 'carousel-progress 5s linear infinite' }}
                    />
                  </svg>
                </div>
              )}
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:border-[var(--color-gold)]/50 hover:text-[var(--color-gold)] transition-all duration-200"
                aria-label="Previous review"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:border-[var(--color-gold)]/50 hover:text-[var(--color-gold)] transition-all duration-200"
                aria-label="Next review"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Trust strip — wraps on mobile */}
        
      </div>

      <style>{`
        @keyframes carousel-progress {
          from { stroke-dashoffset: 69.1; }
          to   { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  )
}




