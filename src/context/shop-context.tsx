import { createContext, useCallback, useState } from 'react';
import type {
  AddCartItemType,
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
});

const ShopContextProvider = ({ children }: ShopContextProviderType) => {
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemsType>({});
  const currency = '$';
  const delivery_fee = 10;

  const addToCart = useCallback(({ id, size }: AddCartItemType) => {
    setCartItems((prevCartItems) => {
      const cartData = structuredClone(prevCartItems);
      if (!cartData[id]) {
        cartData[id] = {};
      }
      const updatedItem = cartData[id];
      cartData[id] = updatedItem;

      if (updatedItem[size]) {
        updatedItem[size] += 1;
      } else {
        updatedItem[size] = 1;
      }

      return cartData;
    });
  }, []);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
