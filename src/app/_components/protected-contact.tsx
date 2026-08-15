'use client';

import { useState, useCallback } from 'react';

interface ProtectedContactProps {
  type: 'whatsapp' | 'email';
  className?: string;
}

const DATA = {
  whatsapp: {
    d: 'KzU5OCA5OTEwODIyMA==',
    h: 'aHR0cHM6Ly93YS5tZS81OTg5OTEwODIyMA==',
  },
  email: {
    d: 'bGF1cmFmdWVudGVzYXJvQGdtYWlsLmNvbQ==',
    h: 'bWFpbHRvOmxhdXJhZnVlbnRlc2Fyb0BnbWFpbC5jb20=',
  },
} as const;

function decode(s: string): string {
  return atob(s);
}

export function ProtectedContact({ type, className }: ProtectedContactProps) {
  const [revealed, setRevealed] = useState(false);
  const entry = DATA[type];

  const handleReveal = useCallback(() => {
    setRevealed(true);
  }, []);

  if (!revealed) {
    return (
      <button
        type="button"
        onClick={handleReveal}
        className={className}
        aria-label={type === 'whatsapp' ? 'Show phone number' : 'Show email address'}
      >
        {type === 'whatsapp' ? 'Click to reveal' : 'Click to reveal'}
      </button>
    );
  }

  const display = decode(entry.d);
  const href = decode(entry.h);
  const isEmail = type === 'email';

  return (
    <a
      className={className}
      href={href}
      target={isEmail ? undefined : '_blank'}
      rel={isEmail ? undefined : 'noopener noreferrer'}
    >
      {display}
    </a>
  );
}
