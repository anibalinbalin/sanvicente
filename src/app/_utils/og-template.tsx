import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

const getSansSerifFont = async () => {
  const res = await fetch(
    new URL('../_assets/fonts/basiercircle-regular.otf', import.meta.url),
  );
  const data = await res.arrayBuffer();
  return data;
};

const getSerifFont = async () => {
  const res = await fetch(
    new URL(
      '../_assets/fonts/untitled-serif-regular-italic.otf',
      import.meta.url,
    ),
  );
  const data = await res.arrayBuffer();
  return data;
};

const DEFAULT_TITLE = 'San Vicente';
const DEFAULT_DESCRIPTION =
  'San Vicente';

export const ogTemplate = async ({
  title,
  sub,
}: {
  title?: string;
  sub?: string;
} = {}) => {
  return new ImageResponse(
    (
      <div
        tw='flex bg-black h-full justify-center w-full'
        style={{ padding: 60 }}
      >
        <span
          tw='absolute text-white'
          style={{
            fontSize: 30,
            top: 60,
            lineHeight: 1,
            left: 60,
            fontFamily: 'Basier',
          }}
        >
          H—J
        </span>
        <div
          tw='flex h-full w-full flex-col justify-center'
          style={{
            maxWidth: 700,
          }}
        >
          <div tw='flex'>
            <h1
              tw='text-white p-0 m-0'
              style={{
                lineHeight: 1,
                fontFamily: 'Untitled',
                fontSize: 40,
                fontStyle: 'italic',
                marginBottom: 40,
              }}
            >
              {title ?? DEFAULT_TITLE}
            </h1>
          </div>
          <div tw='flex'>
            <p
              tw='text-gray-400 p-0 m-0'
              style={{
                fontFamily: 'Basier',
                lineHeight: 1.33,
                fontSize: 30,
                fontStyle: 'normal',
              }}
            >
              {sub ?? DEFAULT_DESCRIPTION}
            </p>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Untitled',
          data: await getSerifFont(),
          weight: 400,
          style: 'italic',
        },
        {
          name: 'Basier',
          data: await getSansSerifFont(),
          weight: 400,
          style: 'normal',
        },
      ],
    },
  );
};
