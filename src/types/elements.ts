import type {
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';

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

export interface UseConfirmPasswordModalReturn<T = void> {
  closeModal: () => void;
  handleConfirm: (password: string) => Promise<T>;
  openModal: (action: ConfirmPasswordFn<T>) => void;
  showPasswordModal: boolean;
}

export interface UseSearchBarReturn {
  handleCloseSearchBar: () => void;
  setSearch: (value: string) => void;
  setShowSearch: (value: boolean) => void;
  search: string;
  showSearch: boolean;
}

export interface ValidatePasswordModalInterface {
  onClose: () => void;
  onConfirm: (password: string) => void;
}

export type ConfirmPasswordFn<T = void> = (password: string) => Promise<T> | T;

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

export type PasswordInputsType<TFormValues extends FieldValues> = {
  className: string;
  errors: FieldErrors<TFormValues>;
  needConfirm: boolean;
  register: UseFormRegister<TFormValues>;
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
