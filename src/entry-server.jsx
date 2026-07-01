import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App.jsx'

/** Render the app for a given URL path to an HTML string. */
export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
}

/* Re-export the route manifest so the prerender script (plain Node,
   no @ alias) can read per-page SEO without resolving src imports. */
export { ROUTES } from './content/routes.js'
