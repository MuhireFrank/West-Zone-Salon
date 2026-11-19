const photo = (id, width = 900, height = 1100) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&h=${height}&q=85`

export const SERVICE_CATEGORIES = [
  {
    id: 'barber',
    label: 'Barber Services',
    description: 'Precision cuts, fades and grooming finished with intention.',
  },
  {
    id: 'nails',
    label: 'Nail Services',
    description: 'Polished care and creative detail for hands and feet.',
  },
  {
    id: 'beauty',
    label: 'Other Beauty Services',
    description: 'Owner-managed offerings — add confirmed services here.',
  },
]

export const SERVICES = [
  {
    id: 'normal-haircut',
    name: 'Normal Haircut',
    category: 'barber',
    description:
      'A clean, tailored haircut shaped around your features and personal style.',
    price: '3,000 RWF',
    image: photo('photo-1503951914875-452162b0f3f1'),
    confirmed: true,
    featured: true,
  },
  {
    id: 'haircut-shampoo',
    name: 'Haircut + Shampoo',
    category: 'barber',
    description:
      'A fresh cut paired with a professional wash for a complete, polished finish.',
    price: '5,000 RWF',
    image: photo('photo-1621605815971-fbc98d665033'),
    confirmed: true,
    featured: true,
  },
  {
    id: 'low-fade',
    name: 'Low Fade',
    category: 'barber',
    description:
      'A subtle, smooth fade that keeps the focus on natural hair texture.',
    price: null,
    image: photo('photo-1585747860715-2ba37e788b70'),
  },
  {
    id: 'mid-fade',
    name: 'Mid Fade',
    category: 'barber',
    description:
      'A balanced fade with a clean transition and versatile everyday finish.',
    price: null,
    image: photo('photo-1622286342621-4bd786c2447c'),
  },
  {
    id: 'high-fade',
    name: 'High Fade',
    category: 'barber',
    description:
      'A bold, crisp fade with a sharp contrast and strong visual definition.',
    price: null,
    image: photo('photo-1521590832167-7bcbfaa6381f'),
  },
  {
    id: 'skin-fade',
    name: 'Skin Fade',
    category: 'barber',
    description:
      'A close, seamless fade down to the skin for a refined, modern look.',
    price: null,
    image: photo('photo-1599351431202-1e0f0137899a'),
  },
  {
    id: 'taper-fade',
    name: 'Taper Fade',
    category: 'barber',
    description:
      'Neat shaping around the hairline and neckline with a clean, classic result.',
    price: null,
    image: photo('photo-1605497788044-5a32c7078486'),
  },
  {
    id: 'afro-haircut',
    name: 'Afro Haircut',
    category: 'barber',
    description:
      'Shape and maintenance that respects texture, volume and natural form.',
    price: null,
    image: photo('photo-1531123897727-8f129e1688ce'),
  },
  {
    id: 'hair-design',
    name: 'Hair Design',
    category: 'barber',
    description:
      'Creative line work and patterned detail for a distinctive personal look.',
    price: null,
    image: photo('photo-1560066984-138dadb4c035'),
  },
  {
    id: 'beard-trimming',
    name: 'Beard Trimming',
    category: 'barber',
    description:
      'Precise beard shaping, clean lines and a comfortable finishing touch.',
    price: null,
    image: photo('photo-1585747860715-2ba37e788b70', 900, 1100),
    featured: true,
  },
  {
    id: 'hair-washing',
    name: 'Hair Washing',
    category: 'barber',
    description:
      'A refreshing wash that leaves hair clean, manageable and ready to style.',
    price: null,
    image: photo('photo-1522337360788-8b13dee7a37e'),
  },
  {
    id: 'hair-styling',
    name: 'Hair Styling',
    category: 'barber',
    description:
      'Finished styling to help your cut look its best beyond the salon chair.',
    price: null,
    image: photo('photo-1599351431202-1e0f0137899a', 900, 1100),
  },
  {
    id: 'manicure',
    name: 'Manicure',
    category: 'nails',
    description:
      'Careful nail shaping, cuticle work and a polished finish for the hands.',
    price: null,
    image: photo('photo-1600948836101-f9ffda59d250'),
    featured: true,
  },
  {
    id: 'pedicure',
    name: 'Pedicure',
    category: 'nails',
    description:
      'Relaxing foot care with neat shaping and a clean, refreshed result.',
    price: null,
    image: photo('photo-1610992015732-2449b76344bc'),
  },
  {
    id: 'nail-art',
    name: 'Nail Art',
    category: 'nails',
    description:
      'Creative designs and fine detail that make your nails feel personal.',
    price: null,
    image: photo('photo-1607779097040-26e80aa78e66'),
  },
  {
    id: 'gel-nails',
    name: 'Gel Nails',
    category: 'nails',
    description:
      'A glossy, long-lasting finish with a smooth and elegant appearance.',
    price: null,
    image: photo('photo-1604654894610-df63bc536371'),
  },
  {
    id: 'beauty-service-01',
    name: 'Beauty Service 01',
    category: 'beauty',
    description:
      'Editable placeholder. Add the confirmed service name, description and price.',
    price: null,
    image: photo('photo-1522335789203-aabd1fc54bc9'),
    placeholder: true,
  },
  {
    id: 'beauty-service-02',
    name: 'Beauty Service 02',
    category: 'beauty',
    description:
      'Editable placeholder. Add the confirmed service name, description and price.',
    price: null,
    image: photo('photo-1516979187457-637abb4f9353'),
    placeholder: true,
  },
  {
    id: 'beauty-service-03',
    name: 'Beauty Service 03',
    category: 'beauty',
    description:
      'Editable placeholder. Add the confirmed service name, description and price.',
    price: null,
    image: photo('photo-1487412947147-5cebf100ffc2'),
    placeholder: true,
  },
]

export const FEATURED_SERVICES = SERVICES.filter((service) => service.featured)

export const CONFIRMED_PRICES = SERVICES.filter((service) => service.confirmed)

export const getServicesByCategory = (categoryId) =>
  SERVICES.filter((service) => service.category === categoryId)
