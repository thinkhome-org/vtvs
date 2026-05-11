import { createFileRoute } from '@tanstack/react-router'
import { ChapterBlock } from '../components/ChapterBlock'
import { Container } from '../components/Container'
import { PageHeader } from '../components/PageHeader'
import { COMPANY } from '../data/company'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      {
        title: 'Daňové a účetní služby — Daně - VTVS s.r.o.',
      },
    ],
  }),
  component: Home,
})

function Home() {
  return (
    <Container>
      <div className="hero-grid">
        <div>
          <p className="eyebrow">
            <span className="idx">01</span>
            <span className="sep">—</span>
            <span>O nás</span>
          </p>
          <h1 className="h-display">{COMPANY.name}</h1>
          <p className="tagline-italic">{COMPANY.tagline}</p>
          <p className="lead">
            Vedením účetnictví, daňové evidence, daně z přidané hodnoty (DPH),
            personalistiky a dalších činností souvisejících s podnikáním se zabýváme
            již od roku 1997. Za tu dobu se naše klientela značně rozšířila a proto jsme
            se i my museli přizpůsobit.
          </p>
        </div>
        <div className="hero-photo-wrap">
          <img
            className="hero-photo"
            src="/images/layout_foto.jpg"
            width={260}
            height={560}
            alt="Kancelář Daně - VTVS s.r.o."
          />
          <div className="hero-photo-fade" aria-hidden />
        </div>
      </div>

      <ChapterBlock index="01" title="Praxe od roku 1997">
        <p>
          Vedením účetnictví, daňové evidence, daně z přidané hodnoty (DPH),
          personalistiky a dalších činností souvisejících s podnikáním se zabýváme
          již od roku 1997. Za tu dobu se naše klientela značně rozšířila a proto jsme
          se i my museli přizpůsobit.
        </p>
      </ChapterBlock>

      <ChapterBlock index="02" title="Daňový poradce od 2004">
        <p>
          Zuzana Smutná v roce 2004 úspěšně složila zkoušky daňového poradce a následné
          čtyři roky spolupracovala s mezinárodní poradenskou společností, kde získala
          další odborné zkušenosti.
        </p>
      </ChapterBlock>

      <ChapterBlock index="03" title="Komora daňových poradců ČR">
        <p>
          Abychom našim klientům zabezpečili větší komfort a záruku za naši práci,
          založili jsme v roce 2006 společnost Daně - VTVS,&nbsp;s.r.o.
        </p>
      </ChapterBlock>
    </Container>
  )
}
