'use client';

import dynamic from 'next/dynamic';
import { css } from 'ds/css';

const MapComponent = dynamic(() => import('@/app/_components/map-component'), {
  ssr: false,
  loading: () => (
    <div className={css({ w: 'full', h: '400px', bgColor: 'slate8', rounded: 'card' })} />
  ),
});

export const MapClientWrapper = () => {
  return (
    <div className={css({ w: 'full', minH: '400px' })}>
      <MapComponent />
    </div>
  );
}; 