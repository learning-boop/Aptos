import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

const NAV_LINKS = [
  { label: 'Treatments',   href: '#treatments'  },
  { label: 'Results',      href: '#results'      },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About',        href: '#about'        },
  { label: 'FAQ',          href: '#faq'          },
]

export function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[var(--color-navy)]/95 backdrop-blur-md shadow-[0_1px_0_rgba(192,160,98,0.15)] py-3'
          : 'bg-transparent py-5',
      )}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        {/* Logo — fixed at 36px height, premium compact wordmark */}
        <a href="/" className="flex items-center" aria-label="Aptos home">
          <img
            src="/logo.png"
            alt="Dr Matla Clinic"
            className={cn(
              'w-auto object-contain transition-all duration-500',
              scrolled ? 'h-14' : 'h-16',
            )}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-[13px] font-light tracking-wide text-white/70 hover:text-white transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA — no phone number cluttering the nav */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="primary" size="sm">
          Reserve Your Consultation
          </Button>
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
        <div className="md:hidden bg-[var(--color-navy)] border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-light text-white/80 hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
          <a href="tel:+441234567890" className="flex items-center gap-2 text-sm text-white/50">
            <Phone size={14} /> 0123 456 7890
          </a>
          <Button variant="primary" size="md" className="mt-2 w-full">
            Book Consultation
          </Button>
        </div>
      )}
    </header>
  )
}
