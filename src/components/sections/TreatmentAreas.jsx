import { useState } from 'react'
import { cn } from '@/lib/utils'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Clock, X } from 'lucide-react'

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

function AreaCard({ area, description, detail, duration, image, tag, isActive, onClick, delay, isVisible, isMobile }) {
  const [imgError, setImgError] = useState(false)

  return (
    <article
      onClick={onClick}
      aria-expanded={isActive}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        userSelect: 'none',
        borderRadius: '4px',
        border: isActive
          ? '1px solid rgba(192,160,98,0.65)'
          : '1px solid rgba(192,160,98,0.15)',
        opacity: isVisible ? 1 : 0,
        /* On mobile: use min-height so content never clips.
           On desktop: use aspect-ratio for the uniform grid look. */
        ...(isMobile
          ? { minHeight: isActive ? 'auto' : '260px', height: isActive ? 'auto' : '260px' }
          : { aspectRatio: '3/4' }),
        transition: `opacity 0.7s ease ${delay}ms, transform 0.5s ease, border-color 0.3s ease, box-shadow 0.3s ease`,
        transform: isVisible
          ? isActive && !isMobile ? 'scale(1.02)' : 'translateY(0)'
          : 'translateY(28px)',
        boxShadow: isActive
          ? '0 24px 60px rgba(8,12,20,0.55), 0 0 0 1px rgba(192,160,98,0.12)'
          : '0 4px 24px rgba(8,12,20,0.25)',
      }}
    >
      {/* ── Background image ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          transition: 'transform 0.7s ease',
          transform: isActive ? 'scale(1.08)' : 'scale(1)',
        }}
      >
        {imgError ? (
          <div style={{ height: '100%', width: '100%', background: 'linear-gradient(135deg, #1a1200 0%, #0a0d13 100%)' }} />
        ) : (
          <img
            src={image}
            alt={`${area} treatment area`}
            loading="lazy"
            onError={() => setImgError(true)}
            style={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'top' }}
          />
        )}
      </div>

      {/* ── Vignette ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'linear-gradient(to top, rgba(8,12,20,0.92) 30%, rgba(8,12,20,0.25) 65%, transparent 100%)',
        }}
      />

      {/* ── Dark overlay when active ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'rgba(8,12,20,0.88)',
          opacity: isActive ? 1 : 0,
          transition: 'opacity 0.4s',
        }}
      />

      {/* ── FRONT (collapsed) ── */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: isMobile ? '14px' : '20px',
          opacity: isActive ? 0 : 1,
          transform: isActive ? 'translateY(10px)' : 'translateY(0)',
          transition: 'opacity 0.3s, transform 0.3s',
          pointerEvents: isActive ? 'none' : 'auto',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            marginBottom: '8px',
            padding: '3px 10px',
            fontSize: '9px',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            background: 'rgba(192,160,98,0.9)',
            color: '#2a1e08',
            borderRadius: '2px',
          }}
        >
          {duration}
        </span>
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
            fontWeight: 300,
            fontSize: isMobile ? '1.2rem' : 'clamp(1.3rem, 2.5vw, 1.6rem)',
            letterSpacing: '-0.01em',
            lineHeight: 1.2,
            color: '#fff',
            margin: '0 0 4px',
          }}
        >
          {area}
        </h3>
        <p
          style={{
            fontSize: '9px',
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            color: 'rgba(192,160,98,0.65)',
            margin: 0,
          }}
        >
          {tag}
        </p>
      </div>

      {/* ── DETAIL PANEL (expanded) ── */}
      <div
        style={{
          /* On mobile: normal flow so the card height grows with content.
             On desktop: absolute so it overlays the image. */
          position: isMobile ? 'relative' : 'absolute',
          inset: isMobile ? 'unset' : 0,
          display: isActive ? 'flex' : 'none',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          padding: isMobile ? '40px 16px 16px' : '40px 20px 20px',
          opacity: isActive ? 1 : 0,
          transition: 'opacity 0.4s',
        }}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onClick() }}
          aria-label="Close detail"
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            width: '28px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.2)',
            background: 'rgba(8,12,20,0.5)',
            color: 'rgba(255,255,255,0.6)',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          <X size={11} />
        </button>

        {/* Tag */}
        <span
          style={{
            display: 'inline-block',
            alignSelf: 'flex-start',
            marginBottom: '10px',
            padding: '3px 10px',
            fontSize: '9px',
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            border: '1px solid rgba(192,160,98,0.35)',
            color: 'rgba(192,160,98,0.85)',
            borderRadius: '2px',
          }}
        >
          {tag}
        </span>

        {/* Area name */}
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
            fontWeight: 300,
            fontSize: isMobile ? '1.3rem' : 'clamp(1.4rem, 2.5vw, 1.8rem)',
            letterSpacing: '-0.01em',
            lineHeight: 1.2,
            color: '#fff',
            margin: '0 0 10px',
          }}
        >
          {area}
        </h3>

        {/* Gold rule */}
        <div
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, rgba(192,160,98,0.5), transparent)',
            marginBottom: '12px',
            flexShrink: 0,
          }}
        />

        {/* Description */}
        <p
          style={{
            fontFamily: 'DM Sans, Inter, sans-serif',
            fontSize: isMobile ? '13px' : '14px',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.82)',
            lineHeight: 1.65,
            margin: '0 0 10px',
          }}
        >
          {description}
        </p>

        {/* Clinical detail */}
        <p
          style={{
            fontFamily: 'DM Sans, Inter, sans-serif',
            fontSize: '12px',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.42)',
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {detail}
        </p>

        {/* Duration footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginTop: '14px',
            paddingTop: '12px',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            flexShrink: 0,
          }}
        >
          <Clock size={11} style={{ color: 'rgba(192,160,98,0.7)', flexShrink: 0 }} />
          <span
            style={{
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: 'rgba(192,160,98,0.7)',
              fontFamily: 'DM Sans, Inter, sans-serif',
            }}
          >
            {duration} · Non-surgical
          </span>
        </div>
      </div>

      {/* Gold top shimmer when active */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          pointerEvents: 'none',
          background: 'linear-gradient(90deg, transparent, rgba(192,160,98,0.7), transparent)',
          opacity: isActive ? 1 : 0,
          transition: 'opacity 0.4s',
        }}
      />
    </article>
  )
}

export function TreatmentAreas() {
  const [activeIdx, setActiveIdx] = useState(null)
  const { ref, isVisible } = useScrollReveal()
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 640 : false
  )

  // Track viewport width to switch mobile/desktop layout
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 640)
    }, { once: false })
  }

  const handleClick = (i) => {
    setActiveIdx(prev => prev === i ? null : i)
  }

  return (
    <section
      id="treatments"
      className="relative overflow-hidden px-4 sm:px-6 py-16 sm:py-24 md:py-32"
      style={{ background: 'var(--color-background, #F7F5F0)' }}
    >
      {/* Dot texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(192,160,98,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">

        {/* ── Header ── */}
        <div
          ref={ref}
          className="mb-10 sm:mb-14 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-8 sm:w-10" style={{ background: 'rgba(192,160,98,0.5)' }} />
            <p
              className="text-[10px] uppercase tracking-[0.28em]"
              style={{ color: 'var(--color-gold-deep, #8A6A28)', fontFamily: 'DM Sans, Inter, sans-serif' }}
            >
              Treatment Areas
            </p>
            <div className="h-px w-8 sm:w-10" style={{ background: 'rgba(192,160,98,0.5)' }} />
          </div>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
              fontWeight: 300,
              fontSize: 'clamp(2rem, 8vw, 4.5rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1,
              color: 'var(--color-foreground, #0A0D13)',
            }}
          >
            Where we{' '}
            <em
              style={{
                fontStyle: 'italic',
                background: 'linear-gradient(135deg, #8A6A28, #B8944A, #CCA96A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              transform
            </em>
          </h2>

          <p
            className="mx-auto mt-4 max-w-xl leading-relaxed px-2"
            style={{
              fontSize: 'clamp(14px, 3.5vw, 17px)',
              fontWeight: 400,
              color: '#374151',
              fontFamily: 'DM Sans, Inter, sans-serif',
              lineHeight: '1.8',
            }}
          >
            Six key zones, each treatment mapped to your unique anatomy.{' '}
            <span style={{ color: 'rgba(192,160,98,0.8)' }}>Tap any area to explore.</span>
          </p>
        </div>

        {/* ── Card Grid ──
            Mobile  (<640px): 1 column — cards use min-height, grow when expanded
            Tablet  (640px+): 2 columns — cards use aspect-ratio
            Desktop (1024px+): 3 columns
        ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {AREAS.map((a, i) => (
            <AreaCard
              key={a.area}
              {...a}
              isActive={activeIdx === i}
              onClick={() => handleClick(i)}
              delay={(i % 3) * 80}
              isVisible={isVisible}
              isMobile={isMobile}
            />
          ))}
        </div>

        {/* ── Booking CTA ── */}
        <div
          className="mt-10 sm:mt-14 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 1s ease 0.5s',
          }}
        >
          <a
            href="https://portal.aestheticnursesoftware.com/book-online/1150"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 transition-all duration-300"
            style={{
              padding: 'clamp(12px, 3vw, 14px) clamp(24px, 6vw, 40px)',
              background: 'var(--color-gold, #B8944A)',
              color: '#fff',
              border: '1px solid var(--color-gold, #B8944A)',
              fontSize: 'clamp(10px, 2.5vw, 11px)',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              fontFamily: 'DM Sans, Inter, sans-serif',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'var(--color-gold, #B8944A)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--color-gold, #B8944A)'
              e.currentTarget.style.color = '#fff'
            }}
          >
            Book Your Consultation
          </a>
        </div>

      </div>
    </section>
  )
}