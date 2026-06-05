import { useState } from 'react'
import { cn } from '@/lib/utils'
import { GoldLine } from '@/components/ui/GoldLine'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Plus, Minus } from 'lucide-react'

const FAQS = [
  {
    q: 'Am I a suitable candidate for an Aptos thread lift?',
    a: 'Aptos threads are ideal for patients aged 35–65 who have mild to moderate skin laxity and wish to avoid surgery. A consultation with our specialist will determine if you are a suitable candidate based on your skin type, degree of laxity and desired outcome.',
  },
  {
    q: 'Is the procedure painful?',
    a: 'Topical anaesthetic cream is applied 30–45 minutes before the procedure to ensure your comfort. Most patients describe a mild pressure or tugging sensation during thread insertion, but the procedure is very well tolerated. Any discomfort is minimal and temporary.',
  },
  {
    q: 'How long do results last?',
    a: 'The physical threads biodegrade over 18–24 months. However, the collagen stimulation they trigger continues to improve and maintain the skin for up to 3 years. Many patients choose to have a maintenance treatment at the 18-month mark.',
  },
  {
    q: 'What is the downtime after an Aptos thread lift?',
    a: 'Most patients return to work and social activities the following day. You may experience mild swelling, bruising or tenderness for 48–72 hours, which is easily managed. We advise avoiding strenuous exercise and facial massages for 2 weeks post-treatment.',
  },
  {
    q: 'How many threads will I need?',
    a: 'The number of threads varies by individual and treatment area. During your consultation, our specialist will create a bespoke treatment plan. Typically, patients require between 4–12 threads per treatment zone to achieve optimal results.',
  },
  {
    q: 'What are Aptos threads made of?',
    a: 'Aptos threads are made from polylactic acid (PLA) and caprolactam — biocompatible, biodegradable materials that have been used safely in medical sutures for decades. They are CE-marked and FDA-cleared for use in aesthetic procedures.',
  },
]

function FAQItem({ q, a, delay }) {
  const [open, setOpen] = useState(false)
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={cn(
        'border border-[var(--color-border)] rounded-xl overflow-hidden transition-all duration-700',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left hover:bg-[var(--color-muted)]/50 transition-colors duration-200"
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
      >
        <span className="font-serif text-base md:text-lg text-[var(--color-foreground)] leading-snug">{q}</span>
        <span className="shrink-0 w-7 h-7 rounded-full border border-[var(--color-gold)]/30 flex items-center justify-center">
          {open
            ? <Minus size={13} className="text-[var(--color-gold-deep)]" />
            : <Plus  size={13} className="text-[var(--color-gold-deep)]" />
          }
        </span>
      </button>

      {open && (
        <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-[var(--color-border)]/50">
          <p className="text-sm font-light text-[var(--color-muted-foreground)] leading-relaxed pt-4">{a}</p>
        </div>
      )}
    </div>
  )
}

export function FAQ() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="faq" className="py-24 md:py-32 px-6 bg-[var(--color-background)]">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div
          ref={ref}
          className={cn(
            'text-center mb-12 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          )}
        >
          <p className="text-[11px] tracking-luxe uppercase text-[var(--color-gold-deep)] mb-4">
            Common Questions
          </p>
          <GoldLine className="w-16 mx-auto mb-6 opacity-50" />
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-foreground)] mb-4">
            Frequently <em className="italic text-gradient-gold">asked</em>
          </h2>
        </div>

        {/* FAQ list */}
        <div className="flex flex-col gap-3">
          {FAQS.map(({ q, a }, i) => (
            <FAQItem key={q} q={q} a={a} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  )
}
