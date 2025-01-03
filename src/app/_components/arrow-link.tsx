import { css, cx } from 'ds/css';
import { hstack } from 'ds/patterns';
import { link } from 'ds/recipes';
import { token } from 'ds/tokens';
import Link from 'next/link';
import ArrowRightIcon from './icons/ArrowRightIcon';
import ArrowLeftIcon from './icons/ArrowLeftIcon';

interface ArrowLinkProps {
  href: string;
  children: React.ReactNode;
  direction?: 'left' | 'right';
}

export const ArrowLink = ({ href, children, direction = 'right' }: ArrowLinkProps) => {
  const Arrow = direction === 'left' ? ArrowLeftIcon : ArrowRightIcon;
  
  return (
    <div className={hstack()}>
      {direction === 'left' && (
        <Arrow aria-hidden color={token('colors.slate11')} />
      )}
      <Link
        href={href}
        className={cx(
          link({
            color: 'secondary',
          }),
          css({ fontSize: '1', lineHeight: 'tight' }),
        )}
        style={{ display: 'block' }}
      >
        {children}
      </Link>
      {direction === 'right' && (
        <Arrow aria-hidden color={token('colors.slate11')} />
      )}
    </div>
  );
}; 