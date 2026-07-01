import { useState, useMemo } from 'react'
import { cn } from '@/lib/utils'
import { GoldLine } from '@/components/ui/GoldLine'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { FaqAccordion } from '@/components/FaqAccordion'
import { FAQS, FAQ_CATEGORIES } from '@/content/faqData'

export function FAQ() {
  const { ref, isVisible } = useScrollReveal()
  const [activeCat, setActiveCat] = useState('popular')

  const visibleFaqs = useMemo(
    () => FAQS.filter(f => f.cat.includes(activeCat)),
    [activeCat],
  )

  return (
    <section id="faq" className="py-24 md:py-32 px-6 bg-[var(--color-background)]">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div
          ref={ref}
          className={cn(
            'text-center mb-10 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          )}
        >
          <p className="eyebrow text-[var(--color-gold-deep)]">Aptos Thread Lift Newcastle</p>
          <GoldLine className="w-16 mx-auto mb-6 opacity-50" />
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-foreground)] mb-4">
            Frequently <em className="italic text-gradient-gold">asked</em> questions
          </h2>
          <p className="max-w-2xl mx-auto text-[var(--color-muted-foreground)]">
            Everything you need to know about the Aptos Thread Lift &mdash; a non-surgical facelift
            for the jawline, jowls, cheeks, neck and brow &mdash; answered by our doctor-led clinic
            in Newcastle upon Tyne.
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FAQ_CATEGORIES.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveCat(id)}
              className={cn(
                'px-4 py-2 rounded-full text-[12px] font-sans font-medium tracking-wide transition-all duration-200 border',
                activeCat === id
                  ? 'bg-[var(--color-navy)] text-white border-[var(--color-navy)]'
                  : 'bg-transparent text-[var(--color-muted-foreground)] border-[var(--color-border)] hover:border-[var(--color-gold)]/40',
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {/* FAQ list — key forces remount so the first item opens per tab */}
        <FaqAccordion key={activeCat} items={visibleFaqs} defaultOpen={0} />

        {/* Consultation CTA */}
        <div className="text-center mt-14">
          <p className="text-[var(--color-muted-foreground)] mb-6 max-w-xl mx-auto">
            Every patient is different. The best way to confirm whether an Aptos Thread Lift is
            right for you is a doctor-led consultation at Dr Matla Aesthetics Clinic in Newcastle.
          </p>
          <a
            href="https://portal.aestheticnursesoftware.com/book-online/1150"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Reserve Your Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
