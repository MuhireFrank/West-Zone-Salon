import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Camera, Sparkles } from 'lucide-react'

export default function BarberCard({ barber }) {
  const [imageSrc, setImageSrc] = useState(barber.image)

  return (
    <article className="group relative overflow-hidden rounded-[30px] border border-red-100 bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-red-300 hover:shadow-[0_22px_55px_-26px_rgba(215,31,31,0.2)]">
      <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-[420px] overflow-hidden bg-red-50 sm:min-h-[520px] lg:min-h-[600px]">
          <img
            src={imageSrc}
            alt={`${barber.name}, ${barber.title} at WESTZONE SALON`}
            onError={() => setImageSrc(barber.fallback)}
            className="image-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-white/60" />
          <div className="absolute left-5 top-5 rounded-full border border-red-200 bg-white/80 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-red-600 backdrop-blur">
            WestZone Barber
          </div>
          <div className="absolute bottom-5 left-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#4a4a4a]">
            <Camera size={13} aria-hidden="true" />
            {barber.portfolio.length ? 'Portfolio available' : 'Portfolio to be added'}
          </div>
        </div>

        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
          <span className="eyebrow">Meet the team</span>
          <h3 className="mt-6 font-display text-5xl leading-none text-[#121212] sm:text-6xl">
            {barber.name}
          </h3>
          <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.22em] text-red-600">
            {barber.title}
          </p>
          <p className="body-text mt-7">{barber.bio}</p>

          <div className="mt-8 space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#5c5c5c]">
              Haircut specialties
            </p>
            {barber.specialties.map((specialty) => (
              <div key={specialty} className="flex items-center gap-3 text-sm text-[#3a3a3a]">
                <Sparkles size={14} className="shrink-0 text-red-600" aria-hidden="true" />
                {specialty}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-red-100 pt-6">
            <Link
              to={`/book?barber=${encodeURIComponent(barber.name)}`}
              className="gold-button !px-5 !py-3"
            >
              Book {barber.name}
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
            <span className="text-xs text-[#5c5c5c]">{barber.experience}</span>
          </div>
        </div>
      </div>
    </article>
  )
}
