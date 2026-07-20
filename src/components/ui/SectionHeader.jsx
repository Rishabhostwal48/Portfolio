import { motion } from 'framer-motion'
import Badge from './Badge'

export default function SectionHeader({ badge, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="mb-14 max-w-2xl sm:mb-16"
    >
      {badge && (
        <Badge className="mb-4">{badge}</Badge>
      )}
      <h2 className="text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
