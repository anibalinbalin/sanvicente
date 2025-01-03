# Language Switcher Icon Component Guide

## Component Implementation

### 1. Install Required Dependencies
```bash
npm install @heroicons/react lucide-react
# or
yarn add @heroicons/react lucide-react
```

### 2. Create Language Switcher Component

Create a new file `src/components/language-switcher.tsx`:

```typescript
'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { Globe } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

interface Language {
  code: string
  name: string
  flag: string
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' }
]

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const switchLanguage = (locale: string) => {
    const currentPath = pathname
    const newPath = currentPath.replace(/^\/[a-z]{2}/, `/${locale}`)
    router.push(newPath)
    setIsOpen(false)
  }

  // Get current language
  const currentLang = languages.find(
    lang => pathname?.startsWith(`/${lang.code}`)
  ) || languages[0]

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Language Icon Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors duration-200"
        aria-label="Select language"
      >
        <Globe className="w-5 h-5 text-gray-600" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => switchLanguage(language.code)}
                className={`
                  w-full px-4 py-2 text-sm text-left flex items-center space-x-3
                  ${currentLang.code === language.code ? 'bg-gray-100' : 'hover:bg-gray-50'}
                `}
                role="menuitem"
              >
                <span className="text-xl">{language.flag}</span>
                <span className="flex-1">{language.name}</span>
                {currentLang.code === language.code && (
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
```

## Features

- 🌐 Clean globe icon from Lucide React
- 🔽 Dropdown menu with language options
- 🎯 Current language indicator
- 🚩 Language flags and names
- 💫 Smooth hover animations
- 📱 Mobile-friendly design
- ♿️ Accessibility support

## Usage

Add the component to your layout or navigation:

```typescript
import LanguageSwitcher from '@/components/language-switcher'

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between p-4">
      {/* Other navigation items */}
      <LanguageSwitcher />
    </nav>
  )
}
```

## Styling Customization

### 1. Change Icon Style
```typescript
// Use a different icon size
<Globe className="w-6 h-6 text-gray-600" />

// Change icon color
<Globe className="w-5 h-5 text-blue-500" />

// Add icon animation
<Globe className="w-5 h-5 text-gray-600 hover:rotate-180 transition-transform duration-300" />
```

### 2. Modify Dropdown Style
```typescript
// Add gradient background
<div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gradient-to-b from-white to-gray-50">

// Add border
<div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white border border-gray-200">

// Add animation
<div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white animate-fadeIn">
```

### 3. Custom Button Styles
```typescript
// Rounded with border
className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 hover:border-gray-300"

// Pill shape
className="flex items-center justify-center px-4 h-10 rounded-full bg-gray-100 hover:bg-gray-200"

// With background
className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-100"
```

## Notes

- Uses Tailwind CSS for styling
- Includes click-outside handling
- Supports keyboard navigation
- Maintains current language selection
- Smooth transitions and hover effects
- Fully responsive design 