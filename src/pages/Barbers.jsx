import { Link } from 'react-router-dom'
import { ArrowUpRight, Camera, Scissors, ShieldCheck, Sparkles } from 'lucide-react'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { BARBERS } from '../data/site'
import { GALLERY_IMAGES } from '../data/gallery'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import BarberCard from '../components/BarberCard'

const standards = [
  {
    icon: Scissors,
    title: 'Precision',
    text: 'Clean lines, considered shaping and a finish that suits the individual.',
  },
  {
    icon: Sparkles,
    title: 'Personal style',
    text: 'Advice and techniques guided by your look, texture and preferences.',
  },
  {
    icon: ShieldCheck,
    title: 'Care',
    text: 'A respectful, comfortable experience from greeting to final detail.',
  },
]

export default function Barbers() {
  useDocumentMeta({
    title: 'Our Barbers',
    description:
      'Meet Eric and Ganza, the professional barbers at WESTZONE SALON in Kimironko, Kigali. Book a preferred barber for your next service.',
  })

  return (
    <>
      <PageHero
        eyebrow="Our barbers"
        title={
          <>
            The people behind <span className="text-gold-gradient">the precision.</span>
          </>
        }
        description="Meet Eric and Ganza. Their real profile photographs are used here, with professional cropping and responsive layouts that keep every portrait sharp."
        image={GALLERY_IMAGES.welcome}
        breadcrumb="Our Barbers"
      />

      <section className="bg-ink py-20 sm:py-28">
        <div className="container-luxe space-y-10">
          {BARBERS.map((barber, index) => (
            <Reveal key={barber.id} delay={index * 100}>
              <BarberCard barber={barber} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-charcoal py-20 sm:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Our standard"
            title="More than a haircut"
            description="Every WestZone service is built around skill, conversation and a finish that feels unmistakably yours."
            align="center"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {standards.map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delay={index * 90}>
                  <div className="h-full rounded-[26px] border border-white/10 bg-ink/70 p-7 text-center sm:p-9">
                    <span className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-gold/40 text-gold">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 font-display text-2xl text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/50">{item.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-ink py-20 sm:py-24">
        <div className="container-luxe grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow">Portfolios</span>
            <h2 className="section-title mt-5 text-balance">
              Work from Eric and Ganza will live here.
            </h2>
            <p className="body-text mt-5">
              When portfolio photographs are supplied, each barber will receive
              a dedicated image set showing their own cuts, fades and grooming
              work. No generated faces or substituted identities will be used.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              {[0, 1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="grid aspect-[4/5] place-items-center rounded-[22px] border border-dashed border-white/15 bg-white/[0.025] text-white/25"
                >
                  <Camera size={24} aria-hidden="true" />
                  <span className="sr-only">Portfolio photo placeholder</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal py-20 text-center sm:py-24">
        <div className="container-luxe">
          <Reveal>
            <h2 className="section-title mx-auto max-w-3xl text-balance">
              Book your preferred barber.
            </h2>
            <p className="body-text mx-auto mt-5 max-w-xl">
              Select Eric or Ganza in the appointment request form and we will
              help arrange your visit.
            </p>
            <Link to="/book" className="gold-button mt-9">
              Request an Appointment
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
