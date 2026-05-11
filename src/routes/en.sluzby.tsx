import { createFileRoute } from '@tanstack/react-router'
import { Container } from '../components/Container'
import { PageHeader } from '../components/PageHeader'
import { Prose } from '../components/Prose'
import { SERVICE_ITEMS_EN } from '../data/services'

export const Route = createFileRoute('/en/sluzby')({
  head: () => ({
    meta: [{ title: 'Services — Daně - VTVS s.r.o.' }],
  }),
  component: Page,
})

function Page() {
  return (
    <Container>
      <PageHeader
        index="02"
        eyebrow="Our services"
        title="Services"
        lead="We provide comprehensive services:"
      />
      <Prose>
        <ul>
          {SERVICE_ITEMS_EN.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </Prose>
      <p className="lead" style={{ marginTop: 'var(--sp-6)' }}>
        We offer an individual approach tailored to each client&apos;s needs and options.
      </p>
    </Container>
  )
}
