import { createFileRoute } from '@tanstack/react-router'
import { Container } from '../components/Container'
import { PageHeader } from '../components/PageHeader'
import { COMPANY } from '../data/company'

export const Route = createFileRoute('/en/podporujeme')({
  head: () => ({
    meta: [{ title: 'We support — Daně - VTVS s.r.o.' }],
  }),
  component: Page,
})

function Page() {
  return (
    <Container>
      <PageHeader
        index="06"
        eyebrow="Corporate responsibility"
        title="We support"
        lead={`${COMPANY.name} sponsors and supports:`}
      />
      <ul className="prose">
        <li>
          Bezdr civic association organising children&apos;s camps
          <br />
          <a className="link" href="http://bezdr.cz/" target="_blank" rel="noopener noreferrer">
            bezdr.cz
          </a>
        </li>
        <li>
          Nishchitha from India through long-distance adoption
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
