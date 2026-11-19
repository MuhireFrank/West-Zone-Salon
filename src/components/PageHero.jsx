import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import Reveal from './Reveal'

export default function PageHero({
  eyebrow = 'WESTZONE SALON',
  title,
  description,
  image,
  breadcrumb,
  children,
  compact = false,
}) {
  return (
    <section
      className={`relative isolate flex items-end overflow-hidden bg-[#fff7f7] ${
        compact ? 'min-h-[58vh] pt-32' : 'min-h-[72vh] pt-36'
      }`}
    >
      {image ? (
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20"
        />
      ) : null}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-white via-white/80 to-red-50/60" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-40" />
      <div className="container-luxe pb-16 sm:pb-20">
        <Reveal>
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5c5c5c]"
          >
            <Link to="/" className="transition-colors hover:text-red-600">
              Home
            </Link>
            <ChevronRight size={12} aria-hidden="true" />
            <span className="text-red-600">{breadcrumb || title}</span>
          </nav>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="display-title mt-6 max-w-5xl text-balance">{title}</h1>
        </Reveal>
        {description ? (
          <Reveal delay={100}>
            <p className="body-text mt-6 max-w-2xl text-balance">{description}</p>
          </Reveal>
        ) : null}
        {children ? <Reveal delay={180}>{children}</Reveal> : null}
      </div>
    </section>
  )
}
