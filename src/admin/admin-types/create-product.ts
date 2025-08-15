import type { ProductType } from '@/types';

export interface ImageUploaderTypes {
  handleImageChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    imageKey: keyof ImageFiles
  ) => void;
  images: ImageFiles;
}

export interface SizesSelectorType {
  handleSizeToggle: (size: string) => void;
  selectedSizes: string[];
}

export interface SelectInputType {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label: string;
  name: string;
  options: string[];
  value: string;
}

export interface UseProductFormReturn {
  handleBestsellerChange: () => void;
  handleImageChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    imageKey: keyof ImageFiles
  ) => void;
  handleInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  handleSizeToggle: (size: string) => void;
  onSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    navigate?: (to: string) => void
  ) => Promise<void>;
  images: ImageFiles;
  isLoading: boolean;
  requestError: string | null;
  productData: ProductData;
}

export type ProductFormType = {
  initialData?: ProductType;
  isEditMode: boolean;
};

export type ImageFiles = {
  image1: File | null;
  image2: File | null;
  image3: File | null;
  image4: File | null;
};

export type ProductData = {
  bestseller: boolean;
  category: string;
  description: string;
  name: string;
  price: number | string;
  sizes: string[];
  subCategory: string;
};
