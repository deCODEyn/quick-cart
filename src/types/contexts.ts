import type { AddCartItemType, CartItemsType, ProductType } from '@/types';

export interface ShopContextInterface {
  addToCart: ({ id, size }: AddCartItemType) => void;
  getCartCount: () => number;
  handlerCloseSearchBar: () => void;
  setSearch: (value: string) => void;
  setShowSearch: (value: boolean) => void;
  cartItems: CartItemsType;
  currency: string;
  delivery_fee: number;
  products: ProductType[];
  search: string;
  showSearch: boolean;
}

export type ShopContextProviderType = {
  children: React.ReactNode;
};
