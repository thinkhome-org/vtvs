import { site } from "@/content/site";

export function HeroCopy({
  headingClassName = "",
  leadClassName = "",
  showLead = true,
}: {
  headingClassName?: string;
  leadClassName?: string;
  showLead?: boolean;
}) {
  return (
    <>
      <h1 id="hero-heading" className={`hero-heading ${headingClassName}`}>
        {site.hero.title}
      </h1>
      {showLead ? <p className={`hero-lead ${leadClassName}`}>{site.hero.lead}</p> : null}
    </>
  );
}
