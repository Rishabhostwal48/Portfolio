export default function Badge({ children, variant = 'default', className = '' }) {
  const base = 'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold leading-none'
  const styles = {
    default: 'bg-accent-muted text-accent-hover border border-accent/20',
    success: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    warning: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
    tech: 'bg-bg-tertiary text-text-secondary border border-border',
  }

  return (
    <span className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </span>
  )
}
