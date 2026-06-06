import { ArrowRight, Phone, Calendar, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const BOOKING_URL = 'https://portal.aestheticnursesoftware.com/book-online/1150'

export function ConsultationCTA() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="py-24 md:py-32 px-6 bg-[var(--color-navy)] relative overflow-hidden">
      {/* Gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--color-gold)]/8 blur-3xl rounded-full pointer-events-none" />

      <div
        ref={ref}
        className={cn(
          'max-w-4xl mx-auto text-center relative z-10 transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        )}
      >
        <p className="text-[11px] tracking-luxe uppercase text-[var(--color-gold)] mb-4">
          Start Your Journey
        </p>

        {/* Gold line */}
        <div className="w-16 h-px gold-line mx-auto mb-8 opacity-50" />

        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.1]">
          Begin your{' '}
          <em className="italic text-gradient-gold">transformation</em>
          {' '}today
        </h2>

        <p className="text-base font-light text-white/75 leading-relaxed max-w-xl mx-auto mb-10">
          Book your complimentary consultation with our specialist and receive a
          personalised treatment plan — completely tailored to your goals.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button variant="primary" size="lg" className="group w-full">
              <Calendar size={16} />
              Book Free Consultation
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </a>
          <Button variant="glass-dark" size="lg" className="w-full sm:w-auto">
            <Phone size={16} />
            Call 0191 000 0000
          </Button>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: Calendar, label: 'Free Consultation', sub: 'No obligation assessment' },
            { icon: MapPin,   label: 'Newcastle upon Tyne', sub: 'NE1' },
            { icon: Phone,    label: 'Mon – Sat',           sub: '9:00 – 18:30' },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="glass-navy rounded-xl p-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[var(--color-gold)]/15 flex items-center justify-center shrink-0">
                <Icon size={15} className="text-[var(--color-gold)]" />
              </div>
              <div className="text-left">
                <p className="text-white text-[13px] font-medium">{label}</p>
                <p className="text-white/60 text-[12px] font-light">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}