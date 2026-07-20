import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Rocket, Building2 } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'

const roadmap = [
  {
    icon: Briefcase,
    title: 'MERN Stack Internship',
    description: 'Gain industry experience building production applications with a professional team.',
    status: 'current',
  },
  {
    icon: Rocket,
    title: 'Start Freelancing',
    description: 'Build real products for real clients — turning code into solutions that drive business value.',
    status: 'next',
  },
  {
    icon: Building2,
    title: 'Build SaaS Products',
    description: 'Design, develop, and launch software-as-a-service products that solve meaningful problems.',
    status: 'future',
  },
  {
    icon: Building2,
    title: 'Software Company',
    description: 'Build my own software company — the long-term vision.',
    status: 'future',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeader
          badge="About"
          title="A bit about me"
        />

        <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <p className="text-lg leading-8 text-text-secondary">
              I&apos;m Rishabh Ostwal, a Full Stack Developer based in India, currently
              pursuing my B.Tech (2024–2028) at Mandsaur University.
            </p>
            <p className="leading-7 text-text-secondary">
              I specialize in the MERN stack — building everything from React
              frontends with responsive UIs to Node.js and Express backends with
              MongoDB databases. I focus on writing clean, maintainable code and
              building applications that solve real problems.
            </p>
            <p className="leading-7 text-text-secondary">
              My projects span e-commerce platforms, business tools, and management
              systems — each built with authentication, REST APIs, and modern
              development practices.
            </p>

            {/* Education */}
            <div className="rounded-2xl border border-border bg-bg-secondary/45 p-5 shadow-sm shadow-black/10">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-text-primary">B.Tech in Computer Science</p>
                  <p className="text-sm text-text-tertiary">Mandsaur University · 2024 — 2028</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Roadmap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-text-tertiary">
              Career Roadmap
            </h3>
            <div className="relative space-y-6">
              {/* Timeline line */}
              <div className="absolute bottom-4 left-6 top-4 w-px bg-border" />

              {roadmap.map((item, index) => (
                <div key={index} className="relative flex gap-4 pl-2">
                  <div
                    className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border shadow-sm shadow-black/10 ${
                      item.status === 'current'
                        ? 'border-accent bg-accent/10 text-accent'
                        : 'border-border bg-bg-secondary text-text-tertiary'
                    }`}
                  >
                    <item.icon className="h-3.5 w-3.5" />
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <p
                      className={`flex flex-wrap items-center gap-x-2 gap-y-1 font-medium leading-snug ${
                        item.status === 'current'
                          ? 'text-text-primary'
                          : 'text-text-secondary'
                      }`}
                    >
                      {item.title}
                      {item.status === 'current' && (
                        <span className="inline-flex items-center rounded-full bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
                          Current Goal
                        </span>
                      )}
                    </p>
                    <p className="mt-1.5 text-sm leading-6 text-text-tertiary">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
