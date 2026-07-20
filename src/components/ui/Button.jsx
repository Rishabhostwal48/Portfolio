import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/20 hover:shadow-accent/30',
  secondary:
    'bg-bg-secondary text-text-primary border border-border hover:border-border-hover hover:bg-bg-tertiary',
  ghost:
    'text-text-secondary hover:text-text-primary hover:bg-bg-secondary',
}

export default function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  icon: Icon,
  ...props
}) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold leading-none transition-all duration-300 cursor-pointer ${variants[variant]} ${className}`

  const content = (
    <>
      {children}
      {Icon && <Icon className="h-4 w-4" />}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  )
}
