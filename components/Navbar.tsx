'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import PoulberLogo from './PoulberLogo'

const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'For Farmers', href: '#marketplace' },
  { label: 'Facility Owners', href: '#marketplace' },
  { label: 'About', href: '#story' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-none'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" aria-label="Poulber home">
            <PoulberLogo />
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-semibold text-poulber-navy hover:text-poulber-green transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#apply"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-poulber-green text-white text-sm font-bold hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-poulber-green focus:ring-offset-2"
            aria-label="Apply to NYSC Poultry Accelerator Program"
          >
            Get Started
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-poulber-navy hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="text-base font-semibold text-poulber-navy hover:text-poulber-green transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#apply"
            onClick={handleLinkClick}
            className="inline-flex justify-center items-center px-5 py-2 rounded-full bg-poulber-green text-white text-sm font-bold hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-poulber-green"
            aria-label="Apply to NYSC Poultry Accelerator Program"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  )
}
