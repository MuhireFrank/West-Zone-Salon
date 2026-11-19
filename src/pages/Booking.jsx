import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  Copy,
  Info,
  MessageCircle,
  Scissors,
  UserRound,
} from 'lucide-react'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { BARBERS } from '../data/site'
import { SERVICE_CATEGORIES, SERVICES } from '../data/services'
import { GALLERY_IMAGES } from '../data/gallery'
import { formatAppointmentMessage, getWhatsAppUrl } from '../utils/booking'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'

const today = () => new Date().toISOString().split('T')[0]

export default function Booking() {
  const [searchParams] = useSearchParams()
  const serviceParam = searchParams.get('service') || ''
  const barberParam = searchParams.get('barber') || ''

  const matchedService = SERVICES.find((service) => service.name === serviceParam)
  const matchedBarber = BARBERS.some((barber) => barber.name === barberParam)

  const [form, setForm] = useState({
    service: matchedService?.name || '',
    barber:
      matchedBarber && (!matchedService || matchedService.category === 'barber')
        ? barberParam
        : 'No preference',
    date: '',
    name: '',
    phone: '',
    notes: '',
  })
  const [request, setRequest] = useState(null)
  const [copied, setCopied] = useState(false)
  useDocumentMeta({
    title: 'Book Appointment',
    description:
      'Prepare an appointment request with WESTZONE SALON in Kigali. Choose a service, preferred barber, date and contact details.',
  })

  const selectedService = SERVICES.find((service) => service.name === form.service)
  const isBarberService = selectedService?.category === 'barber'
  const canChooseBarber = !form.service || isBarberService
  const message = request ? formatAppointmentMessage(request) : ''

  const handleServiceChange = (value) => {
    const nextService = SERVICES.find((service) => service.name === value)
    setForm((current) => ({
      ...current,
      service: value,
      barber: nextService?.category === 'barber' ? current.barber : 'Not applicable',
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setCopied(false)
    setRequest(form)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Appointments"
        title={
          <>
            Your look, <span className="text-gold-gradient">your time.</span>
          </>
        }
        description="Tell us what you need and when you would like to visit. This form prepares a request — it does not create a confirmed booking."
        image={GALLERY_IMAGES.hero}
        breadcrumb="Book Appointment"
        compact
      />

      <section className="bg-ink py-16 sm:py-24">
        <div className="container-luxe grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal>
            <div className="glass-panel p-7 sm:p-10">
              <div className="flex items-center gap-3 text-gold">
                <Scissors size={18} aria-hidden="true" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                  Appointment request
                </span>
              </div>
              <h2 className="mt-5 font-display text-3xl text-white sm:text-4xl">
                Plan your visit
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/45">
                Fields marked with an asterisk are required.
              </p>

              <form onSubmit={handleSubmit} className="mt-9 space-y-7">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-gold/15 text-[10px] font-bold text-gold">
                      1
                    </span>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                      Choose your service
                    </p>
                  </div>
                  <label htmlFor="booking-service" className="field-label">
                    Service *
                  </label>
                  <select
                    id="booking-service"
                    className="field-input"
                    required
                    value={form.service}
                    onChange={(event) => handleServiceChange(event.target.value)}
                  >
                    <option value="">Select a service</option>
                    {SERVICE_CATEGORIES.map((category) => (
                      <optgroup key={category.id} label={category.label}>
                        {SERVICES.filter((service) => service.category === category.id).map(
                          (service) => (
                            <option key={service.id} value={service.name}>
                              {service.name}
                              {service.price ? ` — ${service.price}` : ''}
                            </option>
                          ),
                        )}
                      </optgroup>
                    ))}
                  </select>
                  {selectedService?.price ? (
                    <p className="mt-2 text-xs text-gold">
                      Confirmed price: {selectedService.price}
                    </p>
                  ) : null}
                </div>

                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-gold/15 text-[10px] font-bold text-gold">
                      2
                    </span>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                      Choose your barber
                    </p>
                  </div>
                  <label htmlFor="booking-barber" className="field-label">
                    Preferred barber
                  </label>
                  <select
                    id="booking-barber"
                    className="field-input disabled:opacity-50"
                    value={canChooseBarber ? form.barber : 'Not applicable'}
                    disabled={!canChooseBarber}
                    onChange={(event) =>
                      setForm({ ...form, barber: event.target.value })
                    }
                  >
                    {canChooseBarber ? (
                      <>
                        <option value="No preference">No preference</option>
                        {BARBERS.map((barber) => (
                          <option key={barber.id} value={barber.name}>
                            {barber.name} — {barber.title}
                          </option>
                        ))}
                      </>
                    ) : (
                      <option value="Not applicable">
                        Not applicable for this service
                      </option>
                    )}
                  </select>
                </div>

                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-gold/15 text-[10px] font-bold text-gold">
                      3
                    </span>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                      When and who
                    </p>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="booking-date" className="field-label">
                        Preferred date *
                      </label>
                      <div className="relative">
                        <CalendarDays
                          size={15}
                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gold"
                          aria-hidden="true"
                        />
                        <input
                          id="booking-date"
                          type="date"
                          min={today()}
                          className="field-input pr-10"
                          required
                          value={form.date}
                          onChange={(event) =>
                            setForm({ ...form, date: event.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="booking-name" className="field-label">
                        Your name *
                      </label>
                      <div className="relative">
                        <UserRound
                          size={15}
                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gold"
                          aria-hidden="true"
                        />
                        <input
                          id="booking-name"
                          className="field-input pr-10"
                          placeholder="Full name"
                          required
                          value={form.name}
                          onChange={(event) =>
                            setForm({ ...form, name: event.target.value })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="booking-phone" className="field-label">
                      Phone number *
                    </label>
                    <input
                      id="booking-phone"
                      type="tel"
                      className="field-input"
                      placeholder="Phone number"
                      required
                      value={form.phone}
                      onChange={(event) =>
                        setForm({ ...form, phone: event.target.value })
                      }
                    />
                  </div>

                  <div className="mt-5">
                    <label htmlFor="booking-notes" className="field-label">
                      Anything else? — optional
                    </label>
                    <textarea
                      id="booking-notes"
                      rows="4"
                      className="field-input resize-none"
                      placeholder="Style reference, timing notes or questions..."
                      value={form.notes}
                      onChange={(event) =>
                        setForm({ ...form, notes: event.target.value })
                      }
                    />
                  </div>
                </div>

                <button type="submit" className="gold-button w-full">
                  Prepare Appointment Request
                  <ArrowUpRight size={14} aria-hidden="true" />
                </button>
              </form>

              {request ? (
                <div
                  className="mt-8 rounded-[24px] border border-gold/30 bg-gold/[0.06] p-6"
                  role="status"
                >
                  <div className="flex items-center gap-2 text-gold">
                    <Check size={16} aria-hidden="true" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em]">
                      Request prepared — not confirmed
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/55">
                    No booking has been created. Send this request through
                    WhatsApp or the salon’s confirmed contact channel. A time
                    is only confirmed when the salon replies.
                  </p>
                  <pre className="mt-4 max-h-52 overflow-auto whitespace-pre-wrap rounded-xl bg-ink/60 p-4 font-sans text-xs leading-6 text-white/70">
                    {message}
                  </pre>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="dark-button !px-5 !py-3"
                    >
                      <Copy size={14} aria-hidden="true" />
                      {copied ? 'Copied' : 'Copy request'}
                    </button>
                    <a
                      href={getWhatsAppUrl(message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gold-button !px-5 !py-3"
                    >
                      Send via WhatsApp
                      <MessageCircle size={14} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              ) : null}
            </div>
          </Reveal>

          <aside className="space-y-6">
            <Reveal delay={100}>
              <div className="rounded-[28px] border border-white/10 bg-charcoal p-7 sm:p-8">
                <Info size={20} className="text-gold" aria-hidden="true" />
                <h2 className="mt-5 font-display text-2xl text-white">
                  How booking works
                </h2>
                <ol className="mt-6 space-y-5">
                  {[
                    'Complete the request form with your service and preferred date.',
                    'Copy the request or open WhatsApp to send it to the salon.',
                    'Wait for a reply. Your appointment is only confirmed once the salon confirms it.',
                  ].map((step, index) => (
                    <li key={step} className="flex gap-4">
                      <span className="font-display text-xl text-gold">
                        0{index + 1}
                      </span>
                      <p className="text-sm leading-6 text-white/55">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="overflow-hidden rounded-[28px] border border-gold/25 bg-gold/[0.06] p-7 sm:p-8">
                <MessageCircle size={20} className="text-gold" aria-hidden="true" />
                <h2 className="mt-5 font-display text-2xl text-white">
                  Prefer WhatsApp?
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/50">
                  You can skip the form and send a message directly once the
                  salon’s WhatsApp number is added.
                </p>
                <a
                  href={getWhatsAppUrl(
                    'Hello WESTZONE SALON, I would like to ask about an appointment.',
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-button mt-6 w-full"
                >
                  Open WhatsApp
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="rounded-[28px] border border-white/10 bg-charcoal p-7 sm:p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                  Find us
                </p>
                <p className="mt-4 font-display text-2xl text-white">
                  Kimironko, Trump House
                </p>
                <p className="mt-1 text-sm text-white/50">Kigali, Rwanda</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Kimironko%20Trump%20House%20Kigali%20Rwanda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-gold hover:text-white"
                >
                  Get directions
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  )
}
