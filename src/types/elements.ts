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

export interface UseSearchBarReturn {
  handleCloseSearchBar: () => void;
  setSearch: (value: string) => void;
  setShowSearch: (value: boolean) => void;
  search: string;
  showSearch: boolean;
}

export type DisplayPriceType = {
  price: number;
};

export type LinkButtonType = {
  href: string;
  label: string;
  className?: string;
};

export type TitleType = {
  span: string;
  title: string;
};
