import { CtaPair } from "@/components/hero/CtaPair";
import { HeroCopy } from "@/components/hero/HeroCopy";
import { OfficePhoto } from "@/components/hero/OfficePhoto";
import { ContactFooter } from "@/components/site/ContactFooter";
import { Header } from "@/components/site/Header";
import { Services } from "@/components/site/Services";
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

        <Services />

        <span id="en" className="page-anchor" />
      </main>
      <ContactFooter />
    </>
  );
}
