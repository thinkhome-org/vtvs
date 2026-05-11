import { useRouterState } from '@tanstack/react-router'
import { useEffect } from 'react'
import { pathnameLocale } from '../lib/localePaths'

/** Syncs `<html lang>` with the active locale route. */
export function DocumentLang() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  useEffect(() => {
    document.documentElement.lang = pathnameLocale(pathname)
  }, [pathname])
  return null
}
