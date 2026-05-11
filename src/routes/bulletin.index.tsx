import { createFileRoute, Link } from '@tanstack/react-router'
import { Container } from '../components/Container'
import { PageHeader } from '../components/PageHeader'
import { bulletinIndex } from '#/data/bulletinIndex'

function isArchive(year: number) {
  const now = new Date()
  const months = (now.getFullYear() - year) * 12 + (now.getMonth() + 1)
  return months >= 24
}

export const Route = createFileRoute('/bulletin/')({
  head: () => ({
    meta: [{ title: 'Bulletin — Daně - VTVS s.r.o.' }],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Container>
      <PageHeader
        index="05"
        eyebrow="Bulletin VTVS"
        title="Bulletin VTVS"
        lead="Bulletin slouží jako archiv odborných poznámek k době jejich vzniku — některé informace mohou dnes být zastaralé. Plné znění všech dílů zachováváme beze změny."
      />
      <ul className="bulletin-list-page">
        {bulletinIndex.map((b) => (
          <li key={b.slug}>
            <h2>
              {isArchive(b.year) ? <span className="archive-pill">Archiv</span> : null}
              <Link to="/bulletin/$id" params={{ id: b.slug }}>
                {b.title}
              </Link>
            </h2>
            <p className="bulletin-intro">{b.summary}</p>
            {b.topics.length > 0 ? (
              <ul>
                {b.topics.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </Container>
  )
}
