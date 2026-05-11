import { createServerFn } from '@tanstack/react-start'

const CC = /^[A-Z]{2}$/
const NUM = /^[0-9A-Z+*.]{2,12}$/

export const verifyVat = createServerFn({ method: 'POST' })
  .inputValidator((d: { countryCode: string; vatNumber: string }) => {
    const cc = String(d?.countryCode ?? '')
      .toUpperCase()
      .trim()
    const n = String(d?.vatNumber ?? '')
      .toUpperCase()
      .replace(/[^0-9A-Z+*.]/g, '')
    if (!CC.test(cc) || !NUM.test(n)) {
      throw new Error('INVALID_FORMAT')
    }
    return { countryCode: cc, vatNumber: n }
  })
  .handler(async ({ data }) => {
    const res = await fetch(
      'https://ec.europa.eu/taxation_customs/vies/rest-api/check-vat-number',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      },
    )
    if (!res.ok) throw new Error('VIES_UNAVAILABLE')
    return (await res.json()) as {
      valid: boolean
      name?: string
      address?: string
      requestDate: string
    }
  })
