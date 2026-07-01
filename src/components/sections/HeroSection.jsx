import { useRef, useState, useEffect } from 'react'
import { ArrowRight, VolumeX, Volume2 } from 'lucide-react'
import { cn } from '@/lib/utils'

if (typeof document !== 'undefined' && !document.querySelector('[href*="Playfair+Display"]')) {
  const fontLink = document.createElement('link')
  fontLink.rel  = 'stylesheet'
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap'
  document.head.appendChild(fontLink)
}

const STATS = [
  { value: '5,000+',  label: 'Treatments Performed' },
  { value: '45 Min',  label: 'Procedure Time'        },
  { value: 'Minimal', label: 'Downtime'              },
]

const INDICATORS = [
  { id: 'brow',    label: 'Brow Lift', style: { top: '18%', right: '-1rem' }, lineWidth: 48 },
  { id: 'midface', label: 'Mid-Face',  style: { top: '42%', right: '-1rem' }, lineWidth: 56 },
  { id: 'jawline', label: 'Jawline',   style: { top: '58%', right: '-1.5rem' }, lineWidth: 52 },
]

function TreatmentIndicator({ label, style, lineWidth, delay }) {
  return (
    <div
      className="absolute z-20 hidden lg:flex items-center"
      style={{ ...style, animation: `hero-fade-up 0.6s ease ${delay} both` }}
      aria-hidden="true"
    >
      <span
        className="text-[11px] tracking-[0.18em] uppercase text-white/55 pr-3 whitespace-nowrap"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {label}
      </span>
      <span
        className="block h-px bg-gradient-to-r from-[var(--color-gold)]/60 to-transparent"
        style={{ width: lineWidth }}
      />
      <span className="block h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]/70 shrink-0" />
    </div>
  )
}

function VideoPanel({ videoRef, muted, onToggleSound }) {
  return (
    <div
      className="relative w-full mx-auto max-w-sm sm:max-w-md lg:max-w-none"
      style={{ animation: 'hero-fade-in 1.1s ease 0.3s both' }}
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 scale-[1.2] rounded-[2.5rem] opacity-50"
        style={{
          background:
            'radial-gradient(ellipse at 60% 50%, rgba(192,160,98,0.18) 0%, rgba(125,211,252,0.08) 55%, transparent 100%)',
          filter: 'blur(36px)',
        }}
      />
      <div
        className="relative rounded-[2rem] p-[1px] shadow-[0_48px_120px_-24px_rgba(15,23,42,0.8)]"
        style={{
          background:
            'linear-gradient(160deg, rgba(192,160,98,0.55) 0%, rgba(192,160,98,0.04) 38%, rgba(125,211,252,0.06) 68%, rgba(192,160,98,0.28) 100%)',
        }}
      >
        <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-[var(--color-slate-deep,#1E293B)] aspect-[4/5]">
          <video
            ref={videoRef}
            className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
            src="/hero-video3.mp4"
            poster="/images/hero-model.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="Aptos Thread Lift treatment showcase"
            x-webkit-airplay="deny"
            data-webkit-playsinline="true"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/55 via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-0 rounded-[calc(2rem-1px)] ring-1 ring-inset ring-white/8" />
          <button
            type="button"
            onClick={onToggleSound}
            aria-label={muted ? 'Unmute video' : 'Mute video'}
            className="absolute bottom-4 right-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-navy)]/50 text-white/70 backdrop-blur-md transition-all duration-200 hover:bg-[var(--color-navy)]/80 hover:text-white"
          >
            {muted ? <VolumeX size={13} /> : <Volume2 size={13} />}
          </button>
        </div>
      </div>

      {INDICATORS.map((ind, i) => (
        <TreatmentIndicator key={ind.id} {...ind} delay={`${1.4 + i * 0.15}s`} />
      ))}
    </div>
  )
}

function Stats() {
  return (
    <div
      className="grid grid-cols-3 gap-0"
      style={{ animation: 'hero-fade-up 0.7s ease 1.0s both' }}
    >
      {STATS.map(({ value, label }, i) => (
        <div
          key={label}
          className={cn(
            'flex flex-col py-3 px-4 first:pl-0',
            i > 0 && 'border-l border-white/15',
          )}
        >
          <span
            className="text-xl sm:text-2xl md:text-[1.75rem] font-light leading-none text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {value}
          </span>
          <span
            className="mt-1.5 text-[9px] sm:text-[11px] uppercase tracking-[0.18em] text-white/50 leading-tight"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}

export function HeroSection() {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const attemptPlay = () => {
      video.muted = true
      video.play().catch(() => {})
    }
    attemptPlay()

    const handleFirstInteraction = () => {
      if (video.paused) {
        video.muted = true
        video.play().catch(() => {})
      }
      document.removeEventListener('touchstart', handleFirstInteraction)
      document.removeEventListener('pointerdown', handleFirstInteraction)
      document.removeEventListener('scroll', handleFirstInteraction)
    }

    document.addEventListener('touchstart',  handleFirstInteraction, { passive: true, once: true })
    document.addEventListener('pointerdown', handleFirstInteraction, { passive: true, once: true })
    document.addEventListener('scroll',      handleFirstInteraction, { passive: true, once: true })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && video.paused) {
          video.muted = true
          video.play().catch(() => {})
        }
      },
      { threshold: 0.25 }
    )
    observer.observe(video)

    return () => {
      document.removeEventListener('touchstart',  handleFirstInteraction)
      document.removeEventListener('pointerdown', handleFirstInteraction)
      document.removeEventListener('scroll',      handleFirstInteraction)
      observer.disconnect()
    }
  }, [])

  const handleToggleSound = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
    if (!v.muted) v.play().catch(() => {})
  }

  return (
    <>
      <style>{`
        @keyframes hero-fade-up {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes hero-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes hero-line-grow {
          from { transform: scaleX(0); transform-origin: left; opacity: 0; }
          to   { transform: scaleX(1); transform-origin: left; opacity: 1; }
        }
      `}</style>

      <section
        className="relative flex min-h-svh items-center overflow-hidden bg-[var(--color-navy)]"
        aria-label="Aptos Thread Lift — Hero"
      >
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          <div
            className="absolute right-0 top-0 h-[70%] w-[55%] opacity-[0.065]"
            style={{ background: 'radial-gradient(ellipse at 80% 15%, #C0A062 0%, transparent 68%)' }}
          />
          <div
            className="absolute bottom-0 left-0 h-[50%] w-[45%] opacity-[0.04]"
            style={{ background: 'radial-gradient(ellipse at 15% 85%, #7DD3FC 0%, transparent 68%)' }}
          />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-[90rem] grid-cols-1 items-center gap-10 px-6 pt-32 pb-24 md:px-16 md:pt-28 lg:grid-cols-2 xl:gap-28">

          {/* LEFT: copy */}
          <div className="flex flex-col justify-center">

            <p
              className="mb-8 text-[11px] uppercase tracking-[0.28em] text-[var(--color-gold)]/70"
              style={{ fontFamily: 'Inter, sans-serif', animation: 'hero-fade-up 0.5s ease 0.1s both' }}
            >
              Aptos Thread Lift
            </p>

            <div
              className="mb-8 h-px w-12 bg-[var(--color-gold)]/35"
              style={{ animation: 'hero-line-grow 0.8s ease 0.2s both' }}
              aria-hidden="true"
            />

            <h1
              className="mb-7 text-[3rem] font-light leading-[1.06] tracking-[-0.01em] text-white sm:text-[3.6rem] md:text-[4.2rem] lg:text-[4.6rem]"
              style={{ fontFamily: "'Playfair Display', serif", animation: 'hero-fade-up 0.7s ease 0.3s both' }}
            >
              Lift.{' '}
              <em className="not-italic" style={{ color: 'var(--color-gold)' }}>Define.</em>
              <br />
              Rejuvenate.
            </h1>

            <p
              className="mb-14 max-w-[26rem] text-[0.9375rem] font-light leading-[1.8] text-white/70"
              style={{ fontFamily: 'Inter, sans-serif', animation: 'hero-fade-up 0.7s ease 0.45s both' }}
            >
              Advanced non-surgical facial lifting with<br />Aptos Excellence technology.
            </p>

            <div
              className="mb-16 flex flex-wrap items-center gap-4"
              style={{ animation: 'hero-fade-up 0.7s ease 0.6s both' }}
            >
              <a
                href="https://portal.aestheticnursesoftware.com/book-online/1150"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 border border-[var(--color-gold)] bg-[var(--color-gold)] px-9 py-[15px] text-[12px] font-medium uppercase tracking-[0.18em] text-[var(--color-navy)] transition-all duration-300 hover:bg-transparent hover:text-[var(--color-gold)] shadow-[0_4px_20px_rgba(192,160,98,0.3)]"
                style={{ fontFamily: 'Inter, sans-serif', borderRadius: '2px' }}
              >
                Reserve Consultation
                <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <button
                type="button"
                className="inline-flex items-center gap-3 border border-white/20 px-9 py-[15px] text-[12px] font-light uppercase tracking-[0.18em] text-white/65 transition-all duration-300 hover:border-[var(--color-gold)]/40 hover:text-[var(--color-gold)]/85"
                style={{ fontFamily: 'Inter, sans-serif', borderRadius: '2px' }}
              >
                View Results
              </button>
            </div>

            <Stats />
          </div>

          {/* RIGHT: video */}
          <VideoPanel
            videoRef={videoRef}
            muted={muted}
            onToggleSound={handleToggleSound}
          />
        </div>

        <div
          className="absolute inset-x-0 bottom-0 z-10 h-px opacity-20"
          style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)' }}
          aria-hidden="true"
        />
      </section>
    </>
  )
}