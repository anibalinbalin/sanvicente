import { ogTemplate } from './_utils/og-template';

export const runtime = 'edge';
export const alt =
  'San Vicente';

export default async function Image() {
  return await ogTemplate();
}
