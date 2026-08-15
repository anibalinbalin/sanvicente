'use client';
import Image from 'next/image';
import { ImageContainer } from '@/app/_components/image-container';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { MDX_ELEMENTS } from '@/app/_utils/constants/mdx.constants';

interface SlugPageMDXProps {
  code: string;
}

export const SlugPageMDX = ({ code: _code }: SlugPageMDXProps) => {
  return null;
};

const MDX_COMPONENTS = {
  Image,
  ImageContainer,
  AspectRatio,
} as const;
