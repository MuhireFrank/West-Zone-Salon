import { useEffect } from 'react'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'

export default function Lightbox({ item, onClose, onNext, onPrev }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onNext()
      if (event.key === 'ArrowLeft') onPrev()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose, onNext, onPrev])

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-xl sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} image preview`}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-gold hover:text-gold"
        aria-label="Close image preview"
      >
        <X size={20} aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={onPrev}
        className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-gold hover:text-gold sm:left-8"
        aria-label="Previous image"
      >
        <ArrowLeft size={20} aria-hidden="true" />
      </button>

      <figure className="max-h-full w-full max-w-5xl">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-charcoal">
          <img
            src={item.src}
            alt={item.title}
            className="max-h-[72vh] w-full object-contain"
          />
        </div>
        <figcaption className="mt-5 flex flex-wrap items-center justify-between gap-3 px-1 text-sm">
          <span className="font-display text-2xl text-white">{item.title}</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold">
            {item.category} · {item.authenticity}
          </span>
        </figcaption>
      </figure>

      <button
        type="button"
        onClick={onNext}
        className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-gold hover:text-gold sm:right-8"
        aria-label="Next image"
      >
        <ArrowRight size={20} aria-hidden="true" />
      </button>
    </div>
  )
}
