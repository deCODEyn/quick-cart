import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import type { ChangePasswordType } from '@/schemas';

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

export interface ValidatePasswordModalInterface {
  onClose: () => void;
  onConfirm: (password: string) => void;
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
  children?: React.ReactNode;
  className?: string;
  href: string;
  label: string;
  state?: { from: string };
};

export type LoadingDataType = {
  data: string;
};

export type PasswordInputsType = {
  className: string;
  errors: FieldErrors<ChangePasswordType>;
  needConfirm: boolean;
  register: UseFormRegister<ChangePasswordType>;
};

export type SummaryRowType = {
  isTotal?: boolean;
  price: number;
  title: string;
};

export type TitleType = {
  as?: React.ElementType;
  span: string;
  title: string;
};
