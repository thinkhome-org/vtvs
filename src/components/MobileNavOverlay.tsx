import { Link, useRouterState } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'
import { LanguageSwitcher } from './LanguageSwitcher'
import { navForPath, pathActiveNav } from '../data/nav'

type Props = { open: boolean; onClose: () => void }

export function MobileNavOverlay({ open, onClose }: Props) {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)

    const panel = panelRef.current
    const focusables = panel?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    )
    const first = focusables?.[0]
    first?.focus()

    const trap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !panel) return
      const nodes = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      )
      if (nodes.length === 0) return
      const list = [...nodes]
      const ix = list.indexOf(document.activeElement as HTMLElement)
      if (e.shiftKey) {
        if (ix <= 0) {
          e.preventDefault()
          list[list.length - 1]?.focus()
        }
      } else if (ix === list.length - 1) {
        e.preventDefault()
        list[0]?.focus()
      }
    }
    panel?.addEventListener('keydown', trap)

    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
      panel?.removeEventListener('keydown', trap)
    }
  }, [open, onClose])

  return (
    <div
      ref={panelRef}
      id="mobile-nav"
      className="mobile-overlay"
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      data-open={open ? 'true' : 'false'}
    >
      <nav onClick={onClose}>
        {navForPath(pathname).map((item) => (
          <Link
            key={item.to}
            to={item.to}
            data-active={pathActiveNav(pathname, item.to) ? 'true' : 'false'}
          >
            {item.label}
          </Link>
        ))}
        <LanguageSwitcher />
      </nav>
      <div className="bottom">
        <p className="small">Člen Komory daňových poradců ČR</p>
      </div>
    </div>
  )
}
