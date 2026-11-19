import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'

export default function FloatingContact() {
  return (
    <div className="group fixed bottom-5 right-5 z-40 sm:bottom-7 sm:right-7">
      <Link
        to="/contact"
        aria-label="Contact WestZone Salon"
        className="grid h-14 w-14 place-items-center rounded-full bg-gold text-ink shadow-[0_18px_50px_-16px_rgba(198,161,91,0.9)] transition-transform duration-300 hover:scale-105"
      >
        <MessageCircle size={22} aria-hidden="true" />
      </Link>
      <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-white/10 bg-ink/95 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white opacity-0 transition-opacity group-hover:opacity-100">
        Contact us
      </span>
    </div>
  )
}
