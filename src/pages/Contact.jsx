import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Camera,
  Clock3,
  Copy,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Users,
} from 'lucide-react'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { BUSINESS, CONTACT } from '../data/site'
import { getWhatsAppUrl } from '../utils/booking'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const contactCards = [
  {
    label: 'Telephone',
    value: CONTACT.phone,
    detail: 'Number to be added by the salon owner',
    icon: Phone,
  },
  {
    label: 'Email',
    value: CONTACT.email,
    detail: 'Email address to be added by the salon owner',
    icon: Mail,
  },
  {
    label: 'Location',
    value: BUSINESS.address,
    detail: BUSINESS.city,
    icon: MapPin,
  },
  {
    label: 'Opening hours',
    value: 'To be confirmed',
    detail: 'Add confirmed hours in src/data/site.js',
    icon: Clock3,
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [prepared, setPrepared] = useState(null)
  const [copied, setCopied] = useState(false)
  useDocumentMeta({
    title: 'Contact',
    description:
      'Contact WESTZONE SALON in Kimironko, Kigali. WhatsApp, social links and contact form are available; contact details are awaiting owner input.',
  })

  const message = prepared
    ? [
        'WESTZONE SALON — Website enquiry',
        '',
        `Name: ${prepared.name}`,
        `Phone: ${prepared.phone}`,
        `Email: ${prepared.email || 'Not provided'}`,
        '',
        prepared.message,
      ].join('\n')
    : ''

  const handleSubmit = (event) => {
    event.preventDefault()
    setCopied(false)
    setPrepared(form)
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
        eyebrow="Contact"
        title={
          <>
            Let’s talk about <span className="text-gold-gradient">your next look.</span>
          </>
        }
        description="Reach out for service details, availability or directions. Contact details are placeholders until the owner adds the confirmed information."
        breadcrumb="Contact"
        compact
      />

      <section className="bg-ink py-20 sm:py-28">
        <div className="container-luxe grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Get in touch"
              title="We would love to hear from you."
              description="Use WhatsApp for the fastest response once the salon number is added, or send a message through the form below."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {contactCards.map((card, index) => {
                const Icon = card.icon
                return (
                  <Reveal key={card.label} delay={index * 70}>
                    <div className="h-full rounded-[24px] border border-white/10 bg-charcoal p-6">
                      <Icon size={18} className="text-gold" aria-hidden="true" />
                      <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
                        {card.label}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-white">
                        {card.value}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-white/40">
                        {card.detail}
                      </p>
                    </div>
                  </Reveal>
                )
              })}
            </div>

            <Reveal delay={160}>
              <div className="mt-8 rounded-[24px] border border-gold/25 bg-gold/[0.06] p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold">
                  Social media
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-xs text-white/60">
                    <Camera size={14} aria-hidden="true" />
                    {CONTACT.instagram}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-xs text-white/60">
                    <Users size={14} aria-hidden="true" />
                    {CONTACT.facebook}
                  </span>
                </div>
                <a
                  href={getWhatsAppUrl(
                    'Hello WESTZONE SALON, I would like to enquire about your services.',
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-button mt-6 w-full sm:w-auto"
                >
                  Open WhatsApp
                  <MessageCircle size={14} aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="glass-panel p-7 sm:p-10">
              <h2 className="font-display text-3xl text-white">Send an enquiry</h2>
              <p className="mt-2 text-sm leading-6 text-white/45">
                This form prepares your message. It does not send or store data
                until a real contact method is connected.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="field-label">
                      Your name
                    </label>
                    <input
                      id="contact-name"
                      className="field-input"
                      placeholder="Full name"
                      required
                      value={form.name}
                      onChange={(event) =>
                        setForm({ ...form, name: event.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="field-label">
                      Phone number
                    </label>
                    <input
                      id="contact-phone"
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
                </div>

                <div>
                  <label htmlFor="contact-email" className="field-label">
                    Email address — optional
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    className="field-input"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(event) =>
                      setForm({ ...form, email: event.target.value })
                    }
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="field-label">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows="6"
                    className="field-input resize-none"
                    placeholder="Tell us what you need..."
                    required
                    value={form.message}
                    onChange={(event) =>
                      setForm({ ...form, message: event.target.value })
                    }
                  />
                </div>

                <button type="submit" className="gold-button w-full">
                  Prepare Message
                  <Send size={14} aria-hidden="true" />
                </button>
              </form>

              {prepared ? (
                <div
                  className="mt-7 rounded-[22px] border border-gold/30 bg-gold/[0.06] p-6"
                  role="status"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold">
                    Message prepared — not sent
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/60">
                    Copy the message below, then send it through WhatsApp or
                    the salon’s confirmed email once available.
                  </p>
                  <pre className="mt-4 max-h-44 overflow-auto whitespace-pre-wrap rounded-xl bg-ink/60 p-4 font-sans text-xs leading-6 text-white/70">
                    {message}
                  </pre>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="dark-button !px-5 !py-3"
                    >
                      <Copy size={14} aria-hidden="true" />
                      {copied ? 'Copied' : 'Copy message'}
                    </button>
                    <a
                      href={getWhatsAppUrl(message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gold-button !px-5 !py-3"
                    >
                      Open WhatsApp
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              ) : null}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/10 bg-charcoal py-16 text-center sm:py-20">
        <div className="container-luxe">
          <Reveal>
            <h2 className="section-title mx-auto max-w-2xl text-balance">
              Prefer to book directly?
            </h2>
            <Link to="/book" className="gold-button mt-8">
              Open Appointment Request
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
