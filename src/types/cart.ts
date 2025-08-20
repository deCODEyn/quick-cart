import type { ProductType } from '@/types';

export interface UseShopCartReturn {
  addToCart: ({ id, size }: CartUpdateItemType) => void;
  clearCart: () => void;
  deleteFromCart: ({ id, size }: CartUpdateItemType) => void;
  getCart: () => void;
  getCartAmount: (products: ProductType[]) => number;
  getCartItemCount: () => number;
  updateQuantity: ({ id, size, quantity }: CartUpdateQuantityType) => void;
  resetCart: () => void;
  cartItems: CartItemsType;
}

export type AddCartItemType = {
  id: string;
  name: string;
  size: string;
};

export type CartDisplayItem = {
  id: string;
  quantity: number;
  size: string;
};

export type CartItemCardType = {
  item: CartDisplayItem;
  product: ProductType;
};

export type CartItemSizeType = {
  [size: string]: number;
};

export type CartItemsType = {
  [itemId: string]: CartItemSizeType;
};

export type CartUpdateItemType = {
  id: string;
  size: string;
};

export type CartUpdateQuantityType = CartUpdateItemType & {
  quantity: number;
};
