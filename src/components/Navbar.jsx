import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark/95 backdrop-blur-md border-b border-border py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-accent flex items-center justify-center">
            <span className="font-display text-dark text-lg leading-none">J</span>
          </div>
          <span className="font-display text-xl tracking-widest text-light group-hover:text-accent transition-colors">
            JASHWANTH KUMAR BOLLA
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link text-sm font-medium tracking-wider uppercase ${
                location.pathname === link.path ? 'text-accent' : 'text-muted hover:text-light'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent" />
              )}
            </Link>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="https://drive.google.com/uc?export=download&id=1idC8BdK_HcUFVfdCfqSsS1ZFiVcZqxz6" 
            target="_blank" 
            rel="noreferrer" 
            className="hidden md:flex btn-primary text-xs"
          >
            Resume
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-light hover:text-accent transition-colors"
            id="mobile-menu-btn"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-darker border-t border-border px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm uppercase tracking-wider font-medium py-2 border-b border-border/40 ${
                location.pathname === link.path ? 'text-accent' : 'text-muted'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a href="https://drive.google.com/uc?export=download&id=1idC8BdK_HcUFVfdCfqSsS1ZFiVcZqxz6" 
            target="_blank" 
            rel="noreferrer" 
            className="btn-primary text-xs w-fit mt-2">
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  )
}
