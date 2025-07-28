export interface ImageInterface
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  height?: number | string;
  lazy?: boolean;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
  sizes?: string;
  src: string;
  width?: number | string;
}

export type TitleType = {
  span: string;
  title: string;
};
