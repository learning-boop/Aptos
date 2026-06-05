import { Sparkles, ShieldCheck, Timer, TrendingUp, Zap, Heart } from 'lucide-react'
import { cn } from '@/lib/utils'
import { GoldLine } from '@/components/ui/GoldLine'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const STATS = [
  { num: '45', unit: 'min', label: 'Treatment Time' },
  { num: '3',  unit: 'yr',  label: 'Lasting Results' },
  { num: '0',  unit: '',    label: 'Days Downtime' },
  { num: 'FDA',unit: '',    label: 'Cleared & CE-Marked' },
]

const BENEFITS = [
  {
    icon: Zap,
    index: '01',
    title: 'Instant Visible Lift',
    body: 'Results appear immediately on the treatment table — no waiting weeks for your investment to reveal itself. Walk in, walk out transformed.',
    detail:
      'Fine-gauge threads physically reposition descended tissue the moment they are placed, providing an immediate mechanical lift visible from the very first session.',
    tag: 'Immediate onset',
    accent: 'gold',
  },
  {
    icon: ShieldCheck,
    index: '02',
    title: 'FDA-Cleared Technology',
    body: 'Aptos threads carry CE marking and FDA clearance — the highest international benchmarks for safety and clinical efficacy in medical aesthetics.',
    detail:
      'Manufactured from USP-grade poly-L-lactic acid (PLLA) and polycaprolactone (PCL), the threads are fully biodegradable and metabolised by the body within 12–18 months.',
    tag: 'Clinically validated',
    accent: 'ice',
  },
  {
    icon: Timer,
    index: '03',
    title: 'Zero Downtime',
    body: 'Return to your calendar the same day. No general anaesthetic, no compression garments, no weeks of bruising. Lunch-hour luxury that fits your life.',
    detail:
      'Performed under local anaesthesia, the procedure is entirely ambulatory. Most clients resume social engagements within 24–48 hours with only minor transient swelling.',
    tag: 'Same-day recovery',
    accent: 'gold',
  },
  {
    icon: TrendingUp,
    index: '04',
    title: 'Results That Improve Over Time',
    body: 'Unlike fillers that simply add volume, Aptos threads trigger a cascade of natural collagen synthesis — meaning your result looks better at 6 months than at 6 days.',
    detail:
      'The thread scaffold stimulates fibroblast activity and neo-collagenesis for 12–18 months post-treatment. Tissue firmness and skin texture continue to improve throughout this period, with results lasting up to 3 years.',
    tag: 'Progressive enhancement',
    accent: 'ice',
  },
  {
    icon: Heart,
    index: '05',
    title: 'Unmistakably Natural',
    body: 'Precision thread placement follows your facial anatomy exactly — lifting what has descended, never adding what was never there. Refined. Recognisable. You.',
    detail:
      'Thread vectors are mapped to anatomical retaining ligaments rather than surface landmarks, preserving natural facial dynamics and expression while restoring youthful contours.',
    tag: 'Anatomy-first approach',
    accent: 'gold',
  },
  {
    icon: Sparkles,
    index: '06',
    title: 'Collagen Regeneration',
    body: "The patented Aptos bidirectional barb design anchors tissue while creating a sustained regenerative signal — your own biology doing the work of renewal.",
    detail:
      'Aptos Excel threads feature micro-notches at opposing angles that grip tissue from multiple directions, distributing tension evenly across the lift zone and maximising the fibroblast-stimulating surface area.',
    tag: 'Patented thread design',
    accent: 'ice',
  },
]

/* ─── Stat Strip ─────────────────────────────────────────────── */
function StatStrip() {
  const { ref, isVisible } = useScrollReveal()
  return (
    <div
      ref={ref}
      className={cn(
        'flex mb-14 rounded-2xl overflow-hidden',
        'border border-[var(--color-border)] divide-x divide-[var(--color-border)]',
        'transition-all duration-700',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
      )}
    >
      {STATS.map(({ num, unit, label }) => (
        <div key={label} className="flex-1 py-5 px-6 text-center">
          <p className="font-serif text-3xl font-light text-[var(--color-gold)] leading-none mb-1">
            {num}
            {unit && <span className="text-lg">{unit}</span>}
          </p>
          <p className="text-[11px] tracking-luxe uppercase text-[var(--color-muted-foreground)]">
            {label}
          </p>
        </div>
      ))}
    </div>
  )
}

/* ─── Benefit Card ───────────────────────────────────────────── */
function BenefitCard({ icon: Icon, index, title, body, detail, tag, accent, delay }) {
  const { ref, isVisible } = useScrollReveal()
  const isGold = accent === 'gold'
  const accentVar = isGold ? 'var(--color-gold)' : 'var(--color-ice)'

  return (
    <article
      ref={ref}
      className={cn(
        'group relative rounded-2xl p-7 overflow-hidden',
        'bg-[var(--color-card)] border border-[var(--color-border)]',
        'hover:border-[var(--color-gold-dim)] hover:bg-[var(--color-card-hover)]',
        'transition-all duration-700 hover:-translate-y-1',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Top shimmer line */}
      <div
        className="absolute top-0 inset-x-4 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${accentVar}33, transparent)` }}
      />

      {/* Ghost index number */}
      <span
        className="absolute top-4 right-5 font-serif text-5xl font-light leading-none select-none pointer-events-none"
        style={{ color: `${accentVar}18` }}
      >
        {index}
      </span>

      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
        style={{ background: `color-mix(in srgb, ${accentVar} 10%, transparent)` }}
      >
        <Icon size={19} style={{ color: accentVar }} />
      </div>

      {/* Title */}
      <h3 className="font-serif text-xl text-[var(--color-foreground)] mb-2.5 leading-snug">
        {title}
      </h3>

      {/* Body */}
      <p className="text-sm font-light text-[var(--color-muted-foreground)] leading-relaxed mb-4">
        {body}
      </p>

      {/* Divider */}
      <div
        className="h-px mb-4"
        style={{ background: `color-mix(in srgb, ${accentVar} 15%, transparent)` }}
      />

      {/* Clinical detail */}
      <p className="text-[11px] leading-relaxed" style={{ color: `${accentVar}80` }}>
        {detail}
      </p>

      {/* Tag */}
      <span
        className="inline-block mt-4 text-[11px] tracking-luxe uppercase px-2.5 py-1 rounded"
        style={{
          color: accentVar,
          border: `0.5px solid color-mix(in srgb, ${accentVar} 28%, transparent)`,
        }}
      >
        {tag}
      </span>

      {/* Bottom glow line on hover */}
      <div
        className="absolute bottom-0 inset-x-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: `linear-gradient(90deg, transparent, ${accentVar}80, transparent)` }}
      />
    </article>
  )
}

/* ─── Section ────────────────────────────────────────────────── */
export function Benefits() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      id="benefits"
      className="relative py-24 md:py-32 px-6 bg-[var(--color-background)] overflow-hidden"
    >
      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(197,168,110,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(197,168,110,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Soft radial glow at top */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[360px]"
        style={{
          background:
            'radial-gradient(ellipse, color-mix(in srgb, var(--color-gold) 7%, transparent) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div
          ref={ref}
          className={cn(
            'text-center mb-14 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          )}
        >
          <p className="text-[11px] tracking-luxe uppercase text-[var(--color-gold-deep)] mb-4">
            Why Choose Aptos
          </p>
          <GoldLine className="w-16 mx-auto mb-6 opacity-50" />
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-foreground)] mb-4 leading-tight">
            Thread lifting, <em className="italic text-gradient-gold">refined</em>
          </h2>
          <p className="text-sm font-light text-[var(--color-muted-foreground)] max-w-xl mx-auto leading-relaxed">
            The Aptos technique unites precision bioengineering with your body's own regenerative
            intelligence — delivering a lift that looks, moves, and ages as naturally as you do.
          </p>
        </div>

        {/* ── Stat Strip ── */}
        <StatStrip />

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map(({ icon, index, title, body, detail, tag, accent }, i) => (
            <BenefitCard
              key={title}
              icon={icon}
              index={index}
              title={title}
              body={body}
              detail={detail}
              tag={tag}
              accent={accent}
              delay={i * 80}
            />
          ))}
        </div>

      </div>
    </section>
  )
}