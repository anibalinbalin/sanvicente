import { NotFoundContent } from '@/app/_components/not-found-content';
import Link from 'next/link';
import { link } from 'ds/recipes';
import { css, cx } from 'ds/css';
import { PATHS } from '@/app/_utils/constants/paths.constants';

export default function NotFound() {
  return (
    <NotFoundContent title="Gallery Not Found">
      <Link
        href={PATHS.home}
        className={cx(
          link({ color: 'accent' }),
          css({ fontSize: { base: '1', bp2: '2' } }),
        )}
      >
        Back to homepage
      </Link>
    </NotFoundContent>
  );
} 