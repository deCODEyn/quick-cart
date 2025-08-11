import { createContext, useCallback, useEffect, useState } from 'react';
import { useApiRequest, useShopCart } from '@/hooks';
import { api } from '@/services/api';
import type {
  CartItemsType,
  ContextProviderType,
  ListProductsResponse,
  ProductType,
  ShopContextInterface,
} from '@/types';

const initialCartItems: CartItemsType = {};

export const ShopContext = createContext<ShopContextInterface>({
  addToCart: () => {
    /* default empty function */
  },
  deleteFromCart: () => {
    /* default empty function */
  },
  getCartAmount: () => 0,
  getCartItemCount: () => 0,
  getProducts: async () => {
    /* default empty function */
  },
  updateQuantity: () => {
    /* default empty function */
  },
  cartItems: initialCartItems,
  products: [],
});

export const ShopContextProvider = ({ children }: ContextProviderType) => {
  const {
    cartItems,
    addToCart,
    deleteFromCart,
    updateQuantity,
    getCartItemCount,
    getCartAmount,
  } = useShopCart();
  const [products, setProducts] = useState<ProductType[]>([]);
  const { execute } = useApiRequest();

  const getProducts = useCallback(async () => {
    await execute<ProductType[]>(
      () => api.get<ListProductsResponse>('/products'),
      (data) => {
        setProducts(data);
      }
    );
  }, [execute]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const value = {
    addToCart,
    deleteFromCart,
    getCartAmount,
    getCartItemCount,
    getProducts,
    updateQuantity,
    cartItems,
    products,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
