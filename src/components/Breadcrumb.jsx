import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

/**
 * Visual breadcrumb. `trail` = [{ label, to }] with the last item current.
 */
export function Breadcrumb({ trail }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[12px] tracking-wide">
      <ol className="flex flex-wrap items-center gap-1.5 text-white/50">
        {trail.map((item, i) => {
          const last = i === trail.length - 1
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {last || !item.to ? (
                <span className="text-[var(--color-gold-light)]">{item.label}</span>
              ) : (
                <Link to={item.to} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              )}
              {!last && <ChevronRight size={12} className="opacity-40" />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
