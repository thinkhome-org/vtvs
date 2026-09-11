import { site } from "@/content/site";

export function PriceList() {
  const { heading, lead, columns, groups } = site.pricing;

  return (
    <article className="pricing" aria-labelledby="pricing-heading">
      <header className="pricing-intro">
        <h1 id="pricing-heading" className="hero-heading">
          {heading}
        </h1>
        <p className="hero-lead">{lead}</p>
      </header>

      <div className="tariff">
        <div className="tariff-head" aria-hidden="true">
          <span>{columns.item}</span>
          <span className="tariff-prices">
            <span>{columns.net}</span>
            <span>{columns.gross}</span>
          </span>
        </div>

        {groups.map((group) => (
          <section key={group.heading} className="tariff-group" aria-labelledby={slug(group.heading)}>
            <h2 id={slug(group.heading)} className="tariff-heading">
              {group.heading}
            </h2>
            <ul className="tariff-list">
              {group.items.map((item) => (
                <li key={item.name} className="tariff-row">
                  <span className="tariff-name">{item.name}</span>
                  <span className="tariff-prices">
                    <span>
                      <span className="tariff-label">{columns.net} </span>
                      {item.net}
                    </span>
                    <span>
                      <span className="tariff-label">{columns.gross} </span>
                      {item.gross}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
}

function slug(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
