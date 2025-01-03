'use client';

import Image, { ImageProps } from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

type ThemeImageProps = Omit<ImageProps, 'src'> & {
  src: string;
  darkSrc?: string;
};

export const ThemeImage = ({ src, darkSrc, ...props }: ThemeImageProps) => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Image src={src} {...props} />;
  }

  const isDark = theme === 'dark' || resolvedTheme === 'dark';
  const imageSrc = isDark && darkSrc ? darkSrc : src;

  return (
    <Image
      src={imageSrc}
      {...props}
      key={`${imageSrc}-${isDark ? 'dark' : 'light'}`}
    />
  );
}; 