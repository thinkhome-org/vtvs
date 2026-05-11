type Props = { index: string; eyebrow: string; title: string; lead?: string }

export function PageHeader({ index, eyebrow, title, lead }: Props) {
  return (
    <header className="page-header-block">
      <p className="eyebrow">
        <span className="idx">{index}</span>
        <span className="sep">—</span>
        <span>{eyebrow}</span>
      </p>
      <h1 className="h-1">{title}</h1>
      {lead ? <p className="lead page-header-lead">{lead}</p> : null}
    </header>
  )
}
