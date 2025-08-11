import type {
  CartItemsType,
  CartUpdateItemType,
  CartUpdateQuantityType,
  ProductType,
} from '@/types';

export interface ShopContextInterface {
  addToCart: ({ id, size }: CartUpdateItemType) => void;
  deleteFromCart: ({ id, size }: CartUpdateItemType) => void;
  getCartAmount: () => number;
  getCartItemCount: () => number;
  getProducts: () => Promise<void>;
  updateQuantity: ({ id, size, quantity }: CartUpdateQuantityType) => void;
  cartItems: CartItemsType;
  products: ProductType[];
}

export interface UIContextInterface {
  handleCloseSearchBar: () => void;
  setSearch: (value: string) => void;
  setShowSearch: (value: boolean) => void;
  search: string;
  showSearch: boolean;
}

export type ContextProviderType = {
  children: React.ReactNode;
};
