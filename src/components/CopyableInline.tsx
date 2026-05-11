import { useCallback, useState, type ReactNode } from 'react'

export function czechPhoneHref(display: string): string {
  const d = display.replace(/\D/g, '')
  const n = d.length === 9 ? `420${d}` : d
  return `tel:+${n}`
}

type CopyableInlineProps = {
  copyText: string
  copyAriaLabel: string
  children: ReactNode
  /** e.g. English on /en */
  buttonTitle?: string
  copiedAnnouncement?: string
}

export function CopyableInline({
  copyText,
  copyAriaLabel,
  children,
  buttonTitle = 'Zkopírovat do schránky',
  copiedAnnouncement = 'Zkopírováno do schránky.',
}: CopyableInlineProps) {
  const [copied, setCopied] = useState(false)

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(copyText)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // ignore
    }
  }, [copyText])

  return (
    <span className="copy-inline">
      {children}
      <button
        type="button"
        className="copy-inline-btn"
        onClick={onCopy}
        aria-label={copyAriaLabel}
        title={buttonTitle}
        data-copied={copied ? 'true' : 'false'}
      >
        {copied ? (
          <span aria-hidden>✓</span>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.5a1 1 0 0 0-.3-.7l-4.5-4.5a1 1 0 0 0-.7-.3H10a2 2 0 0 0-2 2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M6 8H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? copiedAnnouncement : ''}
      </span>
    </span>
  )
}
