import { IconProps } from '@/app/_utils/types/icon-props';
import * as React from 'react';

export const TranslateIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width='15'
        height='15'
        viewBox='0 0 15 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
        ref={forwardedRef}
      >
        <title>Translate Icon</title>
        <path
          d="M8.04 9.42l-1.59-1.57l.02-.02c.88-1.02 1.56-2.13 2.04-3.33H10V3.5H5.62V2.25H4.37v1.25H0V4.75h6.98A10.95 10.95 0 015.62 7.1a11.54 11.54 0 01-1.44-2.1H2.8c.46 1.02 1.08 1.98 1.86 2.85L1.48 10.9l.83.82 3.12-3.12 1.94 1.94.67-1.12zM11.56 6.25h-1.25L7.5 13.75h1.25l.7-1.88h2.97l.7 1.88h1.25L11.56 6.25zm-1.64 4.37l1.01-2.7 1.01 2.7h-2.02z"
          fill={color}
          fillRule='evenodd'
          clipRule='evenodd'
        />
      </svg>
    );
  },
);

TranslateIcon.displayName = 'TranslateIcon'; 