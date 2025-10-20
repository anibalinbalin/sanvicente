import * as React from 'react';
import { ThemeImage } from '@/app/_components/theme-image';
import { css } from 'ds/css';

export default function PlanosPage() {
  return (
    <div className={css({
      position: 'relative',
      width: '100%',
      height: 'auto',
      overflow: 'hidden',
      rounded: 'card'
    })}>
      <ThemeImage
        src="/images/planos/plano_light.jpg"
        darkSrc="/images/planos/plano_dark.jpg"
        alt="Floor plan"
        width={1200}
        height={800}
        style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
        quality={85}
      />
    </div>
  );
}
