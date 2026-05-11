import { createFileRoute } from '@tanstack/react-router'
import { Container } from '../components/Container'
import { PageHeader } from '../components/PageHeader'

export const Route = createFileRoute('/en/')({
  head: () => ({
    meta: [{ title: 'Basic information — Daně - VTVS s.r.o.' }],
  }),
  component: Page,
})

function Page() {
  return (
    <Container>
      <PageHeader
        index="EN"
        eyebrow="English"
        title="Basic information"
        lead="Daně - VTVS s.r.o. is an independent professional company providing accounting, tax advisory and administrative services."
      />
      <div className="prose">
        <p>
          We are active in our business since 1997. We contribute with foreign companies and
          individuals as well as Czech companies and citizens.
        </p>
        <h2 className="h-2">We are licensed by Chamber of tax advisors of the Czech Republic.</h2>
        <p>Our services:</p>
        <ul>
          <li>tax advisory</li>
          <li>accounting and bookkeeping services</li>
          <li>corporate and personal income tax</li>
          <li>VAT</li>
          <li>payroll</li>
          <li>negotiations with the tax authorities</li>
          <li>other related services</li>
        </ul>
        <p>We offer an individual approach to our clients according their needs.</p>
      </div>
    </Container>
  )
}
