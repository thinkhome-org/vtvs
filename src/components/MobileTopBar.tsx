import { SiteLogo } from './SiteLogo'

type Props = { open: boolean; onToggle: () => void }

export function MobileTopBar({ open, onToggle }: Props) {
  return (
    <header
      className="mobile-top mobile-top--visible"
      data-open={open ? 'true' : 'false'}
    >
      <SiteLogo layout="mobile" />
      <button
        type="button"
        aria-label={open ? 'Zavřít menu' : 'Otevřít menu'}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="hamburger"
        onClick={onToggle}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}
