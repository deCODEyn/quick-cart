import type { ProductType } from '@/types';

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

export type AddCartItemType = {
  id: string;
  size: string;
  name?: string;
};

export type CartItemSizeType = {
  [size: string]: number;
};

export type CartItemsType = {
  [itemId: string]: CartItemSizeType;
};

export type ShopContextProviderType = {
  children: React.ReactNode;
};
