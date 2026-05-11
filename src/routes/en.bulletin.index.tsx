import { createFileRoute, Link } from '@tanstack/react-router'
import { Container } from '../components/Container'
import { PageHeader } from '../components/PageHeader'
import { bulletinIndex } from '#/data/bulletinIndex'

function isArchive(year: number) {
  const now = new Date()
  const months = (now.getFullYear() - year) * 12 + (now.getMonth() + 1)
  return months >= 24
}

export const Route = createFileRoute('/en/bulletin/')({
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
        eyebrow="VTVS bulletin"
        title="VTVS bulletin"
        lead="This bulletin is an archive of professional notes from the time they were written — some information may be outdated today. We preserve the full original Czech text of every issue."
      />
      <ul className="bulletin-list-page">
        {bulletinIndex.map((b) => (
          <li key={b.slug}>
            <h2>
              {isArchive(b.year) ? <span className="archive-pill">Archive</span> : null}
              <Link to="/en/bulletin/$id" params={{ id: b.slug }}>
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
