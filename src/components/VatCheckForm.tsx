import { useState } from 'react'
import { verifyVat } from '../server/viesCheck'
import { viesCountryCodes } from '../data/viesCountries'

type Result = {
  valid: boolean
  name?: string
  address?: string
  requestDate: string
}

export function VatCheckForm() {
  const [country, setCountry] = useState('CZ')
  const [vat, setVat] = useState('')
  const [state, setState] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle')
  const [error, setError] = useState('')
  const [result, setResult] = useState<Result | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState('loading')
    setError('')
    setResult(null)
    try {
      const r = await verifyVat({ data: { countryCode: country, vatNumber: vat } })
      setResult(r)
      setState('ok')
    } catch (err: unknown) {
      const msg =
        err instanceof Error && err.message === 'INVALID_FORMAT'
          ? 'Neplatný formát DIČ.'
          : 'Ověření se nepodařilo. Zkuste to později nebo použijte ověření na stránkách Evropské komise.'
      setError(msg)
      setState('error')
    }
  }

  return (
    <section aria-labelledby="dic-form-heading">
      <h2 id="dic-form-heading" className="h-2 vat-form-heading">
        Ověření DIČ
      </h2>
      <form onSubmit={onSubmit} className="vat-form" noValidate>
        <div className="field vat-field">
          <label className="sr-only" htmlFor="vat-country">
            Stát
          </label>
          <select
            id="vat-country"
            className="select vat-select"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            {viesCountryCodes.map((c) => (
              <option key={c.code} value={c.code}>
                {c.code} — {c.name}
              </option>
            ))}
          </select>
          <label className="sr-only" htmlFor="vat-num">
            DIČ bez prefixu země
          </label>
          <input
            id="vat-num"
            className="input"
            type="text"
            autoComplete="off"
            placeholder="např. 27418961"
            value={vat}
            onChange={(e) => setVat(e.target.value.toUpperCase())}
          />
          <button type="submit" className="btn btn-primary" disabled={state === 'loading'}>
            {state === 'loading' ? 'Ověřuji…' : 'Ověřit'}
          </button>
        </div>
      </form>
      <div role="status" aria-live="polite" className="vat-status">
        {state === 'error' ? (
          <p className="small vat-error">{error}</p>
        ) : null}
        {state === 'ok' && result ? (
          <dl className="vat-dl">
            <dt className="vat-dt">Stav</dt>
            <dd
              className={
                result.valid ? 'vat-dd vat-dd--valid' : 'vat-dd vat-dd--invalid'
              }
            >
              {result.valid ? 'Platné' : 'Neplatné'}
            </dd>
            {result.name ? (
              <>
                <dt className="vat-dt">Název</dt>
                <dd className="vat-dd">{result.name}</dd>
              </>
            ) : null}
            {result.address ? (
              <>
                <dt className="vat-dt">Adresa</dt>
                <dd className="vat-dd vat-dd-address">{result.address}</dd>
              </>
            ) : null}
            <dt className="vat-dt">Ověřeno</dt>
            <dd className="vat-dd small">
              {result.requestDate
                ? new Date(result.requestDate).toLocaleString('cs-CZ')
                : '—'}
            </dd>
          </dl>
        ) : null}
      </div>
    </section>
  )
}
