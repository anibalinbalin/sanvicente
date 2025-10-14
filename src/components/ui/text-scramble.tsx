'use client';

import * as React from 'react';
import { animate } from 'motion';
import { cn } from '@/lib/utils';

interface TextScrambleProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: string;
  scrambleOnClick?: boolean;
}

export function TextScramble({
  children,
  className,
  scrambleOnClick = true,
  ...props
}: TextScrambleProps) {
  const elementRef = React.useRef<HTMLSpanElement>(null);
  const [isScrambling, setIsScrambling] = React.useState(false);

  const scrambleText = React.useCallback(() => {
    if (!elementRef.current || isScrambling) return;

    setIsScrambling(true);
    const originalText = children;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let iterations = 0;

    const interval = setInterval(() => {
      elementRef.current!.innerText = originalText
        .split('')
        .map((char, index) => {
          if (char === ' ') return char;
          if (index < iterations) return originalText[index];
          return characters[Math.floor(Math.random() * characters.length)];
        })
        .join('');

      if (iterations >= originalText.length) {
        clearInterval(interval);
        setIsScrambling(false);
      }

      iterations += 1/3;
    }, 30);

    return () => clearInterval(interval);
  }, [children, isScrambling]);

  return (
    <span
      ref={elementRef}
      className={cn('cursor-pointer select-none font-mono', className)}
      onClick={scrambleOnClick ? scrambleText : undefined}
      {...props}
    >
      {'_'.repeat(children.length)}
    </span>
  );
} 