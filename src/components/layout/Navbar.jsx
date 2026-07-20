import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { useScrollspy } from '../../hooks/useScrollspy'
import Button from '../ui/Button'

const navItems = [
  { label: 'Work', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  // { label: 'Resume', href: '/Resume-Rishabh.pdf', download: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useScrollspy(['projects', 'stack', 'about', 'contact'], 200)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-bg-primary/85 shadow-lg shadow-black/10 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Logo */}
        <a
          href="#"
          className="relative rounded-lg text-xl font-bold tracking-tight text-text-primary transition-colors hover:text-accent"
        >
          RO
          <span className="text-accent">.</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                download={item.download || undefined}
                className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-px ${
                  item.download
                    ? 'text-accent-hover hover:bg-accent/10 hover:text-text-primary'
                    : activeId === item.href.slice(1)
                      ? 'bg-bg-secondary text-text-primary'
                      : 'text-text-tertiary hover:bg-bg-secondary/50 hover:text-text-primary'
                }`}
              >
                {item.label}
                {item.download && <Download className="h-3.5 w-3.5" />}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button href="#contact" variant="primary" className="min-h-10 px-4 text-xs">
            Get in touch
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 rounded-xl p-2 text-text-secondary transition-colors hover:bg-bg-secondary hover:text-text-primary md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex h-full flex-col items-center justify-center gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  download={item.download || undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 text-2xl font-medium text-text-primary transition-colors hover:text-accent"
                >
                  {item.label}
                  {item.download && <Download className="h-5 w-5" />}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <Button
                  href="#contact"
                  variant="primary"
                  onClick={() => setMobileOpen(false)}
                >
                  Get in touch
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
