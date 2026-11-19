export const BUSINESS = {
  name: 'WESTZONE SALON',
  shortName: 'WestZone',
  tagline: 'STYLE. CONFIDENCE. ELEGANCE.',
  address: 'Kimironko, Trump House',
  city: 'Kigali, Rwanda',
  fullAddress: 'Kimironko, Trump House, Kigali, Rwanda',
  founded: 'Kigali, Rwanda',
}

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Our Barbers', to: '/barbers' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Location', to: '/location' },
  { label: 'Contact', to: '/contact' },
]

export const CONTACT = {
  phone: 'To be added by owner',
  whatsapp: '',
  email: 'To be added by owner',
  instagram: 'Link to be added by owner',
  facebook: 'Link to be added by owner',
  directionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Kimironko%20Trump%20House%20Kigali%20Rwanda',
}

export const OPENING_HOURS = [
  { day: 'Monday – Friday', hours: 'To be confirmed' },
  { day: 'Saturday', hours: 'To be confirmed' },
  { day: 'Sunday', hours: 'To be confirmed' },
]

export const BARBERS = [
  {
    id: 'eric',
    name: 'Eric',
    title: 'Professional Barber',
    image: '/images/barbers/Eric.png',
    fallback: '/images/barbers/barber-placeholder.svg',
    bio: 'Short biography to be added by the salon. Eric is a professional barber at WestZone Salon, dedicated to precision grooming and a comfortable client experience.',
    specialties: [
      'Specialty to be confirmed',
      'Specialty to be confirmed',
      'Specialty to be confirmed',
    ],
    experience: 'Experience to be confirmed',
    portfolio: [],
  },
  {
    id: 'ganza',
    name: 'Ganza',
    title: 'Professional Barber',
    image: '/images/barbers/Ganza.png',
    fallback: '/images/barbers/barber-placeholder.svg',
    bio: 'Short biography to be added by the salon. Ganza is a professional barber at WestZone Salon, focused on clean finishes and personal style.',
    specialties: [
      'Specialty to be confirmed',
      'Specialty to be confirmed',
      'Specialty to be confirmed',
    ],
    experience: 'Experience to be confirmed',
    portfolio: [],
  },
]

export const WHY_US = [
  {
    title: 'Skilled hands',
    description:
      'Professional barbers and beauty specialists who treat every detail with care.',
    icon: 'scissors',
  },
  {
    title: 'Quality grooming',
    description:
      'Thoughtful techniques, clean finishes and services tailored to your look.',
    icon: 'sparkles',
  },
  {
    title: 'Warm experience',
    description:
      'A friendly, relaxed salon atmosphere where every client feels welcome.',
    icon: 'heart',
  },
  {
    title: 'Sharp attention',
    description:
      'From hairline to finish, we focus on the details that make the look yours.',
    icon: 'eye',
  },
  {
    title: 'Premium space',
    description:
      'A comfortable, stylish environment designed for a calm grooming ritual.',
    icon: 'crown',
  },
]

export const TESTIMONIALS = [
  {
    quote:
      'A sharp, clean haircut and a calm, welcoming atmosphere. The attention to detail made the whole visit feel premium.',
    name: 'Sample client name',
    role: 'Sample review · Haircut',
  },
  {
    quote:
      'Great service from start to finish. The team listened to what I wanted and delivered a look that suited me perfectly.',
    name: 'Sample client name',
    role: 'Sample review · Fade',
  },
  {
    quote:
      'Professional, friendly and precise. WestZone feels like a proper grooming destination in Kigali.',
    name: 'Sample client name',
    role: 'Sample review · Grooming',
  },
]
