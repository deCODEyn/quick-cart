import { createContext } from 'react';
import { useSearchBar, useShopCart } from '@/hooks';
import type {
  CartItemsType,
  ShopContextInterface,
  ShopContextProviderType,
} from '@/types';
import { products } from '@/utils/assets';

const initialCartItems: CartItemsType = {};

export const ShopContext = createContext<ShopContextInterface>({
  products,
  deliveryFee: 0,
  search: '',
  setSearch: () => {
    /* default empty function */
  },
  setShowSearch: () => {
    /* default empty function */
  },
  showSearch: true,
  cartItems: initialCartItems,
  addToCart: () => {
    /* default empty function */
  },
  getCartItemCount: () => 0,
  handlerCloseSearchBar: () => {
    /* default empty function */
  },
  updateQuantity: () => {
    /* default empty function */
  },
  deleteFromCart() {
    /* default empty function */
  },
  getCartAmount: () => 0,
});

const ShopContextProvider = ({ children }: ShopContextProviderType) => {
  const {
    cartItems,
    addToCart,
    deleteFromCart,
    updateQuantity,
    getCartItemCount,
    getCartAmount,
  } = useShopCart();
  const {
    search,
    setSearch,
    showSearch,
    setShowSearch,
    handlerCloseSearchBar,
  } = useSearchBar();
  const deliveryFee = 10;

  const value = {
    products,
    deliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    handlerCloseSearchBar,
    cartItems,
    addToCart,
    deleteFromCart,
    updateQuantity,
    getCartItemCount,
    getCartAmount,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
