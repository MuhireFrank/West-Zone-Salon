import { Link } from 'react-router-dom'
import { ArrowUpRight, BadgeCheck, MessageCircle, PencilLine } from 'lucide-react'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import {
  CONFIRMED_PRICES,
  SERVICE_CATEGORIES,
  getServicesByCategory,
} from '../data/services'
import { GALLERY_IMAGES } from '../data/gallery'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'

export default function Services() {
  useDocumentMeta({
    title: 'Our Services',
    description:
      'Explore WestZone Salon barber services, nail services and editable beauty service placeholders. Confirmed prices shown in RWF.',
  })

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Crafted for your <span className="text-gold-gradient">best look.</span>
          </>
        }
        description="Explore our barber, nail and beauty services. Confirmed prices are shown clearly; unconfirmed details are marked for the salon owner to update."
        image={GALLERY_IMAGES.hero}
        breadcrumb="Services"
      >
        <div className="mt-9 flex flex-wrap gap-3">
          {SERVICE_CATEGORIES.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="rounded-full border border-white/15 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white/70 transition-colors hover:border-gold hover:text-gold"
            >
              {category.label}
            </a>
          ))}
        </div>
      </PageHero>

      <div className="border-b border-white/10 bg-charcoal">
        <div className="container-luxe flex flex-col gap-3 py-5 text-[11px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2">
            <BadgeCheck size={14} className="text-gold" aria-hidden="true" />
            Confirmed prices: {CONFIRMED_PRICES.map((item) => item.price).join(' · ')}
          </p>
          <p className="flex items-center gap-2">
            <PencilLine size={14} className="text-gold" aria-hidden="true" />
            Other prices are intentionally left for owner confirmation.
          </p>
        </div>
      </div>

      {SERVICE_CATEGORIES.map((category, categoryIndex) => {
        const services = getServicesByCategory(category.id)

        return (
          <section
            key={category.id}
            id={category.id}
            className={`scroll-mt-28 py-20 sm:py-28 ${
              categoryIndex % 2 === 0 ? 'bg-ink' : 'bg-charcoal'
            }`}
          >
            <div className="container-luxe">
              <SectionHeading
                eyebrow={`0${categoryIndex + 1} / ${category.label}`}
                title={category.label}
                description={category.description}
              />
              <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                {services.map((service, index) => (
                  <Reveal key={service.id} delay={(index % 4) * 75}>
                    <ServiceCard service={service} index={index} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      <section className="border-t border-white/10 bg-ink py-20 sm:py-28">
        <div className="container-luxe grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Not sure where to start?"
              title="Tell us what you have in mind."
              description="Choose a service and preferred barber in the booking form, or reach out through WhatsApp for guidance. Requests are not treated as confirmed bookings."
            />
          </div>
          <Reveal delay={120}>
            <div className="glass-panel p-8 sm:p-10">
              <div className="grid gap-4 sm:grid-cols-2">
                <Link to="/book" className="gold-button">
                  Start a Request
                  <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
                <Link to="/contact" className="dark-button">
                  WhatsApp / Contact
                  <MessageCircle size={14} aria-hidden="true" />
                </Link>
              </div>
              <p className="mt-7 border-t border-white/10 pt-6 text-xs leading-6 text-white/40">
                Prices displayed in Rwandan Francs (RWF). Only confirmed prices
                are shown as fixed amounts.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
