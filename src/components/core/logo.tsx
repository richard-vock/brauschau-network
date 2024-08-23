'use client';

import * as React from 'react';
import Box from '@mui/joy/Box';
import { useColorScheme } from '@mui/joy/styles';

import { Image } from '@/components/core/image';
import { NoSsr } from '@/components/core/no-ssr';

const HEIGHT = 60;
const WIDTH = 60;

type Color = 'dark' | 'light';

export interface LogoProps {
  color?: Color;
  height?: number;
  width?: number;
}

export function Logo({ color = 'dark', height = HEIGHT, width = WIDTH }: LogoProps): React.JSX.Element {
  const url = color === 'light' ? '/assets/logo.svg' : '/assets/logo--dark.svg';

  return <Image alt="logo" height={height} src={url} width={width} />;
}

export interface DynamicLogoProps {
  colorDark?: Color;
  colorLight?: Color;
  height?: number;
  width?: number;
}

export function DynamicLogo({
  colorDark = 'light',
  colorLight = 'dark',
  height = HEIGHT,
  width = WIDTH,
  ...props
}: DynamicLogoProps): React.JSX.Element {
  const { colorScheme } = useColorScheme();
  const color = colorScheme === 'dark' ? colorDark : colorLight;

  return (
    <NoSsr fallback={<Box sx={{ height: `${height}px`, width: `${width}px` }} />}>
      <Logo color={color} height={height} width={width} {...props} />
    </NoSsr>
  );
}
