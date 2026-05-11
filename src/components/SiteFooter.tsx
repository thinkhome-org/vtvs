export function SiteFooter() {
  const y = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <p className="small">
        Copyright © {y} Daně - VTVS s.r.o.
        {' · '}
        <button
          type="button"
          className="link-button"
          onClick={() =>
            window.dispatchEvent(new CustomEvent('vtvs-open-cookie-settings'))
          }
        >
          Cookies
        </button>
      </p>
    </footer>
  )
}
