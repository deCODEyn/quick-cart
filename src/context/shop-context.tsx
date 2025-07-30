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
  currency: '',
  delivery_fee: 0,
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
  getCartCount: () => 0,
  handlerCloseSearchBar: () => {
    /* default empty function */
  },
});

const ShopContextProvider = ({ children }: ShopContextProviderType) => {
  const { cartItems, addToCart, getCartCount } = useShopCart();
  const {
    search,
    setSearch,
    showSearch,
    setShowSearch,
    handlerCloseSearchBar,
  } = useSearchBar();
  const currency = '$';
  const delivery_fee = 10;

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    handlerCloseSearchBar,
    cartItems,
    addToCart,
    getCartCount,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
