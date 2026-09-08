import { CtaPair } from "@/components/hero/CtaPair";
import { HeroCopy } from "@/components/hero/HeroCopy";
import { OfficePhoto } from "@/components/hero/OfficePhoto";
import { PhoneRow } from "@/components/hero/PhoneRow";
import { Header } from "@/components/site/Header";
import { site } from "@/content/site";

export default function Home() {
  const photo = site.photos.room;

  return (
    <>
      <Header />
      <main id="obsah">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <HeroCopy />
            <CtaPair />
          </div>

          <OfficePhoto
            src={photo.src}
            alt={photo.alt}
            fill
            className="hero-photo"
            sizes="(max-width: 959px) 100vw, 60vw"
          />
        </section>

        <section id="kontakt" className="contact" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="contact-heading">
            {site.hero.cta.secondary}
          </h2>
          <PhoneRow />
        </section>

        <span id="sluzby" className="page-anchor" />
        <span id="onas" className="page-anchor" />
        <span id="cenik" className="page-anchor" />
        <span id="en" className="page-anchor" />
      </main>
    </>
  );
}
