import { NextFont } from 'next/dist/compiled/@next/font';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const basierCircle = localFont({
  src: [
    {
      path: '../_assets/fonts/basiercircle-regular-webfont.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../_assets/fonts/basiercircle-bold-webfont.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-sans',
});

export const untitledSerif = localFont({
  src: [
    {
      path: '../_assets/fonts/untitled-serif-regular-italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../_assets/fonts/untitled-serif-bold-italic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-serif',
});

export const jetbrainsMono = localFont({
  src: [
    {
      path: '../_assets/fonts/jetbrainsmono-regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-mono',
});
