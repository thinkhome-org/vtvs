import { createFileRoute } from '@tanstack/react-router'
import { CopyableInline, czechPhoneHref } from '../components/CopyableInline'
import { Container } from '../components/Container'
import { PageHeader } from '../components/PageHeader'
import { COMPANY } from '../data/company'

export const Route = createFileRoute('/en/kontakt')({
  head: () => ({
    meta: [{ title: 'Contact — Daně - VTVS s.r.o.' }],
  }),
  component: Page,
})

function Page() {
  return (
    <Container broad>
      <PageHeader index="07" eyebrow="Contact" title="Contact" lead="Contact details" />
      <div className="kontakt-grid">
        <div className="prose">
          <p>
            {COMPANY.name}
            <br />
            {COMPANY.address.street}
            <br />
            {COMPANY.address.city}
          </p>
          <p>
            Company ID:{' '}
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
            <br />
            <br />
            {COMPANY.court}
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
        <div>
          <iframe
            className="map-frame"
            title="Map — Daně - VTVS s.r.o."
            loading="lazy"
            src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.1006707459046!2d14.387250015717436!3d50.06567627942405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x45ce1f161d9eacfe!2sDan%C4%9B%20-%20VTVS%2C%20s.r.o.!5e0!3m2!1scs!2scz!4v1594642236019!5m2!1scs!2scz"
          />
        </div>
      </div>
    </Container>
  )
}
