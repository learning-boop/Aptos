import { TREATMENTS } from './treatments'
import { FAQS, faqsByCategory } from './faqData'

/* Standalone (non-treatment) pages. */
const STANDALONE = [
  {
    path: '/',
    title: "Aptos Thread Lift Newcastle | Dr Matla Clinic | Non-Surgical Face Lift",
    description:
      "Newcastle's doctor-led Aptos Thread Lift clinic. Non-surgical facelift, jawline, jowl, neck and brow lifting by Dr Matla — natural results, minimal downtime. Book a consultation.",
    faqItems: FAQS.filter(f => f.cat.includes('popular')),
  },
  {
    path: '/cost',
    title: 'Aptos Thread Lift Cost Newcastle | Pricing, Safety & Recovery | Dr Matla',
    description:
      'How much does an Aptos Thread Lift cost in Newcastle? Thread lift treatment typically starts from around £250. Learn about pricing, safety, recovery and consultations with Dr Matla.',
    faqItems: faqsByCategory('cost', 8),
  },
  {
    path: '/before-and-after',
    title: 'Aptos Thread Lift Before & After Newcastle | Results & Timeline | Dr Matla',
    description:
      'What do Aptos Thread Lift before and after results look like? Natural lift to the jawline, jowls and cheeks. See the results timeline and what to expect. Newcastle clinic, Dr Matla.',
    faqItems: faqsByCategory('results', 6),
  },
  {
    path: '/about',
    title: 'Dr Matla Aesthetics | Doctor-Led Thread Lift Clinic Newcastle upon Tyne',
    description:
      'Dr Matla Aesthetics is a doctor-led aesthetics clinic in Newcastle upon Tyne offering Aptos and PDO thread lift treatments with a safety-first, natural-results approach.',
    faqItems: faqsByCategory('newcastle', 5),
  },
  {
    path: '/faq',
    title: 'Aptos Thread Lift FAQs Newcastle | Common Questions | Dr Matla',
    description:
      'Answers to common questions about the Aptos Thread Lift in Newcastle — treatment, cost, safety, recovery, results and booking. Doctor-led clinic, Dr Matla Aesthetics.',
    faqItems: FAQS,
  },
]

/* Treatment pages derived from the treatments content. */
const TREATMENT_ROUTES = TREATMENTS.map(t => ({
  path: `/${t.slug}`,
  title: t.seoTitle,
  description: t.seoDescription,
  faqItems: faqsByCategory(t.faqCat, t.faqLimit),
}))

export const ROUTES = [...STANDALONE, ...TREATMENT_ROUTES]

/** All URL paths, for the router and prerender/sitemap. */
export const ROUTE_PATHS = ROUTES.map(r => r.path)
