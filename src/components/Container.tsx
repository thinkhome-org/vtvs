type Props = { broad?: boolean; children: React.ReactNode }

export function Container({ broad, children }: Props) {
  return (
    <div className={broad ? 'container container--broad' : 'container'}>
      {children}
    </div>
  )
}
