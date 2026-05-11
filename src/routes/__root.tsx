import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { useState } from 'react'
import CookieConsentBanner from '../components/CookieConsentBanner'
import { MobileNavOverlay } from '../components/MobileNavOverlay'
import { MobileTopBar } from '../components/MobileTopBar'
import { SiteFooter } from '../components/SiteFooter'
import { SiteSidebar } from '../components/SiteSidebar'
import { googleAnalyticsId } from '../data/company'

import appCss from '../styles.css?url'
import 'vanilla-cookieconsent/dist/cookieconsent.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'keywords',
        content: 'účetnictví,daně,daňový poradce,daňové poradenství',
      },
      {
        name: 'description',
        content:
          'Daně - VTVS s.r.o. — účetnictví, daňové poradenství, DPH, mzdy. Praha 5.',
      },
      { title: 'Daně - VTVS s.r.o.' },
    ],
    links: [{ rel: 'stylesheet', href: appCss }, { rel: 'icon', href: '/favicon.ico' }],
  }),
  shellComponent: RootDocument,
})

function RootDocument() {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <html lang="cs">
      <head>
        <HeadContent />
        <span
          id="ga-id"
          data-id={googleAnalyticsId}
          style={{ display: 'none' }}
          aria-hidden
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Přeskočit na obsah
        </a>
        <MobileTopBar open={navOpen} onToggle={() => setNavOpen((o) => !o)} />
        <MobileNavOverlay open={navOpen} onClose={() => setNavOpen(false)} />
        <div className="app-shell">
          <SiteSidebar />
          <div className="content-column">
            <div className="page-transition-scope">
              <main id="main" className="page-outlet">
                <Outlet />
              </main>
              <SiteFooter />
            </div>
            <div className="nav-curtain" aria-hidden="true" />
          </div>
        </div>
        <CookieConsentBanner />
        <Scripts />
      </body>
    </html>
  )
}
