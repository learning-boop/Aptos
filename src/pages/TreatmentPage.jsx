import { Link, Navigate } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
import { Seo } from '@/components/Seo'
import { Breadcrumb } from '@/components/Breadcrumb'
import { GoldLine } from '@/components/ui/GoldLine'
import { FaqAccordion } from '@/components/FaqAccordion'
import { getTreatment, TREATMENTS } from '@/content/treatments'
import { faqsByCategory } from '@/content/faqData'

const BOOK_URL = 'https://portal.aestheticnursesoftware.com/book-online/1150'

export function TreatmentPage({ slug }) {
  const t = getTreatment(slug)
  if (!t) return <Navigate to="/" replace />

  const faqs = faqsByCategory(t.faqCat, t.faqLimit)
  const others = TREATMENTS.filter(x => x.slug !== t.slug).slice(0, 3)

  return (
    <>
      <Seo
        title={t.seoTitle}
        description={t.seoDescription}
        path={`/${t.slug}`}
        faqItems={faqs}
      />

      {/* ── Hero (navy band so the transparent navbar stays legible) ── */}
      <section className="relative bg-[var(--color-navy)] pt-32 pb-20 md:pt-40 md:pb-28 px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${t.heroImage})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy)] via-[var(--color-navy)]/90 to-transparent" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto">
          <div className="mb-6">
            <Breadcrumb
              trail={[
                { label: 'Home', to: '/' },
                { label: 'Treatments', to: '/aptos-thread-lift' },
                { label: t.navLabel },
              ]}
            />
          </div>
          <p className="eyebrow text-[var(--color-gold-light)]">{t.eyebrow}</p>
          <h1 className="font-serif text-white text-4xl md:text-6xl max-w-3xl leading-tight mb-6">
            {t.h1}
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mb-8">{t.heroSub}</p>
          <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Reserve Your Consultation <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* ── Intro + signs ── */}
      <section className="py-20 md:py-28 px-6 bg-[var(--color-background)]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16 items-start">
          <div>
            <GoldLine className="w-14 mb-8 opacity-60" />
            {t.intro.map((p, i) => (
              <p key={i} className="text-[var(--color-muted-foreground)] mb-5 leading-relaxed">{p}</p>
            ))}
          </div>
          <div className="card p-7">
            <h2 className="font-serif text-xl text-[var(--color-foreground)] mb-5">{t.signsTitle}</h2>
            <ul className="flex flex-col gap-3">
              {t.signs.map(s => (
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

      {/* ── Approach ── */}
      <section className="py-20 md:py-28 px-6 section-cream">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow text-[var(--color-gold-deep)]">The Approach</p>
          <GoldLine className="w-16 mx-auto mb-6 opacity-50" />
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-foreground)] mb-8">
            {t.approachTitle}
          </h2>
          <div className="max-w-2xl mx-auto text-left">
            {t.approach.map((p, i) => (
              <p key={i} className="text-[var(--color-muted-foreground)] mb-5 leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits grid ── */}
      <section className="py-20 md:py-28 px-6 bg-[var(--color-background)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow text-[var(--color-gold-deep)]">Why This Treatment</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-foreground)]">
              Key <em className="italic text-gradient-gold">benefits</em>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.benefits.map(b => (
              <div key={b.title} className="card p-6 hover-lift">
                <h3 className="font-serif text-lg text-[var(--color-foreground)] mb-2">{b.title}</h3>
                <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 md:py-28 px-6 section-cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="eyebrow text-[var(--color-gold-deep)]">Questions</p>
            <GoldLine className="w-16 mx-auto mb-6 opacity-50" />
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-foreground)]">
              {t.navLabel} <em className="italic text-gradient-gold">FAQs</em>
            </h2>
          </div>
          <FaqAccordion items={faqs} defaultOpen={0} />
        </div>
      </section>

      {/* ── Related treatments ── */}
      <section className="py-20 md:py-24 px-6 bg-[var(--color-background)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-foreground)] text-center mb-10">
            Explore other <em className="italic text-gradient-gold">treatment areas</em>
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {others.map(o => (
              <Link key={o.slug} to={`/${o.slug}`} className="card p-6 hover-lift group">
                <p className="eyebrow text-[var(--color-gold-deep)] mb-2">{o.eyebrow}</p>
                <h3 className="font-serif text-lg text-[var(--color-foreground)] mb-3">{o.navLabel}</h3>
                <span className="inline-flex items-center gap-1.5 text-[12px] tracking-wide uppercase text-[var(--color-gold-deep)] group-hover:gap-2.5 transition-all">
                  Learn more <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="py-20 md:py-24 px-6 section-dark text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-5">
            Book your Newcastle consultation
          </h2>
          <p className="text-white/70 mb-8">
            Every patient is different. A doctor-led consultation at Dr Matla Aesthetics Clinic
            confirms whether this treatment is right for you.
          </p>
          <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Reserve Your Consultation <ArrowRight size={15} />
          </a>
        </div>
      </section>
    </>
  )
}
