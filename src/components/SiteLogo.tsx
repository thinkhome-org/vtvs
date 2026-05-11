import { Link } from '@tanstack/react-router'

const logo = {
  src: '/images/layout_logo_vtvs.gif',
  width: 150,
  height: 70,
  alt: 'Daně - VTVS s.r.o.',
} as const

type Props = {
  /** Sidebar: full width up to 150px. Mobile bar: compact height. */
  layout: 'sidebar' | 'mobile'
}

export function SiteLogo({ layout }: Props) {
  return (
    <Link
      to="/"
      className={layout === 'mobile' ? 'site-logo site-logo--mobile' : 'site-logo site-logo--sidebar'}
    >
      <img
        src={logo.src}
        width={logo.width}
        height={logo.height}
        alt={logo.alt}
        decoding="async"
      />
    </Link>
  )
}
