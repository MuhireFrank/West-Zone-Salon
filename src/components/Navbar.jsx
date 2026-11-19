import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight, MapPin, Menu, X } from 'lucide-react'
import { BUSINESS, NAV_LINKS } from '../data/site'

export function Brand({ onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="group inline-flex items-center gap-3"
      aria-label="WESTZONE SALON home"
    >
      <span className="relative grid h-10 w-10 place-items-center rounded-full border border-red-200 bg-red-50 transition-colors group-hover:border-red-300">
        <span className="font-display text-lg text-red-600">W</span>
        <span className="absolute -bottom-1 h-px w-6 bg-red-300" />
      </span>
      <span className="leading-none">
        <span className="block font-display text-xl tracking-[0.08em] text-[#121212] sm:text-2xl">
          WESTZONE
        </span>
        <span className="mt-1 block text-[8px] font-bold tracking-[0.42em] text-red-600">
          SALON
        </span>
      </span>
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      <div className="hidden bg-red-50 py-2 text-center text-[9px] font-bold uppercase tracking-[0.28em] text-red-700 lg:block">
        {BUSINESS.tagline} · {BUSINESS.address}, {BUSINESS.city}
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-red-100 bg-white/90 shadow-[0_10px_40px_-20px_rgba(215,31,31,0.15)] backdrop-blur-xl'
            : 'border-b border-transparent bg-white/70 backdrop-blur-md'
        }`}
      >
        <div className="container-luxe flex h-[74px] items-center justify-between gap-6 lg:h-[86px]">
          <Brand />

          <nav aria-label="Main navigation" className="hidden items-center gap-1 xl:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-[10px] font-bold uppercase tracking-[0.13em] transition-colors ${
                    isActive ? 'text-red-600' : 'text-[#3a3a3a] hover:text-[#121212]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="gold-button hidden !px-5 !py-3 sm:inline-flex"
            >
              Book Appointment
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((current) => !current)}
              className="grid h-11 w-11 place-items-center rounded-full border border-red-100 text-[#121212] transition-colors hover:border-red-300 hover:text-red-600 xl:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl transition-all duration-500 xl:hidden ${
          open
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none translate-y-3 opacity-0'
        }`}
        aria-hidden={!open}
      >
        <div className="container-luxe flex h-full flex-col overflow-y-auto pb-10 pt-28">
          <div className="mb-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-red-600">
            <MapPin size={14} aria-hidden="true" />
            {BUSINESS.address}, {BUSINESS.city}
          </div>
          <nav aria-label="Mobile navigation" className="grid gap-1">
            {NAV_LINKS.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `group flex items-center justify-between border-b border-red-100 py-4 font-display text-3xl transition-colors ${
                    isActive ? 'text-red-600' : 'text-[#121212] hover:text-red-600'
                  }`
                }
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-sans text-[10px] text-[#4a4a4a]">
                    0{index + 1}
                  </span>
                  {link.label}
                </span>
                <ArrowUpRight
                  size={18}
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                />
              </NavLink>
            ))}
          </nav>
          <Link
            to="/book"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="gold-button mt-10 w-full sm:w-auto"
          >
            Book Appointment
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </>
  )
}
