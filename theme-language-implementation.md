# Language Switcher Button Implementation

## Dependencies

```json
{
  "dependencies": {
    "tailwindcss": "^3.0.0"
  }
}
```

## Component Implementation

```tsx
// src/components/language-switcher.tsx
const LanguageSwitcher = () => {
  return (
    <button
      onClick={() => {/* your language switch logic */}}
      className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
      aria-label="Change language"
    >
      <TranslateIcon />
    </button>
  );
};
```

## Icon Component

```tsx
// src/components/icons/translate-icon.tsx
export const TranslateIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m5 8 6 6" />
    <path d="m4 14 6-6 2-3" />
    <path d="M2 5h12" />
    <path d="M7 2h1" />
    <path d="m22 22-5-10-5 10" />
    <path d="M14 18h6" />
  </svg>
);
```

## Styling Features

The button includes:
- Circular shape with fixed dimensions (40x40px)
- Hover state changes background color:
  - Light mode: Changes to light gray (slate-100)
  - Dark mode: Changes to dark gray (slate-800)
- Smooth color transition animation (200ms)
- Accessible button with aria-label
- Icon centered using Flexbox

## CSS Classes Explained

```css
.flex - Display flex
.items-center - Align items vertically
.justify-center - Center content horizontally
.w-10 - Width: 2.5rem (40px)
.h-10 - Height: 2.5rem (40px)
.rounded-full - Border-radius: 9999px
.hover:bg-slate-100 - Light gray background on hover (light mode)
.dark:hover:bg-slate-800 - Dark gray background on hover (dark mode)
.transition-colors - Smooth color transitions
.duration-200 - Transition duration: 200ms
```

## Usage

```tsx
import { LanguageSwitcher } from './components/language-switcher';

export default function Navigation() {
  return (
    <nav className="flex items-center gap-4">
      {/* Other navigation items */}
      <LanguageSwitcher />
    </nav>
  );
} 