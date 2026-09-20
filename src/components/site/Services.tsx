import { site } from "@/content/site";

export function Services() {
  const { heading, lead, items } = site.services;

  return (
    <section id="sluzby" className="band" aria-labelledby="sluzby-heading">
      <header className="band-intro">
        <h2 id="sluzby-heading" className="band-heading">
          {heading}
        </h2>
        <p className="band-lead">{lead}</p>
      </header>
      <ul className="service-list">
        {items.map((item) => (
          <li key={item.title} className="service-row">
            <h3 className="service-name">{item.title}</h3>
            <p className="service-text">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
