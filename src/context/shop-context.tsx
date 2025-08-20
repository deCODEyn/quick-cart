import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useAuthContext } from '@/context';
import { useApiRequest, useShopCart } from '@/hooks';
import { api } from '@/services/api';
import type {
  ContextProviderType,
  ListProductsResponse,
  ProductType,
  ShopContextInterface,
} from '@/types';

export const ShopContext = createContext<ShopContextInterface | undefined>(
  undefined
);

export const ShopContextProvider = ({ children }: ContextProviderType) => {
  const { userRole } = useAuthContext();
  const {
    cartItems,
    addToCart,
    deleteFromCart,
    updateQuantity,
    getCart,
    getCartItemCount,
    getCartAmount,
    resetCart,
    clearCart,
  } = useShopCart();
  const [products, setProducts] = useState<ProductType[]>([]);
  const { execute } = useApiRequest();

  const getProducts = useCallback(async () => {
    const { success, result } = await execute<ProductType[]>(() =>
      api.get<ListProductsResponse>('/products')
    );
    if (success && result) {
      setProducts(result);
    }
  }, [execute]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  useEffect(() => {
    if (userRole) {
      getCart();
    } else {
      resetCart();
    }
  }, [userRole, getCart, resetCart]);

  const getCartTotalAmount = useCallback(() => {
    return getCartAmount(products);
  }, [getCartAmount, products]);

  const value = {
    addToCart,
    deleteFromCart,
    getCartTotalAmount,
    getCartItemCount,
    getProducts,
    updateQuantity,
    cartItems,
    products,
    clearCart,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error(
      'useShopContext must be used within an ShopContextProvider'
    );
  }
  return context;
};
