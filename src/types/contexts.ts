import type {
  CartItemsType,
  CartUpdateItemType,
  CartUpdateQuantityType,
  ProductType,
  UserRoleType,
  UserType,
} from '@/types';

export interface AuthContextInterface {
  authLogin: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; message: string }>;
  authLogout: () => Promise<boolean>;
  authRegister: (
    email: string,
    password: string,
    name: string
  ) => Promise<{ success: boolean; message: string }>;
  fetchUser: () => Promise<void>;
  isAuthReady: boolean;
  isLoading: boolean;
  user: UserType | null;
  userRole: UserRoleType | null;
}

export interface ShopContextInterface {
  addToCart: ({ id, size }: CartUpdateItemType) => void;
  clearCart: () => void;
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
  children: React.ReactElement;
};
