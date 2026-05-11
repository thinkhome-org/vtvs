import { createFileRoute } from '@tanstack/react-router'
import { Container } from '../components/Container'
import { PageHeader } from '../components/PageHeader'
import { SectionRule } from '../components/SectionRule'
import { VatCheckForm } from '../components/VatCheckForm'

export const Route = createFileRoute('/en/overeni-dic')({
  head: () => ({
    meta: [{ title: 'VAT number check — Daně - VTVS s.r.o.' }],
  }),
  component: Page,
})

function Page() {
  return (
    <Container>
      <PageHeader
        index="03"
        eyebrow="Online tools"
        title="VAT number validation (VIES)"
        lead="Use this page to check VAT identification numbers of businesses registered for VAT in EU member states. The form below is in Czech; results follow the European Commission database."
      />
      <p>
        Verification uses the{' '}
        <a className="link" href="https://ec.europa.eu/" target="_blank" rel="noopener noreferrer">
          European Commission
        </a>{' '}
        VIES service and is subject to its{' '}
        <a
          className="link"
          href="https://ec.europa.eu/taxation_customs/vies/viesdisc.do"
          target="_blank"
          rel="noopener noreferrer"
        >
          disclaimer
        </a>
        .
      </p>
      <p>
        Further information (including reliable taxpayer status in the Czech Republic) is available
        from the{' '}
        <a className="link" href="https://adisreg.mfcr.cz/" target="_blank" rel="noopener noreferrer">
          Ministry of Finance of the Czech Republic
        </a>
        .
      </p>
      <SectionRule />
      <VatCheckForm />
      <p className="small" style={{ marginTop: 'var(--sp-6)' }}>
        Additional lookup in ARES:{' '}
        <a className="link" href="https://ares.gov.cz/" target="_blank" rel="noopener noreferrer">
          ares.gov.cz
        </a>
        .
      </p>
    </Container>
  )
}
