import { Navbar }           from '@/components/layout/Navbar'
import { HeroSection }      from '@/components/sections/HeroSection'
import { Benefits }         from '@/components/sections/Benefits'
import { AboutSection }     from '@/components/sections/AboutSection'
import { TreatmentAreas }   from '@/components/sections/TreatmentAreas'
import { BeforeAfter }      from '@/components/sections/BeforeAfter'
import { HowItWorks }       from '@/components/sections/HowItWorks'
import { WhyAptos }         from '@/components/sections/WhyAptos'
import { Testimonials }     from '@/components/sections/Testimonials'
import { FAQ }              from '@/components/sections/FAQ'
import { ConsultationCTA }  from '@/components/sections/ConsultationCTA'
import { Footer }           from '@/Footer'

export default function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--color-background)]">
      <Navbar />
      <HeroSection />
      <Benefits />
      <AboutSection />
      <TreatmentAreas />
      {/* <BeforeAfter /> */}
      <HowItWorks />
      <WhyAptos />
      <Testimonials />
      <FAQ />
      <ConsultationCTA />
      <Footer />
    </main>
  )
}
