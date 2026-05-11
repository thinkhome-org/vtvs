import { createFileRoute } from '@tanstack/react-router'
import { Container } from '../components/Container'
import { PageHeader } from '../components/PageHeader'
import { PricingTable } from '../components/PricingTable'
import { PRICING_INTRO } from '../data/pricing'

export const Route = createFileRoute('/cenik')({
  head: () => ({
    meta: [{ title: 'Ceník — Daně - VTVS s.r.o.' }],
  }),
  component: Page,
})

function Page() {
  return (
    <Container broad>
      <PageHeader index="04" eyebrow="Orientační ceník" title="Ceník" lead={PRICING_INTRO} />
      <PricingTable />
    </Container>
  )
}
