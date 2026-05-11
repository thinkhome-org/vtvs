export type Locale = 'cs' | 'en'

const EN_PREFIX = '/en'

function stripTrailingSlash(p: string) {
  if (p.length > 1 && p.endsWith('/')) return p.slice(0, -1)
  return p
}

/** Current UI language from URL. */
export function pathnameLocale(pathname: string): Locale {
  const p = stripTrailingSlash(pathname || '/') || '/'
  if (p === EN_PREFIX || p.startsWith(`${EN_PREFIX}/`)) return 'en'
  return 'cs'
}

/**
 * Path without `/en` prefix — same shape as Czech routes use (`/`, `/sluzby`, `/bulletin/x`).
 */
export function canonicalPath(pathname: string): string {
  const p = stripTrailingSlash(pathname || '/') || '/'
  if (p === EN_PREFIX) return '/'
  if (p.startsWith(`${EN_PREFIX}/`)) {
    const rest = p.slice(EN_PREFIX.length)
    return rest.startsWith('/') ? rest : `/${rest}`
  }
  return p
}

/** Build the same logical page in the other language. */
export function localizedPath(pathname: string, locale: Locale): string {
  const canon = canonicalPath(pathname)
  if (locale === 'en') {
    if (canon === '/') return EN_PREFIX
    return `${EN_PREFIX}${canon}`
  }
  return canon
}
