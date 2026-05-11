import { createFileRoute } from '@tanstack/react-router'
import { Container } from '../components/Container'
import { PageHeader } from '../components/PageHeader'
import { SectionRule } from '../components/SectionRule'
import { PRACTICAL_LINKS } from '../data/links'

export const Route = createFileRoute('/odkazy')({
  head: () => ({
    meta: [{ title: 'Odkazy — Daně - VTVS s.r.o.' }],
  }),
  component: Page,
})

function Page() {
  return (
    <Container>
      <PageHeader index="08" eyebrow="Odkazy" title="Odkazy" lead="Praktické odkazy:" />
      <ul className="prose">
        {PRACTICAL_LINKS.map((l) => (
          <li key={l.href}>
            {l.label}
            <br />
            <a className="link" href={l.href} target="_blank" rel="noopener noreferrer">
              {l.host}
            </a>
          </li>
        ))}
      </ul>
      <SectionRule />
      <p>Naši partneři:</p>
      <div className="partner-row">
        <img
          className="partner-logo"
          src="/images/logo-stormware.png"
          width={120}
          height={60}
          alt="Stormware"
        />
        <ul className="prose">
          <li>Účtujeme v programu Pohoda.</li>
          <li>
            Používáme produkty společnosti{' '}
            <a
              className="link"
              href="http://www.stormware.cz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stormware s.r.o.
            </a>
          </li>
        </ul>
      </div>
    </Container>
  )
}
