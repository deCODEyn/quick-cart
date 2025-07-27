import type { ProductsType } from '@/types';

export type ShopContextProviderProps = {
  children: React.ReactNode;
};

export type ShopContextType = {
  products: ProductsType[];
  currency: string;
  delivery_fee: number;
};
