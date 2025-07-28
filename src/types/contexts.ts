import type { ProductType } from '@/types';

export type ShopContextProviderProps = {
  children: React.ReactNode;
};

export type ShopContextType = {
  currency: string;
  delivery_fee: number;
  products: ProductType[];
};
