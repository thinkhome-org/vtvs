type CatalogEntry = {
  title: string;
  text?: string;
  href?: string;
};

export function CatalogBand({
  id,
  heading,
  lead,
  items,
  closing,
  wideLast = false,
}: {
  id: string;
  heading: string;
  lead?: string;
  items: readonly CatalogEntry[];
  closing?: string;
  wideLast?: boolean;
}) {
  const last = items.length - 1;
  const headingId = `${id}-heading`;

  return (
    <section id={id} className="band" aria-labelledby={headingId}>
      <header className="band-intro">
        <h2 id={headingId} className="band-heading">
          {heading}
        </h2>
        {lead ? <p className="band-lead">{lead}</p> : null}
      </header>
      <ul className="catalog">
        {items.map((item, i) => (
          <li
            key={item.title}
            className={wideLast && i === last ? "catalog-item catalog-item--wide" : "catalog-item"}
          >
            {item.href ? (
              <a className="catalog-fill" href={item.href} rel="noreferrer">
                <CatalogInner item={item} />
              </a>
            ) : (
              <div className="catalog-fill">
                <CatalogInner item={item} />
              </div>
            )}
          </li>
        ))}
      </ul>
      {closing ? <p className="band-note">{closing}</p> : null}
    </section>
  );
}

function CatalogInner({ item }: { item: CatalogEntry }) {
  return (
    <>
      <h3 className="catalog-title">{item.title}</h3>
      {item.text ? <p className="catalog-text">{item.text}</p> : null}
    </>
  );
}
