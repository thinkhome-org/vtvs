import { useEffect } from 'react'
import * as CookieConsent from 'vanilla-cookieconsent'
import { googleAnalyticsId } from '#/data/company'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    __vtvs_ga_initialized?: boolean
  }
}

function ensureGtagBase() {
  const idHolder = document.getElementById('ga-id')
  const measurementId =
    idHolder?.getAttribute('data-id')?.trim() || googleAnalyticsId

  window.dataLayer = window.dataLayer || []
  if (typeof window.gtag !== 'function') {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer!.push(args)
    }
    window.gtag('consent', 'default', {
      ad_storage: 'denied',
      analytics_storage: 'denied',
    })
    window.gtag('js', new Date())
    window.__vtvs_ga_initialized = false
  }

  if (!window.__vtvs_ga_initialized) {
    window.__vtvs_ga_initialized = true
    const s = document.createElement('script')
    s.async = true
    s.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    document.head.appendChild(s)
    window.gtag!('config', measurementId)
  }

  window.gtag!('consent', 'update', {
    analytics_storage: CookieConsent.acceptedCategory('analytics')
      ? 'granted'
      : 'denied',
    ad_storage: 'denied',
  })
}

export default function CookieConsentBanner() {
  useEffect(() => {
    const openPrefs = () => CookieConsent.showPreferences()

    CookieConsent.run({
      disableTransitions: false,
      categories: {
        necessary: { enabled: true, readOnly: true },
        analytics: {
          enabled: false,
          readOnly: false,
          autoClear: {
            cookies: [{ name: /^_ga/ }, { name: '_gid' }],
          },
        },
      },
      language: {
        default: 'cs',
        translations: {
          cs: {
            consentModal: {
              title: 'Soubory cookies',
              description:
                'Na našich stránkách používáme soubory cookies k zajištění funkčnosti. Pokud volitelné soubory cookies odmítnete, budeme používat pouze cookies nezbytné k poskytování našich služeb.',
              acceptAllBtn: 'Přijmout vše',
              acceptNecessaryBtn: 'Odmítnout vše',
              showPreferencesBtn: 'Správa cookies',
            },
            preferencesModal: {
              title: 'Nastavení souborů cookies',
              acceptAllBtn: 'Povolit vše',
              acceptNecessaryBtn: 'Odmítnout vše',
              savePreferencesBtn: 'Uložit nastavení',
              closeIconLabel: 'Zavřít',
              serviceCounterLabel: 'Služba|Služeb',
              sections: [
                {
                  title: '',
                  description:
                    'Soubory cookies používáme k zajištění funkčnosti a ke zlepšení vašeho komfortu na našem webu. Svou volbu můžete kdykoli upravit.',
                },
                {
                  title: 'Technické a funkční cookies',
                  description:
                    'Tyto soubory cookies jsou nezbytné pro správné fungování našich webových stránek.',
                  linkedCategory: 'necessary',
                },
                {
                  title: 'Analytické cookies',
                  description:
                    'Souhlas udělíte použití nástroje Google Analytics pro anonymní statistiky návštěvnosti.',
                  linkedCategory: 'analytics',
                },
              ],
            },
          },
        },
      },
      onConsent: () => ensureGtagBase(),
      onChange: () => ensureGtagBase(),
      guiOptions: {
        consentModal: {
          layout: 'cloud inline',
          position: 'middle center',
        },
        preferencesModal: {
          layout: 'bar',
          position: 'left',
        },
      },
    })

    window.addEventListener(
      'vtvs-open-cookie-settings',
      openPrefs as EventListener,
    )

    if (!CookieConsent.validConsent()) {
      CookieConsent.show()
    } else ensureGtagBase()

    return () => {
      window.removeEventListener(
        'vtvs-open-cookie-settings',
        openPrefs as EventListener,
      )
    }
  }, [])

  return null
}
