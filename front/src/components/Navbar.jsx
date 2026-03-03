import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const snorlaxImg = '/snorlax.png'

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Courses', 'Tools', 'Certifications', 'Contact']

const NAVBAR_OFFSET = 80

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('Home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      let current = 'Home'
      for (const link of navLinks) {
        const el = document.getElementById(link.toLowerCase())
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= NAVBAR_OFFSET + 10) {
          current = link
        }
      }
      setActive(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, link) => {
    e.preventDefault()
    setActive(link)
    scrollToSection(link.toLowerCase())
  }

  return (
    <>
      {/* Floating Pill Navbar */}
      <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`flex items-center gap-1 px-3 py-2 rounded-full border transition-all duration-300 ${
            scrolled
              ? 'bg-[#0a0a1a]/80 border-white/10 shadow-xl shadow-black/40 backdrop-blur-2xl'
              : 'bg-white/5 border-white/10 backdrop-blur-xl'
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            className="mr-3 px-1 py-1 select-none"
          >
            <img src={snorlaxImg} alt="Marc Christian" className="w-8 h-8 rounded-full object-cover border border-white/20" />
          </a>

          {/* Divider */}
          <div className="w-px h-4 bg-white/15 mr-2" />

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link} className="relative">
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setActive(link)}
                  className={`relative z-10 px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 block ${
                    active === link ? 'text-white' : 'text-white/50 hover:text-white/80'
                  }`}
                >
                  {active === link && (
                    <motion.span
                      layoutId="pill"
                      className="absolute inset-0 rounded-full bg-indigo-500/20 border border-indigo-400/30"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            className="md:hidden ml-2 w-8 h-8 flex items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </motion.nav>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed top-20 left-4 right-4 z-40 md:hidden bg-[#0d0d20]/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden"
          >
            <ul className="flex flex-col p-3 gap-1">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => { handleNavClick(e, link); setOpen(false) }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      active === link
                        ? 'bg-indigo-500/20 text-white border border-indigo-400/20'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${active === link ? 'bg-indigo-400' : 'bg-white/20'}`} />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
