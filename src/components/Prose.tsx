type Props = { children: React.ReactNode; className?: string }

export function Prose({ children, className = '' }: Props) {
  return <div className={`prose ${className}`.trim()}>{children}</div>
}
