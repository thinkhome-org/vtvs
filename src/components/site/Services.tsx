import { CatalogBand } from "@/components/site/CatalogBand";
import { site } from "@/content/site";

export function Services() {
  return (
    <CatalogBand
      id="sluzby"
      heading={site.services.heading}
      lead={site.services.lead}
      items={site.services.items}
      closing={site.services.closing}
      wideLast
    />
  );
}
