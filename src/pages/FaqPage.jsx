import { FAQ } from '@/components/sections/FAQ'
import { Seo } from '@/components/Seo'
import { Breadcrumb } from '@/components/Breadcrumb'
import { GoldLine } from '@/components/ui/GoldLine'
import { FAQS } from '@/content/faqData'

export function FaqPage() {
  return (
    <>
      <Seo
        title="Aptos Thread Lift FAQs Newcastle | Common Questions | Dr Matla"
        description="Answers to common questions about the Aptos Thread Lift in Newcastle — treatment, cost, safety, recovery, results and booking. Doctor-led clinic, Dr Matla Aesthetics."
        path="/faq"
        faqItems={FAQS}
      />

      {/* Navy hero band keeps the transparent navbar legible */}
      <section className="relative bg-[var(--color-navy)] pt-32 pb-20 md:pt-40 md:pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <Breadcrumb trail={[{ label: 'Home', to: '/' }, { label: 'FAQs' }]} />
          </div>
          <p className="eyebrow text-[var(--color-gold-light)]">Your Questions Answered</p>
          <GoldLine className="w-14 mb-6 opacity-60" />
          <h1 className="font-serif text-white text-4xl md:text-6xl max-w-3xl leading-tight mb-6">
            Aptos Thread Lift FAQs
          </h1>
          <p className="text-white/75 text-lg max-w-2xl">
            Everything you need to know about the Aptos Thread Lift in Newcastle — from treatment
            and cost to safety, recovery, results and booking.
          </p>
        </div>
      </section>

      {/* Existing tabbed FAQ section (all 40 questions, filterable) */}
      <FAQ />
    </>
  )
}