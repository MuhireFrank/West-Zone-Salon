const photo = (id, width = 1000, height = 1250) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&h=${height}&q=85`

export const GALLERY_CATEGORIES = [
  'All',
  'Haircuts',
  'Low Fades',
  'Taper Fades',
  'Afro Hairstyles',
  'Beard Grooming',
  'Hair Designs',
  'Nail Services',
  'Other Beauty Services',
]

export const GALLERY_ITEMS = [
  {
    id: 'g1',
    category: 'Haircuts',
    title: 'Classic sharp cut',
    src: photo('photo-1503951914875-452162b0f3f1'),
    authenticity: 'Illustrative image',
  },
  {
    id: 'g2',
    category: 'Low Fades',
    title: 'Clean low fade',
    src: photo('photo-1585747860715-2ba37e788b70'),
    authenticity: 'Illustrative image',
  },
  {
    id: 'g3',
    category: 'Taper Fades',
    title: 'Precise taper',
    src: photo('photo-1622286342621-4bd786c2447c'),
    authenticity: 'Illustrative image',
  },
  {
    id: 'g4',
    category: 'Haircuts',
    title: 'Modern finish',
    src: photo('photo-1621605815971-fbc98d665033'),
    authenticity: 'Illustrative image',
  },
  {
    id: 'g5',
    category: 'Afro Hairstyles',
    title: 'Natural texture',
    src: photo('photo-1531123897727-8f129e1688ce'),
    authenticity: 'Illustrative image',
  },
  {
    id: 'g6',
    category: 'Beard Grooming',
    title: 'Defined beard',
    src: photo('photo-1503951914875-452162b0f3f1', 1000, 1250),
    authenticity: 'Illustrative image',
  },
  {
    id: 'g7',
    category: 'Hair Designs',
    title: 'Creative line work',
    src: photo('photo-1599351431202-1e0f0137899a'),
    authenticity: 'Illustrative image',
  },
  {
    id: 'g8',
    category: 'Nail Services',
    title: 'Polished nails',
    src: photo('photo-1600948836101-f9ffda59d250'),
    authenticity: 'Illustrative image',
  },
  {
    id: 'g9',
    category: 'Other Beauty Services',
    title: 'Beauty detail',
    src: photo('photo-1522335789203-aabd1fc54bc9'),
    authenticity: 'Illustrative image',
  },
  {
    id: 'g10',
    category: 'Low Fades',
    title: 'Soft transition',
    src: photo('photo-1521590832167-7bcbfaa6381f'),
    authenticity: 'Illustrative image',
  },
  {
    id: 'g11',
    category: 'Haircuts',
    title: 'Salon portrait',
    src: photo('photo-1605497788044-5a32c7078486'),
    authenticity: 'Illustrative image',
  },
  {
    id: 'g12',
    category: 'Nail Services',
    title: 'Nail art detail',
    src: photo('photo-1607779097040-26e80aa78e66'),
    authenticity: 'Illustrative image',
  },
  {
    id: 'g13',
    category: 'Taper Fades',
    title: 'Clean edges',
    src: photo('photo-1560066984-138dadb4c035'),
    authenticity: 'Illustrative image',
  },
  {
    id: 'g14',
    category: 'Beard Grooming',
    title: 'Grooming ritual',
    src: photo('photo-1585747860715-2ba37e788b70', 1000, 1250),
    authenticity: 'Illustrative image',
  },
  {
    id: 'g15',
    category: 'Other Beauty Services',
    title: 'Relaxed beauty care',
    src: photo('photo-1516979187457-637abb4f9353'),
    authenticity: 'Illustrative image',
  },
  {
    id: 'g16',
    category: 'Hair Designs',
    title: 'Statement style',
    src: photo('photo-1522337360788-8b13dee7a37e'),
    authenticity: 'Illustrative image',
  },
]

export const GALLERY_IMAGES = {
  hero: photo('photo-1503951914875-452162b0f3f1', 1800, 1200),
  welcome: photo('photo-1521590832167-7bcbfaa6381f', 1200, 1500),
  aboutMain: photo('photo-1560066984-138dadb4c035', 1200, 1500),
  aboutSecondary: photo('photo-1522337360788-8b13dee7a37e', 1000, 800),
  cta: photo('photo-1585747860715-2ba37e788b70', 1800, 1000),
}
