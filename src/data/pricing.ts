export type PriceRow = { desc: string; bezDph: string; sDph: string }

export const PRICING_INTRO = 'Ceník prací platný od 1. ledna 2026'

export const PRICING_ROWS: PriceRow[] = [
  { desc: 'odklad daňového přiznání', bezDph: '7 000 Kč', sDph: '8 470 Kč' },
  { desc: 'zpracování DPFO (§6,8,9,10)', bezDph: '2 500 Kč', sDph: '3 025 Kč' },
  { desc: 'DPFO (§7), ZP a SP', bezDph: '2 500 Kč', sDph: '3 025 Kč' },
  { desc: 'zpracování DPPO', bezDph: '4 000 Kč', sDph: '4 840 Kč' },
  {
    desc: 'osobní účast na kontrole FU, SP, ZP, IP - finanční účetní (1 hod.)',
    bezDph: '1 000 Kč',
    sDph: '1 210 Kč',
  },
  {
    desc: 'osobní účast na kontrole FU, SP, ZP, IP - daňový poradce (1 hod.)',
    bezDph: '2 000 Kč',
    sDph: '2 420 Kč',
  },
  {
    desc: 'osobní účast na kontrole FU, SP, ZP, IP - účetní asistent (1 hod.)',
    bezDph: '750 Kč',
    sDph: '908 Kč',
  },
  {
    desc: 'příprava podkladů ke kontrole FU, SP, ZP, IP  (1 hod.)',
    bezDph: '500 Kč',
    sDph: '605 Kč',
  },
  {
    desc: 'kontrola SP, ZP, IP - elektronicky',
    bezDph: '1 500 Kč',
    sDph: '1 815 Kč',
  },
  { desc: 'účetní poradenství', bezDph: '1 000 Kč', sDph: '1 210 Kč' },
  { desc: 'daňové poradenství', bezDph: '2 000 Kč', sDph: '2 420 Kč' },
  {
    desc: 'vedení účetnictví, daňové evidence (za položku v deníku)',
    bezDph: '32 Kč',
    sDph: '39 Kč',
  },
  { desc: 'sleva za elektronické doklady', bezDph: '10 Kč', sDph: '12 Kč' },
  {
    desc: 'zpracování výkazů (ČSÚ, výkazy pro banky apod.)',
    bezDph: '1 000 Kč',
    sDph: '1 210 Kč',
  },
  {
    desc: 'mzdové účetnictví (za osobu), 1-2 pracovníci',
    bezDph: '500 Kč',
    sDph: '605 Kč',
  },
  {
    desc: 'mzdové účetnictví (za osobu), 3-5 pracovníci',
    bezDph: '400 Kč',
    sDph: '484 Kč',
  },
  {
    desc: 'mzdové účetnictví (za osobu), 5 a více pracovníků',
    bezDph: '300 Kč',
    sDph: '363 Kč',
  },
  { desc: 'odhláška, přihláška', bezDph: '300 Kč', sDph: '363 Kč' },
]
