import Image from "next/image";
import { site } from "@/content/site";

export function LinkDirectory() {
  const { heading, lead, items, partners } = site.links;

  return (
    <section id="odkazy" className="links" aria-labelledby="links-heading">
      <div className="links-main">
        <h2 id="links-heading" className="links-heading">
          {heading}
        </h2>
        <p className="links-lead">{lead}</p>
        <ul className="link-dir">
          {items.map((item) => (
            <li key={item.title}>
              <a className="ink-link" href={item.href} rel="noreferrer">
                {item.title}
                {item.text ? `, ${item.text}` : null}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <aside className="partners" aria-labelledby="partners-heading">
        <h3 id="partners-heading" className="partners-heading">
          {partners.heading}
        </h3>
        <ul className="catalog partners-grid">
          {partners.items.map((item) => (
            <li key={item.title} className="catalog-item">
              <a className="catalog-fill" href={item.href} rel="noreferrer">
                <Image
                  src={item.logo.src}
                  alt={item.logo.alt}
                  width={item.logo.width}
                  height={item.logo.height}
                  className="partner-logo"
                />
                <span className="partner-name">{item.title}</span>
                <p className="catalog-text">{item.text}</p>
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
