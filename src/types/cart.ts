import type { ProductType } from './products';

export interface UseShopCartReturn {
  addToCart: ({ id, size }: CartUpdateItemType) => void;
  deleteFromCart: ({ id, size }: CartUpdateItemType) => void;
  getCartAmount: () => number;
  getCartItemCount: () => number;
  updateQuantity: ({ id, size, quantity }: CartUpdateQuantityType) => void;
  cartItems: CartItemsType;
}

export type AddCartItemType = {
  id: string;
  size: string;
  name: string;
};

export type CartDisplayItem = {
  id: string;
  size: string;
  quantity: number;
};

export type CartItemCardType = {
  item: {
    id: string;
    size: string;
    quantity: number;
  };
  product: ProductType;
};

export type CartItemSizeType = {
  [size: string]: number;
};

export type CartItemsType = {
  [itemId: string]: CartItemSizeType;
};

export type CartSummaryRowType = {
  title: string;
  price: number;
  isTotal?: boolean;
};

export type CartUpdateItemType = {
  id: string;
  size: string;
};

export type CartUpdateQuantityType = CartUpdateItemType & {
  quantity: number;
};
