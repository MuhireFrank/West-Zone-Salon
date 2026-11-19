import { Link } from 'react-router-dom'
import { ArrowUpRight, BadgeCheck, CircleDashed, PencilLine } from 'lucide-react'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { CONFIRMED_PRICES } from '../data/services'
import { GALLERY_IMAGES } from '../data/gallery'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const editableGroups = [
  {
    title: 'Barber services',
    note: 'Fades, afro cuts, hair design, beard trimming, washing and styling.',
    items: [
      'Low Fade',
      'Mid Fade',
      'High Fade',
      'Skin Fade',
      'Taper Fade',
      'Afro Haircut',
      'Hair Design',
      'Beard Trimming',
      'Hair Washing',
      'Hair Styling',
    ],
  },
  {
    title: 'Nail services',
    note: 'Manicure, pedicure, nail art and gel nails.',
    items: ['Manicure', 'Pedicure', 'Nail Art', 'Gel Nails'],
  },
  {
    title: 'Other beauty services',
    note: 'Owner-managed section for additional offerings.',
    items: ['Beauty Service 01', 'Beauty Service 02', 'Beauty Service 03'],
  },
]

export default function Pricing() {
  useDocumentMeta({
    title: 'Pricing',
    description:
      'Confirmed WESTZONE SALON prices: Normal Haircut 3,000 RWF and Haircut + Shampoo 5,000 RWF. Other service prices are awaiting owner confirmation.',
  })

  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Clear pricing. <span className="text-gold-gradient">No guesswork.</span>
          </>
        }
        description="Only confirmed prices are displayed as fixed amounts. All other services are marked as awaiting confirmation."
        image={GALLERY_IMAGES.aboutSecondary}
        breadcrumb="Pricing"
        compact
      />

      <section className="bg-ink py-20 sm:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Confirmed prices"
            title="Signature services"
            description="These prices have been confirmed by the salon and are shown in Rwandan Francs (RWF)."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {CONFIRMED_PRICES.map((service, index) => (
              <Reveal key={service.id} delay={index * 100}>
                <div className="group relative overflow-hidden rounded-[28px] border border-gold/35 bg-gradient-to-br from-white/[0.06] to-transparent p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold sm:p-10">
                  <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
                  <BadgeCheck size={22} className="text-gold" aria-hidden="true" />
                  <h3 className="mt-7 font-display text-4xl text-white">
                    {service.name}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/50">
                    {service.description}
                  </p>
                  <div className="mt-8 flex flex-wrap items-end justify-between gap-5 border-t border-gold/20 pt-6">
                    <div>
                      <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
                        Confirmed price
                      </span>
                      <span className="mt-2 block font-display text-4xl text-gold-gradient">
                        {service.price}
                      </span>
                    </div>
                    <Link
                      to={`/book?service=${encodeURIComponent(service.name)}`}
                      className="gold-button !px-5 !py-3"
                    >
                      Book Now
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 sm:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Awaiting confirmation"
            title="Additional services"
            description="These services are listed, but no fixed price has been confirmed. The salon owner can replace each placeholder with an accurate price at any time."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {editableGroups.map((group, groupIndex) => (
              <Reveal key={group.title} delay={groupIndex * 90}>
                <div className="h-full rounded-[28px] border border-white/10 bg-ink/70 p-7 sm:p-8">
                  <div className="flex items-center gap-3 text-gold">
                    <CircleDashed size={18} aria-hidden="true" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                      Price on request
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-3xl text-white">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/45">{group.note}</p>
                  <ul className="mt-7 divide-y divide-white/10 border-y border-white/10">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center justify-between gap-4 py-3.5 text-sm"
                      >
                        <span className="text-white/70">{item}</span>
                        <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.12em] text-white/35">
                          Confirm
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10" delay={120}>
            <div className="glass-panel flex flex-col gap-6 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
              <div className="flex gap-4">
                <PencilLine size={20} className="mt-1 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-2xl text-white">
                    Owner update point
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-white/50">
                    Edit <span className="text-white/80">src/data/services.js</span>{' '}
                    to add confirmed prices. Each service card and this price
                    list will update automatically.
                  </p>
                </div>
              </div>
              <Link to="/services" className="dark-button shrink-0">
                View Services
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
