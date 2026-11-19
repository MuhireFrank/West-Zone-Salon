import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import LoadingScreen from './components/LoadingScreen'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Barbers from './pages/Barbers'
import Gallery from './pages/Gallery'
import Pricing from './pages/Pricing'
import Location from './pages/Location'
import Contact from './pages/Contact'
import Booking from './pages/Booking'
import NotFound from './pages/NotFound'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1500)
    return () => window.clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="barbers" element={<Barbers />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="location" element={<Location />} />
        <Route path="contact" element={<Contact />} />
        <Route path="book" element={<Booking />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
