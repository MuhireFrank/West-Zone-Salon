import { Link } from 'react-router-dom'
import { ArrowUpRight, Check } from 'lucide-react'

export default function ServiceCard({ service, index = 0 }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-red-100 bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-red-300 hover:shadow-[0_22px_55px_-26px_rgba(215,31,31,0.25)]">
      <div className="relative aspect-[4/4.4] overflow-hidden bg-red-50">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.src = '/images/image-placeholder.svg'
          }}
          className="image-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
        {service.confirmed ? (
          <span className="absolute left-4 top-4 rounded-full bg-red-600 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-white">
            Confirmed price
          </span>
        ) : null}
        {service.placeholder ? (
          <span className="absolute left-4 top-4 rounded-full border border-red-200 bg-white/85 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-red-700 backdrop-blur">
            Editable placeholder
          </span>
        ) : null}
        <span className="absolute bottom-4 right-4 font-display text-[10px] tracking-[0.2em] text-[#4f4f4f]">
          0{index + 1}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-2xl leading-tight text-[#121212]">
          {service.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-[#3c3c3c]/70">
          {service.description}
        </p>

        <div className="mt-6 flex items-end justify-between gap-4 border-t border-red-100 pt-5">
          <div>
            <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-[#5c5c5c]">
              Price
            </span>
            <span
              className={`mt-1 block text-sm font-bold ${
                service.price ? 'text-red-600' : 'text-[#3a3a3a]'
              }`}
            >
              {service.price || 'On request'}
            </span>
          </div>
          <Link
            to={`/book?service=${encodeURIComponent(service.name)}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-red-200 bg-red-50 text-red-600 transition-all hover:border-red-300 hover:bg-red-600 hover:text-white"
            aria-label={`Book ${service.name}`}
          >
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>

        {service.price ? (
          <Link
            to={`/book?service=${encodeURIComponent(service.name)}`}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-red-200 bg-red-50 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-red-600 transition-colors hover:bg-red-600 hover:text-white"
          >
            <Check size={13} aria-hidden="true" />
            Book this service
          </Link>
        ) : (
          <Link
            to={`/book?service=${encodeURIComponent(service.name)}`}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-red-200 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#3a3a3a] transition-colors hover:border-red-300 hover:text-red-600"
          >
            Request this service
          </Link>
        )}
      </div>
    </article>
  )
}
