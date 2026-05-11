import { Link, useRouterState } from '@tanstack/react-router'
import { localizedPath, pathnameLocale } from '../lib/localePaths'

export function LanguageSwitcher() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const loc = pathnameLocale(pathname)
  const csHref = localizedPath(pathname, 'cs')
  const enHref = localizedPath(pathname, 'en')

  return (
    <p className="lang lang-switch" translate="no">
      <Link to={csHref} data-active={loc === 'cs' ? 'true' : 'false'} hrefLang="cs">
        cs
      </Link>
      <span aria-hidden> / </span>
      <Link to={enHref} data-active={loc === 'en' ? 'true' : 'false'} hrefLang="en">
        en
      </Link>
    </p>
  )
}
