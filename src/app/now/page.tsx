import { PATHS } from '@/app/_utils/constants/paths.constants';
import { Metadata } from 'next';
import {
  ProseLayout,
  ProseLayoutContent,
  ProseLayoutHeader,
} from '../_components/prose-layout';
import { css } from 'ds/css';

const title = 'Now';
const description = 'A snapshot of my life via short updates.';
const url = new URL(`${PATHS.base}${PATHS.now}`);

export const metadata: Metadata = {
  title,
  description,
  robots: 'follow, index',
  openGraph: {
    url,
    type: 'website',
    locale: 'en_US',
    title,
    description,
  },
};

export default function Now() {
  return (
    <ProseLayout>
      <ProseLayoutHeader
        headline={title}
        description={description}
        backTo={{
          hasLink: true,
          content: 'Back to home',
          href: PATHS.home,
        }}
      />
      <ProseLayoutContent>
        <div className={css({ display: 'flex', flexDirection: 'column', gap: '6' })}>
          <p>Coming soon...</p>
        </div>
      </ProseLayoutContent>
    </ProseLayout>
  );
}
