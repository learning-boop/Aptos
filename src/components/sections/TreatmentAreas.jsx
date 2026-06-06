import { useState } from 'react'
import { cn } from '@/lib/utils'
import { GoldLine } from '@/components/ui/GoldLine'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { ArrowRight } from 'lucide-react'

const AREAS = [
  {
    area: 'Brow & Temple',
    duration: '30 min',
    image: '/treat-1.png',
    description:
      'Lifts heavy, drooping brows and opens the eye area to restore a refreshed, alert expression without any surgical intervention.',
    detail:
      'Threads are placed along the lateral brow and temporal hairline, anchoring to the superficial temporal fascia. The vector lift counteracts the descent of the brow tail, elevating up to 4–6 mm for an immediately visible aperture-opening effect.',
    tag: 'Brow elevation',
  },
  {
    area: 'Mid-Face',
    duration: '45 min',
    image: '/treat-22.png',
    description:
      'Restores lost cheekbone projection and lifts descended malar fat pads to reconstruct the heart-shaped facial contour of youth.',
    detail:
      'Aptos Spring Lift threads are inserted in a fan pattern from the temporal anchor point, repositioning the malar soft tissue superolaterally. This simultaneously softens nasolabial folds and restores lateral cheek fullness without adding volume.',
    tag: 'Malar restoration',
  },
  {
    area: 'Jawline',
    duration: '45 min',
    image: '/treat-3.png',
    description:
      'Redefines a softened jawline and reduces jowling — restoring the sharp, sculpted silhouette that time has gradually eroded.',
    detail:
      'Bidirectional barbed threads are placed along the mandibular border in a subdermal plane, physically compressing and repositioning jowl tissue. The result is a crisper jaw angle and improved mandibular definition visible from all angles.',
    tag: 'Mandible definition',
  },
  {
    area: 'Neck',
    duration: '60 min',
    image: '/treat-4.png',
    description:
      'Tightens loose neck skin, smooths platysmal banding and restores the elegant, uninterrupted line from chin to shoulder.',
    detail:
      'A combination of vertical and horizontal Aptos threads addresses both skin laxity and muscular banding. Vertical threads lift the cervical skin while horizontal threads tighten the platysma, eliminating cords and restoring a smooth cervical profile.',
    tag: 'Cervical lift',
  },
  {
    area: 'Nasolabial Folds',
    duration: '30 min',
    image: '/treat-51.png',
    description:
      'Softens deep smile lines by addressing their root cause — repositioning the descended tissue that creates the fold, not masking it with filler.',
    detail:
      'Unlike volumising fillers, Aptos threads treat nasolabial folds by lifting the causative malar tissue superiorly. This mechanically reduces the depth of the fold while simultaneously improving midface contour — a structurally superior approach.',
    tag: 'Structural correction',
  },
  {
    area: 'Décolletage',
    duration: '45 min',
    image: '/treat-6.png',
    description:
      'Visibly improves crepey skin texture, fine lines and laxity on the chest — an area often overlooked yet among the first to reveal age.',
    detail:
      'Smooth Aptos mono-threads are placed in a mesh pattern across the décolletage to stimulate collagen and elastin production. The primary mechanism is regenerative, improving dermal thickness and elasticity over 3–6 months.',
    tag: 'Regenerative mesh',
  },
]

function AreaCard({ area, description, detail, duration, image, tag, delay }) {
  const { ref, isVisible } = useScrollReveal()
  const [imgError, setImgError] = useState(false)

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <article
        className={cn(
          'group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[20px] bg-white',
          'border border-[rgba(192,160,98,0.2)]',
          'transition-all duration-300 hover:-translate-y-1',
          'hover:border-[rgba(192,160,98,0.5)]',
          'hover:shadow-[0_16px_40px_rgba(197,168,110,0.14)]',
          'shadow-[0_2px_16px_rgba(15,23,42,0.06)]',
        )}
      >
        {/* ── Image ── */}
        <div className="relative h-[200px] overflow-hidden bg-[#f0ebe2]">
          {imgError ? (
            <div className="h-full w-full bg-gradient-to-br from-[#e8dfc8] to-[rgba(192,160,98,0.3)]" />
          ) : (
            <img
              src={image}
              alt={`${area} Aptos thread lift treatment`}
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          )}

          {/* Bottom vignette */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(20,15,8,0.6)]" />

          {/* Duration badge */}
          <span
            className="absolute right-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] backdrop-blur-sm"
            style={{ background: 'rgba(192,160,98,0.92)', color: '#2a1e08' }}
          >
            {duration}
          </span>

          {/* Zone label */}
          <h3 className="absolute bottom-3 left-3.5 font-serif text-xl font-normal leading-none text-white drop-shadow-sm">
            {area}
          </h3>
        </div>

        {/* ── Body ── */}
        <div className="flex flex-1 flex-col px-5 pb-6 pt-5">

          {/* Description — primary text, clearly readable */}
          <p
            className="leading-[1.75]"
            style={{
              fontSize: '14px',
              fontWeight: "500",
              color: '#1F2937',        /* dark grey — high contrast on white */
              fontFamily: 'Inter, sans-serif',
            }}
          >
            {description}
          </p>

          {/* Detail — secondary text, still readable */}
          <p
            className="mt-3.5 pt-3 leading-[1.7]"
            style={{
              fontSize: '12.5px',
              fontWeight: "500",
              color: '#4B5563',        /* medium grey — clearly visible */
              fontFamily: 'Inter, sans-serif',
              borderTop: '1px solid rgba(192,160,98,0.18)',
            }}
          >
            {detail}
          </p>

          {/* ── Meta row ── */}
          <div className="mt-auto flex items-center justify-between pt-4">
            <span
              className="rounded px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]"
              style={{
                border: '1px solid rgba(154,123,66,0.35)',
                color: '#9A7B42',
                background: 'rgba(192,160,98,0.06)',
              }}
            >
              {tag}
            </span>
            <ArrowRight
              size={13}
              className="transition-all duration-300 group-hover:translate-x-[3px]"
              style={{ color: 'rgba(192,160,98,0.6)' }}
            />
          </div>
        </div>
      </article>
    </div>
  )
}

export function TreatmentAreas() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      id="treatments"
      className="relative overflow-hidden px-6 py-24 md:py-32"
      style={{ background: 'var(--color-background)' }}
    >
      {/* Subtle dot texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(192,160,98,0.07) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">

        {/* ── Header ── */}
        <div
          ref={ref}
          className={cn(
            'mb-14 text-center transition-all duration-700',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          )}
        >
          <p
            className="mb-4 uppercase"
            style={{
              fontSize: '10px',
              fontWeight: '600',
              letterSpacing: '0.28em',
              color: 'var(--color-gold-deep)',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Treatment Areas
          </p>

          <GoldLine className="mx-auto mb-6 w-16 opacity-40" />

          <h2
            className="mb-4 font-serif"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              fontWeight: '400',
              color: 'var(--color-foreground)',
              lineHeight: '1.1',
            }}
          >
            Where we{' '}
            <em className="italic text-gradient-gold">transform</em>
          </h2>

          <p
            className="mx-auto max-w-xl leading-relaxed"
            style={{
              fontSize: 'clamp(15px, 2.5vw, 16px)',
              fontWeight: "500",
              color: '#374151',        /* darker than muted-foreground for readability */
              fontFamily: 'Inter, sans-serif',
              lineHeight: '1.75',
            }}
          >
            Aptos threads can be precisely placed across six key facial and body zones — each
            treatment mapped to your unique anatomy for results that look unmistakably natural.
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((a, i) => (
            <AreaCard key={a.area} {...a} delay={(i % 3) * 90} />
          ))}
        </div>
      </div>
    </section>
  )
}