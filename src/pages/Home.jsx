import { Link } from 'react-router-dom'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Crown,
  Eye,
  Heart,
  MapPin,
  Scissors,
  Sparkles,
  Star,
} from 'lucide-react'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { BARBERS, BUSINESS, TESTIMONIALS, WHY_US } from '../data/site'
import { FEATURED_SERVICES } from '../data/services'
import { GALLERY_IMAGES, GALLERY_ITEMS } from '../data/gallery'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import BarberCard from '../components/BarberCard'

const whyIcons = {
  scissors: Scissors,
  sparkles: Sparkles,
  heart: Heart,
  eye: Eye,
  crown: Crown,
}

export default function Home() {
  useDocumentMeta({
    title: 'Premium Salon in Kimironko, Kigali',
    description:
      'WESTZONE SALON is a premium grooming and beauty destination in Kimironko, Trump House, Kigali. Explore barber services, nail care, our barbers and book an appointment.',
  })

  return (
    <>
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-[#fff7f7] pt-32">
        <img
          src={GALLERY_IMAGES.hero}
          alt="Professional barbershop interior"
          className="absolute inset-0 -z-30 h-full w-full object-cover opacity-25 animate-slow-zoom"
        />
        <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#fff1f1] via-[#fff7f7]/90 to-[#fff3f3]/60" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-white/40 via-transparent to-white/20" />
        <div className="absolute inset-y-0 left-6 hidden w-px bg-gradient-to-b from-transparent via-red-200 to-transparent lg:block" />

        <div className="pointer-events-none absolute right-[-3rem] top-20 hidden h-[80%] w-[38%] items-end justify-end lg:flex">
          <div className="relative h-full w-full max-w-[560px]">
            <div className="absolute bottom-1 right-0 h-[72%] w-[62%] overflow-hidden rounded-[34px] border border-white/80 bg-white/15 shadow-[0_30px_90px_-45px_rgba(130,16,16,0.45)] backdrop-blur-[1px]">
              <img
                src={BARBERS[1].image}
                alt={BARBERS[1].name}
                className="h-full w-full object-cover object-center opacity-90"
              />
            </div>
            <div className="absolute bottom-14 left-4 h-[62%] w-[48%] overflow-hidden rounded-[30px] border border-white/80 bg-white/15 shadow-[0_30px_90px_-55px_rgba(42,16,16,0.42)] backdrop-blur-[1px]">
              <img
                src={BARBERS[0].image}
                alt={BARBERS[0].name}
                className="h-full w-full object-cover object-center opacity-90"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-l from-[#fff7f7]/5 via-transparent to-[#fff7f7]/25" />
          </div>
        </div>

        <div className="container-luxe relative z-10 pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-4xl">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-red-400" />
                <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-red-600">
                  {BUSINESS.tagline}
                </span>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <p className="mt-8 font-display text-2xl tracking-[0.18em] text-[#2f2f2f] sm:text-3xl">
                WESTZONE SALON
              </p>
            </Reveal>
            <Reveal delay={150}>
              <h1 className="display-title mt-4 max-w-4xl text-balance sm:text-[clamp(3.4rem,7.2vw,7rem)]">
                Your Style.
                <br />
                Your Identity.
                <br />
                <span className="text-gold-gradient">Our Passion.</span>
              </h1>
            </Reveal>
            <Reveal delay={230}>
              <p className="body-text mt-8 max-w-xl text-balance">
                A premium grooming and beauty destination in the heart of
                Kimironko. Precision cuts, thoughtful care and a space where
                your confidence takes shape.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/services" className="gold-button">
                  Explore Our Services
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
                <Link to="/book" className="dark-button">
                  Book Appointment
                  <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="mt-16 flex flex-col gap-6 border-t border-red-100 pt-6 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <div className="flex items-start gap-3">
                <MapPin size={17} className="mt-0.5 text-red-600" aria-hidden="true" />
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#5c5c5c]">
                    Visit us
                  </p>
                  <p className="mt-1 text-sm text-[#2f2f2f]">
                    {BUSINESS.address}, {BUSINESS.city}
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <a
                href="#welcome"
                className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#5c5c5c] transition-colors hover:text-red-600"
              >
                Scroll to discover
                <ArrowDown size={14} aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="welcome" className="bg-white py-20 sm:py-28 lg:py-36">
        <div className="container-luxe grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-[32px]">
              <img
                src={GALLERY_IMAGES.welcome}
                alt="Barber at work inside a salon"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent" />
            </div>
            <div className="absolute -bottom-7 -right-3 w-44 overflow-hidden rounded-[24px] border-4 border-white sm:-right-8 sm:w-56">
              <img
                src={GALLERY_IMAGES.aboutSecondary}
                alt="Salon styling detail"
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Welcome to WestZone"
              title={
                <>
                  Where grooming becomes <span className="text-gold-gradient">a statement.</span>
                </>
              }
              description="WestZone Salon is a professional destination for grooming, personal style and beauty in Kimironko. We bring together skilled hands, a calm atmosphere and an eye for detail so every client leaves feeling sharper and more confident."
            />
            <Reveal delay={140}>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {[
                  ['01', 'Precision first', 'Every cut is shaped with intention.'],
                  ['02', 'Made personal', 'Your style, features and comfort lead the way.'],
                ].map(([number, title, text]) => (
                  <div key={number} className="border-t border-gold/30 pt-5">
                    <span className="font-display text-3xl text-red-600">{number}</span>
                    <h3 className="mt-2 text-base font-semibold text-[#121212]">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#4a4a4a]">{text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={200}>
              <Link to="/about" className="dark-button mt-10">
                Discover Our Story
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#fff9f9] py-20 sm:py-28">
        <div className="container-luxe">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="What we do"
              title={
                <>
                  Signature services, <span className="text-gold-gradient">carefully done.</span>
                </>
              }
              description="From a sharp everyday cut to a polished beauty finish, each service is delivered with professional care."
            />
            <Reveal delay={120}>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border-b border-gold/40 pb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-gold transition-colors hover:border-gold"
              >
                View all services
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_SERVICES.map((service, index) => (
              <Reveal key={service.id} delay={index * 80}>
                <ServiceCard service={service} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 text-ink sm:py-28">
        <div className="container-luxe grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div>
            <Reveal>
              <span className="eyebrow !text-[#9B7536]">Why WestZone</span>
              <h2 className="section-title mt-5 text-balance !text-ink">
                The details make <span className="text-[#9B7536]">the difference.</span>
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-ink/60 sm:text-base">
                A great salon visit is about more than the finished look. It is
                the care, the conversation and the confidence you carry out
                with you.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <Link to="/book" className="light-button mt-9">
                Book Your Visit
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {WHY_US.map((item, index) => {
              const Icon = whyIcons[item.icon]
              return (
                <Reveal key={item.title} delay={index * 70}>
                  <div className="h-full rounded-[24px] border border-ink/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C6A15B]/60 hover:shadow-xl sm:p-7">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-[#C6A15B]/15 text-[#9B7536]">
                      <Icon size={19} aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 font-display text-2xl text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-ink/55">{item.description}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Our barbers"
            title={
              <>
                Meet the hands behind <span className="text-gold-gradient">the look.</span>
              </>
            }
            description="Professional barbers committed to precision, personal service and a comfortable salon experience."
            align="center"
          />
          <div className="mt-14 grid gap-7 xl:grid-cols-2">
            {BARBERS.map((barber, index) => (
              <Reveal key={barber.id} delay={index * 120}>
                <BarberCard barber={barber} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <div className="mt-10 text-center">
              <Link to="/barbers" className="dark-button">
                Meet the Full Team
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-red-100 bg-[#fffaf9] py-20 sm:py-28">
        <div className="container-luxe">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Gallery preview"
              title={
                <>
                  A look at <span className="text-gold-gradient">the craft.</span>
                </>
              }
              description="A preview of the styles and services that inspire us. Illustrative imagery is clearly labelled until authentic WestZone work is added."
            />
            <Reveal delay={120}>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 border-b border-gold/40 pb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-gold transition-colors hover:border-gold"
              >
                Open the gallery
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {GALLERY_ITEMS.slice(0, 4).map((item, index) => (
              <Reveal key={item.id} delay={index * 80}>
                <Link
                  to="/gallery"
                  className="group relative block overflow-hidden rounded-[20px] bg-white/5"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="image-cover aspect-[4/5] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[9px] font-bold uppercase tracking-[0.14em] text-white/80">
                    {item.category}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff8f8] py-20 sm:py-28">
        <div className="container-luxe">
          <div className="rounded-[32px] border border-red-100 bg-white p-7 sm:p-12 shadow-[0_20px_60px_-35px_rgba(215,31,31,0.18)]">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="rounded-full border border-gold/30 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-gold">
                  Sample content
                </span>
                <h2 className="section-title mt-6">What our clients say</h2>
              </div>
              <p className="body-text max-w-md">
                These reviews are clearly marked examples. Genuine client
                feedback will replace them when provided.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {TESTIMONIALS.map((testimonial, index) => (
                <Reveal key={testimonial.name + index} delay={index * 90}>
                  <figure className="flex h-full flex-col rounded-[24px] border border-red-100 bg-white p-7 sm:p-8">
                    <div className="flex gap-1 text-gold" aria-label="Sample rating">
                      {Array.from({ length: 5 }).map((_, star) => (
                        <Star key={star} size={13} fill="currentColor" aria-hidden="true" />
                      ))}
                    </div>
                    <blockquote className="mt-6 flex-1 font-display text-xl leading-relaxed text-[#1b1b1b] sm:text-2xl">
                      “{testimonial.quote}”
                    </blockquote>
                    <figcaption className="mt-8 border-t border-red-100 pt-5">
                      <p className="text-sm font-semibold text-[#121212]">
                        {testimonial.name}
                      </p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#5c5c5c]">
                        {testimonial.role}
                      </p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#fff7f7] py-24 sm:py-32">
        <img
          src={GALLERY_IMAGES.cta}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 -z-10 bg-white/80" />
        <div className="container-luxe text-center">
          <Reveal>
            <span className="eyebrow mx-auto">Your next look awaits</span>
            <h2 className="display-title mx-auto mt-6 max-w-4xl text-balance">
              Ready for Your <span className="text-gold-gradient">Next Look?</span>
            </h2>
            <p className="body-text mx-auto mt-6 max-w-xl text-balance">
              Choose your service, tell us when you would like to visit and our
              team will help you plan your appointment.
            </p>
            <Link to="/book" className="gold-button mt-9">
              Book Your Appointment
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
