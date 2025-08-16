import type {
  CartItemsType,
  CartUpdateItemType,
  CartUpdateQuantityType,
  ProductType,
  UserRoleType,
} from '@/types';

export interface AuthContextInterface {
  authLogin: (email: string, password: string) => Promise<boolean>;
  authLogout: () => Promise<boolean>;
  authRegister: (
    email: string,
    password: string,
    name: string
  ) => Promise<boolean>;
  isLoading: boolean;
  userRole: UserRoleType | null;
}

export interface ShopContextInterface {
  addToCart: ({ id, size }: CartUpdateItemType) => void;
  deleteFromCart: ({ id, size }: CartUpdateItemType) => void;
  getCartTotalAmount: () => number;
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
