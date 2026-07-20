import { motion } from 'framer-motion'

export default function Card({ children, className = '', hover = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -4 } : undefined}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-bg-secondary/45 p-6 shadow-sm shadow-black/10 backdrop-blur-sm transition-all duration-300 hover:border-border-hover hover:bg-bg-secondary/80 hover:shadow-xl hover:shadow-black/20 ${className}`}
    >
      {/* Gradient glow on hover */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
           style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.05), transparent)' }} 
      />
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </motion.div>
  )
}
