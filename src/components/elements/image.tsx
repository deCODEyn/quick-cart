/** biome-ignore-all lint/performance/noImgElement: Image Component. Process all images in the application. */
import type { ImageInterface } from '@/types';

export function Image({
  src,
  alt,
  width,
  height,
  lazy = true,
  objectFit = 'cover',
  objectPosition = 'center',
  sizes = '100vw',
  className,
  style,
  ...rest
}: ImageInterface) {
  const finalStyle = {
    ...style,
    objectFit,
    objectPosition,
  };

  return (
    <img
      alt={alt}
      className={className}
      height={height}
      loading={lazy ? 'lazy' : 'eager'}
      sizes={sizes}
      src={src}
      style={finalStyle}
      width={width}
      {...rest}
    />
  );
}
