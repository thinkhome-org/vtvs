import type { Metadata } from "next";
import { OfficePhoto } from "@/components/hero/OfficePhoto";
import { CatalogBand } from "@/components/site/CatalogBand";
import { ContactFooter } from "@/components/site/ContactFooter";
import { Header } from "@/components/site/Header";
import { LinkDirectory } from "@/components/site/LinkDirectory";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "O nás — Daně - VTVS s.r.o.",
  description: site.about.paragraphs[0],
};

export default function AboutPage() {
  const photo = site.photos.desk;

  return (
    <>
      <Header />
      <main id="obsah">
        <section className="hero hero--page" aria-labelledby="about-heading">
          <div className="hero-copy">
            <h1 id="about-heading" className="hero-heading">
              {site.about.heading}
            </h1>
            {site.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="hero-lead">
                {paragraph}
              </p>
            ))}
          </div>

          <OfficePhoto
            src={photo.src}
            alt={photo.alt}
            fill
            className="hero-photo"
            sizes="(max-width: 959px) 100vw, 60vw"
          />
        </section>

        <CatalogBand
          id="podporujeme"
          heading={site.support.heading}
          lead={site.support.lead}
          items={site.support.items}
        />

        <LinkDirectory />
      </main>
      <ContactFooter />
    </>
  );
}
