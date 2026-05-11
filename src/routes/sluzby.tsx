import { createFileRoute } from '@tanstack/react-router'
import { Container } from '../components/Container'
import { PageHeader } from '../components/PageHeader'
import { Prose } from '../components/Prose'
import { SERVICE_ITEMS } from '../data/services'

export const Route = createFileRoute('/sluzby')({
  head: () => ({
    meta: [{ title: 'Služby — Daně - VTVS s.r.o.' }],
  }),
  component: Page,
})

function Page() {
  return (
    <Container>
      <PageHeader
        index="02"
        eyebrow="Naše služby"
        title="Služby"
        lead="Poskytujeme komplexní služby:"
      />
      <Prose>
        <ul>
          {SERVICE_ITEMS.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </Prose>
      <p className="lead" style={{ marginTop: 'var(--sp-6)' }}>
        Našim klientům nabízíme individuální přístup dle potřeb a možností.
      </p>
    </Container>
  )
}
