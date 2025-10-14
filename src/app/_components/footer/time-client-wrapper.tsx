'use client';

import dynamic from 'next/dynamic';
import { flex } from 'ds/patterns';

const Time = dynamic(() => import('./time'), {
  ssr: false,
  loading: () => (
    <span
      className={flex({
        textStyle: 'base',
        fontSize: '1',
        lineHeight: 'tight',
        color: 'slate7',
      })}
    >
      00:00 XX
    </span>
  ),
});

export const TimeClientWrapper = () => {
  return <Time />;
}; 