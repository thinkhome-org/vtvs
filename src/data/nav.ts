import { pathnameLocale } from '../lib/localePaths'

export type NavItem = { readonly to: string; readonly label: string }

export const NAV_CS: readonly NavItem[] = [
  { to: '/', label: 'o nás' },
  { to: '/sluzby', label: 'naše služby' },
  { to: '/overeni-dic', label: 'on-line služby' },
  { to: '/cenik', label: 'orientační ceník' },
  { to: '/bulletin', label: 'bulletin VTVS' },
  { to: '/podporujeme', label: 'podporujeme' },
  { to: '/kontakt', label: 'kontakt' },
  { to: '/odkazy', label: 'odkazy' },
] as const

export const NAV_EN: readonly NavItem[] = [
  { to: '/en', label: 'about' },
  { to: '/en/sluzby', label: 'services' },
  { to: '/en/overeni-dic', label: 'online tools' },
  { to: '/en/cenik', label: 'price list' },
  { to: '/en/bulletin', label: 'bulletin' },
  { to: '/en/podporujeme', label: 'we support' },
  { to: '/en/kontakt', label: 'contact' },
  { to: '/en/odkazy', label: 'links' },
] as const

/** @deprecated use `navForPath` */
export const NAV = NAV_CS

export function navForPath(pathname: string): readonly NavItem[] {
  return pathnameLocale(pathname) === 'en' ? NAV_EN : NAV_CS
}

export function pathActiveNav(pathname: string, itemTo: string): boolean {
  const p = pathname.replace(/\/$/, '') || '/'
  const t = itemTo.replace(/\/$/, '') || '/'
  if (t === '/' || t === '/en') return p === t
  return p === t || p.startsWith(`${t}/`)
}
