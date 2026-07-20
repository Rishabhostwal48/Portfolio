import { motion } from 'framer-motion'
import { Bot, FileText, HardHat } from 'lucide-react'
import Badge from '../ui/Badge'
import Container from '../ui/Container'

const upcomingProjects = [
  {
    title: 'Client Proposal Builder',
    status: 'In Progress',
    variant: 'warning',
    icon: FileText,
    description:
      'Building an AI-powered proposal generation platform with authentication, PDF generation, and project management features.',
  },
  {
    title: 'AI Resume Fixer',
    status: 'Planned',
    variant: 'default',
    icon: Bot,
    description:
      'An AI tool that analyzes resumes, identifies weaknesses, and provides recruiter-focused improvements.',
  },
  {
    title: 'Construction Attendance Management System',
    status: 'Improving',
    variant: 'default',
    icon: HardHat,
    description:
      'A workforce attendance and site management platform with real-time tracking, reports, and role-based access.',
  },
]

export default function CurrentlyBuilding() {
  return (
    <section id="building" className="relative border-y border-border/60 bg-bg-secondary/20 py-16 sm:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-2xl sm:mb-12"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
            <span aria-hidden="true">🚧 </span>Currently Building
          </h2>
          <p className="mt-3 text-base leading-relaxed text-text-secondary sm:text-lg">
            The products I&apos;m actively building and improving.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {upcomingProjects.map((project, index) => {
            const Icon = project.icon

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -3 }}
                className="group flex h-full flex-col rounded-2xl border border-border/80 bg-bg-primary/30 p-5 shadow-sm shadow-black/10 transition-all duration-300 hover:border-border-hover hover:bg-bg-primary/50 hover:shadow-lg hover:shadow-black/15 sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent/15">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <Badge variant={project.variant}>{project.status}</Badge>
                </div>
                <h3 className="mt-5 text-base font-semibold leading-snug text-text-primary">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary">
                  {project.description}
                </p>
              </motion.article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
