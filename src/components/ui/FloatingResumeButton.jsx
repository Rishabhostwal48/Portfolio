import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'

const RESUME_URL = 'https://docs.google.com/document/d/1Ri-QEsj8j5Dq3Dv8mtRdYfM0_9RKY1fSbdUk8AZ5s1g/edit?usp=sharing'

export default function FloatingResumeButton() {
  return (
    <motion.a
      href={RESUME_URL}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.04, y: -2, boxShadow: '0 20px 45px rgba(99, 102, 241, 0.22)' }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-4 right-4 z-[100] flex items-center gap-2 rounded-full border border-white/10 bg-bg-secondary/90 px-4 py-3 text-sm font-medium text-text-primary shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md ring-1 ring-accent/20 transition-all duration-300 hover:border-accent/40 hover:bg-bg-tertiary sm:bottom-6 sm:right-6 sm:px-5 sm:py-3.5"
      aria-label="Open resume PDF"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-accent">
        <FileText size={16} />
      </span>
      <span>Resume</span>
    </motion.a>
  )
}
