import { useState } from 'react'
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, ArrowRight } from 'lucide-react'

const TREATMENTS = [
  'Aptos Thread Lift',
  'Aptos Excellence',
  'Aptos Spring',
  'Aptos Needle',
  'Facial Contouring',
  'Neck & Jawline Lift',
]

const COMPANY = [
  { label: 'About Dr Matla', href: '#about'       },
  { label: 'Before & After',  href: '#results'     },
  { label: 'How It Works',    href: '#how-it-works' },
  { label: 'FAQ',             href: '#faq'          },
  { label: 'Testimonials',    href: '#reviews'      },
  { label: 'Book Online',     href: '#book'         },
]

const HOURS = [
  { day: 'Mon – Fri', time: '9:00 – 18:30'  },
  { day: 'Saturday',  time: '10:00 – 16:00'  },
  { day: 'Sunday',    time: 'Closed'          },
]

const SOCIALS = [
  { icon: Instagram, href: 'https://www.instagram.com/drmatlaclinic/', label: 'Instagram' },
  { icon: Facebook,  href: 'https://www.facebook.com/aestheticuk',     label: 'Facebook'  },
  { icon: Youtube,   href: 'https://www.youtube.com/channel/UCMceyI4YQ7kBJIYGrgscHIA', label: 'YouTube' },
]

const LEGAL = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Cookie Policy',  href: '#' },
  { label: 'Terms of Use',   href: '#' },
  { label: 'Complaints',     href: '#' },
]

/* Logo — compact in footer context */
function LogoMark() {
  return (
    <a href="/" className="inline-flex items-center mb-6" aria-label="Aptos home">
      <img
        src="/logo.png"
        alt="Dr Matla Clinic"
        className="h-10 w-auto object-contain"
      />
    </a>
  )
}

/* Newsletter */
function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent]   = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) setSent(true)
  }

  return (
    <div
      className="rounded-2xl px-8 py-8 md:px-12 md:py-10 flex flex-col md:flex-row md:items-center gap-8"
      style={{
        background: 'linear-gradient(135deg, rgba(192,160,98,0.1) 0%, rgba(192,160,98,0.04) 100%)',
        border: '1px solid rgba(192,160,98,0.2)',
      }}
    >
      <div className="flex-1 min-w-0">
        <p
          className="text-[11px] uppercase tracking-[0.22em] mb-2"
          style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(192,160,98,0.7)' }}
        >
          Stay Informed
        </p>
        <h3
          className="text-xl font-light text-white mb-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Exclusive insights & offers
        </h3>
        <p
          className="text-[13px] text-white/55 font-light"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Treatment updates, clinical insights, and priority booking access.
        </p>
      </div>

      {sent ? (
        <div className="shrink-0 text-center">
          <p className="text-[var(--color-gold)] text-[13px] font-medium">Thank you — you're subscribed.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex shrink-0 gap-2 w-full md:w-auto">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 md:w-56 rounded-sm px-4 py-3 text-[13px] font-light bg-white/8 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-[var(--color-gold)]/50 transition-colors"
            style={{ fontFamily: 'Inter, sans-serif' }}
          />
          <button
            type="submit"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 text-[12px] font-medium uppercase tracking-[0.16em] bg-[var(--color-gold)] text-[var(--color-navy)] hover:bg-[var(--color-gold-light)] transition-colors rounded-sm"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Subscribe <ArrowRight size={12} />
          </button>
        </form>
      )}
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] pt-16 md:pt-20" aria-label="Site footer">

      {/* Top hairline */}
      <div
        className="h-px opacity-20 mx-0"
        style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)' }}
      />

      <div className="mx-auto max-w-[90rem] px-6 md:px-16 pt-12">

        {/* Newsletter */}
        <div className="mb-16">
          <Newsletter />
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <LogoMark />
            <p
              className="text-[13px] text-white/55 font-light leading-relaxed mb-6 max-w-xs"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              London's premier Aptos Thread Lift clinic on Harley Street.
              Natural, non-surgical facial rejuvenation.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/12 flex items-center justify-center text-white/45 hover:border-[var(--color-gold)]/40 hover:text-[var(--color-gold)] transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Treatments */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-5 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
              Treatments
            </p>
            <ul className="flex flex-col gap-3">
              {TREATMENTS.map(t => (
                <li key={t}>
                  <a href="#treatments" className="text-[13px] text-white/60 font-light hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-5 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
              Clinic
            </p>
            <ul className="flex flex-col gap-3">
              {COMPANY.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-[13px] text-white/60 font-light hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-5 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
              Contact
            </p>
            <ul className="flex flex-col gap-4 mb-8">
              {[
                { icon: MapPin, text: '12 Harley Street, London W1G 9PQ' },
                { icon: Phone,  text: '0123 456 7890'                     },
                { icon: Mail,   text: 'hello@drmatlaclinic.com'            },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon size={14} className="text-[var(--color-gold)]/60 shrink-0 mt-0.5" />
                  <span className="text-[13px] text-white/60 font-light leading-snug" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-3 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
              Hours
            </p>
            <ul className="flex flex-col gap-2">
              {HOURS.map(({ day, time }) => (
                <li key={day} className="flex items-center justify-between gap-4">
                  <span className="text-[13px] text-white/55 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{day}</span>
                  <span className="text-[13px] text-white/40 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <p className="text-[11px] text-white/30 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            © {new Date().getFullYear()} Dr Matla Clinic. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {LEGAL.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-[11px] text-white/30 hover:text-white/55 transition-colors font-light"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
