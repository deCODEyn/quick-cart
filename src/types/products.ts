import type { ProductFormData } from '@/admin/admin-types';
import type { ListProductsResponse, SingleProductResponse } from '@/types';

export interface ProductSizeSelectorInterface {
  onSelectSize: (size: string) => void;
  currentSize: string;
  sizes: string[];
}
export interface UseProductDataReturn {
  createProduct: (formData: FormData) => Promise<SingleProductResponse>;
  deleteProduct: (productId: string) => Promise<SingleProductResponse>;
  getProduct: (productId: string) => Promise<SingleProductResponse>;
  listProducts: () => Promise<ListProductsResponse>;
  updateProduct: (
    productId: string,
    data: Partial<ProductFormData>
  ) => Promise<SingleProductResponse>;
  isLoading: boolean;
}

export type ArrayProductsType = {
  products: ProductType[];
};

export type ProductDescriptionType = {
  description: string;
};

export type ProductInfoType = {
  product: ProductType;
};

export type ProductItemType = {
  id: string;
  image: string;
  name: string;
  price: number;
};

export type ProductType = {
  _id: string;
  bestseller: boolean;
  category: string;
  createdAt: string;
  description: string;
  name: string;
  image: string[];
  price: number;
  sizes: string[];
  subCategory: string;
};

export type RelatedProductsType = {
  category: string;
  productId: string;
  subCategory: string;
};
