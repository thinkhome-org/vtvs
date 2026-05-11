import { Link, useRouterState } from '@tanstack/react-router'
import { SiteLogo } from './SiteLogo'
import { NAV } from '../data/nav'

function pathActive(pathname: string, to: string) {
  if (to === '/') return pathname === '/'
  return pathname === to || pathname.startsWith(`${to}/`)
}

export function SiteSidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  return (
    <aside className="site-sidebar site-sidebar--desktop" aria-label="Hlavní navigace">
      <div className="brand">
        <SiteLogo layout="sidebar" />
      </div>
      <nav>
        {NAV.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            data-active={pathActive(pathname, item.to) ? 'true' : 'false'}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="bottom">
        <img
          src="/images/layout_logo_kdp.gif"
          width={40}
          height={42}
          alt="Komora daňových poradců"
        />
        <p className="small">Člen Komory daňových poradců ČR</p>
        <p className="lang">
          <span data-active="true">cs</span>
          <span aria-hidden> / </span>
          <Link to="/en">en</Link>
        </p>
      </div>
    </aside>
  )
}
