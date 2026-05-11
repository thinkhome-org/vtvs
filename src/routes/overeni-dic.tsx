import { createFileRoute } from '@tanstack/react-router'
import { Container } from '../components/Container'
import { PageHeader } from '../components/PageHeader'
import { SectionRule } from '../components/SectionRule'
import { VatCheckForm } from '../components/VatCheckForm'

export const Route = createFileRoute('/overeni-dic')({
  head: () => ({
    meta: [{ title: 'Ověření DIČ — Daně - VTVS s.r.o.' }],
  }),
  component: Page,
})

function Page() {
  return (
    <Container>
      <PageHeader
        index="03"
        eyebrow="On-line služby"
        title="Ověření DIČ pro účely DPH"
        lead="Na této stránce můžete ověřit platnost DIČ firem a subjektů registrovaných k DPH ve členských zemích Evropské unie."
      />
      <p>
        Do pole DIČ vyplňte ověřované daňové identifikační číslo (bez předpony státu) a
        stiskněte tlačítko „Ověřit“. Ověřování DIČ je prováděno z databáze{' '}
        <a
          className="link"
          href="https://ec.europa.eu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Evropské komise
        </a>{' '}
        a podléhá{' '}
        <a
          className="link"
          href="https://ec.europa.eu/taxation_customs/vies/viesdisc.do"
          target="_blank"
          rel="noopener noreferrer"
        >
          vymezení odpovědnosti
        </a>
        .
      </p>
      <p>
        Další informace (včetně informace, zda se jedná o spolehlivého plátce) jsou k
        dispozici na stránkách{' '}
        <a
          className="link"
          href="https://adisreg.mfcr.cz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ministerstva financí ČR
        </a>
        .
      </p>
      <SectionRule />
      <VatCheckForm />
      <p className="small" style={{ marginTop: 'var(--sp-6)' }}>
        Doplňkové ověření v ARES:{' '}
        <a className="link" href="https://ares.gov.cz/" target="_blank" rel="noopener noreferrer">
          ares.gov.cz
        </a>
        .
      </p>
    </Container>
  )
}
