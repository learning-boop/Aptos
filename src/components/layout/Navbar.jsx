import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { TREATMENTS } from '@/content/treatments'

const BOOK_URL = 'https://portal.aestheticnursesoftware.com/book-online/1150'

const MAIN_LINKS = [
  { label: 'Before & After', to: '/before-and-after' },
  { label: 'Cost',           to: '/cost' },
  { label: 'FAQs',           to: '/faq' },
  { label: 'About',          to: '/about' },
]

export function Navbar() {
  const [scrolled,      setScrolled]      = useState(false)
  const [mobileOpen,    setMobileOpen]    = useState(false)
  const [treatmentsOpen, setTreatmentsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkCls = 'text-[13px] font-light tracking-wide text-white/70 hover:text-white transition-colors duration-200'

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[var(--color-navy)]/95 backdrop-blur-md shadow-[0_1px_0_rgba(192,160,98,0.15)] py-3'
          : 'bg-[var(--color-navy)]/40 backdrop-blur-sm py-5',
      )}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center" aria-label="Dr Matla — home">
          <img
            src="/logo10.webp"
            alt="Aptos Thread Lift Newcastle — Dr Matla"
            className={cn('w-auto object-contain transition-all duration-500', scrolled ? 'h-16' : 'h-20')}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {/* Treatments dropdown */}
          <div className="relative group">
            <button className={cn(linkCls, 'flex items-center gap-1')} aria-haspopup="true">
              Treatments <ChevronDown size={13} className="opacity-70" />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="w-64 rounded-xl bg-[var(--color-card)] shadow-luxe border border-[var(--color-border)] p-2">
                <Link to="/aptos-thread-lift" className="block px-4 py-2.5 rounded-lg text-sm text-[var(--color-foreground)] hover:bg-[var(--color-muted)] transition-colors font-medium">
                  Aptos Thread Lift <span className="text-[var(--color-gold-deep)]">·</span> Overview
                </Link>
                <div className="my-1 h-px bg-[var(--color-border)]" />
                {TREATMENTS.filter(t => t.slug !== 'aptos-thread-lift').map(t => (
                  <Link
                    key={t.slug}
                    to={`/${t.slug}`}
                    className="block px-4 py-2.5 rounded-lg text-sm text-[var(--color-muted-foreground)] hover:bg-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
                  >
                    {t.navLabel}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {MAIN_LINKS.map(({ label, to }) => (
            <NavLink key={to} to={to} className={linkCls}>
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href={BOOK_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="sm">Reserve Your Consultation</Button>
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[var(--color-navy)] border-t border-white/10 px-6 py-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          <button
            className="flex items-center justify-between text-base font-light text-white/80"
            onClick={() => setTreatmentsOpen(v => !v)}
            aria-expanded={treatmentsOpen}
          >
            Treatments
            <ChevronDown size={16} className={cn('transition-transform', treatmentsOpen && 'rotate-180')} />
          </button>
          {treatmentsOpen && (
            <div className="flex flex-col gap-3 pl-4 border-l border-white/10">
              {TREATMENTS.map(t => (
                <Link
                  key={t.slug}
                  to={`/${t.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {t.navLabel}
                </Link>
              ))}
            </div>
          )}

          {MAIN_LINKS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              className="text-base font-light text-white/80 hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}

          <a href="tel:+443334441399" className="flex items-center gap-2 text-sm text-white/50">
            <Phone size={14} /> 0333 444 1399
          </a>
          <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="mt-2 w-full">
            <Button variant="primary" size="md" className="w-full">Reserve Consultation</Button>
          </a>
        </div>
      )}
    </header>
  )
}
