'use client';

import { css } from 'ds/css';
import { TextScramble } from './text-scramble';

export function WifiPassword() {
  return (
    <div className={css({ textStyle: 'body', display: 'flex', alignItems: 'center', gap: '2' })}>
      <span>Password for both:&nbsp;</span>
      <TextScramble>antonpirulero</TextScramble>
    </div>
  );
} 