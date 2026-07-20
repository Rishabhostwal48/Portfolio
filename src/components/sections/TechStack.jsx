import * as Icons from 'lucide-react'
import { techStack } from '../../data/techStack'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import { AnimatedGroup, AnimatedItem } from '../ui/AnimatedGroup'

function TechItem({ name, icon }) {
  const IconComponent = Icons[icon] || Icons.Code2

  return (
    <div className="group flex min-h-14 items-center gap-3 rounded-xl border border-border bg-bg-primary/35 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-hover hover:bg-bg-secondary hover:shadow-lg hover:shadow-black/10">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent/20">
        <IconComponent className="h-4 w-4" />
      </div>
      <span className="truncate text-sm font-medium text-text-secondary transition-colors duration-300 group-hover:text-text-primary">
        {name}
      </span>
    </div>
  )
}

export default function TechStack() {
  return (
    <section id="stack" className="relative py-20 sm:py-28">
      {/* Subtle background */}
      <div className="absolute inset-0 border-y border-border/60 bg-bg-secondary/25" />

      <Container className="relative">
        <SectionHeader
          badge="Tech Stack"
          title="Technologies I work with"
          subtitle="My core toolkit for building full-stack web applications — from frontend interfaces to backend APIs and databases."
        />

        <div className="space-y-9 sm:space-y-10">
          {techStack.map((category) => (
            <AnimatedGroup key={category.category}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-text-tertiary">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {category.items.map((item) => (
                  <AnimatedItem key={item.name}>
                    <TechItem name={item.name} icon={item.icon} />
                  </AnimatedItem>
                ))}
              </div>
            </AnimatedGroup>
          ))}
        </div>
      </Container>
    </section>
  )
}
