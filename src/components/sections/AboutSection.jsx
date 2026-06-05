import { Award, GraduationCap, Star, CheckCircle } from 'lucide-react'

const CREDENTIALS = [
  { icon: GraduationCap, text: 'GMC Registered Practitioner'   },
  { icon: Award,         text: 'Aptos Certified Trainer'        },
  { icon: Star,          text: '9+ Years Clinical Experience'   },
  { icon: CheckCircle,   text: 'Official Aptos UK Partner'      },
]

const HIGHLIGHTS = [
  { value: '5,000+', label: 'Treatments'     },
  { value: '25 Yrs', label: 'Experience'     },
  { value: '4.9 ★',  label: 'Patient Rating' },
]

export function AboutSection() {
  return (
    <>
      <style>{`
        @keyframes about-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes about-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .about-reveal      { opacity:0; animation:about-fade-up  0.7s ease forwards; }
        .about-img-reveal  { opacity:0; animation:about-fade-in  1s   ease 0.2s forwards; }
      `}</style>

      <section
        id="about"
        className="relative overflow-hidden bg-[var(--color-navy)] py-28 md:py-36"
        aria-label="About Dr Matla"
      >
        {/* Background atmosphere */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div
            className="absolute left-0 top-1/4 h-[60%] w-[40%] opacity-[0.06]"
            style={{ background: 'radial-gradient(ellipse at 10% 50%, #C0A062 0%, transparent 70%)' }}
          />
          <div
            className="absolute right-0 bottom-0 h-[50%] w-[40%] opacity-[0.04]"
            style={{ background: 'radial-gradient(ellipse at 90% 80%, #7DD3FC 0%, transparent 70%)' }}
          />
          <div
            className="absolute inset-x-0 top-0 h-px opacity-20"
            style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)' }}
          />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-[90rem] grid-cols-1 items-center gap-16 px-6 md:px-16 lg:grid-cols-[1fr_1.1fr] xl:gap-20">

          {/* LEFT: image */}
          <div className="about-img-reveal relative mx-auto w-full max-w-lg lg:max-w-full order-2 lg:order-1">
            <div
              className="pointer-events-none absolute inset-0 -z-10 scale-[1.15] rounded-[2.5rem] opacity-40"
              style={{
                background: 'radial-gradient(ellipse at 50% 60%, rgba(192,160,98,0.2) 0%, transparent 70%)',
                filter: 'blur(32px)',
              }}
            />
            <div
              className="relative rounded-[2rem] p-[1px] shadow-[0_48px_120px_-24px_rgba(15,23,42,0.8)]"
              style={{
                background:
                  'linear-gradient(160deg, rgba(192,160,98,0.55) 0%, rgba(192,160,98,0.04) 40%, rgba(125,211,252,0.06) 70%, rgba(192,160,98,0.3) 100%)',
              }}
            >
              <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-[var(--color-slate-deep,#1E293B)] aspect-[4/5]">
                <img
                  src="/drmatla3.png"
                  alt="Dr Matla holding Aptos Threads 25th Anniversary package at Dr Matla Clinic"
                  className="h-full w-full object-cover object-center object-top transition-transform duration-700 hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/50 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-0 rounded-[calc(2rem-1px)] ring-1 ring-inset ring-white/8" />

                {/* Floating credential chip */}
                <div
                  className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-xl px-4 py-3"
                  style={{
                    background: 'rgba(15,23,42,0.75)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(192,160,98,0.2)',
                  }}
                >
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                    style={{ border: '1px solid rgba(192,160,98,0.4)', background: 'rgba(192,160,98,0.1)' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <circle cx="8" cy="8" r="7" stroke="#C0A062" strokeWidth="0.75" opacity="0.8"/>
                      <path d="M8 3 L12 8 L8 13 L4 8 Z" stroke="#C0A062" strokeWidth="0.75" fill="none" opacity="0.9"/>
                      <circle cx="8" cy="8" r="1.5" fill="#C0A062"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[12px] font-medium text-white leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Dr Matla
                    </p>
                    <p className="text-[11px] text-white/60 mt-0.5 tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Aptos Certified · Dr Matla Clinic
                    </p>
                  </div>
                  <div
                    className="ml-auto text-center"
                    style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '12px' }}
                  >
                    <p className="text-[16px] font-light leading-none text-[var(--color-gold)]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      25
                    </p>
                    <p className="text-[8px] uppercase tracking-[0.18em] text-white/40 mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Years
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats row beneath image */}
            <div className="mt-5 grid grid-cols-3 gap-3">
              {HIGHLIGHTS.map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center rounded-xl py-4 px-3 text-center"
                  style={{ background: 'rgba(192,160,98,0.06)', border: '1px solid rgba(192,160,98,0.18)' }}
                >
                  <span className="font-serif text-xl text-white leading-none">{value}</span>
                  <span className="mt-1 text-[11px] uppercase tracking-[0.16em] text-white/50" style={{ fontFamily: 'Inter, sans-serif' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: copy */}
          <div className="flex flex-col justify-center order-1 lg:order-2">

            {/* Eyebrow — raised to 11px */}
            <p
              className="mb-8 text-[11px] uppercase tracking-[0.28em] text-[var(--color-gold)]/70 about-reveal"
              style={{ fontFamily: 'Inter, sans-serif', animationDelay: '0.1s' }}
            >
              Meet Your Practitioner
            </p>

            <div className="mb-8 h-px w-12 bg-[var(--color-gold)]/35 about-reveal" style={{ animationDelay: '0.2s' }} aria-hidden="true" />

            <h2
              className="mb-6 text-[2.6rem] font-light leading-[1.08] tracking-[-0.01em] text-white sm:text-[3rem] md:text-[3.4rem] about-reveal"
              style={{ fontFamily: "'Playfair Display', serif", animationDelay: '0.3s' }}
            >
              Dr Matla —<br />
              <em className="not-italic" style={{ color: 'var(--color-gold)' }}>
                Aptos Specialist
              </em>
            </h2>

            {/* Body — raised from white/45 to white/75 */}
            <p
              className="mb-5 max-w-[30rem] text-[0.9375rem] font-light leading-[1.85] text-white/75 about-reveal"
              style={{ fontFamily: 'Inter, sans-serif', animationDelay: '0.45s' }}
            >
              With over two decades of experience in aesthetic medicine, Dr Matla is
              one of the UK's foremost practitioners of Aptos Thread Lift technology —
              an official Aptos partner and certified trainer trusted by patients
              across London and internationally.
            </p>

            <p
              className="mb-12 max-w-[30rem] text-[0.9375rem] font-light leading-[1.85] text-white/65 about-reveal"
              style={{ fontFamily: 'Inter, sans-serif', animationDelay: '0.55s' }}
            >
              His approach combines clinical precision with an artist's eye for natural
              results — lifting, defining, and rejuvenating without the need for
              surgery or prolonged downtime.
            </p>

            {/* Credentials */}
            <ul className="mb-14 flex flex-col gap-4 about-reveal" style={{ animationDelay: '0.65s' }}>
              {CREDENTIALS.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                    style={{ border: '1px solid rgba(192,160,98,0.25)', background: 'rgba(192,160,98,0.08)' }}
                  >
                    <Icon size={12} style={{ color: 'var(--color-gold)' }} />
                  </span>
                  {/* Credential text — raised from white/55 to white/80 */}
                  <span className="text-[13px] font-light tracking-wide text-white/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA — button text 12px */}
            <div className="about-reveal" style={{ animationDelay: '0.75s' }}>
              <button
                type="button"
                className="group inline-flex items-center gap-3 border border-[var(--color-gold)] bg-[var(--color-gold)] px-9 py-[15px] text-[12px] font-medium uppercase tracking-[0.18em] text-[var(--color-navy)] transition-all duration-300 hover:bg-transparent hover:text-[var(--color-gold)] shadow-[0_4px_20px_rgba(192,160,98,0.25)]"
                style={{ fontFamily: 'Inter, sans-serif', borderRadius: '2px' }}
              >
                Book a Consultation
                <svg
                  width="12" height="12" viewBox="0 0 14 14" fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <p className="mt-3 text-[11px] text-white/40" style={{ fontFamily: 'Inter, sans-serif' }}>
                ● Limited slots available — next opening: this week
              </p>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-x-0 bottom-0 z-10 h-px opacity-20"
          style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)' }}
          aria-hidden="true"
        />
      </section>
    </>
  )
}
