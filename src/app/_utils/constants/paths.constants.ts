export const PATHS = {
  github: '#',
  twitter: '#',
  cv: '#',
  breakline: '#',
  email: 'mailto:laurafuentesaro@gmail.com',
  whatsapp: 'https://wa.me/59899108220',
  base: process.env.NEXT_PUBLIC_URL ?? 'https://www.sanvicente.house',
  home: '/',
  writing: '/writing',
  now: '/now',
  images: '/images',
  all: '/all',
  house: '/house',
  planos: '/planos',
  gallery: '#gallery',
  project: (slug: string, id?: string) => id ? `/images/${slug}/${id}` : `/images/${slug}`
} as const;
