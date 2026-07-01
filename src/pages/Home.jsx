import { HeroSection }     from '@/components/sections/HeroSection'
import { Benefits }        from '@/components/sections/Benefits'
import { AboutSection }    from '@/components/sections/AboutSection'
import { TreatmentAreas }  from '@/components/sections/TreatmentAreas'
import { HowItWorks }      from '@/components/sections/HowItWorks'
import { WhyAptos }        from '@/components/sections/WhyAptos'
import { Testimonials }    from '@/components/sections/Testimonials'
import { ContactForm }     from '@/components/sections/ContactForm'
import { Seo }             from '@/components/Seo'
import { FAQS }            from '@/content/faqData'

const homeFaqs = FAQS.filter(f => f.cat.includes('popular'))

export function Home() {
  return (
    <>
      <Seo
        title="Aptos Thread Lift Newcastle | Dr Matla Clinic | Non-Surgical Face Lift"
        description="Newcastle's doctor-led Aptos Thread Lift clinic. Non-surgical facelift, jawline, jowl, neck and brow lifting by Dr Matla — natural results, minimal downtime. Book a consultation."
        path="/"
        faqItems={homeFaqs}
      />
      <HeroSection />
      <Benefits />
      <AboutSection />
      <TreatmentAreas />
      <HowItWorks />
      <WhyAptos />
      <Testimonials />
      <ContactForm />
    </>
  )
}