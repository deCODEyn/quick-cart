import type { ProductType } from '@/types';

export type ShopContextProviderType = {
  children: React.ReactNode;
};

export type ShopContextType = {
  currency: string;
  delivery_fee: number;
  products: ProductType[];
  search: string;
  setSearch: (value: string) => void;
  setShowSearch: (value: boolean) => void;
  showSearch: boolean;
};
