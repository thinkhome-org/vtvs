import { createFileRoute } from '@tanstack/react-router'
import { Container } from '../components/Container'
import { PageHeader } from '../components/PageHeader'
import { PricingTable } from '../components/PricingTable'
import { PRICING_INTRO_EN } from '../data/pricing'

export const Route = createFileRoute('/en/cenik')({
  head: () => ({
    meta: [{ title: 'Price list — Daně - VTVS s.r.o.' }],
  }),
  component: Page,
})

function Page() {
  return (
    <Container broad>
      <PageHeader index="04" eyebrow="Indicative pricing" title="Price list" lead={PRICING_INTRO_EN} />
      <PricingTable />
    </Container>
  )
}
