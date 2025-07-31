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
  handlerCloseSearchBar: () => void;
  setSearch: (value: string) => void;
  setShowSearch: (value: boolean) => void;
  updateQuantity: ({ id, size, quantity }: CartUpdateQuantityType) => void;
  cartItems: CartItemsType;
  deliveryFee: number;
  products: ProductType[];
  search: string;
  showSearch: boolean;
}

export type ShopContextProviderType = {
  children: React.ReactNode;
};
