# Next.js Translation Setup Guide

## Project Structure

```
├── public/
│   └── locales/          # Translation files
│       ├── en/
│       │   └── common.json
│       └── es/
│           └── common.json
├── src/
│   ├── app/
│   │   ├── [lang]/      # Dynamic routes for languages
│   │   │   └── layout.tsx
│   │   │   └── page.tsx
│   │   └── i18n/        # i18n configuration
│   │       ├── locales.ts
│   │       ├── settings.ts
│   │       └── client.ts
│   └── components/
│       └── language-switcher.tsx
```

## Required Dependencies

Add these to your `package.json`:

```json
{
  "dependencies": {
    "i18next": "^23.7.11",
    "react-i18next": "^13.5.0",
    "i18next-browser-languagedetector": "^7.2.0",
    "i18next-http-backend": "^2.4.2"
  }
}
```

## Configuration Files

### 1. src/app/i18n/settings.ts
```typescript
export const fallbackLng = 'en'
export const languages = ['en', 'es']
export const defaultNS = 'common'

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}
```

### 2. src/app/i18n/client.ts
```typescript
'use client'

import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { getOptions } from './settings'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    ...getOptions(),
    lng: undefined,
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  })

export default i18next
```

### 3. src/components/language-switcher.tsx
```typescript
'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { languages } from '@/app/i18n/settings'

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (locale: string) => {
    const currentPath = pathname
    const newPath = currentPath.replace(/^\/[a-z]{2}/, `/${locale}`)
    router.push(newPath)
  }

  return (
    <div className="flex gap-2">
      {languages.map((lng) => (
        <button
          key={lng}
          onClick={() => switchLanguage(lng)}
          className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200"
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
```

### 4. Translation Files

Create these files in your public directory:

#### public/locales/en/common.json
```json
{
  "welcome": "Welcome",
  "description": "This is a multilingual website"
}
```

#### public/locales/es/common.json
```json
{
  "welcome": "Bienvenido",
  "description": "Este es un sitio web multilingüe"
}
```

## Usage Example

### src/app/[lang]/page.tsx
```typescript
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '@/components/language-switcher'

export default function Home() {
  const { t } = useTranslation()

  return (
    <main className="min-h-screen p-8">
      <LanguageSwitcher />
      <h1 className="text-4xl font-bold mt-8">{t('welcome')}</h1>
      <p className="mt-4">{t('description')}</p>
    </main>
  )
}
```

## Setup Instructions

1. Install the required dependencies:
   ```bash
   npm install i18next react-i18next i18next-browser-languagedetector i18next-http-backend
   # or
   yarn add i18next react-i18next i18next-browser-languagedetector i18next-http-backend
   ```

2. Create all the files as shown in the project structure above.

3. Update your `next.config.js` to include i18n configuration:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     i18n: {
       locales: ['en', 'es'],
       defaultLocale: 'en',
     },
   }

   module.exports = nextConfig
   ```

4. Add the translation files in the `public/locales` directory.

5. Implement the language switcher component and use it in your layout or pages.

## Key Features

- 🌐 Dynamic language switching
- 📁 Organized translation files
- 🔄 Automatic language detection
- ⚡️ Client-side language switching without page reload
- 🛣️ URL-based language routing (/en/*, /es/*)
- 🔍 TypeScript support for better development experience

## Best Practices

1. Keep translation keys organized and nested logically
2. Use namespaces to separate different sections of your app
3. Implement loading states for language switching
4. Add proper SEO meta tags for each language
5. Consider implementing language persistence using cookies or localStorage
6. Use TypeScript for better type safety with translation keys

## Notes

- The setup uses Next.js 13+ App Router
- Translations are loaded dynamically based on the current route
- Language detection follows this order: URL path > HTML tag > Cookie > Browser settings
- All components using translations must be client components (use 'use client' directive) 