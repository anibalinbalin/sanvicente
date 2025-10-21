export const PATHS = {
  github: '#',
  twitter: '#',
  cv: '#',
  breakline: '#',
  email: 'mailto:laurafuentesaro@gmail.com',
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
