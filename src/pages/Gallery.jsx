import { useCallback, useMemo, useState } from 'react'
import { ArrowUpRight, Info, Maximize2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/gallery'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Lightbox from '../components/Lightbox'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeIndex, setActiveIndex] = useState(null)
  useDocumentMeta({
    title: 'Gallery',
    description:
      'Browse the WESTZONE SALON gallery of haircuts, fades, beard grooming, nail services and beauty work. Illustrative images are clearly marked.',
  })

  const filteredItems = useMemo(
    () =>
      activeCategory === 'All'
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter((item) => item.category === activeCategory),
    [activeCategory],
  )

  const closeLightbox = useCallback(() => setActiveIndex(null), [])

  const nextImage = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % filteredItems.length,
    )
  }, [filteredItems.length])

  const previousImage = useCallback(() => {
    setActiveIndex((current) =>
      current === null
        ? null
        : (current - 1 + filteredItems.length) % filteredItems.length,
    )
  }, [filteredItems.length])

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            Style, captured <span className="text-gold-gradient">in detail.</span>
          </>
        }
        description="Explore a curated visual collection across our service categories. Every image below is illustrative until authentic WestZone work is supplied."
        breadcrumb="Gallery"
        compact
      />

      <section className="bg-ink py-16 sm:py-20">
        <div className="container-luxe">
          <div className="flex flex-col gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-center lg:justify-between">
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Filter gallery by category"
            >
              {GALLERY_CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category)
                    setActiveIndex(null)
                  }}
                  aria-pressed={activeCategory === category}
                  className={`rounded-full px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.13em] transition-all ${
                    activeCategory === category
                      ? 'bg-gold text-ink'
                      : 'border border-white/12 text-white/55 hover:border-gold/50 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <p className="flex items-center gap-2 text-[11px] text-white/40">
              <Info size={14} className="text-gold" aria-hidden="true" />
              Showing {filteredItems.length} illustrative image
              {filteredItems.length === 1 ? '' : 's'}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {filteredItems.map((item, index) => (
              <Reveal key={item.id} delay={(index % 4) * 65}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="group relative block w-full overflow-hidden rounded-[20px] bg-charcoal text-left"
                  aria-label={`Open ${item.title} in image preview`}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.src = '/images/image-placeholder.svg'
                    }}
                    className="image-cover aspect-[4/5] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent opacity-80 transition-opacity group-hover:opacity-95" />
                  <span className="absolute left-3 top-3 rounded-full bg-ink/75 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-white/70 backdrop-blur">
                    Illustrative
                  </span>
                  <span className="absolute right-3 top-3 grid h-8 w-8 translate-y-1 place-items-center rounded-full border border-white/25 text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <Maximize2 size={13} aria-hidden="true" />
                  </span>
                  <span className="absolute bottom-4 left-4 right-4">
                    <span className="block text-[9px] font-bold uppercase tracking-[0.16em] text-gold">
                      {item.category}
                    </span>
                    <span className="mt-1 block font-display text-xl leading-tight text-white">
                      {item.title}
                    </span>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16" delay={100}>
            <div className="glass-panel flex flex-col gap-6 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                  Authentic work welcome
                </p>
                <h2 className="mt-3 font-display text-3xl text-white">
                  Have photos from WestZone Salon?
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-white/50">
                  Replace illustrative images here with real client work and
                  clearly label any photos that are not from the salon.
                </p>
              </div>
              <Link to="/contact" className="gold-button shrink-0">
                Send Photos
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {activeIndex !== null && filteredItems[activeIndex] ? (
        <Lightbox
          item={filteredItems[activeIndex]}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={previousImage}
        />
      ) : null}
    </>
  )
}
