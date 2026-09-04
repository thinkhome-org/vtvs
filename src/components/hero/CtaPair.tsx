import { site } from "@/content/site";

export function CtaPair() {
  return (
    <p className="hero-actions">
      <a href="#sluzby">{site.hero.cta.primary}</a>
      {", "}
      <a href="#kontakt">{site.hero.cta.secondary}</a>
    </p>
  );
}
