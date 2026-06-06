import { useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const COMPARISON = [
  { feature: 'General anaesthetic required', aptos: false, surgery: true,  filler: false },
  { feature: 'Hospital stay',                aptos: false, surgery: true,  filler: false },
  { feature: 'Long recovery period',         aptos: false, surgery: true,  filler: false },
  { feature: 'Immediate visible results',    aptos: true,  surgery: true,  filler: true  },
  { feature: 'Collagen stimulation',         aptos: true,  surgery: false, filler: false },
  { feature: 'Biodegradable materials',      aptos: true,  surgery: false, filler: false },
  { feature: 'Lasts 2–3 years',              aptos: true,  surgery: true,  filler: false },
  { feature: 'Return same day',              aptos: true,  surgery: false, filler: true  },
]

const scores = {
  aptos:   COMPARISON.filter(r => r.aptos).length,
  surgery: COMPARISON.filter(r => r.surgery).length,
  filler:  COMPARISON.filter(r => r.filler).length,
}

function Counter({ to, duration = 900 }) {
  const [val, setVal] = useState(0)
  const { ref, isVisible } = useScrollReveal()
  const ran = useRef(false)

  useEffect(() => {
    if (!isVisible || ran.current) return
    ran.current = true
    const steps = 30
    const inc = to / steps
    let cur = 0
    const t = setInterval(() => {
      cur += inc
      if (cur >= to) { setVal(to); clearInterval(t) }
      else setVal(Math.round(cur))
    }, duration / steps)
  }, [isVisible, to, duration])

  return <span ref={ref}>{val}</span>
}

function Cell({ val, isAptos }) {
  return (
    <div className="flex items-center justify-center py-4 md:py-5">
      {val ? (
        <span
          className="flex h-7 w-7 items-center justify-center rounded-full"
          style={{
            background: isAptos
              ? 'linear-gradient(135deg,#9A7B42,#C0A062)'
              : 'rgba(34,197,94,0.12)',
            border: isAptos ? 'none' : '1px solid rgba(34,197,94,0.3)',
          }}
        >
          <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
            <path d="M1 4l3.5 3.5L11 1" stroke={isAptos ? '#fff' : '#22c55e'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      ) : (
        <span
          className="flex h-7 w-7 items-center justify-center rounded-full"
          style={{ background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.2)' }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 2l6 6M8 2L2 8" stroke="#ef4444" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </span>
      )}
    </div>
  )
}

export function WhyAptos() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      className="relative overflow-hidden py-28 md:py-36 px-6"
      style={{ background: 'var(--color-surface, #F3F1ED)' }}
    >
      {/* Background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C0A062' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Glow orb */}
      <div
        className="pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle,#C0A062 0%,transparent 70%)', filter: 'blur(60px)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl">

        {/* Header */}
        <div
          ref={ref}
          className={cn(
            'mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          )}
        >
          <p
            className="mb-5 uppercase"
            style={{ fontSize:'13px', fontWeight:'600', letterSpacing:'0.32em', color:'var(--color-gold-deep)', fontFamily:'Inter,sans-serif' }}
          >
            Why Aptos
          </p>

          <div className="mb-7 h-px w-12" style={{ background:'linear-gradient(90deg,var(--color-gold),transparent)' }} />

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="font-serif"
              style={{ fontSize:'clamp(2.2rem,5vw,3.4rem)', fontWeight:'400', color:'var(--color-foreground)', lineHeight:'1.08', letterSpacing:'-0.01em' }}
            >
              The intelligent{' '}
              <em className="not-italic text-gradient-gold" style={{ fontStyle:'italic' }}>alternative</em>
            </h2>

            <p
              className="max-w-xs"
              style={{ fontSize:'17px', fontWeight:'500', color:'#1F2937', fontFamily:'Inter,sans-serif', lineHeight:'1.8' }}
            >
              See how Aptos thread lifting compares to other facial rejuvenation options.
            </p>
          </div>
        </div>

        {/* Score cards */}
        <div
          className={cn(
            'mb-10 grid grid-cols-3 gap-4 transition-all duration-700 delay-200',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          )}
        >
          {[
            { label: 'Aptos Threads',    score: scores.aptos,   highlight: true,  sub: 'Our recommendation' },
            { label: 'Surgical Facelift', score: scores.surgery, highlight: false, sub: 'Invasive option'    },
            { label: 'Dermal Fillers',   score: scores.filler,  highlight: false, sub: 'Volume only'        },
          ].map(({ label, score, highlight, sub }) => (
            <div
              key={label}
              className="relative flex flex-col items-center rounded-2xl px-4 py-6 text-center transition-all duration-300"
              style={{
                background: highlight ? 'linear-gradient(145deg,#0F172A 0%,#1E293B 100%)' : '#fff',
                border: highlight ? '1px solid rgba(192,160,98,0.4)' : '1px solid rgba(15,23,42,0.1)',
                boxShadow: highlight
                  ? '0 20px 50px rgba(15,23,42,0.25), 0 0 0 1px rgba(192,160,98,0.15)'
                  : '0 2px 16px rgba(15,23,42,0.06)',
              }}
            >
              {highlight && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1"
                  style={{ background:'var(--color-gold)', fontSize:'9px', fontWeight:'600', letterSpacing:'0.2em', textTransform:'uppercase', color:'#0F172A', fontFamily:'Inter,sans-serif' }}
                >
                  Recommended
                </span>
              )}

              <div
                className="mb-1 font-serif"
                style={{ fontSize:'2.8rem', fontWeight:'300', lineHeight:'1', color: highlight ? '#fff' : 'var(--color-foreground)' }}
              >
                <Counter to={score} />
                <span style={{ fontSize:'1.4rem', color: highlight ? 'var(--color-gold)' : 'var(--color-gold-deep)' }}>/8</span>
              </div>

              {/* Card label — increased */}
              <p
                className="mb-1"
                style={{ fontSize:'13px', fontWeight:'600', letterSpacing:'0.05em', color: highlight ? '#fff' : '#111827', fontFamily:'Inter,sans-serif' }}
              >
                {label}
              </p>
              {/* Card sub — increased */}
              <p
                style={{ fontSize:'13px', fontWeight:'500', color: highlight ? 'rgba(255,255,255,0.55)' : '#4B5563', fontFamily:'Inter,sans-serif' }}
              >
                {sub}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div
          className={cn(
            'overflow-hidden rounded-2xl transition-all duration-700 delay-300',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          )}
          style={{ border:'1px solid rgba(15,23,42,0.1)', boxShadow:'0 4px 32px rgba(15,23,42,0.08)' }}
        >
          {/* Column headers */}
          <div className="grid grid-cols-4" style={{ background:'var(--color-navy)' }}>
            <div className="px-4 py-4 md:px-6 md:py-5">
              <span style={{ fontSize:'12px', fontWeight:'600', letterSpacing:'0.22em', textTransform:'uppercase', color:'rgba(255,255,255,0.4)', fontFamily:'Inter,sans-serif' }}>
                Feature
              </span>
            </div>
            {[
              { label:'Aptos Threads',     isAptos: true  },
              { label:'Surgical Facelift', isAptos: false },
              { label:'Dermal Fillers',    isAptos: false },
            ].map(({ label, isAptos }) => (
              <div
                key={label}
                className="flex items-center justify-center px-2 py-4 md:py-5 text-center"
                style={isAptos ? {
                  background:'rgba(192,160,98,0.1)',
                  borderLeft:'1px solid rgba(192,160,98,0.25)',
                  borderRight:'1px solid rgba(192,160,98,0.25)',
                } : {}}
              >
                <p style={{
                  fontSize:'clamp(12px,1.5vw,14px)',
                  fontWeight: isAptos ? '600' : '500',
                  color: isAptos ? 'var(--color-gold)' : 'rgba(255,255,255,0.55)',
                  fontFamily:'Inter,sans-serif',
                  lineHeight:'1.3',
                }}>
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* Rows */}
          {COMPARISON.map(({ feature, aptos, surgery, filler }, i) => (
            <div
              key={feature}
              className="grid grid-cols-4 transition-colors duration-150 hover:bg-[rgba(192,160,98,0.03)]"
              style={{
                background: i % 2 === 0 ? '#fff' : 'var(--color-background, #FAFAF8)',
                borderTop: '1px solid rgba(15,23,42,0.07)',
              }}
            >
              {/* Feature label — increased */}
              <div className="flex items-center px-4 py-0 md:px-6">
                <span style={{ fontSize:'clamp(14px,1.8vw,15px)', fontWeight:'500', color:'#111827', fontFamily:'Inter,sans-serif', lineHeight:'1.5' }}>
                  {feature}
                </span>
              </div>

              <div
                className="flex items-center justify-center"
                style={{ background:'rgba(192,160,98,0.05)', borderLeft:'1px solid rgba(192,160,98,0.18)', borderRight:'1px solid rgba(192,160,98,0.18)' }}
              >
                <Cell val={aptos} isAptos={true} />
              </div>

              <div className="flex items-center justify-center">
                <Cell val={surgery} isAptos={false} />
              </div>

              <div className="flex items-center justify-center">
                <Cell val={filler} isAptos={false} />
              </div>
            </div>
          ))}

          {/* Bottom CTA strip */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5"
            style={{ background:'var(--color-navy)', borderTop:'1px solid rgba(192,160,98,0.15)' }}
          >
            <p style={{ fontSize:'15px', fontWeight:'500', color:'rgba(255,255,255,0.85)', fontFamily:'Inter,sans-serif' }}>
              Ready to experience the Aptos difference?
            </p>
            <a
              href="https://portal.aestheticnursesoftware.com/book-online/1150"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 shrink-0 transition-all duration-300 hover:bg-transparent hover:text-[var(--color-gold)]"
              style={{
                padding:'11px 24px',
                background:'var(--color-gold)',
                color:'var(--color-navy)',
                border:'1px solid var(--color-gold)',
                borderRadius:'2px',
                fontSize:'13px',
                fontWeight:'600',
                letterSpacing:'0.2em',
                textTransform:'uppercase',
                fontFamily:'Inter,sans-serif',
                cursor:'pointer',
                textDecoration:'none',
              }}
            >
              Reserve Your Consultation
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom note */}
        <p
          className="mt-6 text-center"
          style={{ fontSize:'13px', fontWeight:'500', color:'#6B7280', fontFamily:'Inter,sans-serif' }}
        >
          Results and suitability vary per individual. A personalised consultation will determine your ideal treatment.
        </p>
      </div>
    </section>
  )
}