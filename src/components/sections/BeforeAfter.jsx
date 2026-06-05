import { cn } from '@/lib/utils'
import { useScrollReveal } from '@/hooks/useScrollReveal'

/* ─── Real before/after images from drmatla.com ─────────────────────────── */
const RESULTS = [
  {
    id: 1,
    area: 'Jawline & Jowl Lift',
    weeks: '6 weeks post-treatment',
    img: 'https://drmatla.com/wp-content/uploads/2025/08/Aptos-Threadlift-Before-and-After.jpg',
    imgThumb: 'https://drmatla.com/wp-content/uploads/2025/08/Aptos-Threadlift-Before-and-After-400x284.jpg',
  },
  {
    id: 2,
    area: 'Mid-Face & Cheek Lift',
    weeks: '8 weeks post-treatment',
    img: 'https://drmatla.com/wp-content/uploads/2025/08/Aptos-Threadlift-Before-and-After-1.jpg',
    imgThumb: 'https://drmatla.com/wp-content/uploads/2025/08/Aptos-Threadlift-Before-and-After-1-400x284.jpg',
  },
  {
    id: 3,
    area: 'Full Face Lift',
    weeks: '4 weeks post-treatment',
    img: 'https://drmatla.com/wp-content/uploads/2024/07/Aptos-Thread-Lift.jpg',
    imgThumb: 'https://drmatla.com/wp-content/uploads/2024/07/Aptos-Thread-Lift-400x284.jpg',
  },
  {
    id: 4,
    area: 'Brow & Temple Lift',
    weeks: '6 weeks post-treatment',
    img: 'https://drmatla.com/wp-content/uploads/2024/07/Aptos-Thread-Lift-1.jpg',
    imgThumb: 'https://drmatla.com/wp-content/uploads/2024/07/Aptos-Thread-Lift-1-400x284.jpg',
  },
]

/* ─── ResultCard ─────────────────────────────────────────────────────────── */
function ResultCard({ area, weeks, img, imgThumb, delay }) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={cn(
        'group rounded-2xl overflow-hidden transition-all duration-700',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
      )}
      style={{
        transitionDelay: `${delay}ms`,
        background: 'rgba(15,23,42,0.6)',
        border: '1px solid rgba(192,160,98,0.15)',
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={imgThumb}
          data-full={img}
          alt={`${area} Aptos Thread Lift before and after — Dr Matla Clinic`}
          className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
          onError={(e) => {
            // fallback to full-size if thumbnail fails
            e.currentTarget.src = e.currentTarget.dataset.full
          }}
        />

        {/* Before / After labels */}
        <div
          className="absolute top-3 left-3 rounded-full px-2.5 py-1"
          style={{ background: 'rgba(15,23,42,0.7)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.12)' }}
        >
          <span className="text-[11px] text-white/60 tracking-wider uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
            Before
          </span>
        </div>
        <div
          className="absolute top-3 right-3 rounded-full px-2.5 py-1"
          style={{ background: 'rgba(192,160,98,0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(192,160,98,0.35)' }}
        >
          <span className="text-[11px] text-[var(--color-gold)] tracking-wider uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
            After
          </span>
        </div>

        {/* Centre divider line */}
        <div className="absolute inset-y-0 left-1/2 w-px bg-white/15" />
      </div>

      {/* Info bar */}
      <div
        className="px-5 py-4 flex items-center justify-between"
        style={{ borderTop: '1px solid rgba(192,160,98,0.1)' }}
      >
        <div>
          <p
            className="text-[12px] font-medium text-white/80 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {area}
          </p>
          <p
            className="text-[11px] text-white/35 mt-0.5 tracking-wide"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {weeks}
          </p>
        </div>
        {/* Real results pill */}
        <span
          className="text-[8.5px] tracking-[0.14em] uppercase px-2.5 py-1 rounded-full"
          style={{
            fontFamily: 'Inter, sans-serif',
            background: 'rgba(192,160,98,0.1)',
            border: '1px solid rgba(192,160,98,0.25)',
            color: 'var(--color-gold)',
          }}
        >
          Real Patient
        </span>
      </div>
    </div>
  )
}

/* ─── BeforeAfter ────────────────────────────────────────────────────────── */
export function BeforeAfter() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      id="results"
      className="relative overflow-hidden py-28 md:py-36"
      style={{ background: 'var(--color-navy)' }}
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute right-0 top-0 h-[60%] w-[40%] opacity-[0.05]"
          style={{ background: 'radial-gradient(ellipse at 90% 10%, #C0A062 0%, transparent 70%)' }}
        />
        <div
          className="absolute left-0 bottom-0 h-[50%] w-[40%] opacity-[0.04]"
          style={{ background: 'radial-gradient(ellipse at 10% 90%, #7DD3FC 0%, transparent 70%)' }}
        />
        {/* Top hairline */}
        <div
          className="absolute inset-x-0 top-0 h-px opacity-20"
          style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[90rem] px-6 md:px-16">

        {/* Header */}
        <div
          ref={ref}
          className={cn(
            'mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          )}
        >
          {/* Eyebrow */}
          <p
            className="mb-6 text-[11px] uppercase tracking-[0.34em] text-[var(--color-gold)]/60"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Real Patient Results
          </p>

          {/* Gold rule */}
          <div
            className="mb-8 h-px w-12 bg-[var(--color-gold)]/35"
            aria-hidden="true"
          />

          {/* Heading */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="text-[2.6rem] font-light leading-[1.08] tracking-[-0.01em] text-white sm:text-[3rem] md:text-[3.4rem]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Before &amp;{' '}
              <em className="not-italic" style={{ color: 'var(--color-gold)' }}>After</em>
            </h2>

            <p
              className="max-w-sm text-[0.875rem] font-light leading-[1.8] text-white/40 md:text-right"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Real results from real patients at Dr Matla Clinic —
              natural enhancement, not transformation.
            </p>
          </div>
        </div>

        {/* Cards grid — 2 col on md, 4 col on xl */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {RESULTS.map((r, i) => (
            <ResultCard key={r.id} {...r} delay={i * 100} />
          ))}
        </div>

        {/* Disclaimer + CTA row */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p
            className="text-[11px] text-white/25 tracking-wide"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Results may vary. All images are real patients from Dr Matla Clinic who have provided consent.
            Images sourced from{' '}
            <a
              href="https://drmatla.com/aptos-tread-lift-before-and-after-results/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 text-white/35 hover:text-[var(--color-gold)]/60 transition-colors"
            >
              drmatla.com
            </a>
          </p>

          <button
            type="button"
            className="group inline-flex items-center gap-3 border border-[var(--color-gold)] bg-[var(--color-gold)] px-8 py-[14px] text-[9.5px] font-medium uppercase tracking-[0.22em] text-[var(--color-navy)] transition-all duration-300 hover:bg-transparent hover:text-[var(--color-gold)] shrink-0"
            style={{ fontFamily: 'Inter, sans-serif', borderRadius: '2px' }}
          >
            Book Consultation
            <svg
              width="12" height="12" viewBox="0 0 14 14" fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom gold hairline */}
      <div
        className="absolute inset-x-0 bottom-0 z-10 h-px opacity-20"
        style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)' }}
        aria-hidden="true"
      />
    </section>
  )
}
