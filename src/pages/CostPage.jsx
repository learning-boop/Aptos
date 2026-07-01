import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
import { Seo } from '@/components/Seo'
import { Breadcrumb } from '@/components/Breadcrumb'
import { GoldLine } from '@/components/ui/GoldLine'
import { FaqAccordion } from '@/components/FaqAccordion'
import { faqsByCategory } from '@/content/faqData'

const BOOK_URL = 'https://portal.aestheticnursesoftware.com/book-online/1150'

const FACTORS = [
  'The treatment area — a small targeted lift or broader rejuvenation',
  'The number of threads your plan requires',
  'The complexity of your case and facial anatomy',
  'Whether a combined plan (e.g. threads plus filler) is recommended',
]

export function CostPage() {
  const faqs = faqsByCategory('cost', 8)
  return (
    <>
      <Seo
        title="Aptos Thread Lift Cost Newcastle | Pricing, Safety & Recovery | Dr Matla"
        description="How much does an Aptos Thread Lift cost in Newcastle? Thread lift treatment typically starts from around £250. Learn about pricing, safety, recovery and consultations with Dr Matla."
        path="/cost"
        faqItems={faqs}
      />

      <section className="relative bg-[var(--color-navy)] pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <Breadcrumb trail={[{ label: 'Home', to: '/' }, { label: 'Cost & Consultation' }]} />
          </div>
          <p className="eyebrow text-[var(--color-gold-light)]">Pricing · Safety · Recovery</p>
          <h1 className="font-serif text-white text-4xl md:text-6xl max-w-3xl leading-tight mb-6">
            Aptos Thread Lift cost in Newcastle
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mb-8">
            Thread lift treatment typically starts from around £250, with an accurate quote given at
            a doctor-led consultation based on your treatment plan.
          </p>
          <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Reserve Your Consultation <ArrowRight size={15} />
          </a>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-[var(--color-background)]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16 items-start">
          <div>
            <GoldLine className="w-14 mb-8 opacity-60" />
            <p className="text-[var(--color-muted-foreground)] mb-5 leading-relaxed">
              The cost of an Aptos Thread Lift in Newcastle depends on the treatment area, number of
              threads, complexity of the case and whether you need a small targeted lift or a broader
              full-face rejuvenation plan. Because every patient requires a different number of
              threads and technique, a consultation is the only way to give accurate pricing.
            </p>
            <p className="text-[var(--color-muted-foreground)] mb-5 leading-relaxed">
              When comparing prices between clinics, it helps to weigh more than cost alone. Medical
              experience, product quality, safety, aftercare, consultation quality and natural-looking
              results all matter when choosing where to have thread lifting — a treatment that
              involves deeper tissue placement and facial anatomy.
            </p>
          </div>
          <div className="card p-7">
            <h2 className="font-serif text-xl text-[var(--color-foreground)] mb-5">What affects your price</h2>
            <ul className="flex flex-col gap-3">
              {FACTORS.map(s => (
                <li key={s} className="flex items-start gap-3 text-sm text-[var(--color-muted-foreground)]">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-[var(--color-gold)]/15 flex items-center justify-center mt-0.5">
                    <Check size={12} className="text-[var(--color-gold-deep)]" />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 section-cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="eyebrow text-[var(--color-gold-deep)]">Questions</p>
            <GoldLine className="w-16 mx-auto mb-6 opacity-50" />
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-foreground)]">
              Cost, safety &amp; <em className="italic text-gradient-gold">recovery</em>
            </h2>
          </div>
          <FaqAccordion items={faqs} defaultOpen={0} />
        </div>
      </section>

      <section className="py-20 md:py-24 px-6 section-dark text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-5">Get an accurate quote</h2>
          <p className="text-white/70 mb-8">
            Book a doctor-led consultation with Dr Matla for a personalised treatment plan and
            transparent pricing.
          </p>
          <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Reserve Your Consultation <ArrowRight size={15} />
          </a>
          <p className="mt-8 text-white/50 text-sm">
            Prefer to read more first? Explore the{' '}
            <Link to="/aptos-thread-lift" className="text-[var(--color-gold-light)] underline">
              Aptos Thread Lift
            </Link>{' '}
            treatment overview.
          </p>
        </div>
      </section>
    </>
  )
}
