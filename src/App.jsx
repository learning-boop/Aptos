import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { Home } from '@/pages/Home'
import { TreatmentPage } from '@/pages/TreatmentPage'
import { CostPage } from '@/pages/CostPage'
import { BeforeAfterPage } from '@/pages/BeforeAfterPage'
import { AboutPage } from '@/pages/AboutPage'
import { FaqPage } from '@/pages/FaqPage'
import { TREATMENTS } from '@/content/treatments'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        {TREATMENTS.map(t => (
          <Route key={t.slug} path={t.slug} element={<TreatmentPage slug={t.slug} />} />
        ))}
        <Route path="cost" element={<CostPage />} />
        <Route path="before-and-after" element={<BeforeAfterPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}