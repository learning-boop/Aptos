import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react'
import { TREATMENTS as TREATMENT_PAGES } from '@/content/treatments'

const COMPANY = [
  { label: 'About Dr Matla', to: '/about'            },
  { label: 'Before & After', to: '/before-and-after' },
  { label: 'Cost & Pricing', to: '/cost'             },
  { label: 'Book Online',    href: 'https://portal.aestheticnursesoftware.com/book-online/1150' },
]

const HOURS = [
  { day: 'Mon – Fri', time: '9:00 – 18:30' },
  { day: 'Saturday',  time: '10:00 – 16:00' },
  { day: 'Sunday',    time: 'Closed'         },
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

function LogoMark() {
  return (
    <Link to="/" className="inline-flex items-center mb-6" aria-label="Dr Matla — home">
      <img
        src="/logo10.webp"
        alt="Dr Matla Clinic — Aptos Thread Lift Newcastle"
        className="h-22 w-auto object-contain"
      />
    </Link>
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

        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <LogoMark />
            <p
              className="text-[13px] text-white/55 font-light leading-relaxed mb-6 max-w-xs"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Newcastle's premier Aptos Thread Lift clinic.
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
              {TREATMENT_PAGES.map(t => (
                <li key={t.slug}>
                  <Link
                    to={`/${t.slug}`}
                    className="text-[13px] text-white/60 font-light hover:text-white transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {t.navLabel}
                  </Link>
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
              {COMPANY.map(({ label, href, to }) => (
                <li key={label}>
                  {to ? (
                    <Link
                      to={to}
                      className="text-[13px] text-white/60 font-light hover:text-white transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {label}
                    </Link>
                  ) : (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] text-white/60 font-light hover:text-white transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {label}
                    </a>
                  )}
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
                { icon: MapPin, text: 'Newcastle upon Tyne, NE1', href: null },
                { icon: Phone,  text: '0333 444 1399',            href: '0333 444 1399' },
                { icon: Mail,   text: 'hello@drmatla.com',         href: 'mailto:hello@drmatla.com' },
              ].map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon size={14} className="text-[var(--color-gold)]/60 shrink-0 mt-0.5" />
                  {href ? (
                    <a
                      href={href}
                      className="text-[13px] text-white/60 font-light leading-snug hover:text-white transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="text-[13px] text-white/60 font-light leading-snug" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {text}
                    </span>
                  )}
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
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
  <p
    className="text-[11px] text-white/30 font-light text-center sm:text-left"
    style={{ fontFamily: 'Inter, sans-serif' }}
  >
    © {new Date().getFullYear()} Dr Matla Clinic. All rights reserved.
  </p>

  <span className="hidden sm:block text-white/15">•</span>

  <p
    className="text-[11px] text-white/30 font-light text-center"
    style={{ fontFamily: 'Inter, sans-serif' }}
  >
    Design & Developed by{' '}
    <a
      href="https://creatorstouch.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[var(--color-gold)] hover:text-[#E5C78A] transition-colors duration-300"
    >
      Creators Touch
    </a>
  </p>
</div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
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