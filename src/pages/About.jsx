import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Compass,
  Eye,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Target,
} from 'lucide-react'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { GALLERY_IMAGES } from '../data/gallery'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const values = [
  {
    icon: ShieldCheck,
    title: 'Professionalism',
    text: 'A disciplined, respectful approach to every client and every service.',
  },
  {
    icon: Sparkles,
    title: 'Quality',
    text: 'Careful techniques and clean finishes that reflect pride in the craft.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer care',
    text: 'A welcoming experience built on listening, comfort and trust.',
  },
  {
    icon: Compass,
    title: 'Attention to detail',
    text: 'The small refinements that turn a good result into a great one.',
  },
]

export default function About() {
  useDocumentMeta({
    title: 'About Us',
    description:
      'Learn the story, mission, vision and values behind WESTZONE SALON, a premium salon in Kimironko, Trump House, Kigali, Rwanda.',
  })

  return (
    <>
      <PageHero
        eyebrow="About WestZone"
        title={
          <>
            Built on style. <br />
            <span className="text-gold-gradient">Driven by care.</span>
          </>
        }
        description="A modern salon in Kimironko where professional grooming, personal style and a welcoming experience come together."
        image={GALLERY_IMAGES.aboutMain}
        breadcrumb="About Us"
      />

      <section className="bg-ink py-20 sm:py-28 lg:py-36">
        <div className="container-luxe grid gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-[32px]">
                <img
                  src={GALLERY_IMAGES.aboutMain}
                  alt="WestZone Salon interior styling station"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-4 hidden w-52 overflow-hidden rounded-[24px] border-4 border-ink sm:block lg:-right-10">
                <img
                  src={GALLERY_IMAGES.aboutSecondary}
                  alt="Salon styling detail"
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Our story"
              title={
                <>
                  A salon shaped by <span className="text-gold-gradient">Kigali style.</span>
                </>
              }
            />
            <div className="mt-8 space-y-5 body-text">
              <p>
                WESTZONE SALON is a professional grooming and beauty destination
                located at Trump House in Kimironko, Kigali. We created a space
                where clients can slow down, feel welcome and receive services
                that are delivered with skill and intention.
              </p>
              <p>
                Our approach is simple: listen first, work with precision and
                finish with care. Whether it is a sharp fade, a tidy beard, a
                polished manicure or a full style refresh, the goal is always
                the same — help each client leave looking and feeling their
                best.
              </p>
              <p>
                The salon continues to grow through word of mouth, steady
                craftsmanship and a genuine respect for the people who sit in
                our chairs.
              </p>
            </div>
            <Reveal delay={140}>
              <Link to="/barbers" className="gold-button mt-10">
                Meet Our Barbers
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 sm:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Purpose"
            title="What guides us"
            description="Our mission, vision and values shape the way we work and the experience we create."
            align="center"
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {[
              {
                icon: Target,
                label: 'Our mission',
                title: 'To make premium grooming feel personal and accessible.',
                text: 'We deliver professional barber and beauty services with careful attention, a welcoming atmosphere and respect for each client’s individual style.',
              },
              {
                icon: Eye,
                label: 'Our vision',
                title: 'To be a leading style destination in Kigali.',
                text: 'We aspire to be recognised for quality, consistency and a distinct WestZone experience that clients trust and recommend.',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal key={item.label} delay={index * 100}>
                  <div className="group h-full rounded-[30px] border border-white/10 bg-ink/70 p-8 transition-all duration-500 hover:border-gold/40 sm:p-10">
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/35 text-gold">
                      <Icon size={21} aria-hidden="true" />
                    </span>
                    <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                      {item.label}
                    </p>
                    <h3 className="mt-3 font-display text-3xl leading-tight text-white sm:text-4xl">
                      {item.title}
                    </h3>
                    <p className="body-text mt-5">{item.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Reveal key={value.title} delay={index * 70}>
                  <div className="h-full rounded-[24px] border border-white/10 bg-white/[0.03] p-6 transition-all hover:border-gold/40">
                    <Icon size={20} className="text-gold" aria-hidden="true" />
                    <h3 className="mt-6 font-display text-2xl text-white">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/50">{value.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 sm:py-28">
        <div className="container-luxe grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <img
                src={GALLERY_IMAGES.welcome}
                alt="Professional barber working with a client"
                loading="lazy"
                className="aspect-[4/5] w-full rounded-[24px] object-cover"
              />
              <img
                src={GALLERY_IMAGES.cta}
                alt="Barbershop atmosphere"
                loading="lazy"
                className="mt-10 aspect-[4/5] w-full rounded-[24px] object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="The experience"
              title={
                <>
                  Professionalism you can <span className="text-gold-gradient">feel.</span>
                </>
              }
              description="From the moment you arrive, the WestZone experience is designed to be calm, clear and comfortable. We take time to understand what you want, explain the service and deliver a finish that fits you."
            />
            <Reveal delay={120}>
              <ul className="mt-9 space-y-4">
                {[
                  'A clean, comfortable salon environment.',
                  'Skilled barbers and beauty specialists.',
                  'Clear communication before every service.',
                  'Personal recommendations when you need them.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={180}>
              <Link to="/gallery" className="dark-button mt-10">
                Explore the Gallery
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-charcoal py-20 text-center sm:py-24">
        <div className="container-luxe">
          <Reveal>
            <span className="eyebrow mx-auto">Visit WestZone</span>
            <h2 className="section-title mx-auto mt-5 max-w-3xl text-balance">
              Your next great look starts in Kimironko.
            </h2>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link to="/book" className="gold-button">
                Book Appointment
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
              <Link to="/location" className="dark-button">
                Find Us
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
