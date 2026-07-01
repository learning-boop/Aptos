import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

/** A single accordion row. */
function Item({ q, a, open, onToggle }) {
  return (
    <div className="border border-[var(--color-border)] rounded-xl overflow-hidden bg-[var(--color-card)]">
      <h3 className="m-0">
        <button
          className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left hover:bg-[var(--color-muted)]/50 transition-colors duration-200"
          onClick={onToggle}
          aria-expanded={open}
        >
          <span className="font-serif text-base md:text-lg text-[var(--color-foreground)] leading-snug font-medium">
            {q}
          </span>
          <span className="shrink-0 w-7 h-7 rounded-full border border-[var(--color-gold)]/30 flex items-center justify-center">
            {open
              ? <Minus size={13} className="text-[var(--color-gold-deep)]" />
              : <Plus  size={13} className="text-[var(--color-gold-deep)]" />}
          </span>
        </button>
      </h3>
      {open && (
        <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-[var(--color-border)]/50">
          <p className="text-sm md:text-[15px] font-light text-[var(--color-muted-foreground)] leading-relaxed pt-4">
            {a}
          </p>
        </div>
      )}
    </div>
  )
}

/**
 * Renders a list of {q, a} items as an accordion.
 * `defaultOpen` controls which index starts expanded (-1 for none).
 */
export function FaqAccordion({ items, defaultOpen = 0 }) {
  const [openId, setOpenId] = useState(defaultOpen)
  return (
    <div className="flex flex-col gap-3">
      {items.map((f, i) => (
        <Item
          key={f.q}
          q={f.q}
          a={f.a}
          open={openId === i}
          onToggle={() => setOpenId(openId === i ? -1 : i)}
        />
      ))}
    </div>
  )
}
