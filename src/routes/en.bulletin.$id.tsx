import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { Container } from '../components/Container'
import { Prose } from '../components/Prose'
import { bulletinBySlug } from '#/data/bulletins.generated'

export const Route = createFileRoute('/en/bulletin/$id')({
  head: ({ params }) => {
    const rec = bulletinBySlug[params.id]
    if (!rec) return { meta: [{ title: 'Bulletin — Daně - VTVS s.r.o.' }] }
    return {
      meta: [
        {
          title: `${rec.title.split(' — ')[0]} — Daně - VTVS s.r.o.`,
        },
      ],
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()
  const rec = bulletinBySlug[id]
  if (!rec) throw notFound()

  return (
    <Container>
      <p className="back-link">
        <Link to="/en/bulletin" className="link">
          ← back to bulletin list
        </Link>
      </p>
      <Prose>
        <div className="bulletin-html" dangerouslySetInnerHTML={{ __html: rec.html }} />
      </Prose>
    </Container>
  )
}
