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
  onChange: (value: string) => void;
  className?: string;
  label?: string;
  options: string[];
  value: string;
}

export interface UseProductFormReturn {
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
    e: React.FormEvent<HTMLFormElement>
  ) => Promise<{ success: boolean; message: string }>;
  images: ImageFiles;
  isLoading: boolean;
  productData: ProductFormData;
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

export type ProductFormData = {
  bestseller: boolean;
  category: string;
  description: string;
  name: string;
  price: number | string;
  sizes: string[];
  subCategory: string;
};
