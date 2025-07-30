export interface UseShopCartReturn {
  addToCart: ({ id, size }: AddCartItemType) => void;
  getCartCount: () => number;
  cartItems: CartItemsType;
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
