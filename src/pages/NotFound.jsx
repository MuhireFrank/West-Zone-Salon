import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function NotFound() {
  useDocumentMeta({ title: 'Page Not Found' })

  return (
    <section className="relative grid min-h-[80svh] place-items-center overflow-hidden bg-ink px-5 pt-24 text-center">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]" />
      <div className="relative">
        <p className="font-display text-8xl text-gold-gradient">404</p>
        <h1 className="section-title mt-6">This page has left the chair.</h1>
        <p className="body-text mx-auto mt-5 max-w-lg">
          The page you are looking for does not exist or may have moved.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link to="/" className="gold-button">
            <ArrowLeft size={14} aria-hidden="true" />
            Back Home
          </Link>
          <Link to="/book" className="dark-button">
            Book Appointment
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
