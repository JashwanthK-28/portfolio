import { Link } from 'react-router-dom'
import { FiGithub, FiLinkedin} from 'react-icons/fi'

const socials = [
  { icon: <FiGithub size={18} />, href: 'https://github.com/JashwanthK-28/', label: 'GitHub' },
  { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/jashwanth-kumar-bolla-a87839317/', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="bg-darker border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo / Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent flex items-center justify-center">
                <span className="font-display text-dark text-lg">J</span>
              </div>
              <span className="font-display text-xl tracking-widest">JASHWANTH KUMAR BOLLA</span>
            </Link>
            <p className="text-muted text-sm text-center md:text-left">
              Designing the extraordinary, <br />one pixel at a time.
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-9 h-9 border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} Jashwanth Kumar Bolla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
