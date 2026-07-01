import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/Footer'

/* Scroll to top on every route change (SPA navigation). */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (typeof window !== 'undefined') window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export function Layout() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--color-background)]">
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  )
}
