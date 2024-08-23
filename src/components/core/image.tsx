import * as React from 'react';

export type ImageProps = Omit<
  React.JSX.IntrinsicElements['img'],
  'src' | 'srcSet' | 'ref' | 'alt' | 'width' | 'height' | 'loading'
> & {
  alt: string;
  src: string;
  fill?: boolean;
  width?: number | `${number}`;
  height?: number | `${number}`;
  quality?: number | `${number}`;
  priority?: boolean;
  style?: React.CSSProperties;
};

/**
 * This component has been implemented to keep the consistency between Next.js and Vite version. It does not have any
 * of the features of the Next.js Image component, such as lazy loading, priority loading, and so on.
 */
export function Image({ src, alt, fill, height, style, width }: ImageProps): React.JSX.Element {
  let finalStyle = { ...style };

  if (fill) {
    finalStyle = {
      height: '100%',
      left: 0,
      objectFit: 'cover',
      position: 'absolute',
      top: 0,
      width: '100%',
      ...finalStyle,
    };
  }

  return <img alt={alt} height={height} src={src} style={finalStyle} width={width} />;
}
