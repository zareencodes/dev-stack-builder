
import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
            Dev Stack
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-violet-600 font-medium transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Authentication Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-700 font-medium hover:text-violet-600">
            Sign In
          </button>

          <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white px-6 py-2 rounded-full font-semibold hover:opacity-90">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-gray-800"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 font-medium"
            >
              {link.name}
            </a>
          ))}

          <div className="flex gap-4 items-center">
            <button>Sign In</button>
            <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white px-5 py-2 rounded-full">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
