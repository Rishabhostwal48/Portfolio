import { Mail, Heart } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/Icons'

const footerLinks = [
  { name: 'GitHub', href: 'https://github.com/Rishabhostwal48', icon: GithubIcon },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/rishabhostwal0817', icon: LinkedinIcon },
  { name: 'Email', href: 'mailto:ostwalrishabh0817@gmail.com', icon: Mail },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-primary">
      <div className="mx-auto grid max-w-6xl gap-5 px-6 py-8 text-center sm:grid-cols-3 sm:items-center sm:px-8 sm:text-left lg:px-12">
        <div className="flex items-center justify-center gap-2 text-sm text-text-tertiary sm:justify-start">
          <span>Built with</span>
          <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" />
          <span>by Rishabh Ostwal</span>
        </div>

        <div className="flex items-center justify-center gap-3">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="rounded-xl p-2 text-text-tertiary transition-all duration-200 hover:bg-bg-secondary hover:text-text-primary"
              aria-label={link.name}
            >
              <link.icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p className="text-sm text-text-tertiary sm:text-right">
          &copy; {new Date().getFullYear()} Rishabh Ostwal
        </p>
      </div>
    </footer>
  )
}
