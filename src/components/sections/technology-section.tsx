'use client';

import { css } from 'ds/css';
import { stack } from 'ds/patterns';
import { WifiPassword } from '../ui/wifi-password';

interface TechnologySectionProps {
  title: string;
  wifiTitle: string;
  wifiDescription: string;
  wifiNetworks: string;
  audioTitle: string;
  audioDescription: string;
}

export function TechnologySection({
  title,
  wifiTitle,
  wifiDescription,
  wifiNetworks,
  audioTitle,
  audioDescription,
}: TechnologySectionProps) {
  return (
    <section className={stack({ gap: 'm' })}>
      <h2 className={css({ textStyle: 'base', lineHeight: 'tight', color: 'text2', fontSize: '1' })}>
        {title}
      </h2>
      <div className={stack({ gap: 'l' })}>
        <div className={stack({ gap: 's' })}>
          <h3 className={css({ textStyle: 'base', fontSize: '1', lineHeight: 'tight' })}>
            {wifiTitle}
          </h3>
          <p className={css({ textStyle: 'body' })}>{wifiDescription}</p>
          <p className={css({ textStyle: 'body' })}>{wifiNetworks}</p>
          <WifiPassword />
        </div>
        <div className={stack({ gap: 's' })}>
          <h3 className={css({ textStyle: 'base', fontSize: '1', lineHeight: 'tight' })}>
            {audioTitle}
          </h3>
          <p className={css({ textStyle: 'body' })}>{audioDescription}</p>
        </div>
      </div>
    </section>
  );
} 