/* ────────────────────────────────────────────────────────────────
   Prerender: turns the SPA into static, crawlable HTML per route.
   Run AFTER `vite build` and `vite build --ssr`.
     node scripts/prerender.mjs
   Reads dist/index.html as the template, renders each route with the
   SSR bundle, injects per-page <title>/meta/canonical/FAQ schema, and
   writes dist/<route>/index.html. Also regenerates sitemap.xml.
   ──────────────────────────────────────────────────────────────── */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const SITE = 'https://www.drmatla.com'

const template = readFileSync(resolve(root, 'dist/index.html'), 'utf-8')
const { render, ROUTES } = await import(
  pathToFileURL(resolve(root, 'dist-ssr/entry-server.js')).href
)

const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function faqSchema(items) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  })
}

function pageHtml(route) {
  const url = SITE + route.path
  const appHtml = render(route.path)
  let html = template

  // Inject rendered app markup.
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  // Title + description + canonical + OG/Twitter mirrors.
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(route.title)}</title>`)
  html = html.replace(
    /<meta name="description" content="[\s\S]*?" \/>/,
    `<meta name="description" content="${esc(route.description)}" />`,
  )
  html = html.replace(
    /<link rel="canonical" href="[\s\S]*?" \/>/,
    `<link rel="canonical" href="${url}" />`,
  )
  html = html.replace(
    /<meta property="og:url" content="[\s\S]*?" \/>/,
    `<meta property="og:url" content="${url}" />`,
  )
  html = html.replace(
    /<meta property="og:title" content="[\s\S]*?" \/>/,
    `<meta property="og:title" content="${esc(route.title)}" />`,
  )
  html = html.replace(
    /<meta property="og:description" content="[\s\S]*?" \/>/,
    `<meta property="og:description" content="${esc(route.description)}" />`,
  )

  // Replace the existing FAQ schema block with this page's FAQ schema.
  if (route.faqItems?.length) {
    const block = `<script type="application/ld+json">\n    ${faqSchema(route.faqItems)}\n    </script>`
    // Replace the SECOND ld+json script (the FAQPage) — matched by "FAQPage".
    html = html.replace(
      /<script type="application\/ld\+json">\s*{\s*"@context": "https:\/\/schema\.org",\s*"@type": "FAQPage"[\s\S]*?<\/script>/,
      block,
    )
  }
  return html
}

let count = 0
for (const route of ROUTES) {
  const html = pageHtml(route)
  const outPath =
    route.path === '/'
      ? resolve(root, 'dist/index.html')
      : resolve(root, `dist${route.path}/index.html`)
  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, html)
  console.log('  prerendered', route.path.padEnd(24), '→', outPath.replace(root + '/', ''))
  count++
}

// Regenerate sitemap.xml from the real routes.
const today = new Date().toISOString().slice(0, 10)
const urls = ROUTES.map(r => {
  const priority = r.path === '/' ? '1.0' : r.path === '/aptos-thread-lift' ? '0.9' : '0.8'
  return `  <url>\n    <loc>${SITE}${r.path === '/' ? '/' : r.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`
}).join('\n\n')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n\n${urls}\n\n</urlset>\n`
writeFileSync(resolve(root, 'dist/sitemap.xml'), sitemap)
console.log(`\n✓ Prerendered ${count} pages + sitemap.xml`)
