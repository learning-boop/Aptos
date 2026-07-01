import { ArrowRight } from 'lucide-react'
import { Seo } from '@/components/Seo'
import { Breadcrumb } from '@/components/Breadcrumb'
import { GoldLine } from '@/components/ui/GoldLine'
import { FaqAccordion } from '@/components/FaqAccordion'
import { faqsByCategory } from '@/content/faqData'

const BOOK_URL = 'https://portal.aestheticnursesoftware.com/book-online/1150'

const TIMELINE = [
  { when: 'Day of treatment', text: 'An early lifting effect is often visible as threads reposition and support sagging tissue. Some tightness or mild swelling is normal.' },
  { when: 'First 1–2 weeks', text: 'Swelling settles and the result looks more natural. It is best not to judge the final outcome during this early stage.' },
  { when: '4–12 weeks', text: 'Collagen stimulation develops, so firmness and skin quality continue to improve gradually beyond the initial lift.' },
  { when: 'Up to 24 months', text: 'Results can last up to two years depending on thread type, area, skin condition, age and lifestyle. Maintenance may be advised.' },
]

export function BeforeAfterPage() {
  const faqs = faqsByCategory('results', 6)
  return (
    <>
      <Seo
        title="Aptos Thread Lift Before & After Newcastle | Results & Timeline | Dr Matla"
        description="What do Aptos Thread Lift before and after results look like? Natural lift to the jawline, jowls and cheeks. See the results timeline and what to expect. Newcastle clinic, Dr Matla."
        path="/before-and-after"
        faqItems={faqs}
      />

      <section className="relative bg-[var(--color-navy)] pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <Breadcrumb trail={[{ label: 'Home', to: '/' }, { label: 'Before & After' }]} />
          </div>
          <p className="eyebrow text-[var(--color-gold-light)]">Results · Timeline · Expectations</p>
          <h1 className="font-serif text-white text-4xl md:text-6xl max-w-3xl leading-tight mb-6">
            Aptos Thread Lift before &amp; after
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mb-8">
            Results should look refreshed, lifted and natural — improving facial definition while
            keeping your own features recognisable.
          </p>
          <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Reserve Your Consultation <ArrowRight size={15} />
          </a>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-[var(--color-background)]">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <GoldLine className="w-14 mx-auto mb-8 opacity-60" />
          <p className="text-[var(--color-muted-foreground)] leading-relaxed mb-5">
            Aptos Thread Lift before and after results should look natural rather than dramatically
            altered. Common improvements include a cleaner jawline, reduced jowl heaviness, lifted
            cheeks, softer lower-face sagging and a fresher facial contour. The level of change
            depends on your starting point and how much laxity is present.
          </p>
          <p className="text-[var(--color-muted-foreground)] leading-relaxed">
            Before-and-after images are useful for education, but individual results vary — so the
            best comparison is always based on your own facial structure, discussed at consultation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-foreground)] text-center mb-10">
            Your results <em className="italic text-gradient-gold">timeline</em>
          </h2>
          <div className="flex flex-col gap-4">
            {TIMELINE.map(step => (
              <div key={step.when} className="card p-6 flex flex-col sm:flex-row gap-4 sm:items-baseline">
                <span className="shrink-0 font-serif text-[var(--color-gold-deep)] text-lg sm:w-40">{step.when}</span>
                <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed m-0">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 section-cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="eyebrow text-[var(--color-gold-deep)]">Questions</p>
            <GoldLine className="w-16 mx-auto mb-6 opacity-50" />
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-foreground)]">
              Results &amp; <em className="italic text-gradient-gold">expectations</em>
            </h2>
          </div>
          <FaqAccordion items={faqs} defaultOpen={0} />
        </div>
      </section>

      <section className="py-20 md:py-24 px-6 section-dark text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-5">See what&rsquo;s realistic for you</h2>
          <p className="text-white/70 mb-8">
            A doctor-led consultation with Dr Matla is the best way to understand the results you
            can realistically expect from an Aptos Thread Lift.
          </p>
          <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Reserve Your Consultation <ArrowRight size={15} />
          </a>
        </div>
      </section>
    </>
  )
}
