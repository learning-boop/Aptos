import { cn } from '@/lib/utils'
import { GoldLine } from '@/components/ui/GoldLine'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const STEPS = [
  {
    num: '01',
    title: 'Consultation',
    description: 'A thorough face-to-face assessment with our specialist to understand your goals and design a bespoke treatment plan.',
  },
  {
    num: '02',
    title: 'Preparation',
    description: 'Topical anaesthetic cream is applied to ensure your comfort throughout the procedure.',
  },
  {
    num: '03',
    title: 'Thread Placement',
    description: 'Ultra-fine Aptos threads are inserted using a micro-needle, repositioning tissue with precision and care.',
  },
  {
    num: '04',
    title: 'Immediate Results',
    description: 'You see the lift straight away. Mild swelling may occur for 48–72 hours, with full results visible at 4–6 weeks.',
  },
  {
    num: '05',
    title: 'Collagen Response',
    description: 'Over 3–6 months, the threads stimulate your natural collagen production, enhancing and prolonging your results.',
  },
]

function Step({ num, title, description, delay, isLast }) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={cn(
        'relative flex gap-6 md:gap-8 transition-all duration-700',
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6',
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Timeline */}
      <div className="flex flex-col items-center shrink-0">
        <div className="w-12 h-12 rounded-full bg-[var(--color-gold)]/15 border border-[var(--color-gold)]/30 flex items-center justify-center">
          <span className="font-serif text-sm text-[var(--color-gold)]">{num}</span>
        </div>
        {!isLast && (
          <div className="w-px flex-1 mt-3 bg-gradient-to-b from-[var(--color-gold)]/30 to-transparent min-h-12" />
        )}
      </div>

      {/* Content */}
      <div className={cn('pb-10', isLast && 'pb-0')}>
        <h3 className="font-serif text-xl text-white mb-2">{title}</h3>
        <p className="text-sm font-light text-white/70 leading-relaxed max-w-md">{description}</p>
      </div>
    </div>
  )
}

export function HowItWorks() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="how-it-works" className="py-24 md:py-32 px-6 bg-[var(--color-navy)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — header */}
          <div
            ref={ref}
            className={cn(
              'lg:sticky lg:top-28 transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            )}
          >
            <p className="text-[11px] tracking-luxe uppercase text-[var(--color-gold)] mb-4">
              The Process
            </p>
            <GoldLine className="w-16 mb-6 opacity-40" />
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              How Aptos <em className="italic text-gradient-gold block">Works</em>
            </h2>
            <p className="text-base font-light text-white/70 leading-relaxed max-w-sm">
              A refined, minimally invasive procedure designed for comfort,
              precision and natural-looking results — in under an hour.
            </p>

            {/* Key fact card */}
            <div className="mt-10 glass-navy rounded-2xl p-6">
              <p className="text-[11px] tracking-luxe uppercase text-[var(--color-gold)] mb-3">Key Fact</p>
              <p className="font-serif text-3xl text-white mb-1">45 Minutes</p>
              <p className="text-sm text-white/65 font-light">Average procedure duration</p>
              <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
                <div>
                  <p className="font-serif text-xl text-gradient-gold">18–24mo</p>
                  <p className="text-[11px] text-white/55 mt-0.5">Thread lifespan</p>
                </div>
                <div>
                  <p className="font-serif text-xl text-gradient-gold">3 Years</p>
                  <p className="text-[11px] text-white/55 mt-0.5">Collagen benefits</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — steps */}
          <div className="flex flex-col">
            {STEPS.map((step, i) => (
              <Step
                key={step.num}
                {...step}
                delay={i * 120}
                isLast={i === STEPS.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
