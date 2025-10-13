import { css } from 'ds/css';
import { flex, hstack, stack } from 'ds/patterns';
import * as React from 'react';
import { Weather, WeatherError, WeatherLoading } from './weather';
import { ErrorBoundary } from 'react-error-boundary';
import { TimeClientWrapper } from './time-client-wrapper';

export const Footer = () => {
  return (
    <footer
      className={css({
        pt: '3xl',
        pb: { base: 'm', bp1: 'xl' },
        gridArea: 'footer',
      })}
    >
      <div className={hstack({ justify: 'center', gap: '3xs', pb: '2xl' })}>
        <div className={dot} />
        <div className={dot} />
        <div className={dot} />
      </div>
      <div className={footerWrapper}>
        <div
          className={stack({
            align: 'flex-start',
            gap: '2xs',
            textAlign: 'left',
          })}
        >
          <TimeClientWrapper />
          <span
            className={css({
              textStyle: 'base',
              lineHeight: 'tight',
              fontSize: '1',
              whiteSpace: 'nowrap',
            })}
          >
            Maldonado, Uruguay
          </span>
        </div>
        <div
          className={flex({
            align: 'center',
            gap: '3xs',
            justifySelf: { base: 'end', bp1: 'start' },
          })}
        >
          <ErrorBoundary fallback={<WeatherError />}>
            <React.Suspense fallback={<WeatherLoading />}>
              <Weather />
            </React.Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </footer>
  );
};

const dot = css({
  w: 3,
  h: 3,
  rounded: 'full',
  bgColor: 'slate8',
});

const footerWrapper = css({
  display: 'grid',
  gridTemplateColumns: { base: '1fr 1fr', bp1: '1fr auto' },
  gap: { base: 'xs', bp1: 'xl' },
  alignItems: 'center',
});
