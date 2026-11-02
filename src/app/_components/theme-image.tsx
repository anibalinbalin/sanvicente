import Image, { ImageProps } from 'next/image';
import { css, cx } from 'ds/css';
import dims from '@/image-dims.json';

type ThemeImageProps = Omit<ImageProps, 'src'> & {
  src: string;
  darkSrc?: string;
};

// The theme class on <html> is set before first paint, so CSS can hide the
// inactive version. Lazy images that are display:none are never downloaded,
// so each visitor fetches only the photo for the theme they see.
const hideInDark = css({ _dark: { display: 'none' } });
const hideInLight = css({ _light: { display: 'none' } });

// Use the file's real size so the box matches the photo before it loads.
const sized = (src: string, props: Omit<ImageProps, 'src'>) => {
  const d = (dims as Record<string, [number, number]>)[src];
  return d && !props.fill ? { ...props, width: d[0], height: d[1] } : props;
};

export const ThemeImage = ({ src, darkSrc, className, priority, ...props }: ThemeImageProps) => {
  // Same as before: with no night photo, nothing is shown in dark mode.
  if (!darkSrc) {
    return <Image src={src} priority={priority} className={cx(className, hideInDark)} {...sized(src, props)} />;
  }

  // Both versions are in the markup, so neither can be eager or preloaded
  // without downloading both. Above-the-fold photos get a high fetch priority.
  const shared = {
    ...props,
    loading: 'lazy' as const,
    fetchPriority: priority ? ('high' as const) : props.fetchPriority,
  };
  return (
    <>
      <Image src={src} className={cx(className, hideInDark)} {...sized(src, shared)} />
      <Image src={darkSrc} className={cx(className, hideInLight)} {...sized(darkSrc, shared)} />
    </>
  );
};
