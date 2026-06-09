import { useState } from 'react'
import { Send, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const INFO = [
  { icon: Phone,  label: 'Call Us',      value: '0333 444 1399' },
  { icon: MapPin, label: 'Location',     value: 'Newcastle upon Tyne, NE1' },
  { icon: Clock,  label: 'Clinic Hours', value: 'Mon – Sat  9:00 – 18:30' },
]

const TREATMENTS = [
  'Aptos Thread Lift',
  'Neck & Jowl Lift',
  'Brow Lift',
  'Mid-Face Lift',
  'Body Contouring',
  'Other / Not Sure',
]

const FIELD = 'rounded-xl border border-[var(--color-border)] bg-white/60 backdrop-blur-sm px-4 py-3 text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-foreground)]/40 outline-none focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/20 transition-all duration-200 w-full'

export function ContactForm() {
  const { ref, isVisible } = useScrollReveal()
  const [sent, setSent]   = useState(false)
  const [form, setForm]   = useState({
    name: '', email: '', phone: '', treatment: '', message: '',
  })

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: wire to real handler (e.g. EmailJS / Formspree)
    setSent(true)
  }

  return (
    <section className="py-24 md:py-32 px-6 bg-[var(--color-surface)] relative overflow-hidden">

      {/* Subtle gold glow */}
      <div className="absolute -top-32 right-0 w-[520px] h-[520px] bg-[var(--color-gold)]/6 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--color-gold)]/5 blur-[80px] rounded-full pointer-events-none" />

      <div
        ref={ref}
        className={cn(
          'max-w-6xl mx-auto relative z-10 transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        )}
      >
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[11px] tracking-luxe uppercase text-[var(--color-gold)] mb-4">
            Get in Touch
          </p>
          <div className="w-16 h-px gold-line mx-auto mb-8 opacity-50" />
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-navy)] leading-[1.1] mb-4">
            Begin your{' '}
            <em className="italic text-gradient-gold">consultation</em>
          </h2>
          <p className="text-base font-light text-[var(--color-foreground)]/65 max-w-lg mx-auto leading-relaxed">
            Fill in the form below and our team will respond within one business
            day to arrange your complimentary assessment.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* ── Left panel – info ── */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Card */}
            <div className="rounded-2xl bg-[var(--color-navy)] p-8 shadow-[var(--shadow-navy)]">
              <p className="text-[11px] tracking-luxe uppercase text-[var(--color-gold)] mb-6">
                Clinic Details
              </p>
              <div className="space-y-6">
                {INFO.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-[var(--color-gold)]/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={15} className="text-[var(--color-gold)]" />
                    </div>
                    <div>
                      <p className="text-white/50 text-[11px] tracking-wide uppercase mb-0.5">{label}</p>
                      <p className="text-white text-[14px] font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-white/10 my-7" />

              <p className="text-white/60 text-[13px] leading-relaxed font-light">
                All consultations are completely free of charge with no obligation.
                Your privacy is our priority — details are never shared.
              </p>
            </div>

            {/* Badges */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'CQC Regulated',     sub: 'Licensed Clinic' },
                { label: 'BABTAC Member',      sub: 'Certified Specialist' },
                { label: 'FDA-Approved',       sub: 'Aptos Threads' },
                { label: '5★ Rated',           sub: 'Google Reviews' },
              ].map(({ label, sub }) => (
                <div key={label} className="rounded-xl border border-[var(--color-border)] bg-white/70 p-3 text-center backdrop-blur-sm">
                  <p className="text-[var(--color-navy)] text-[12px] font-semibold">{label}</p>
                  <p className="text-[var(--color-foreground)]/50 text-[11px]">{sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right panel – form ── */}
          <div className="lg:col-span-3 rounded-2xl bg-white/80 backdrop-blur-md border border-[var(--color-border)] p-8 shadow-[var(--shadow-soft)]">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
                <div className="w-16 h-16 rounded-full bg-[var(--color-gold)]/15 flex items-center justify-center">
                  <CheckCircle2 size={32} className="text-[var(--color-gold)]" />
                </div>
                <h3 className="font-serif text-2xl text-[var(--color-navy)]">Message Received</h3>
                <p className="text-[var(--color-foreground)]/60 text-sm max-w-xs leading-relaxed">
                  Thank you for reaching out. We'll be in touch within one business
                  day to confirm your consultation.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name:'', email:'', phone:'', treatment:'', message:'' }) }}
                  className="text-[var(--color-gold)] text-sm underline underline-offset-2 hover:text-[var(--color-gold-deep)] transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] tracking-wide uppercase text-[var(--color-foreground)]/50 font-medium">
                      Full Name <span className="text-[var(--color-gold)]">*</span>
                    </label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className={FIELD}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] tracking-wide uppercase text-[var(--color-foreground)]/50 font-medium">
                      Email Address <span className="text-[var(--color-gold)]">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className={FIELD}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] tracking-wide uppercase text-[var(--color-foreground)]/50 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="07700 000000"
                      className={FIELD}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] tracking-wide uppercase text-[var(--color-foreground)]/50 font-medium">
                      Treatment Interest
                    </label>
                    <select
                      name="treatment"
                      value={form.treatment}
                      onChange={handleChange}
                      className={cn(FIELD, 'cursor-pointer appearance-none')}
                    >
                      <option value="" disabled>Select a treatment…</option>
                      {TREATMENTS.map(t => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] tracking-wide uppercase text-[var(--color-foreground)]/50 font-medium">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us a little about your concerns or goals…"
                    className={cn(FIELD, 'resize-none')}
                  />
                </div>

                {/* Privacy note */}
                <p className="text-[11px] text-[var(--color-foreground)]/40 leading-relaxed">
                  By submitting this form you agree to be contacted regarding your enquiry.
                  We never share your details with third parties.
                </p>

                <Button type="submit" variant="primary" size="lg" className="group w-full">
                  <Send size={15} />
                  Send Enquiry
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
