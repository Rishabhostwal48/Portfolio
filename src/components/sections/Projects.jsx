import { CircleDot } from 'lucide-react'
import { GithubIcon } from '../ui/Icons'
import { projects } from '../../data/projects'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import Card from '../ui/Card'
import Badge from '../ui/Badge'

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeader
          badge="Featured Work"
          title="Projects I've built"
          subtitle="Real applications built with the MERN stack — from e-commerce platforms to business tools."
        />

        <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className={`h-full ${
                project.status === 'In Development'
                  ? 'border-accent/30 bg-accent/[0.035] shadow-lg shadow-accent/5 hover:border-accent/45'
                  : ''
              }`}
            >
              {/* Header */}
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <CircleDot className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="leading-snug font-semibold text-text-primary">
                      {project.title}
                    </h3>
                    <Badge
                      variant={project.status === 'Completed' ? 'success' : 'warning'}
                      className="mt-1"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="mb-5 text-sm leading-6 text-text-secondary">
                {project.description}
              </p>

              {/* Features */}
              <ul className="mb-6 flex-1 space-y-2">
                {project.features.slice(0, 4).map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 text-sm leading-5 text-text-tertiary"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80" />
                    {feature}
                  </li>
                ))}
                {project.features.length > 4 && (
                  <li className="pl-4 text-xs font-medium text-text-tertiary">
                    +{project.features.length - 4} more features
                  </li>
                )}
              </ul>

              {/* Tech Stack Pills */}
              <div className="mb-5 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="tech">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-auto flex items-center gap-3 border-t border-border pt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-text-secondary transition-colors hover:text-text-primary"
                >
                  <GithubIcon className="h-4 w-4" />
                  Source Code
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
