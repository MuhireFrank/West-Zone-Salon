import { Link } from 'react-router-dom'
import { ArrowUpRight, Clock, Info, MapPin, Navigation } from 'lucide-react'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { BUSINESS, CONTACT, OPENING_HOURS } from '../data/site'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function Location() {
  useDocumentMeta({
    title: 'Location',
    description:
      'Find WESTZONE SALON at Kimironko, Trump House, Kigali, Rwanda. Get directions and view location details.',
  })

  return (
    <>
      <PageHero
        eyebrow="Find us"
        title={
          <>
            In the heart of <span className="text-gold-gradient">Kimironko.</span>
          </>
        }
        description="WESTZONE SALON is located at Trump House in Kimironko, Kigali, Rwanda."
        breadcrumb="Location"
        compact
      />

      <section className="bg-ink py-20 sm:py-28">
        <div className="container-luxe grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Visit the salon"
              title="Easy to find. Worth the visit."
              description="Use the address below or open directions in Google Maps. A precise map embed will be added once the exact business pin is verified."
            />

            <Reveal delay={120}>
              <div className="mt-10 rounded-[28px] border border-white/10 bg-charcoal p-7 sm:p-9">
                <div className="flex gap-4">
                  <MapPin size={20} className="mt-1 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                      Address
                    </p>
                    <p className="mt-2 font-display text-2xl text-white">
                      {BUSINESS.name}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-white/60">
                      {BUSINESS.address}
                      <br />
                      {BUSINESS.city}
                    </p>
                  </div>
                </div>

                <div className="my-8 h-px bg-white/10" />

                <div className="flex gap-4">
                  <Clock size={20} className="mt-1 shrink-0 text-gold" aria-hidden="true" />
                  <div className="w-full">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                      Opening hours
                    </p>
                    <div className="mt-3 space-y-2.5">
                      {OPENING_HOURS.map((item) => (
                        <div
                          key={item.day}
                          className="flex items-center justify-between gap-4 text-sm"
                        >
                          <span className="text-white/65">{item.day}</span>
                          <span className="text-white/40">{item.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href={CONTACT.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-button mt-9 w-full"
                >
                  Get Directions
                  <Navigation size={14} aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="relative h-full min-h-[480px] overflow-hidden rounded-[32px] border border-white/10 bg-charcoal">
              <div className="absolute inset-0 bg-grid opacity-60" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(198,161,91,0.16),transparent_38%)]" />

              <div className="absolute inset-0 grid place-items-center p-8 text-center">
                <div>
                  <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-gold/50 bg-gold/10">
                    <MapPin size={32} className="text-gold" aria-hidden="true" />
                  </div>
                  <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
                    Map embed pending verification
                  </p>
                  <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl">
                    Kimironko, Trump House
                  </h2>
                  <p className="body-text mx-auto mt-4 max-w-md">
                    We will embed the exact Google Map here once the business
                    location pin has been verified. Directions are already
                    available via the button.
                  </p>
                  <a
                    href={CONTACT.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dark-button mt-8"
                  >
                    Open in Google Maps
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/10 bg-ink/80 px-4 py-2 text-[10px] text-white/50 backdrop-blur">
                <Info size={12} className="text-gold" aria-hidden="true" />
                Location details supplied by the salon
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/10 bg-charcoal py-20 text-center sm:py-24">
        <div className="container-luxe">
          <Reveal>
            <span className="eyebrow mx-auto">Nearby?</span>
            <h2 className="section-title mx-auto mt-5 max-w-3xl text-balance">
              Step into WestZone for your next look.
            </h2>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link to="/book" className="gold-button">
                Book Appointment
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
              <Link to="/contact" className="dark-button">
                Contact the Salon
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
