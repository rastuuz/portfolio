import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-effect-premium py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom mx-auto px-5 md:px-8">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="text-2xl md:text-3xl font-playfair font-bold"
          >
            <span className="gold-text">R</span>astu
            <span className="gold-text">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative text-cream/60 hover:text-gold text-sm uppercase tracking-widest transition duration-300 py-2"
              >
                {link.name}

                {/* Garis bawah */}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-500" />
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-cream text-xl hover:text-gold transition"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 rounded-2xl glass-effect-premium p-5">
            <div className="flex flex-col gap-4">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="group relative w-fit text-cream/70 hover:text-gold uppercase tracking-widest text-sm transition py-2"
                >
                  {link.name}

                  {/* Garis bawah mobile */}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-500" />
                </a>
              ))}

            </div>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar