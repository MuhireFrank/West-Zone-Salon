import { Link } from 'react-router-dom'
import {
  ArrowUp,
  ArrowUpRight,
  Camera,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Users,
} from 'lucide-react'
import { BUSINESS, CONTACT, NAV_LINKS } from '../data/site'
import { Brand } from './Navbar'

const footerServices = [
  { label: 'Normal Haircut', to: '/services' },
  { label: 'Fades & Tapers', to: '/services' },
  { label: 'Beard Grooming', to: '/services' },
  { label: 'Nail Services', to: '/services' },
  { label: 'Beauty Services', to: '/services' },
  { label: 'View Price List', to: '/pricing' },
]

const socials = [
  { label: 'Instagram', icon: Camera },
  { label: 'Facebook', icon: Users },
  { label: 'WhatsApp', icon: MessageCircle },
]

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-red-100 bg-white">
      <div className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-red-100 blur-[120px]" />
      <div className="container-luxe relative py-16 sm:py-20">
        <div className="grid gap-12 border-b border-red-100 pb-14 lg:grid-cols-[1.4fr_1fr_1fr_1.25fr]">
          <div>
            <Brand />
            <p className="body-text mt-6 max-w-sm">
              A premium grooming and beauty destination in Kimironko, Kigali —
              built around style, confidence and careful attention to detail.
            </p>
            <Link to="/book" className="dark-button mt-7">
              Book Appointment
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-red-600">
              Explore
            </h3>
            <ul className="mt-6 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-[#3a3a3a] transition-colors hover:text-red-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-red-600">
              Services
            </h3>
            <ul className="mt-6 space-y-3">
              {footerServices.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.to}
                    className="text-sm text-[#3a3a3a] transition-colors hover:text-red-600"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-red-600">
              Find Us
            </h3>
            <ul className="mt-6 space-y-4 text-sm text-[#3a3a3a]">
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-red-600" aria-hidden="true" />
                <span>
                  {BUSINESS.name}
                  <br />
                  {BUSINESS.address}
                  <br />
                  {BUSINESS.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-red-600" aria-hidden="true" />
                <span>{CONTACT.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-red-600" aria-hidden="true" />
                <span>{CONTACT.email}</span>
              </li>
            </ul>
            <div className="mt-7 flex gap-2">
              {socials.map(({ label, icon: Icon }) => (
                <Link
                  key={label}
                  to="/contact"
                  aria-label={`${label} link details on contact page`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-red-100 text-[#3a3a3a] transition-all hover:-translate-y-0.5 hover:border-red-300 hover:text-red-600"
                >
                  <Icon size={16} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-8 text-[11px] text-[#5c5c5c] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {CURRENT_YEAR} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="uppercase tracking-[0.18em]">{BUSINESS.tagline}</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 uppercase tracking-[0.16em] text-[#5c5c5c] transition-colors hover:text-red-600"
          >
            Back to top
            <ArrowUp size={13} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}
