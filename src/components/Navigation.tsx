import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

type Page = 'home' | 'about' | 'services' | 'contact'

interface Props {
  current: Page
  onChange: (page: Page) => void
}

const navLinks: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Services', page: 'services' },
  { label: 'Contact', page: 'contact' },
]

export default function Navigation({ current, onChange }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNav = (page: Page) => {
    onChange(page)
    setMobileOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || current !== 'home'
            ? 'bg-cream/95 backdrop-blur-md shadow-[0_2px_20px_rgba(212,175,55,0.12)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav('home')}
            className="flex flex-col items-start"
          >
            <span className="font-serif text-2xl font-light tracking-widest text-gold-500 leading-none">
              Luminary
            </span>
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-terra-400 mt-0.5">
              Life Coaching
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => handleNav(page)}
                className={`font-sans text-sm tracking-widest uppercase transition-all duration-300 relative group ${
                  current === page
                    ? 'text-gold-500'
                    : scrolled || current !== 'home'
                    ? 'text-charcoal-800 hover:text-gold-500'
                    : 'text-cream/90 hover:text-gold-300'
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold-400 transition-all duration-300 ${
                    current === page ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
            <button
              onClick={() => handleNav('services')}
              className="ml-4 px-5 py-2 bg-gold-500 text-charcoal-900 font-sans text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-gold-400 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
            >
              Book Now
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className={`md:hidden p-2 transition-colors ${
              scrolled || current !== 'home' ? 'text-charcoal-800' : 'text-cream'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-cream/98 backdrop-blur-lg transition-all duration-500 flex flex-col items-center justify-center gap-8 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map(({ label, page }) => (
          <button
            key={page}
            onClick={() => handleNav(page)}
            className={`font-serif text-4xl font-light tracking-wide transition-colors duration-300 ${
              current === page ? 'text-gold-500' : 'text-charcoal-800 hover:text-gold-500'
            }`}
          >
            {label}
          </button>
        ))}
        <button
          onClick={() => handleNav('services')}
          className="mt-4 px-8 py-3 bg-gold-500 text-charcoal-900 font-sans text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-gold-400 transition-all duration-300"
        >
          Book Now
        </button>
      </div>
    </>
  )
}
