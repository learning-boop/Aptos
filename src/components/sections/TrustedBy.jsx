import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/lib/utils'

const LOGOS = [
  { name: 'Aptos International', abbr: 'APTOS' },
  { name: 'British Medical Aesthetics', abbr: 'BMA' },
  { name: 'Harley Street Medical', abbr: 'HSM' },
  { name: 'Royal College of Surgeons', abbr: 'RCS' },
  { name: 'Aesthetic Medicine UK', abbr: 'AMUK' },
  { name: 'Skin Health Alliance', abbr: 'SHA' },
]

export function TrustedBy() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="py-12 md:py-16 bg-[var(--color-navy)] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <p
          ref={ref}
          className={cn(
            'text-center text-[11px] tracking-luxe uppercase text-white/35 mb-8 transition-all duration-700',
            isVisible ? 'opacity-100' : 'opacity-0',
          )}
        >
          Trusted & Certified By
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 md:gap-x-16">
          {LOGOS.map(({ name, abbr }, i) => (
            <div
              key={name}
              className={cn(
                'flex flex-col items-center gap-1 transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
              )}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="font-serif text-xs tracking-widest text-white/30 hover:text-[var(--color-gold)] transition-colors duration-300 cursor-default">
                {abbr}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
