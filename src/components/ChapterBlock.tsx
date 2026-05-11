type Props = { index: string; title: string; children: React.ReactNode }

export function ChapterBlock({ index, title, children }: Props) {
  return (
    <article className="chapter-block">
      <p className="eyebrow chapter-block-eyebrow">
        <span className="idx">{index}</span>
      </p>
      <h2 className="h-2 chapter-block-title">{title}</h2>
      <div className="chapter-block-body">{children}</div>
    </article>
  )
}
