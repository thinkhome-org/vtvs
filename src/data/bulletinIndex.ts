/** Bulletin archive listing — summaries and bullets from vtvs.cz/bulletin.php */

export type BulletinIndexEntry = {
  slug: string
  href: `/bulletin/${string}`
  title: string
  summary: string
  topics: readonly string[]
  year: number
}

export const bulletinIndex: BulletinIndexEntry[] = [
  {
    slug: '2016-01',
    href: '/bulletin/2016-01',
    title: 'Bulletin 1 / 2016',
    summary: 'EET - Elektronická evidence tržeb',
    year: 2016,
    topics: [
      'Etapy evidence tržeb - koho se týká a od kdy',
      'Evidované tržby - jaké platby se budou evidovat',
      'Způsoby evidence tržeb',
      'Získání a zaregistrování certifikátů',
    ],
  },
  {
    slug: '2015-02',
    href: '/bulletin/2015-02',
    title: 'Bulletin 2 / 2015',
    summary: 'Změny v DPH a daních z příjmu, které nás čekají v roce 2016',
    year: 2015,
    topics: ['DPH – daň z přidané hodnoty', 'Daň z příjmů'],
  },
  {
    slug: '2015-01',
    href: '/bulletin/2015-01',
    title: 'Bulletin 1 / 2015',
    summary: 'Změny v DPH a daních z příjmu zejména od 1.1.2015',
    year: 2015,
    topics: [
      'DPH - nová sazba, autorské honoráře, nemovitosti, dočasný režim přenesení povinnosti a další',
      'DPFO - zaměstnanci, podnikatelé, pronajímatelé',
      'DPPO - dodanění závazků, opravné položky, odpisy pohledávek a další',
      'Daňový řád',
    ],
  },
  {
    slug: '2014-01',
    href: '/bulletin/2014-01',
    title: 'Bulletin 1 / 2014',
    summary: 'Změny v DPH a daních z příjmu zejména od 1.1.2014',
    year: 2014,
    topics: [
      'DPH - elektronické podávání, zmírnění ručení, změny v osvobození',
      'DPFO - omezení paušálních výdajů, další změny',
      'DPPO',
      'Daň dědická a darovací',
    ],
  },
  {
    slug: '2013-02',
    href: '/bulletin/2013-02',
    title: 'Bulletin 2 / 2013',
    summary: 'Změny ve mzdové oblasti pro rok 2013',
    year: 2013,
    topics: [
      'Důchodové spoření zákon 297/2012 Sb.',
      'Sleva na dani pro starobní důchodce',
      'Solidární daň',
      'Zvýšení srážkové daně u nerezidenta',
      'Příjmy osvobozené od daně',
      'Paušální výdaje',
      'Minimální mzda, úrazové pojištění a archivace dokladů',
      'Elektronická podání na OSSZ',
      'Zákon 198/2011 o pokutách a dlužném pojistném',
      'Rodičovská dovolená',
      'Exekuce',
      'Riziko budoucího snížení důchodu zaměstnance',
      'Zákon o ochraně veřejného zdraví 258/2000 se směrnicí 432/2003',
    ],
  },
  {
    slug: '2013-01',
    href: '/bulletin/2013-01',
    title: 'Bulletin 1 / 2013',
    summary: 'Změny v DPH od 1.1.2013',
    year: 2013,
    topics: [
      'Zvýšení obou sazeb DPH',
      'Zveřejnění čísel účtů a ručení za DPH',
      'Další novinky v DPH',
    ],
  },
  {
    slug: '2012-04',
    href: '/bulletin/2012-04',
    title: 'Bulletin 4 / 2012',
    summary: 'Další novelizace zákoníku práce a souvisejících předpisů',
    year: 2012,
    topics: [],
  },
  {
    slug: '2012-03',
    href: '/bulletin/2012-03',
    title: 'Bulletin 3 / 2012',
    summary: 'Rozpory v podání plné moci na finanční úřad',
    year: 2012,
    topics: [],
  },
  {
    slug: '2012-02',
    href: '/bulletin/2012-02',
    title: 'Bulletin 2 / 2012',
    summary: 'Změny v DPH od 1.1.2012',
    year: 2012,
    topics: [
      'Zvýšení snížené sazby DPH',
      'Přenesení daňové povinnosti (tzv. reverse charge) u stavebních prací',
      'Další drobné novinky',
    ],
  },
  {
    slug: '2012-01',
    href: '/bulletin/2012-01',
    title: 'Bulletin 1 / 2012',
    summary: 'Nejdůležitější změny v zákoníku práce',
    year: 2012,
    topics: [
      'Úprava definice neplatnosti právního úkonu',
      'Změna zkušební doby',
      'Pracovní poměr na dobu určitou',
      'Rozšíření výpovědních důvodů, nemocenská, odstupné',
      'Dohoda o provedení práce',
      'Příplatky za práci v noci, ve svátek, v sobotu a neděli',
      'Krácení stravného',
      'Dovolená',
    ],
  },
  {
    slug: '2011-02',
    href: '/bulletin/2011-02',
    title: 'Bulletin 2 / 2011',
    summary: 'Změny v DPH od 1.4.2011',
    year: 2011,
    topics: [
      'Nárok na odpočet',
      'Opravy dokladů',
      'Ručení za nezaplacenou daň',
      'Přenesení daňové povinnosti (tzv. reverse charge) mezi českými plátci',
    ],
  },
  {
    slug: '2011-01',
    href: '/bulletin/2011-01',
    title: 'Bulletin 1 / 2011',
    summary: 'Změny v sociálním pojištění od 1.1.2011',
    year: 2011,
    topics: [
      'Zaměstnavatelé – zaměstnanci a nemocenské pojištění',
      'OSVČ a nemocenské pojištění',
      'Minima, maxima pro rok 2011',
    ],
  },
]
