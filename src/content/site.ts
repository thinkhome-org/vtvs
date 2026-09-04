export const site = {
  name: "Daně - VTVS s.r.o.",
  logo: {
    src: "/brand/logo-vtvs.gif",
    width: 150,
    height: 70,
    alt: "Daně VTVS",
  },
  nav: [
    { href: "/", label: "Domů" },
    { href: "#sluzby", label: "Služby" },
    { href: "#onas", label: "O nás" },
    { href: "#cenik", label: "Ceník" },
    { href: "#kontakt", label: "Kontakt" },
  ],
  hero: {
    title: "Účetnictví a daně, na které se můžete spolehnout",
    lead: "O účetnictví, daně, mzdy a související povinnosti našich klientů se staráme již od roku 1997. Osobně, srozumitelně a s odborným zázemím daňového poradce.",
    cta: { primary: "Naše služby", secondary: "Kontaktujte nás" },
  },
  people: [
    { name: "Petr Smutný", tel: "+420608703177", display: "608\u00a0703\u00a0177" },
    { name: "Ing. Zuzana Smutná", tel: "+420608754812", display: "608\u00a0754\u00a0812" },
  ],
  trust: [
    "Od roku 1997",
    "Daňový poradce",
    "Člen Komory daňových poradců",
    "Praha 5",
  ],
  slogan: "Vaše trable vyřeší Smutní",
  photos: {
    desk: { src: "/photos/office-1.png", width: 1536, height: 864, alt: "Kancelář VTVS — pracovní stůl" },
    room: { src: "/photos/office-2.png", width: 1536, height: 1152, alt: "Kancelář VTVS — interiér" },
    book: { src: "/photos/office-3.png", width: 1024, height: 1365, alt: "Zákoník na pracovním stole" },
    original: { src: "/brand/layout-foto.jpg", width: 215, height: 460, alt: "Kancelář Daně VTVS" },
  },
} as const;

export type SiteData = typeof site;
