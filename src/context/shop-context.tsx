import { createContext, useCallback, useState } from 'react';
import { useSearchBar } from '@/hooks/use-search-bar';
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
  getCartCount: () => 0,
  handlerCloseSearchBar: () => {
    /* default empty function */
  },
});

const ShopContextProvider = ({ children }: ShopContextProviderType) => {
  const [cartItems, setCartItems] = useState<CartItemsType>({});
  const {
    search,
    setSearch,
    showSearch,
    setShowSearch,
    handlerCloseSearchBar,
  } = useSearchBar();
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

  const getCartCount = () => {
    return Object.values(cartItems).reduce<number>(
      (totalItemsCount, itemSizes) => {
        const quantities = Object.values(itemSizes);
        const productCount = quantities.reduce(
          (sum, quantity) => sum + quantity,
          0
        );
        return totalItemsCount + productCount;
      },
      0
    );
  };

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
