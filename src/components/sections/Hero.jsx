import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { GithubIcon } from '../ui/Icons'
import Button from '../ui/Button'
import Badge from '../ui/Badge'
import Container from '../ui/Container'

export default function Hero() {
  const [profilePhotoAvailable, setProfilePhotoAvailable] = useState(true)

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Background gradient mesh */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-violet-500/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/3 blur-[80px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <Container className="relative z-10 py-24 sm:py-28 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:gap-16">
          <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Badge>Full Stack Developer — MERN</Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-7 text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-text-primary sm:text-5xl lg:text-6xl"
          >
            I design, build, and ship{' '}
            <span className="gradient-text">production-ready</span>{' '}
            web applications.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.36 }}
            className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm sm:text-base"
          >
            <span className="font-semibold text-text-primary">Rishabh Ostwal</span>
            <span className="hidden h-1 w-1 rounded-full bg-accent sm:block" />
            <span className="font-medium text-accent-hover">Full Stack MERN Developer</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.42 }}
            className="mt-5 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg"
          >
            Hi, I&apos;m{' '}
            <span className="font-medium text-text-primary">Rishabh Ostwal</span>.
            A full stack developer specializing in React, Node.js, Express, and MongoDB.
            Currently pursuing B.Tech at Mandsaur University.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button href="#projects" icon={ArrowDown}>
              View my work
            </Button>
            <Button
              href="https://github.com/Rishabhostwal48"
              variant="secondary"
              icon={GithubIcon}
            >
              GitHub
            </Button>
          </motion.div>

        </div>

          <motion.aside
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="absolute -inset-5 rounded-[2rem] bg-accent/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-bg-secondary/70 p-3 shadow-2xl shadow-black/30 backdrop-blur-sm">
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-bg-secondary sm:aspect-[4/5]">
                {profilePhotoAvailable ? (
                  <img
                    src="/Rishabh.jpg"
                    alt="Rishabh Ostwal"
                    className="h-full w-full object-cover object-center"
                    onError={() => setProfilePhotoAvailable(false)}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <div className="flex h-28 w-28 items-center justify-center rounded-full border border-accent/30 bg-bg-primary/55 text-4xl font-bold tracking-[-0.08em] text-text-primary shadow-xl shadow-black/20">
                      RO<span className="text-accent">.</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="absolute inset-x-3 bottom-3 rounded-b-[1.25rem] bg-gradient-to-t from-bg-primary via-bg-primary/85 to-transparent px-5 pb-5 pt-14">
                <p className="text-sm font-semibold text-text-primary">Rishabh Ostwal</p>
                <p className="mt-1 text-xs font-medium text-accent-hover">Full Stack MERN Developer</p>
              </div>
            </div>
          </motion.aside>
        </div>
      </Container>
    </section>
  )
}
