import { useEffect } from 'react'

const SITE = 'https://www.drmatla.com'

/* Sets/updates a <meta> or <link> tag in <head>. */
function setTag(selector, attrs) {
  if (typeof document === 'undefined') return
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement(selector.startsWith('link') ? 'link' : 'meta')
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
}

/**
 * Client-side SEO manager. During static prerender the same values are
 * baked into each page's HTML by scripts/prerender.mjs, so this component
 * keeps things correct for in-app (SPA) navigation.
 */
export function Seo({ title, description, path = '/', faqItems }) {
  useEffect(() => {
    if (title) document.title = title

    const url = SITE + path
    if (description) {
      setTag('meta[name="description"]', { name: 'description', content: description })
      setTag('meta[property="og:description"]', { property: 'og:description', content: description })
      setTag('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
    }
    if (title) {
      setTag('meta[property="og:title"]', { property: 'og:title', content: title })
      setTag('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    }
    setTag('link[rel="canonical"]', { rel: 'canonical', href: url })
    setTag('meta[property="og:url"]', { property: 'og:url', content: url })

    // Per-page FAQ schema (id-tagged so we can replace it on navigation)
    const id = 'faq-schema-runtime'
    document.getElementById(id)?.remove()
    if (faqItems?.length) {
      const s = document.createElement('script')
      s.type = 'application/ld+json'
      s.id = id
      s.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      })
      document.head.appendChild(s)
    }
  }, [title, description, path, faqItems])

  return null
}
