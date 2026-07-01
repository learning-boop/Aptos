import { ArrowRight } from 'lucide-react'
import { Seo } from '@/components/Seo'
import { Breadcrumb } from '@/components/Breadcrumb'
import { GoldLine } from '@/components/ui/GoldLine'
import { FaqAccordion } from '@/components/FaqAccordion'
import { faqsByCategory } from '@/content/faqData'

const BOOK_URL = 'https://portal.aestheticnursesoftware.com/book-online/1150'

// Portrait/brand image for the intro (already in /public).
const CLINIC_IMAGE = '/drmatla-4.jpeg'

// Clinic interior gallery — save these four into /public (see note).
// `span` controls the magazine-style width on desktop (6-col grid).
const CLINIC_IMAGES = [
  { src: '/DRMATLACLINICSHOTS-1.webp',       alt: 'Reception at Dr Matla Aesthetics Clinic, Newcastle upon Tyne',                      span: 'md:col-span-4' },
  { src: '/DRMATLACLINICSHOTS-2.webp',          alt: 'Consultation lounge at Dr Matla Aesthetics, Newcastle',                   span: 'md:col-span-2' },
  { src: '/DRMATLACLINICSHOTS-3.webp',  alt: 'Treatment room at Dr Matla Aesthetics, Newcastle',                             span: 'md:col-span-2' },
  { src: '/DRMATLACLINICSHOTS-4.webp',         alt: 'Dr Matla Medical Aesthetics clinic signage, Newcastle',           span: 'md:col-span-4' },
]

const PILLARS = [
  { title: 'Doctor-led', text: 'Thread lifting involves facial anatomy, deeper tissue placement and complication management — so every treatment is led by the doctor, not treated as a simple beauty procedure.' },
  { title: 'Safety-first', text: 'Correct patient selection, sterile technique and honest consent come before technique. If another treatment is safer for your goal, we will tell you.' },
  { title: 'Natural results', text: 'The aim is subtle, balanced rejuvenation that respects your own features and expression — never an over-lifted or pulled look.' },
  { title: 'Newcastle-based', text: 'Serving patients across Newcastle upon Tyne, Jesmond and the wider North East, with in-person assessment and aftercare.' },
]

export function AboutPage() {
  const faqs = faqsByCategory('newcastle', 5)
  return (
    <>
      <Seo
        title="Dr Matla Aesthetics | Doctor-Led Thread Lift Clinic Newcastle upon Tyne"
        description="Dr Matla Aesthetics is a doctor-led aesthetics clinic in Newcastle upon Tyne offering Aptos and PDO thread lift treatments with a safety-first, natural-results approach."
        path="/about"
        faqItems={faqs}
      />

      <section className="relative bg-[var(--color-navy)] pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <Breadcrumb trail={[{ label: 'Home', to: '/' }, { label: 'About' }]} />
          </div>
          <p className="eyebrow text-[var(--color-gold-light)]">Doctor-Led · Newcastle upon Tyne</p>
          <h1 className="font-serif text-white text-4xl md:text-6xl max-w-3xl leading-tight mb-6">
            Dr Matla Aesthetics Clinic
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mb-8">
            A doctor-led aesthetics clinic in Newcastle, focused on natural-looking, non-surgical
            facial rejuvenation with Aptos and PDO thread lifting.
          </p>
          <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Reserve Your Consultation <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* Intro + brand image */}
      <section className="py-20 md:py-28 px-6 bg-[var(--color-background)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-20">
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-2xl opacity-30 blur-sm"
              style={{ background: 'linear-gradient(135deg, var(--color-gold), transparent)' }}
              aria-hidden="true"
            />
            <img
              src={CLINIC_IMAGE}
              alt="Dr Matla Aesthetics Clinic, Newcastle upon Tyne"
              loading="lazy"
              className="relative w-full h-full object-cover rounded-2xl shadow-luxe aspect-[4/5] md:aspect-[4/3]"
            />
          </div>

          <div>
            <GoldLine className="w-14 mb-8 opacity-60" />
            <p className="text-[var(--color-muted-foreground)] leading-relaxed mb-5">
              Patients searching for an Aptos Thread Lift in Newcastle are usually looking for a
              trusted, doctor-led clinic offering natural-looking, non-surgical facial rejuvenation.
              Dr Matla Aesthetics Clinic is based in Newcastle upon Tyne and offers thread-lift
              treatments including APTOS and PDO options for the jawline, jowls, cheeks, neck and brow.
            </p>
            <p className="text-[var(--color-muted-foreground)] leading-relaxed">
              A local consultation lets the doctor assess your face in person, explain the technique,
              discuss expected results and provide aftercare guidance — especially important for
              thread lifting, where facial anatomy and skin laxity must be evaluated carefully.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-4">
          {PILLARS.map(p => (
            <div key={p.title} className="card p-7 hover-lift">
              <h2 className="font-serif text-xl text-[var(--color-foreground)] mb-3">{p.title}</h2>
              <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed m-0">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clinic gallery */}
      <section className="py-20 md:py-28 px-6 section-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow text-[var(--color-gold-deep)]">Our Space</p>
            <GoldLine className="w-16 mx-auto mb-6 opacity-50" />
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-foreground)]">
              Inside our <em className="italic text-gradient-gold">Newcastle clinic</em>
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-[var(--color-muted-foreground)]">
              A calm, private and professional setting in the heart of Newcastle upon Tyne, with
              free on-site parking.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-3 md:gap-4">
            {CLINIC_IMAGES.map(img => (
              <figure
                key={img.src}
                className={`group relative overflow-hidden rounded-2xl shadow-luxe h-64 md:h-80 ${img.span}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.src = '/drmatla3.webp' }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[var(--color-navy)]/85 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-light tracking-wide">{img.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6 bg-[var(--color-background)]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="eyebrow text-[var(--color-gold-deep)]">Questions</p>
            <GoldLine className="w-16 mx-auto mb-6 opacity-50" />
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-foreground)]">
              Newcastle &amp; <em className="italic text-gradient-gold">booking</em>
            </h2>
          </div>
          <FaqAccordion items={faqs} defaultOpen={0} />
        </div>
      </section>

      <section className="py-20 md:py-24 px-6 section-dark text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-5">Visit us in Newcastle</h2>
          <p className="text-white/70 mb-8">
            Book a doctor-led consultation to discuss whether an Aptos Thread Lift is right for you.
          </p>
          <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Reserve Your Consultation <ArrowRight size={15} />
          </a>
        </div>
      </section>
    </>
  )
}