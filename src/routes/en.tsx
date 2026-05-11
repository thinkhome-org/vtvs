import { createFileRoute } from '@tanstack/react-router'
import { CopyableInline, czechPhoneHref } from '../components/CopyableInline'
import { Container } from '../components/Container'
import { PageHeader } from '../components/PageHeader'
import { COMPANY } from '../data/company'

export const Route = createFileRoute('/en')({
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
        <h2 className="h-2">Contacts</h2>
        <p>
          Daně – VTVS, s.r.o.
          <br />
          {COMPANY.address.street}
          <br />
          {COMPANY.address.city}
        </p>
        <p>
          IČ:{' '}
          <CopyableInline
            copyText={COMPANY.ico}
            copyAriaLabel="Copy identification number to clipboard"
            buttonTitle="Copy to clipboard"
            copiedAnnouncement="Copied to clipboard."
          >
            <span className="contact-num">{COMPANY.ico}</span>
          </CopyableInline>
          <br />
          VAT ID:{' '}
          <CopyableInline
            copyText={COMPANY.dic}
            copyAriaLabel="Copy VAT identification number to clipboard"
            buttonTitle="Copy to clipboard"
            copiedAnnouncement="Copied to clipboard."
          >
            <span className="contact-num">{COMPANY.dic}</span>
          </CopyableInline>
        </p>
        <p>
          E-mail:{' '}
          <CopyableInline
            copyText={COMPANY.email}
            copyAriaLabel="Copy e-mail address to clipboard"
            buttonTitle="Copy to clipboard"
            copiedAnnouncement="Copied to clipboard."
          >
            <a className="link" href={`mailto:${COMPANY.email}`}>
              {COMPANY.email}
            </a>
          </CopyableInline>
        </p>
        <p>
          <strong>{COMPANY.people[0].name}</strong>
          <br />
          Tel.:{' '}
          <CopyableInline
            copyText={COMPANY.people[0].phone}
            copyAriaLabel={`Copy phone number — ${COMPANY.people[0].name}`}
            buttonTitle="Copy to clipboard"
            copiedAnnouncement="Copied to clipboard."
          >
            <a className="link" href={czechPhoneHref(COMPANY.people[0].phone)}>
              {COMPANY.people[0].phone}
            </a>
          </CopyableInline>
          <br />
          <br />
          <strong>{COMPANY.people[1].name}</strong>
          <br />
          Tel.:{' '}
          <CopyableInline
            copyText={COMPANY.people[1].phone}
            copyAriaLabel={`Copy phone number — ${COMPANY.people[1].name}`}
            buttonTitle="Copy to clipboard"
            copiedAnnouncement="Copied to clipboard."
          >
            <a className="link" href={czechPhoneHref(COMPANY.people[1].phone)}>
              {COMPANY.people[1].phone}
            </a>
          </CopyableInline>
        </p>
      </div>
    </Container>
  )
}
