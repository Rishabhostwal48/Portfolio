import { motion } from 'framer-motion'
import { ArrowUpRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/Icons'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'

const contactLinks = [
  {
    name: 'Email',
    value: 'ostwalrishabh0817@gmail.com',
    href: 'mailto:ostwalrishabh0817@gmail.com',
    icon: Mail,
    description: 'For work inquiries and collaboration',
  },
  {
    name: 'GitHub',
    value: 'Rishabhostwal48',
    href: 'https://github.com/Rishabhostwal48',
    icon: GithubIcon,
    description: 'Check out my repositories',
  },
  {
    name: 'LinkedIn',
    value: 'rishabhostwal0817',
    href: 'https://linkedin.com/in/rishabhostwal0817',
    icon: LinkedinIcon,
    description: 'Connect professionally',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      {/* Background */}
      <div className="absolute inset-0 border-y border-border/60 bg-bg-secondary/25" />

      <Container className="relative">
        <SectionHeader
          badge="Contact"
          title="Let's build something together"
          subtitle="I'm currently looking for MERN stack internship opportunities and open to freelance projects. Let's connect."
        />

        <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative flex h-full flex-col rounded-2xl border border-border bg-bg-primary/35 p-6 shadow-sm shadow-black/10 backdrop-blur-sm transition-all duration-300 hover:border-border-hover hover:bg-bg-secondary/80 hover:shadow-xl hover:shadow-black/20"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <link.icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-text-tertiary transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>
              <h3 className="font-medium text-text-primary">{link.name}</h3>
              <p className="mt-1 break-words font-mono text-sm leading-6 text-accent">{link.value}</p>
              <p className="mt-2 text-sm leading-6 text-text-tertiary">
                {link.description}
              </p>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  )
}
