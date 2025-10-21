export const PATHS = {
  github: 'https://github.com/h-jennings',
  twitter: 'https://twitter.com/jennings_hunter',
  cv: 'https://read.cv/hunterjennings',
  breakline: 'https://breakline.org/',
  email: 'mailto:jenningsdhunter@gmail.com',
  base: process.env.NEXT_PUBLIC_URL ?? 'https://www.hunterjennings.dev',
  home: '/',
  writing: '/writing',
  now: '/now',
  images: '/images',
  all: '/all',
  house: '/house',
  amenities: '/amenities',
  planos: '/planos',
  gallery: '#gallery',
  project: (slug: string, id?: string) => id ? `/images/${slug}/${id}` : `/images/${slug}`
} as const;
