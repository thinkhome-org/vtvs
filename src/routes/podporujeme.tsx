import { createFileRoute } from '@tanstack/react-router'
import { Container } from '../components/Container'
import { PageHeader } from '../components/PageHeader'
import { COMPANY } from '../data/company'

export const Route = createFileRoute('/podporujeme')({
  head: () => ({
    meta: [{ title: 'Podporujeme — Daně - VTVS s.r.o.' }],
  }),
  component: Page,
})

function Page() {
  return (
    <Container>
      <PageHeader
        index="06"
        eyebrow="Společenská odpovědnost"
        title="Podporujeme"
        lead={`Společnost ${COMPANY.name} sponzoruje a podporuje:`}
      />
      <ul className="prose">
        <li>
          Občanské sdružení Bezdr pořádající dětské tábory
          <br />
          <a className="link" href="http://bezdr.cz/" target="_blank" rel="noopener noreferrer">
            bezdr.cz
          </a>
        </li>
        <li>
          Nishchitha z Indie formou Adopce na dálku
          <br />
          <a
            className="link"
            href="http://www.charita-adopce.cz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.charita-adopce.cz
          </a>
        </li>
      </ul>
    </Container>
  )
}
